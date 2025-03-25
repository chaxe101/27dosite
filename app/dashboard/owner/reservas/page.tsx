"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MessageSquare, Eye, Car, BikeIcon as Motorcycle } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OwnerReservasPage() {
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Minhas Reservas</h1>
            <p className="text-muted-foreground">Gerencie as reservas dos seus veículos.</p>
          </div>

          <Tabs defaultValue="ativas" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="ativas">Ativas</TabsTrigger>
              <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
              <TabsTrigger value="concluidas">Concluídas</TabsTrigger>
              <TabsTrigger value="canceladas">Canceladas</TabsTrigger>
            </TabsList>

            <TabsContent value="ativas">
              <div className="space-y-4">
                {/* Reserva 1 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <Car className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="font-bold">Honda Civic 2022</h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>15 de agosto - 18 de agosto de 2023</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="Locatário" />
                              <AvatarFallback>LC</AvatarFallback>
                            </Avatar>
                            <span>Pedro Almeida</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Ativa</Badge>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver detalhes
                      </Button>
                      <Button size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Entrar em contato
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Reserva 2 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <Motorcycle className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="font-bold">Honda CB 500 2021</h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>20 de agosto - 25 de agosto de 2023</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="Locatário" />
                              <AvatarFallback>LC</AvatarFallback>
                            </Avatar>
                            <span>Ana Ferreira</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Ativa</Badge>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        Ver detalhes
                      </Button>
                      <Button size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Entrar em contato
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pendentes">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <Car className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="font-bold">Toyota Corolla 2019</h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>01 de setembro - 05 de setembro de 2023</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="Locatário" />
                              <AvatarFallback>LC</AvatarFallback>
                            </Avatar>
                            <span>Carlos Mendes</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge className="bg-yellow-100 text-yellow-600 hover:bg-yellow-100">Pendente</Badge>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 gap-2">
                      <Button variant="outline" size="sm">
                        Recusar
                      </Button>
                      <Button size="sm">Aceitar</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="concluidas">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <Car className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="font-bold">Fiat Argo 2021</h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>10 de julho - 15 de julho de 2023</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="Locatário" />
                              <AvatarFallback>LC</AvatarFallback>
                            </Avatar>
                            <span>Mariana Costa</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="bg-gray-100 text-gray-600 hover:bg-gray-100">
                          Concluída
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 gap-2">
                      <Button variant="outline" size="sm">
                        Ver detalhes
                      </Button>
                      <Button variant="outline" size="sm">
                        Ver avaliação
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="canceladas">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <Motorcycle className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h3 className="font-bold">Yamaha Fazer 250</h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>05 de julho - 07 de julho de 2023</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg" alt="Locatário" />
                              <AvatarFallback>LC</AvatarFallback>
                            </Avatar>
                            <span>Roberto Alves</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="bg-red-100 text-red-600 hover:bg-red-100">
                          Cancelada
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4 gap-2">
                      <Button variant="outline" size="sm">
                        Ver detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

