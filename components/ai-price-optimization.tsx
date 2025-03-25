"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { DollarSign, TrendingUp, Calendar, MapPin, BarChart4, ArrowRight, ArrowUp, ArrowDown, Info } from "lucide-react"

export default function AIPriceOptimization() {
  const [currentPrice, setCurrentPrice] = useState(150)
  const [suggestedPrice, setSuggestedPrice] = useState(180)
  const [priceRange, setPriceRange] = useState([120, 200])
  const [isAutoOptimize, setIsAutoOptimize] = useState(false)

  // Dados simulados que seriam gerados por IA
  const priceFactors = [
    {
      name: "Demanda Sazonal",
      impact: "alto",
      description: "Aumento de 30% nas buscas para o período selecionado",
      adjustment: "+15%",
    },
    {
      name: "Preços da Concorrência",
      impact: "médio",
      description: "Veículos similares com preço médio de R$ 175/dia",
      adjustment: "+10%",
    },
    {
      name: "Localização",
      impact: "médio",
      description: "Alta demanda na sua região atual",
      adjustment: "+8%",
    },
    {
      name: "Histórico de Reservas",
      impact: "baixo",
      description: "Taxa de ocupação de 65% nos últimos 3 meses",
      adjustment: "-3%",
    },
  ]

  const priceHistory = [
    { month: "Jan", price: 140, occupancy: 55 },
    { month: "Fev", price: 145, occupancy: 60 },
    { month: "Mar", price: 150, occupancy: 70 },
    { month: "Abr", price: 155, occupancy: 75 },
    { month: "Mai", price: 160, occupancy: 80 },
    { month: "Jun", price: 165, occupancy: 75 },
    { month: "Jul", price: 170, occupancy: 85 },
    { month: "Ago", price: 175, occupancy: 90 },
    { month: "Set", price: 180, occupancy: 85 },
  ]

  const handlePriceChange = (value: number) => {
    setCurrentPrice(value)
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "alto":
        return "text-green-600"
      case "médio":
        return "text-amber-600"
      case "baixo":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  const getAdjustmentColor = (adjustment: string) => {
    if (adjustment.startsWith("+")) return "text-green-600"
    if (adjustment.startsWith("-")) return "text-red-600"
    return "text-gray-600"
  }

  const getAdjustmentIcon = (adjustment: string) => {
    if (adjustment.startsWith("+")) return <ArrowUp className="h-3 w-3" />
    if (adjustment.startsWith("-")) return <ArrowDown className="h-3 w-3" />
    return null
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-blue-600" />
          <CardTitle>Otimização de Preços</CardTitle>
        </div>
        <CardDescription>Ajuste dinâmico de preços com base em demanda, localização e sazonalidade</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="optimize">
          <TabsList className="mb-6">
            <TabsTrigger value="optimize">Otimizar Preço</TabsTrigger>
            <TabsTrigger value="factors">Fatores de Impacto</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="optimize">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle-select">Veículo</Label>
                    <Select defaultValue="civic">
                      <SelectTrigger id="vehicle-select">
                        <SelectValue placeholder="Selecione o veículo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="civic">Honda Civic 2022</SelectItem>
                        <SelectItem value="corolla">Toyota Corolla 2021</SelectItem>
                        <SelectItem value="mt07">Yamaha MT-07</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Localização</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="location" defaultValue="São Paulo, SP" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date-range">Período</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="date-range" defaultValue="15/10/2025 - 30/10/2025" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Preço Atual</Label>
                      <div className="font-medium">R$ {currentPrice}/dia</div>
                    </div>
                    <Input
                      type="number"
                      value={currentPrice}
                      onChange={(e) => handlePriceChange(Number(e.target.value))}
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span>Preço Sugerido</span>
                      </Label>
                      <div className="font-bold text-green-600">R$ {suggestedPrice}/dia</div>
                    </div>
                    <div className="text-sm text-muted-foreground">Aumento potencial de receita: +20%</div>
                  </div>

                  <div className="space-y-2">
                    <Label>Faixa de Preço Recomendada</Label>
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>R$ {priceRange[0]}</span>
                      <span>R$ {priceRange[1]}</span>
                    </div>
                    <Slider
                      defaultValue={[currentPrice]}
                      max={priceRange[1]}
                      min={priceRange[0]}
                      step={5}
                      onValueChange={(value) => handlePriceChange(value[0])}
                    />
                  </div>

                  <div className="flex items-center justify-between space-x-2 pt-4">
                    <div className="flex flex-col space-y-1">
                      <Label htmlFor="auto-optimize" className="font-medium">
                        Otimização Automática
                      </Label>
                      <span className="text-xs text-muted-foreground">
                        Ajusta preços automaticamente com base na demanda
                      </span>
                    </div>
                    <Switch id="auto-optimize" checked={isAutoOptimize} onCheckedChange={setIsAutoOptimize} />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline">Restaurar Padrão</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Aplicar Preço Sugerido</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="factors">
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Como calculamos o preço sugerido?</p>
                    <p>
                      Nossa IA analisa diversos fatores de mercado, incluindo demanda sazonal, preços da concorrência,
                      localização e histórico de reservas para sugerir o preço ideal que maximiza sua receita.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Fatores que Influenciam o Preço</h3>
                <div className="space-y-3">
                  {priceFactors.map((factor, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 border rounded-lg"
                    >
                      <div>
                        <div className="font-medium">{factor.name}</div>
                        <div className="text-sm text-muted-foreground">{factor.description}</div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className={`font-medium ${getImpactColor(factor.impact)}`}>Impacto {factor.impact}</div>
                        <div className={`flex items-center ${getAdjustmentColor(factor.adjustment)}`}>
                          {getAdjustmentIcon(factor.adjustment)}
                          <span>{factor.adjustment}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" className="flex items-center">
                  Ver Análise Detalhada
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-lg font-medium">Histórico de Preços e Ocupação</h3>
                <div className="flex gap-2">
                  <Select defaultValue="6m">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3m">Últimos 3 meses</SelectItem>
                      <SelectItem value="6m">Últimos 6 meses</SelectItem>
                      <SelectItem value="1y">Último ano</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="h-64 border rounded-lg p-4 flex items-center justify-center">
                <BarChart4 className="h-32 w-32 text-muted-foreground" />
                <span className="text-muted-foreground ml-4">Gráfico de histórico de preços e taxa de ocupação</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Mês</th>
                      <th className="text-right p-2">Preço Médio (R$)</th>
                      <th className="text-right p-2">Taxa de Ocupação (%)</th>
                      <th className="text-right p-2">Variação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceHistory.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">{item.month}</td>
                        <td className="text-right p-2">{item.price}</td>
                        <td className="text-right p-2">{item.occupancy}%</td>
                        <td className="text-right p-2">
                          {index > 0 ? (
                            <span
                              className={item.price > priceHistory[index - 1].price ? "text-green-600" : "text-red-600"}
                            >
                              {item.price > priceHistory[index - 1].price ? "+" : ""}
                              {item.price - priceHistory[index - 1].price}
                            </span>
                          ) : (
                            "-"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" className="flex items-center">
                  Exportar Dados
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

