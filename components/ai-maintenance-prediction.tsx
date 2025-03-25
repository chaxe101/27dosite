"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Wrench,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Clock,
  BarChart,
  ArrowRight,
  Info,
  AlertCircle,
} from "lucide-react"

type MaintenanceStatus = "ok" | "attention" | "critical"

type MaintenanceItem = {
  name: string
  status: MaintenanceStatus
  healthScore: number
  lastMaintenance: string
  recommendedDate: string
  description: string
}

type VehicleHealth = {
  overallScore: number
  overallStatus: MaintenanceStatus
  items: MaintenanceItem[]
  recommendations: string[]
}

export default function AIMaintenancePrediction() {
  const [activeTab, setActiveTab] = useState<string>("overview")

  // Dados simulados que seriam gerados por IA
  const vehicleHealth: VehicleHealth = {
    overallScore: 78,
    overallStatus: "attention",
    items: [
      {
        name: "Óleo do Motor",
        status: "attention",
        healthScore: 65,
        lastMaintenance: "15/05/2025",
        recommendedDate: "15/10/2025",
        description: "Troca recomendada em 30 dias ou 1.500 km",
      },
      {
        name: "Freios",
        status: "ok",
        healthScore: 85,
        lastMaintenance: "10/03/2025",
        recommendedDate: "10/12/2025",
        description: "Em boas condições, verificar em 3 meses",
      },
      {
        name: "Filtro de Ar",
        status: "critical",
        healthScore: 40,
        lastMaintenance: "05/01/2025",
        recommendedDate: "Imediato",
        description: "Substituição imediata recomendada",
      },
      {
        name: "Bateria",
        status: "ok",
        healthScore: 90,
        lastMaintenance: "20/02/2025",
        recommendedDate: "20/02/2026",
        description: "Funcionando normalmente, verificar em 6 meses",
      },
      {
        name: "Pneus",
        status: "attention",
        healthScore: 70,
        lastMaintenance: "10/04/2025",
        recommendedDate: "10/11/2025",
        description: "Desgaste acima do normal, rodízio recomendado",
      },
    ],
    recommendations: [
      "Agendar troca do filtro de ar o mais rápido possível",
      "Programar troca de óleo para as próximas 4 semanas",
      "Verificar alinhamento e balanceamento dos pneus",
      "Considerar inspeção completa do sistema de freios na próxima manutenção",
    ],
  }

  const maintenanceHistory = [
    { date: "15/05/2025", service: "Troca de Óleo", cost: 150, health: 95 },
    { date: "10/03/2025", service: "Revisão de Freios", cost: 280, health: 90 },
    { date: "05/01/2025", service: "Troca de Filtros", cost: 120, health: 85 },
    { date: "20/11/2024", service: "Alinhamento e Balanceamento", cost: 180, health: 80 },
    { date: "15/09/2024", service: "Revisão Geral", cost: 350, health: 100 },
  ]

  // Função para renderizar o indicador de status
  const renderStatusBadge = (status: MaintenanceStatus) => {
    switch (status) {
      case "ok":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="h-3.5 w-3.5 mr-1" />
            Bom
          </Badge>
        )
      case "attention":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            <AlertCircle className="h-3.5 w-3.5 mr-1" />
            Atenção
          </Badge>
        )
      case "critical":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <AlertTriangle className="h-3.5 w-3.5 mr-1" />
            Crítico
          </Badge>
        )
    }
  }

  // Função para renderizar a cor da barra de progresso baseada no status
  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-amber-500"
    return "bg-red-500"
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Wrench className="h-5 w-5 text-blue-600" />
          <CardTitle>Previsão de Manutenção</CardTitle>
        </div>
        <CardDescription>Análise preditiva do estado do veículo e recomendações de manutenção</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="details">Detalhes</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="text-2xl font-bold mb-1">Saúde do Veículo: {vehicleHealth.overallScore}/100</div>
                  <div className="flex items-center">{renderStatusBadge(vehicleHealth.overallStatus)}</div>
                </div>
                <Progress
                  value={vehicleHealth.overallScore}
                  className="h-3 w-full md:w-1/3"
                  indicatorClassName={getProgressColor(vehicleHealth.overallScore)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Próximas Manutenções</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {vehicleHealth.items
                        .filter((item) => item.status !== "ok")
                        .sort((a, b) => a.healthScore - b.healthScore)
                        .slice(0, 3)
                        .map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-2 border-b">
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3 inline mr-1" />
                                {item.recommendedDate}
                              </div>
                            </div>
                            {renderStatusBadge(item.status)}
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Economia Estimada</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="text-2xl font-bold text-green-600">R$ 1.250</div>
                        <Badge className="bg-green-100 text-green-800">Economia Anual</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Manutenções preventivas podem reduzir custos de reparos em até 60% e aumentar a vida útil do
                        veículo.
                      </p>
                      <div className="h-2 bg-gray-100 rounded-full mt-2">
                        <div className="h-2 bg-green-500 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Custo com Manutenção Preventiva</span>
                        <span>Custo sem Manutenção</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="bg-amber-50 border-amber-200">
                <AlertTriangle className="h-4 w-4 text-amber-800" />
                <AlertTitle className="text-amber-800">Atenção Necessária</AlertTitle>
                <AlertDescription className="text-amber-800">
                  <p className="mb-2">Alguns itens precisam de atenção para evitar problemas futuros:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {vehicleHealth.recommendations.map((recommendation, index) => (
                      <li key={index}>{recommendation}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>

              <div className="flex justify-end">
                <Button className="bg-blue-600 hover:bg-blue-700">Agendar Manutenção</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details">
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Como funciona a previsão de manutenção?</p>
                    <p>
                      Nossa IA analisa dados do veículo, padrões de uso, histórico de manutenção e informações do
                      fabricante para prever quando cada componente precisará de manutenção, ajudando a evitar problemas
                      e reduzir custos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Estado dos Componentes</h3>
                <div className="space-y-3">
                  {vehicleHealth.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 border rounded-lg"
                    >
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          <Clock className="h-3 w-3 inline mr-1" />
                          Última manutenção: {item.lastMaintenance}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-3">
                          <Progress
                            value={item.healthScore}
                            className="h-2 w-24"
                            indicatorClassName={getProgressColor(item.healthScore)}
                          />
                          {renderStatusBadge(item.status)}
                        </div>
                        <div className="text-xs">
                          <Calendar className="h-3 w-3 inline mr-1" />
                          Próxima manutenção: {item.recommendedDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" className="flex items-center">
                  Ver Relatório Detalhado
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-lg font-medium">Histórico de Manutenções</h3>
                <Button variant="outline" size="sm">
                  Adicionar Manutenção
                </Button>
              </div>

              <div className="h-64 border rounded-lg p-4 flex items-center justify-center">
                <BarChart className="h-32 w-32 text-muted-foreground" />
                <span className="text-muted-foreground ml-4">
                  Gráfico de histórico de manutenções e saúde do veículo
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Data</th>
                      <th className="text-left p-2">Serviço</th>
                      <th className="text-right p-2">Custo (R$)</th>
                      <th className="text-right p-2">Saúde do Veículo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {maintenanceHistory.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2">{item.date}</td>
                        <td className="p-2">{item.service}</td>
                        <td className="text-right p-2">R$ {item.cost}</td>
                        <td className="text-right p-2">
                          <div className="flex items-center justify-end gap-2">
                            <Progress
                              value={item.health}
                              className="h-2 w-16"
                              indicatorClassName={getProgressColor(item.health)}
                            />
                            <span>{item.health}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" className="flex items-center">
                  Exportar Histórico
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

