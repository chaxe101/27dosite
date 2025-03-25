"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Car,
  BikeIcon as Motorcycle,
  Plus,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Star,
  TrendingUp,
  Shield,
  Wrench,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { useState, useCallback } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function OwnerDashboardPage() {
  const router = useRouter()
  const userName = "João Silva"
  const userEmail = "joao@email.com"
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [vehicleToDelete, setVehicleToDelete] = useState<string | null>(null)

  // Função para visualizar detalhes de um veículo
  const handleViewVehicle = useCallback(
    (vehicleId: string) => {
      router.push(`/vehicle/${vehicleId}`)
    },
    [router],
  )

  // Função para editar um veículo
  const handleEditVehicle = useCallback(
    (vehicleId: string) => {
      router.push(`/dashboard/owner/veiculos/editar/${vehicleId}`)
    },
    [router],
  )

  // Função para confirmar exclusão de um veículo
  const handleDeleteVehicle = useCallback((vehicleId: string) => {
    setVehicleToDelete(vehicleId)
    setDeleteDialogOpen(true)
  }, [])

  // Função para excluir um veículo após confirmação
  const confirmDeleteVehicle = useCallback(() => {
    // Em um app real, isso enviaria uma requisição para a API
    setDeleteDialogOpen(false)
  }, [])

  // Função para visualizar detalhes de uma reserva
  const handleViewReservation = useCallback(
    (reservationId: string) => {
      router.push(`/dashboard/owner/reservas/${reservationId}`)
    },
    [router],
  )

  // Função para entrar em contato com um locatário
  const handleContactRenter = useCallback(
    (renterId: string) => {
      router.push(`/dashboard/owner/mensagens?renter=${renterId}`)
    },
    [router],
  )

  // Função para visualizar detalhes de ganhos
  const handleViewEarnings = useCallback(() => {
    router.push("/dashboard/owner/ganhos")
  }, [router])

  // Função para visualizar avaliações
  const handleViewReviews = useCallback(() => {
    router.push("/dashboard/owner/avaliacoes")
  }, [router])

  // Função para visualizar veículos
  const handleViewVehicles = useCallback(() => {
    router.push("/dashboard/owner/veiculos")
  }, [router])

  // Função para visualizar reservas
  const handleViewReservations = useCallback(() => {
    router.push("/dashboard/owner/reservas")
  }, [router])

  // Função para visualizar recursos de IA
  const handleViewAIFeatures = useCallback(
    (tab?: string) => {
      if (tab) {
        router.push(`/dashboard/owner/ai-features?tab=${tab}`)
      } else {
        router.push("/dashboard/owner/ai-features")
      }
    },
    [router],
  )

  // Função para visualizar checklist
  const handleViewChecklist = useCallback(() => {
    router.push("/dashboard/owner/inspecoes/checklist")
  }, [router])

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Bem-vindo ao seu painel, João!</h1>
            <p className="text-muted-foreground">Gerencie seus veículos, reservas e acompanhe seus ganhos.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card
              className="bg-blue-50 border-blue-100 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleViewReservations()}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-600">Reservas ativas</p>
                    <h3 className="text-3xl font-bold">3</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                    Ver reservas
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-green-50 border-green-100 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleViewVehicles()}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Car className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600">Veículos cadastrados</p>
                    <h3 className="text-3xl font-bold">3</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="link" className="p-0 h-auto text-green-600 hover:text-green-800">
                    Ver veículos
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-orange-50 border-orange-100 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleViewEarnings()}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orange-600">Ganhos do mês</p>
                    <h3 className="text-3xl font-bold">R$ 850</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="link" className="p-0 h-auto text-orange-600 hover:text-orange-800">
                    Ver detalhes
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card
              className="bg-purple-50 border-purple-100 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleViewReviews()}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-600">Avaliação média</p>
                    <h3 className="text-3xl font-bold">4.8</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="link" className="p-0 h-auto text-purple-600 hover:text-purple-800">
                    Ver avaliações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Features Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recursos de Inteligência Artificial</h2>
              <Button variant="ghost" size="sm" className="text-blue-600" onClick={() => handleViewAIFeatures()}>
                Ver todos
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card
                className="hover:shadow-md transition-shadow h-full cursor-pointer"
                onClick={() => handleViewAIFeatures("recommendations")}
              >
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium mb-1">Recomendações</h3>
                  <p className="text-xs text-muted-foreground">Sugestões para otimizar seus anúncios</p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-md transition-shadow h-full cursor-pointer"
                onClick={() => handleViewAIFeatures("risk")}
              >
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium mb-1">Análise de Risco</h3>
                  <p className="text-xs text-muted-foreground">Avaliação de segurança e prevenção de fraudes</p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-md transition-shadow h-full cursor-pointer"
                onClick={() => handleViewAIFeatures("pricing")}
              >
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium mb-1">Otimização de Preços</h3>
                  <p className="text-xs text-muted-foreground">Ajuste dinâmico baseado em demanda</p>
                </CardContent>
              </Card>

              <Card
                className="hover:shadow-md transition-shadow h-full cursor-pointer"
                onClick={() => handleViewAIFeatures("maintenance")}
              >
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    <Wrench className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-medium mb-1">Previsão de Manutenção</h3>
                  <p className="text-xs text-muted-foreground">Análise preditiva do estado do veículo</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Reviews Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Avaliações Recentes</h2>
              <Button variant="ghost" size="sm" className="text-blue-600" onClick={() => handleViewReviews()}>
                Ver todas
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10 flex-shrink-0">
                          <AvatarImage src="/placeholder.svg" alt="Maria Oliveira" />
                          <AvatarFallback>MO</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium truncate">Maria Oliveira</div>
                          <div className="text-sm text-muted-foreground">15 de março de 2025</div>
                          <div className="flex mt-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                            <Car className="h-4 w-4 text-gray-500" />
                          </div>
                          <span>Honda Civic 2020</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm">
                      "Carro em excelente estado, muito confortável e econômico. O proprietário foi muito atencioso e
                      pontual. Recomendo!"
                    </div>

                    <div className="flex justify-end">
                      <Badge variant="outline" className="bg-green-50 text-green-600">
                        Respondida
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-10 w-10 flex-shrink-0">
                          <AvatarImage src="/placeholder.svg" alt="Carlos Santos" />
                          <AvatarFallback>CS</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium truncate">Carlos Santos</div>
                          <div className="text-sm text-muted-foreground">10 de março de 2025</div>
                          <div className="flex mt-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <Star className="h-4 w-4 text-gray-300" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                            <Motorcycle className="h-4 w-4 text-gray-500" />
                          </div>
                          <span>Honda CB 500 2021</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm">
                      "Moto muito boa, bem conservada. Entrega e devolução sem problemas. Só achei que poderia estar um
                      pouco mais limpa."
                    </div>

                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-orange-50 text-orange-600 hover:bg-orange-100"
                        onClick={() => router.push("/dashboard/owner/avaliacoes?id=2")}
                      >
                        Responder
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* My Vehicles Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Meus Veículos</h2>
              <Link href="/dashboard/add-vehicle" prefetch={false}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar Veículo
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium text-muted-foreground">Veículo</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Placa</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-4 font-medium text-muted-foreground">Preço/dia</th>
                      <th className="text-right p-4 font-medium text-muted-foreground">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                            <Motorcycle className="h-5 w-5 text-gray-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium truncate">Honda CB 500 2021</div>
                            <div className="text-xs text-muted-foreground">2021</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">XYZ-9876</td>
                      <td className="p-4">
                        <Badge
                          variant="outline"
                          className="bg-orange-50 text-orange-600 hover:bg-orange-50 flex items-center gap-1 font-normal"
                        >
                          <Clock className="h-3.5 w-3.5" />
                          Alugado
                        </Badge>
                      </td>
                      <td className="p-4">R$ 80</td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleViewVehicle("3")}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleEditVehicle("3")}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleDeleteVehicle("3")}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                            <Car className="h-5 w-5 text-gray-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium truncate">Honda Civic 2020</div>
                            <div className="text-xs text-muted-foreground">2020</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">ABC-1234</td>
                      <td className="p-4">
                        <Badge
                          variant="outline"
                          className="bg-green-50 text-green-600 hover:bg-green-50 flex items-center gap-1 font-normal"
                        >
                          <CheckCircle className="h-3.5 w-3.5" />
                          Disponível
                        </Badge>
                      </td>
                      <td className="p-4">R$ 120</td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleViewVehicle("1")}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleEditVehicle("1")}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleDeleteVehicle("1")}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                            <Car className="h-5 w-5 text-gray-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-medium truncate">Toyota Corolla 2019</div>
                            <div className="text-xs text-muted-foreground">2019</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">DEF-5678</td>
                      <td className="p-4">
                        <Badge
                          variant="outline"
                          className="bg-gray-100 text-gray-600 hover:bg-gray-100 flex items-center gap-1 font-normal"
                        >
                          <AlertCircle className="h-3.5 w-3.5" />
                          Inativo
                        </Badge>
                      </td>
                      <td className="p-4">R$ 110</td>
                      <td className="p-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleViewVehicle("2")}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleEditVehicle("2")}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                            onClick={() => handleDeleteVehicle("2")}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-4 text-right">
              <Button variant="ghost" size="sm" className="text-blue-600" onClick={() => handleViewVehicles()}>
                Ver todos os veículos
              </Button>
            </div>
          </div>

          {/* Recent Reservations */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Reservas recentes</h2>
              <Button variant="ghost" size="sm" className="text-blue-600" onClick={() => handleViewReservations()}>
                Ver todas
              </Button>
            </div>

            <div className="space-y-4">
              {/* Reservation 1 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Fiat Argo 2021</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">15 de agosto de 2023 - 18 de agosto de 2023</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Avatar className="h-6 w-6 flex-shrink-0">
                          <AvatarImage src="/placeholder.svg" alt="Locatário" />
                          <AvatarFallback>LC</AvatarFallback>
                        </Avatar>
                        <span className="truncate">Pedro Almeida</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Ativa</Badge>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleViewReservation("1")}>
                      Ver detalhes
                    </Button>
                    <Button size="sm" onClick={() => handleContactRenter("pedro")}>
                      Entrar em contato
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Reservation 2 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Yamaha Fazer 250</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">10 de julho de 2023 - 12 de julho de 2023</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Avatar className="h-6 w-6 flex-shrink-0">
                          <AvatarImage src="/placeholder.svg" alt="Locatário" />
                          <AvatarFallback>LC</AvatarFallback>
                        </Avatar>
                        <span className="truncate">Ana Ferreira</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="bg-gray-100 text-gray-600 hover:bg-gray-100">
                        Concluída
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleViewReservation("2")}>
                      Ver detalhes
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push("/dashboard/owner/avaliacoes?reservation=2")}
                    >
                      Ver avaliação
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Reservation 3 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium truncate">Honda Civic 2022</h3>
                      <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">01 de julho de 2023 - 05 de julho de 2023</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Avatar className="h-6 w-6 flex-shrink-0">
                          <AvatarImage src="/placeholder.svg" alt="Locatário" />
                          <AvatarFallback>LC</AvatarFallback>
                        </Avatar>
                        <span className="truncate">Carlos Mendes</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="bg-gray-100 text-gray-600 hover:bg-gray-100">
                        Concluída
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleViewReservation("3")}>
                      Ver detalhes
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => router.push("/dashboard/owner/avaliacoes?reservation=3")}
                    >
                      Ver avaliação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tips for Owners */}
          <div className="mt-8">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold text-blue-800 mb-4">Dicas para proprietários</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Mantenha seu calendário de disponibilidade sempre atualizado</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Fotos de qualidade aumentam em até 70% as chances de locação</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Veículos bem avaliados recebem destaque na plataforma</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Responda rapidamente às solicitações para melhorar sua reputação</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" className="bg-white" onClick={() => handleViewChecklist()}>
                    Ver exemplo de checklist
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Dialog de confirmação para excluir veículo */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir este veículo? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={confirmDeleteVehicle}>
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

