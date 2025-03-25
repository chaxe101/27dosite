"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, BikeIcon as Motorcycle, Star, Heart, MapPin, Search, Filter, Trash2 } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function FavoritosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const userName = "Maria Silva"
  const userEmail = "maria@email.com"

  const favoriteVehicles = [
    {
      id: "bmw-x1",
      name: "BMW X1 2022",
      type: "car",
      category: "SUV",
      location: "São Paulo",
      rating: 4.9,
      price: 280,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "ducati-monster",
      name: "Ducati Monster 2021",
      type: "motorcycle",
      category: "Naked",
      location: "Rio de Janeiro",
      rating: 4.8,
      price: 180,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "jeep-compass",
      name: "Jeep Compass 2023",
      type: "car",
      category: "SUV",
      location: "Belo Horizonte",
      rating: 4.7,
      price: 220,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "honda-civic",
      name: "Honda Civic 2022",
      type: "car",
      category: "Sedan",
      location: "São Paulo",
      rating: 4.6,
      price: 190,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filteredVehicles = favoriteVehicles.filter(
    (vehicle) =>
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="renter" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Veículos Favoritos</h1>
            <p className="text-muted-foreground">Gerencie sua lista de veículos favoritos para acesso rápido.</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar por nome, localização, categoria..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Favorites Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
                    <Badge className="absolute top-2 right-2">Disponível</Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 left-2 h-8 w-8 rounded-full bg-white/80 text-red-500"
                    >
                      <Heart className="h-5 w-5 fill-current" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">{vehicle.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">{vehicle.rating}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                      <div className="flex items-center gap-1">
                        {vehicle.type === "car" ? (
                          <Car className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Motorcycle className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span>{vehicle.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{vehicle.location}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-blue-600">
                        R$ {vehicle.price}
                        <span className="text-xs font-normal text-muted-foreground">/dia</span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-red-500 hover:bg-red-50"
                          title="Remover dos favoritos"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <Link href={`/vehicle/${vehicle.id}`}>
                          <Button size="sm">Ver Detalhes</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center">
              <CardContent>
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-100 p-4 rounded-full mb-4">
                    <Heart className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Nenhum favorito encontrado</h3>
                  <p className="text-muted-foreground max-w-md mb-4">
                    Você ainda não adicionou nenhum veículo aos favoritos ou sua busca não retornou resultados.
                  </p>
                  <Link href="/search">
                    <Button>Explorar veículos</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

