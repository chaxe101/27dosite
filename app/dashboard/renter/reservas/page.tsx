import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, MapPin, Car } from "lucide-react"

export const metadata: Metadata = {
  title: "Minhas Reservas | Locatário | VrumGo",
  description: "Gerencie suas reservas de veículos",
}

export default function RenterReservasPage() {
  // Dados simulados de reservas
  const reservas = {
    ativas: [
      {
        id: 1,
        veiculo: "Honda Civic 2022",
        proprietario: "Roberto Oliveira",
        dataInicio: "15/06/2023",
        dataFim: "20/06/2023",
        valorTotal: "R$ 750,00",
        status: "confirmada",
        imagem: "/placeholder.svg?height=100&width=180",
        localRetirada: "Av. Paulista, 1000 - São Paulo",
      },
      {
        id: 2,
        veiculo: "Yamaha MT-07 2021",
        proprietario: "Ana Pereira",
        dataInicio: "25/06/2023",
        dataFim: "27/06/2023",
        valorTotal: "R$ 320,00",
        status: "pendente",
        imagem: "/placeholder.svg?height=100&width=180",
        localRetirada: "Rua Augusta, 500 - São Paulo",
      },
    ],
    concluidas: [
      {
        id: 3,
        veiculo: "Fiat Argo 2021",
        proprietario: "Carlos Santos",
        dataInicio: "01/06/2023",
        dataFim: "05/06/2023",
        valorTotal: "R$ 450,00",
        status: "concluida",
        avaliado: true,
        imagem: "/placeholder.svg?height=100&width=180",
      },
      {
        id: 4,
        veiculo: "Kawasaki Z900 2022",
        proprietario: "Mariana Costa",
        dataInicio: "10/05/2023",
        dataFim: "12/05/2023",
        valorTotal: "R$ 380,00",
        status: "concluida",
        avaliado: false,
        imagem: "/placeholder.svg?height=100&width=180",
      },
      {
        id: 5,
        veiculo: "Volkswagen T-Cross 2022",
        proprietario: "Paulo Mendes",
        dataInicio: "20/04/2023",
        dataFim: "25/04/2023",
        valorTotal: "R$ 650,00",
        status: "concluida",
        avaliado: true,
        imagem: "/placeholder.svg?height=100&width=180",
      },
    ],
    canceladas: [
      {
        id: 6,
        veiculo: "Jeep Renegade 2021",
        proprietario: "Fernanda Lima",
        dataInicio: "05/05/2023",
        dataFim: "10/05/2023",
        valorTotal: "R$ 700,00",
        status: "cancelada",
        motivoCancelamento: "Mudança de planos",
        imagem: "/placeholder.svg?height=100&width=180",
      },
    ],
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Minhas Reservas</h1>

      <Tabs defaultValue="ativas" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="ativas">Ativas</TabsTrigger>
          <TabsTrigger value="concluidas">Concluídas</TabsTrigger>
          <TabsTrigger value="canceladas">Canceladas</TabsTrigger>
        </TabsList>

        <TabsContent value="ativas">
          <div className="grid grid-cols-1 gap-6">
            {reservas.ativas.map((reserva) => (
              <Card key={reserva.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 bg-muted">
                    <img
                      src={reserva.imagem || "/placeholder.svg"}
                      alt={reserva.veiculo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{reserva.veiculo}</CardTitle>
                          <CardDescription>Proprietário: {reserva.proprietario}</CardDescription>
                        </div>
                        <Badge variant={reserva.status === "confirmada" ? "default" : "outline"}>
                          {reserva.status === "confirmada" ? "Confirmada" : "Pendente"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {reserva.dataInicio} até {reserva.dataFim}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{reserva.localRetirada}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {reserva.status === "confirmada"
                                ? "Retirada em: " + reserva.dataInicio
                                : "Aguardando confirmação"}
                            </span>
                          </div>
                          <div className="font-medium text-lg">Valor total: {reserva.valorTotal}</div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Ver Detalhes</Button>
                      {reserva.status === "pendente" ? (
                        <Button variant="destructive">Cancelar Reserva</Button>
                      ) : (
                        <Button>Contatar Proprietário</Button>
                      )}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="concluidas">
          <div className="grid grid-cols-1 gap-6">
            {reservas.concluidas.map((reserva) => (
              <Card key={reserva.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 bg-muted">
                    <img
                      src={reserva.imagem || "/placeholder.svg"}
                      alt={reserva.veiculo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{reserva.veiculo}</CardTitle>
                          <CardDescription>Proprietário: {reserva.proprietario}</CardDescription>
                        </div>
                        <Badge variant="secondary">Concluída</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {reserva.dataInicio} até {reserva.dataFim}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Car className="h-4 w-4 text-muted-foreground" />
                            <span>Aluguel finalizado</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="font-medium text-lg">Valor total: {reserva.valorTotal}</div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Ver Detalhes</Button>
                      {!reserva.avaliado ? (
                        <Button>Avaliar Veículo</Button>
                      ) : (
                        <Button variant="outline" disabled>
                          Já Avaliado
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="canceladas">
          <div className="grid grid-cols-1 gap-6">
            {reservas.canceladas.map((reserva) => (
              <Card key={reserva.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/4 bg-muted">
                    <img
                      src={reserva.imagem || "/placeholder.svg"}
                      alt={reserva.veiculo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{reserva.veiculo}</CardTitle>
                          <CardDescription>Proprietário: {reserva.proprietario}</CardDescription>
                        </div>
                        <Badge variant="destructive">Cancelada</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {reserva.dataInicio} até {reserva.dataFim}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              <span className="font-medium">Motivo do cancelamento:</span> {reserva.motivoCancelamento}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="font-medium text-lg">Valor total: {reserva.valorTotal}</div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline">Ver Detalhes</Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

