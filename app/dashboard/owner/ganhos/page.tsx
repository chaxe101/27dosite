"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, DollarSign, Download, TrendingUp, TrendingDown, Filter, Eye, FileText } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function GanhosPage() {
  const router = useRouter()
  const [period, setPeriod] = useState("month")
  const userName = "João Silva"
  const userEmail = "joao@email.com"
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null)

  // Dados de exemplo para transações
  const transactions = [
    {
      id: "1",
      date: "15/03/2025",
      vehicle: "Honda Civic 2020",
      renter: "Maria Oliveira",
      amount: 360.0,
      status: "paid",
    },
    {
      id: "2",
      date: "10/03/2025",
      vehicle: "Honda CB 500 2021",
      renter: "Carlos Santos",
      amount: 240.0,
      status: "paid",
    },
    {
      id: "3",
      date: "05/03/2025",
      vehicle: "Toyota Corolla 2019",
      renter: "Ana Ferreira",
      amount: 330.0,
      status: "pending",
    },
    {
      id: "4",
      date: "28/02/2025",
      vehicle: "Honda Civic 2020",
      renter: "Pedro Almeida",
      amount: 360.0,
      status: "paid",
    },
    {
      id: "5",
      date: "20/02/2025",
      vehicle: "Honda CB 500 2021",
      renter: "Juliana Costa",
      amount: 160.0,
      status: "paid",
    },
  ]

  // Função para visualizar detalhes de uma transação
  const handleViewTransactionDetails = (transaction: any) => {
    setSelectedTransaction(transaction)
    setDetailsDialogOpen(true)
  }

  // Função para exportar relatório
  const handleExportReport = () => {
    toast({
      title: "Relatório exportado",
      description: "O relatório foi exportado com sucesso.",
    })
  }

  // Função para visualizar detalhes de pagamento
  const handleViewPaymentDetails = () => {
    router.push("/dashboard/owner/ganhos/pagamentos")
  }

  // Função para filtrar transações
  const handleFilterTransactions = () => {
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
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Ganhos</h1>
            <p className="text-muted-foreground">Acompanhe seus ganhos, pagamentos e relatórios financeiros.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card
              className="bg-white hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => router.push("/dashboard/owner/ganhos/mensal")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ganhos do mês</p>
                    <h3 className="text-3xl font-bold">R$ 850,00</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-white hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => router.push("/dashboard/owner/ganhos/total")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ganhos totais</p>
                    <h3 className="text-3xl font-bold">R$ 12.450,00</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-white hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => router.push("/dashboard/owner/reservas")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Reservas do mês</p>
                    <h3 className="text-3xl font-bold">5</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-white hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => router.push("/dashboard/owner/ganhos/taxas")}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <TrendingDown className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Taxa média</p>
                    <h3 className="text-3xl font-bold">15%</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Period Selector and Export */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
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
            </div>
            <Button variant="outline" className="flex items-center gap-2" onClick={handleExportReport}>
              <Download className="h-4 w-4" />
              Exportar relatório
            </Button>
          </div>

          {/* Transactions Table */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Histórico de Transações</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={handleFilterTransactions}
                >
                  <Filter className="h-4 w-4" />
                  Filtrar
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium text-muted-foreground">Data</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Veículo</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Locatário</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Valor</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                      <th className="text-right p-3 font-medium text-muted-foreground">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b hover:bg-gray-50">
                        <td className="p-3">{transaction.date}</td>
                        <td className="p-3">{transaction.vehicle}</td>
                        <td className="p-3">{transaction.renter}</td>
                        <td className="p-3">R$ {transaction.amount.toFixed(2)}</td>
                        <td className="p-3">
                          <Badge
                            className={
                              transaction.status === "paid"
                                ? "bg-green-100 text-green-600 hover:bg-green-100"
                                : "bg-orange-100 text-orange-600 hover:bg-orange-100"
                            }
                          >
                            {transaction.status === "paid" ? "Pago" : "Pendente"}
                          </Badge>
                        </td>
                        <td className="p-3 text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-1"
                            onClick={() => handleViewTransactionDetails(transaction)}
                          >
                            <Eye className="h-4 w-4" />
                            Detalhes
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Payments Section */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Próximos Pagamentos</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold">R$ 330,00</p>
                    <p className="text-sm text-muted-foreground">Previsto para 20/03/2025</p>
                  </div>
                  <Button onClick={handleViewPaymentDetails}>Ver detalhes</Button>
                </div>
              </div>

              <h3 className="font-medium mb-3">Histórico de pagamentos</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-medium text-muted-foreground">Data</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Valor</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Método</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                      <th className="text-right p-3 font-medium text-muted-foreground">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">15/03/2025</td>
                      <td className="p-3">R$ 600,00</td>
                      <td className="p-3">Transferência bancária</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Concluído</Badge>
                      </td>
                      <td className="p-3 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={() => router.push("/dashboard/owner/ganhos/pagamentos/1")}
                        >
                          <FileText className="h-4 w-4" />
                          Comprovante
                        </Button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="p-3">15/02/2025</td>
                      <td className="p-3">R$ 850,00</td>
                      <td className="p-3">Transferência bancária</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Concluído</Badge>
                      </td>
                      <td className="p-3 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={() => router.push("/dashboard/owner/ganhos/pagamentos/2")}
                        >
                          <FileText className="h-4 w-4" />
                          Comprovante
                        </Button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="p-3">15/01/2025</td>
                      <td className="p-3">R$ 720,00</td>
                      <td className="p-3">Transferência bancária</td>
                      <td className="p-3">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Concluído</Badge>
                      </td>
                      <td className="p-3 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={() => router.push("/dashboard/owner/ganhos/pagamentos/3")}
                        >
                          <FileText className="h-4 w-4" />
                          Comprovante
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Análise de Ganhos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => router.push("/dashboard/owner/ganhos/ocupacao")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Taxa de ocupação</h3>
                      <p className="text-2xl font-bold">68%</p>
                      <p className="text-xs text-green-600">↑ 12% em relação ao mês anterior</p>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => router.push("/dashboard/owner/ganhos/media")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Ganho médio por veículo</h3>
                      <p className="text-2xl font-bold">R$ 283,33</p>
                      <p className="text-xs text-green-600">↑ 5% em relação ao mês anterior</p>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => router.push("/dashboard/owner/ganhos/veiculos")}
                >
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Veículo mais rentável</h3>
                      <p className="text-2xl font-bold">Honda Civic</p>
                      <p className="text-xs text-muted-foreground">R$ 360,00 este mês</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium mb-4">Ganhos por veículo</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Honda Civic 2020</span>
                      <span>R$ 360,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Honda CB 500 2021</span>
                      <span>R$ 240,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "67%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Toyota Corolla 2019</span>
                      <span>R$ 250,00</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "69%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Dialog de detalhes da transação */}
      <Dialog open={detailsDialogOpen} onOpenChange={setDetailsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Detalhes da Transação</DialogTitle>
            <DialogDescription>Informações detalhadas sobre a transação</DialogDescription>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ID da Transação</p>
                  <p className="font-medium">{selectedTransaction.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Data</p>
                  <p className="font-medium">{selectedTransaction.date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Veículo</p>
                  <p className="font-medium">{selectedTransaction.vehicle}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Locatário</p>
                  <p className="font-medium">{selectedTransaction.renter}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Valor</p>
                  <p className="font-medium">R$ {selectedTransaction.amount.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  <Badge
                    className={
                      selectedTransaction.status === "paid"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }
                  >
                    {selectedTransaction.status === "paid" ? "Pago" : "Pendente"}
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Detalhes do Pagamento</p>
                <p className="text-sm">
                  {selectedTransaction.status === "paid"
                    ? "Pagamento processado via transferência bancária. O valor já foi creditado em sua conta."
                    : "Pagamento pendente. O valor será creditado em sua conta em até 3 dias úteis após o pagamento."}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button onClick={() => setDetailsDialogOpen(false)}>Fechar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

