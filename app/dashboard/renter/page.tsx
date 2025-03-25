"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Car, BikeIcon as Motorcycle, Calendar, DollarSign, Star, Heart, Search, MapPin } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import Image from "next/image"

export default function RenterDashboardPage() {
  const userName = "Maria Silva"
  const userEmail = "maria@email.com"

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="renter" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Bem-vinda ao seu painel, Maria!</h1>
            <p className="text-muted-foreground">
              Gerencie suas reservas, encontre veículos e acompanhe seus aluguéis.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-600">Reservas ativas</p>
                    <h3 className="text-3xl font-bold">2</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/dashboard/renter/reservas"
                    prefetch={false}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Ver reservas
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600">Veículos favoritos</p>
                    <h3 className="text-3xl font-bold">5</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/dashboard/renter/favoritos"
                    prefetch={false}
                    className="text-sm text-green-600 hover:underline"
                  >
                    Ver favoritos
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border-orange-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orange-600">Total gasto</p>
                    <h3 className="text-3xl font-bold">R$ 650</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/dashboard/renter/pagamentos"
                    prefetch={false}
                    className="text-sm text-orange-600 hover:underline"
                  >
                    Ver pagamentos
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-purple-600">Avaliações feitas</p>
                    <h3 className="text-3xl font-bold">8</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/dashboard/renter/avaliacoes"
                    prefetch={false}
                    className="text-sm text-purple-600 hover:underline"
                  >
                    Ver avaliações
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recomendações para você</h2>
              <Link href="/dashboard/renter/recomendacoes" prefetch={false}>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  Ver todas
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Recommendation 1 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image src="/placeholder.svg?height=400&width=600" alt="BMW X1" fill className="object-cover" />
                  <Badge className="absolute top-2 right-2">Disponível</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold truncate">BMW X1 2022</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm">4.9</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">SUV</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">São Paulo</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-primary">
                      R$ 280<span className="text-xs font-normal text-muted-foreground">/dia</span>
                    </div>
                    <Button size="sm">Ver Detalhes</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recommendation 2 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Ducati Monster"
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 right-2">Disponível</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold truncate">Ducati Monster 2021</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Motorcycle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">Naked</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">Rio de Janeiro</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-primary">
                      R$ 180<span className="text-xs font-normal text-muted-foreground">/dia</span>
                    </div>
                    <Button size="sm">Ver Detalhes</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recommendation 3 */}
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Jeep Compass" fill className="object-cover" />
                  <Badge className="absolute top-2 right-2">Disponível</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold truncate">Jeep Compass 2023</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm">4.7</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">SUV</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      <span className="truncate">Belo Horizonte</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-primary">
                      R$ 220<span className="text-xs font-normal text-muted-foreground">/dia</span>
                    </div>
                    <Button size="sm">Ver Detalhes</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Active Reservations */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Reservas ativas</h2>
              <Link href="/dashboard/renter/reservas" prefetch={false}>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  Ver todas
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              {/* Reservation 1 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="hidden sm:block relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Honda Civic"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold truncate">Honda Civic 2022</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">15 de agosto de 2023 - 18 de agosto de 2023</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm">
                          <Avatar className="h-6 w-6 flex-shrink-0">
                            <AvatarImage src="/placeholder.svg" alt="Proprietário" />
                            <AvatarFallback>PR</AvatarFallback>
                          </Avatar>
                          <span className="truncate">Ricardo Pereira</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Ativa</Badge>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      Ver detalhes
                    </Button>
                    <Button size="sm">Entrar em contato</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Reservation 2 */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="hidden sm:block relative w-24 h-24 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/placeholder.svg?height=100&width=100"
                          alt="Yamaha MT-07"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold truncate">Yamaha MT-07</h3>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">20 de agosto de 2023 - 22 de agosto de 2023</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm">
                          <Avatar className="h-6 w-6 flex-shrink-0">
                            <AvatarImage src="/placeholder.svg" alt="Proprietário" />
                            <AvatarFallback>PR</AvatarFallback>
                          </Avatar>
                          <span className="truncate">Carlos Mendes</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Ativa</Badge>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      Ver detalhes
                    </Button>
                    <Button size="sm">Entrar em contato</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Search */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Busca rápida</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tipo de veículo</label>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Car className="h-4 w-4 mr-2" />
                        Carros
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Motorcycle className="h-4 w-4 mr-2" />
                        Motos
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Localização</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Cidade, Estado"
                        className="w-full h-10 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Datas</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Selecione as datas"
                        className="w-full h-10 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4 mr-2" />
                    Buscar veículos
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips for Renters */}
          <div className="mt-8">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold text-blue-800 mb-4">Dicas para locatários</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Sempre verifique o veículo antes de sair com ele</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Tire fotos do veículo na retirada e na devolução</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Comunique qualquer problema imediatamente ao proprietário</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Avalie o veículo após a devolução para ajudar outros usuários</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" className="bg-white">
                    Ver exemplo de checklist
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

