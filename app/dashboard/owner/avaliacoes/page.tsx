"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Car, BikeIcon as Motorcycle, Search, Filter, MessageSquare } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OwnerAvaliacoesPage() {
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
            <h1 className="text-2xl font-bold mb-2">Minhas Avaliações</h1>
            <p className="text-muted-foreground">Veja e responda às avaliações dos seus veículos.</p>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar avaliação..." className="pl-10" />
                </div>
                <Select defaultValue="todos">
                  <SelectTrigger>
                    <SelectValue placeholder="Veículo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os veículos</SelectItem>
                    <SelectItem value="civic">Honda Civic 2020</SelectItem>
                    <SelectItem value="cb500">Honda CB 500 2021</SelectItem>
                    <SelectItem value="corolla">Toyota Corolla 2019</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="todos">
                  <SelectTrigger>
                    <SelectValue placeholder="Classificação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas as classificações</SelectItem>
                    <SelectItem value="5">5 estrelas</SelectItem>
                    <SelectItem value="4">4 estrelas</SelectItem>
                    <SelectItem value="3">3 estrelas</SelectItem>
                    <SelectItem value="2">2 estrelas</SelectItem>
                    <SelectItem value="1">1 estrela</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Mais filtros
                </Button>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="recebidas" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="recebidas">Recebidas</TabsTrigger>
              <TabsTrigger value="respondidas">Respondidas</TabsTrigger>
              <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
            </TabsList>

            <TabsContent value="recebidas">
              <div className="space-y-4">
                {/* Avaliação 1 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" alt="Maria Oliveira" />
                            <AvatarFallback>MO</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Maria Oliveira</div>
                            <div className="text-sm text-muted-foreground">15 de março de 2023</div>
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
                        <Button size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Responder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Avaliação 2 */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" alt="Carlos Santos" />
                            <AvatarFallback>CS</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Carlos Santos</div>
                            <div className="text-sm text-muted-foreground">10 de março de 2023</div>
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
                        "Moto muito boa, bem conservada. Entrega e devolução sem problemas. Só achei que poderia estar
                        um pouco mais limpa."
                      </div>

                      <div className="flex justify-end">
                        <Button size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Responder
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="respondidas">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" alt="Pedro Almeida" />
                            <AvatarFallback>PA</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Pedro Almeida</div>
                            <div className="text-sm text-muted-foreground">5 de março de 2023</div>
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
                            <span>Toyota Corolla 2019</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm">
                        "Excelente experiência! Carro muito bom e o proprietário super atencioso."
                      </div>

                      <div className="bg-gray-50 p-4 rounded-md border">
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg" alt="João Silva" />
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          <div className="text-sm font-medium">Sua resposta:</div>
                        </div>
                        <div className="text-sm">
                          "Obrigado pela avaliação, Pedro! Foi um prazer atendê-lo. Espero vê-lo novamente em breve!"
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Badge variant="outline" className="bg-green-50 text-green-600">
                          Respondida
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pendentes">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder.svg" alt="Carlos Santos" />
                            <AvatarFallback>CS</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">Carlos Santos</div>
                            <div className="text-sm text-muted-foreground">10 de março de 2023</div>
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
                        "Moto muito boa, bem conservada. Entrega e devolução sem problemas. Só achei que poderia estar
                        um pouco mais limpa."
                      </div>

                      <div className="flex justify-end">
                        <Badge variant="outline" className="bg-orange-50 text-orange-600 mr-2">
                          Pendente
                        </Badge>
                        <Button size="sm">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Responder
                        </Button>
                      </div>
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

