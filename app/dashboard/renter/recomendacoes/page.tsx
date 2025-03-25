"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, BikeIcon as Motorcycle, Calendar, Star, Heart, Search, MapPin, SlidersHorizontal } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecomendacoesPage() {
  const [favorites, setFavorites] = useState<string[]>([])
  const userName = "Maria Silva"
  const userEmail = "maria@email.com"

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="renter" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Recomendações para você</h1>
            <p className="text-muted-foreground">Veículos selecionados com base no seu histórico e preferências.</p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="flex-1 space-y-2">
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
                  <div className="flex-1 space-y-2">
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
                  <div className="flex-1 space-y-2">
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
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                      <SlidersHorizontal className="h-4 w-4" />
                      <span className="hidden md:inline">Mais filtros</span>
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Search className="h-4 w-4 mr-2" />
                      Buscar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations Tabs */}
          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabsTrigger value="all">Todas recomendações</TabsTrigger>
              <TabsTrigger value="personalized">Personalizadas para você</TabsTrigger>
              <TabsTrigger value="trending">Mais populares</TabsTrigger>
              <TabsTrigger value="new">Recém adicionados</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Vehicle 1 */}
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image src="/placeholder.svg?height=400&width=600" alt="BMW X1" fill className="object-cover" />
                    <Badge className="absolute top-2 right-2">Disponível</Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 ${favorites.includes("bmw-x1") ? "text-red-500" : "text-gray-500"}`}
                      onClick={() => toggleFavorite("bmw-x1")}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes("bmw-x1") ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">BMW X1 2022</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">4.9</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Car className="h-4 w-4 text-muted-foreground" />
                        <span>SUV</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>São Paulo</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-blue-600">
                        R$ 280<span className="text-xs font-normal text-muted-foreground">/dia</span>
                      </div>
                      <Link href="/vehicle/bmw-x1-2022">
                        <Button size="sm">Ver Detalhes</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Vehicle 2 */}
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Ducati Monster"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2">Disponível</Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 ${favorites.includes("ducati-monster") ? "text-red-500" : "text-gray-500"}`}
                      onClick={() => toggleFavorite("ducati-monster")}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes("ducati-monster") ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Ducati Monster 2021</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">4.8</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Motorcycle className="h-4 w-4 text-muted-foreground" />
                        <span>Naked</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Rio de Janeiro</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-blue-600">
                        R$ 180<span className="text-xs font-normal text-muted-foreground">/dia</span>
                      </div>
                      <Link href="/vehicle/ducati-monster-2021">
                        <Button size="sm">Ver Detalhes</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Vehicle 3 */}
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Jeep Compass"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2">Disponível</Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 ${favorites.includes("jeep-compass") ? "text-red-500" : "text-gray-500"}`}
                      onClick={() => toggleFavorite("jeep-compass")}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes("jeep-compass") ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Jeep Compass 2023</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">4.7</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Car className="h-4 w-4 text-muted-foreground" />
                        <span>SUV</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Belo Horizonte</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-blue-600">
                        R$ 220<span className="text-xs font-normal text-muted-foreground">/dia</span>
                      </div>
                      <Link href="/vehicle/jeep-compass-2023">
                        <Button size="sm">Ver Detalhes</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="personalized">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Personalized recommendations would go here */}
                <Card className="p-8 col-span-full flex flex-col items-center justify-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Heart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Recomendações personalizadas</h3>
                  <p className="text-muted-foreground max-w-md mb-4">
                    Quanto mais você utilizar a plataforma, melhores serão nossas recomendações para você.
                  </p>
                  <Button>Explorar veículos</Button>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trending">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Trending vehicles would go here */}
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Tesla Model 3"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2">Disponível</Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 ${favorites.includes("tesla-model-3") ? "text-red-500" : "text-gray-500"}`}
                      onClick={() => toggleFavorite("tesla-model-3")}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes("tesla-model-3") ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Tesla Model 3 2023</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">4.9</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Car className="h-4 w-4 text-muted-foreground" />
                        <span>Elétrico</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>São Paulo</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-blue-600">
                        R$ 350<span className="text-xs font-normal text-muted-foreground">/dia</span>
                      </div>
                      <Link href="/vehicle/tesla-model-3-2023">
                        <Button size="sm">Ver Detalhes</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="new">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* New vehicles would go here */}
                <Card className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Kawasaki Z900"
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-2 right-2">Novo</Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 ${favorites.includes("kawasaki-z900") ? "text-red-500" : "text-gray-500"}`}
                      onClick={() => toggleFavorite("kawasaki-z900")}
                    >
                      <Heart className={`h-5 w-5 ${favorites.includes("kawasaki-z900") ? "fill-current" : ""}`} />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Kawasaki Z900 2023</h3>
                      <div className="flex items-center">
                        <span className="text-sm text-muted-foreground">Novo</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Motorcycle className="h-4 w-4 text-muted-foreground" />
                        <span>Naked</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Curitiba</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-blue-600">
                        R$ 220<span className="text-xs font-normal text-muted-foreground">/dia</span>
                      </div>
                      <Link href="/vehicle/kawasaki-z900-2023">
                        <Button size="sm">Ver Detalhes</Button>
                      </Link>
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

