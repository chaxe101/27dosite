"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, ArrowLeft, Download, Filter } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export default function GanhosMensalPage() {
  const router = useRouter()
  const [month, setMonth] = useState("3")
  const [year, setYear] = useState("2025")
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  // Função para exportar relatório
  const handleExportReport = () => {
    toast({
      title: "Relatório exportado",
      description: "O relatório mensal foi exportado com sucesso.",
    })
  }

  // Função para filtrar dados
  const handleFilterData = () => {
    toast({
      title: "Filtros aplicados",
      description: "Os filtros foram aplicados com sucesso.",
    })
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button variant="ghost" size="sm" className="mb-2" onClick={() => router.push("/dashboard/owner/ganhos")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Ganhos
              </Button>
              <h1 className="text-2xl font-bold">Ganhos Mensais</h1>
              <p className="text-muted-foreground">Análise detalhada dos seus ganhos mensais</p>
            </div>
            <div className="flex gap-2">
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Mês" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Janeiro</SelectItem>
                  <SelectItem value="2">Fevereiro</SelectItem>
                  <SelectItem value="3">Março</SelectItem>
                  <SelectItem value="4">Abril</SelectItem>
                  <SelectItem value="5">Maio</SelectItem>
                  <SelectItem value="6">Junho</SelectItem>
                  <SelectItem value="7">Julho</SelectItem>
                  <SelectItem value="8">Agosto</SelectItem>
                  <SelectItem value="9">Setembro</SelectItem>
                  <SelectItem value="10">Outubro</SelectItem>
                  <SelectItem value="11">Novembro</SelectItem>
                  <SelectItem value="12">Dezembro</SelectItem>
                </SelectContent>
              </Select>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" onClick={handleFilterData}>
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex items-center gap-2" onClick={handleExportReport}>
                <Download className="h-4 w-4" />
                Exportar
              </Button>
            </div>
          </div>

          {/* Summary Card */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total do mês</p>
                    <h2 className="text-4xl font-bold">R$ 850,00</h2>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Período</p>
                    <h3 className="text-xl font-bold">Março de 2025</h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Ganhos por Veículo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Honda Civic 2020</span>
                      <span>R$ 360,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Honda CB 500 2021</span>
                      <span>R$ 240,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "28%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Toyota Corolla 2019</span>
                      <span>R$ 250,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ganhos por Semana</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Semana 1 (01/03 - 07/03)</span>
                      <span>R$ 240,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "28%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Semana 2 (08/03 - 14/03)</span>
                      <span>R$ 360,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Semana 3 (15/03 - 21/03)</span>
                      <span>R$ 250,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Semana 4 (22/03 - 31/03)</span>
                      <span>R$ 0,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comparison with Previous Month */}
          <Card>
            <CardHeader>
              <CardTitle>Comparação com o Mês Anterior</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Total Mês Atual</p>
                  <p className="text-2xl font-bold">R$ 850,00</p>
                  <p className="text-xs text-green-600 mt-1">+13% em relação ao mês anterior</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Total Mês Anterior</p>
                  <p className="text-2xl font-bold">R$ 750,00</p>
                  <p className="text-xs text-muted-foreground mt-1">Fevereiro de 2025</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Previsão Próximo Mês</p>
                  <p className="text-2xl font-bold">R$ 920,00</p>
                  <p className="text-xs text-green-600 mt-1">+8% em relação ao mês atual</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

