"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Car, BikeIcon as Motorcycle, DollarSign, MapPin, User } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function ReservasPage() {
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Minhas Reservas</h1>
            <p className="text-muted-foreground">Gerencie todas as suas reservas de veículos</p>
          </div>

          <Tabs defaultValue="ativas" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="ativas">Ativas</TabsTrigger>
              <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
              <TabsTrigger value="concluidas">Concluídas</TabsTrigger>
              <TabsTrigger value="canceladas">Canceladas</TabsTrigger>
            </TabsList>

            <TabsContent value="ativas" className="space-y-4">
              {/* Reservation 1 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-64 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                      <Car className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h3 className="text-xl font-bold">Fiat Argo 2021</h3>
                        <Badge className="w-fit bg-green-100 text-green-600 hover:bg-green-100">Ativa</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>15/08/2023 - 18/08/2023</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>R$ 450,00 (total)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>São Paulo, SP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>Proprietário: Maria Oliveira</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">Ver Detalhes</Button>
                        <Button size="sm" variant="outline">
                          Contatar Proprietário
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Cancelar Reserva
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reservation 2 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-64 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                      <Car className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h3 className="text-xl font-bold">Honda Civic 2022</h3>
                        <Badge className="w-fit bg-green-100 text-green-600 hover:bg-green-100">Ativa</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>20/08/2023 - 25/08/2023</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>R$ 750,00 (total)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>Rio de Janeiro, RJ</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>Proprietário: Carlos Santos</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">Ver Detalhes</Button>
                        <Button size="sm" variant="outline">
                          Contatar Proprietário
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Cancelar Reserva
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reservation 3 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-64 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                      <Motorcycle className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h3 className="text-xl font-bold">Kawasaki Z900</h3>
                        <Badge className="w-fit bg-green-100 text-green-600 hover:bg-green-100">Ativa</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>01/09/2023 - 05/09/2023</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>R$ 600,00 (total)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>São Paulo, SP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>Proprietário: Ana Ferreira</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">Ver Detalhes</Button>
                        <Button size="sm" variant="outline">
                          Contatar Proprietário
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Cancelar Reserva
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pendentes" className="space-y-4">
              <Card>
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <p className="text-muted-foreground">Você não possui reservas pendentes no momento.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="concluidas" className="space-y-4">
              {/* Completed Reservation 1 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-64 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                      <Motorcycle className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h3 className="text-xl font-bold">Yamaha Fazer 250</h3>
                        <Badge variant="outline" className="w-fit bg-gray-100 text-gray-600 hover:bg-gray-100">
                          Concluída
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>10/07/2023 - 12/07/2023</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>R$ 300,00 (total)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>Belo Horizonte, MG</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>Proprietário: Pedro Costa</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">Ver Detalhes</Button>
                        <Button size="sm" variant="outline">
                          Avaliar Veículo
                        </Button>
                        <Button size="sm" variant="outline">
                          Reservar Novamente
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Completed Reservation 2 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-64 h-40 bg-gray-100 rounded-md flex items-center justify-center">
                      <Car className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h3 className="text-xl font-bold">Honda Civic 2022</h3>
                        <Badge variant="outline" className="w-fit bg-gray-100 text-gray-600 hover:bg-gray-100">
                          Concluída
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>01/07/2023 - 05/07/2023</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>R$ 750,00 (total)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>São Paulo, SP</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>Proprietário: Ricardo Pereira</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm">Ver Detalhes</Button>
                        <Button size="sm" variant="outline">
                          Avaliar Veículo
                        </Button>
                        <Button size="sm" variant="outline">
                          Reservar Novamente
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="canceladas" className="space-y-4">
              <Card>
                <CardContent className="p-6 flex items-center justify-center h-40">
                  <p className="text-muted-foreground">Você não possui reservas canceladas no momento.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

