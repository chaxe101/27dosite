"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, Download, CreditCard, Plus, AlertCircle } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PagamentosPage() {
  const [period, setPeriod] = useState("month")
  const userName = "Maria Silva"
  const userEmail = "maria@email.com"

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="renter" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Pagamentos</h1>
            <p className="text-muted-foreground">
              Gerencie seus métodos de pagamento e visualize seu histórico de transações.
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total gasto</p>
                    <h3 className="text-3xl font-bold">R$ 650,00</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Reservas ativas</p>
                    <h3 className="text-3xl font-bold">2</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <CreditCard className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Métodos de pagamento</p>
                    <h3 className="text-3xl font-bold">2</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Methods Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Métodos de Pagamento</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar novo
                </Button>
              </div>

              <div className="space-y-4">
                <div className="border rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <CreditCard className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Mastercard •••• 4321</div>
                      <div className="text-sm text-muted-foreground">Expira em 12/2026</div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Principal</Badge>
                </div>

                <div className="border rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-2 rounded-md">
                      <CreditCard className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">Visa •••• 7890</div>
                      <div className="text-sm text-muted-foreground">Expira em 08/2025</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      Definir como principal
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction History */}
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Histórico de Transações</h2>
                <div className="flex items-center gap-2">
                  <Select value={period} onValueChange={setPeriod}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selecione o período" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Esta semana</SelectItem>
                      <SelectItem value="month">Este mês</SelectItem>
                      <SelectItem value="quarter">Este trimestre</SelectItem>
                      <SelectItem value="year">Este ano</SelectItem>
                      <SelectItem value="all">Todo o período</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Exportar
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium text-muted-foreground">Data</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Descrição</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Método</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Valor</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">15/03/2025</td>
                      <td className="p-3">Aluguel - Honda Civic 2022</td>
                      <td className="p-3">Mastercard •••• 4321</td>
                      <td className="p-3">R$ 360,00</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Concluído</Badge>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">10/03/2025</td>
                      <td className="p-3">Aluguel - Yamaha MT-07</td>
                      <td className="p-3">Visa •••• 7890</td>
                      <td className="p-3">R$ 290,00</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Concluído</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3">01/02/2025</td>
                      <td className="p-3">Aluguel - Fiat Argo 2021</td>
                      <td className="p-3">Mastercard •••• 4321</td>
                      <td className="p-3">R$ 450,00</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Concluído</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Payments Alert */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-full mt-1">
              <AlertCircle className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800">Próximo pagamento agendado</h3>
              <p className="text-sm text-blue-700 mb-2">
                Você tem um pagamento de R$ 290,00 agendado para 20/03/2025 referente ao aluguel do veículo Yamaha
                MT-07.
              </p>
              <Button variant="outline" size="sm" className="bg-white">
                Ver detalhes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

