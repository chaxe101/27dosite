"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  MessageSquare,
  FileText,
  Calendar,
  MapPin,
  Car,
  User,
  DollarSign,
  Clock,
  CheckCircle,
  Phone,
} from "lucide-react"
import { BikeIcon as Motorcycle } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export default function ReservaDetalhesPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const userName = "João Silva"
  const userEmail = "joao@email.com"
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [message, setMessage] = useState("")

  // Dados de exemplo da reserva
  const reservationData = {
    id: params.id,
    vehicle: params.id === "1" ? "Fiat Argo 2021" : params.id === "2" ? "Yamaha Fazer 250" : "Honda Civic 2022",
    type: params.id === "2" ? "motorcycle" : "car",
    startDate:
      params.id === "1" ? "15 de agosto de 2023" : params.id === "2" ? "10 de julho de 2023" : "01 de julho de 2023",
    endDate:
      params.id === "1" ? "18 de agosto de 2023" : params.id === "2" ? "12 de julho de 2023" : "05 de julho de 2023",
    status: params.id === "1" ? "active" : "completed",
    renter: {
      name: params.id === "1" ? "Pedro Almeida" : params.id === "2" ? "Ana Ferreira" : "Carlos Mendes",
      avatar: "/placeholder.svg",
      initials: params.id === "1" ? "PA" : params.id === "2" ? "AF" : "CM",
      phone: "(11) 98765-4321",
      email: "locatario@email.com",
    },
    location: "São Paulo, SP - Zona Sul",
    price: params.id === "1" ? 110 : params.id === "2" ? 80 : 120,
    days: params.id === "1" ? 3 : params.id === "2" ? 2 : 4,
    total: params.id === "1" ? 330 : params.id === "2" ? 160 : 480,
    paymentMethod: "Cartão de crédito",
    paymentStatus: "Pago",
  }

  // Função para enviar mensagem
  const handleSendMessage = () => {
    if (!message.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, escreva uma mensagem.",
        variant: "destructive",
      })
      return
    }

    // Em um app real, isso enviaria uma requisição para a API
    toast({
      title: "Mensagem enviada",
      description: "Sua mensagem foi enviada com sucesso.",
    })
    setMessage("")
    setContactDialogOpen(false)
  }

  // Função para visualizar inspeção
  const handleViewInspection = () => {
    router.push(`/dashboard/owner/inspecoes/${params.id}`)
  }

  // Função para visualizar contrato
  const handleViewContract = () => {
    router.push(`/dashboard/owner/reservas/${params.id}/contrato`)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button
                variant="ghost"
                size="sm"
                className="mb-2"
                onClick={() => router.push("/dashboard/owner/reservas")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Reservas
              </Button>
              <h1 className="text-2xl font-bold">Detalhes da Reserva</h1>
              <p className="text-muted-foreground">Informações completas sobre a reserva</p>
            </div>
            <Badge
              className={
                reservationData.status === "active"
                  ? "bg-green-100 text-green-600 hover:bg-green-100"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-100"
              }
            >
              {reservationData.status === "active" ? "Ativa" : "Concluída"}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Reservation Summary */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Resumo da Reserva</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                      {reservationData.type === "motorcycle" ? (
                        <Motorcycle className="h-6 w-6 text-gray-500" />
                      ) : (
                        <Car className="h-6 w-6 text-gray-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{reservationData.vehicle}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {reservationData.startDate} - {reservationData.endDate}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Local de Retirada/Devolução</p>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span>{reservationData.location}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Status do Pagamento</p>
                      <div className="flex items-center gap-2 mt-1">
                        <DollarSign className="h-4 w-4 text-green-500" />
                        <span className="text-green-600">{reservationData.paymentStatus}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-3">Detalhes do Pagamento</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Diária</span>
                        <span>R$ {reservationData.price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Número de dias</span>
                        <span>{reservationData.days}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Método de pagamento</span>
                        <span>{reservationData.paymentMethod}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>R$ {reservationData.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" className="flex items-center gap-2" onClick={handleViewInspection}>
                      <FileText className="h-4 w-4" />
                      Ver Inspeção
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2" onClick={handleViewContract}>
                      <FileText className="h-4 w-4" />
                      Ver Contrato
                    </Button>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 ml-auto"
                      onClick={() => setContactDialogOpen(true)}
                    >
                      <MessageSquare className="h-4 w-4" />
                      Entrar em Contato
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Renter Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informações do Locatário</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="h-20 w-20 mb-3">
                    <AvatarImage src={reservationData.renter.avatar} alt={reservationData.renter.name} />
                    <AvatarFallback>{reservationData.renter.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg">{reservationData.renter.name}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Contato</p>
                    <div className="flex items-center gap-2 mt-1">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{reservationData.renter.email}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span>{reservationData.renter.phone}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Histórico</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>Cliente desde Janeiro 2023</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span>3 reservas anteriores</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      router.push(
                        `/dashboard/owner/mensagens?renter=${reservationData.renter.name.toLowerCase().replace(" ", "-")}`,
                      )
                    }
                  >
                    Ver Histórico de Mensagens
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Linha do Tempo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="w-1 h-12 bg-green-100"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">Reserva Confirmada</h3>
                    <p className="text-sm text-muted-foreground">10 de julho de 2023, 14:30</p>
                    <p className="text-sm mt-1">A reserva foi confirmada e o pagamento foi processado com sucesso.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-12 bg-green-100"></div>
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="w-1 h-12 bg-green-100"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">Inspeção de Retirada</h3>
                    <p className="text-sm text-muted-foreground">15 de julho de 2023, 09:00</p>
                    <p className="text-sm mt-1">O veículo foi inspecionado e entregue ao locatário.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-12 bg-green-100"></div>
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="w-1 h-12 bg-gray-200"></div>
                  </div>
                  <div>
                    <h3 className="font-medium">Inspeção de Devolução</h3>
                    <p className="text-sm text-muted-foreground">18 de julho de 2023, 18:00</p>
                    <p className="text-sm mt-1">O veículo foi devolvido e inspecionado sem problemas.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-12 bg-gray-200"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium">Avaliação</h3>
                    <p className="text-sm text-muted-foreground">Pendente</p>
                    <p className="text-sm mt-1">Aguardando avaliação do locatário.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Dialog para enviar mensagem */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Enviar Mensagem</DialogTitle>
            <DialogDescription>Envie uma mensagem para {reservationData.renter.name}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Escreva sua mensagem aqui..."
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setContactDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSendMessage}>Enviar Mensagem</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

