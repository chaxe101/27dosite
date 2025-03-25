"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Car, BikeIcon as Motorcycle, Star, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Tipos para os veículos recomendados
type RecommendedVehicle = {
  id: string
  name: string
  type: "car" | "motorcycle"
  image: string
  location: string
  rating: number
  price: number
  reason: string
}

export default function AIRecommendations() {
  const [activeTab, setActiveTab] = useState<string>("for-you")
  const [recommendations, setRecommendations] = useState<{
    forYou: RecommendedVehicle[]
    trending: RecommendedVehicle[]
    nearby: RecommendedVehicle[]
  }>({
    forYou: [],
    trending: [],
    nearby: [],
  })
  const [isLoading, setIsLoading] = useState(true)

  // Simula a obtenção de recomendações personalizadas
  useEffect(() => {
    // Em um cenário real, isso seria uma chamada à API que usa IA para gerar recomendações
    const fetchRecommendations = async () => {
      setIsLoading(true)

      // Simulando um atraso de rede
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Dados simulados que seriam gerados por IA
      const mockRecommendations = {
        forYou: [
          {
            id: "1",
            name: "Honda Civic 2022",
            type: "car" as const,
            image: "/placeholder.svg?height=200&width=300",
            location: "São Paulo, SP",
            rating: 4.8,
            price: 150,
            reason: "Baseado em suas reservas anteriores de sedãs",
          },
          {
            id: "2",
            name: "Yamaha MT-07",
            type: "motorcycle" as const,
            image: "/placeholder.svg?height=200&width=300",
            location: "São Paulo, SP",
            rating: 4.9,
            price: 100,
            reason: "Você pesquisou motos esportivas recentemente",
          },
          {
            id: "3",
            name: "Toyota Corolla 2021",
            type: "car" as const,
            image: "/placeholder.svg?height=200&width=300",
            location: "Rio de Janeiro, RJ",
            rating: 4.7,
            price: 160,
            reason: "Usuários com perfil similar alugaram este modelo",
          },
        ],
        trending: [],
        nearby: [],
      }

      setRecommendations(mockRecommendations)
      setIsLoading(false)
    }

    // Carregamos apenas os dados da aba ativa para economizar recursos
    if (activeTab === "for-you" && recommendations.forYou.length === 0) {
      fetchRecommendations()
    } else if (activeTab === "trending" && recommendations.trending.length === 0) {
      // Aqui carregaríamos os dados de trending
      setIsLoading(false)
    } else if (activeTab === "nearby" && recommendations.nearby.length === 0) {
      // Aqui carregaríamos os dados de nearby
      setIsLoading(false)
    } else {
      setIsLoading(false)
    }
  }, [activeTab, recommendations])

  // Renderiza um card de veículo recomendado
  const renderVehicleCard = (vehicle: RecommendedVehicle) => (
    <Link href={`/vehicle/${vehicle.id}`} key={vehicle.id} className="group">
      <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative aspect-[4/3]">
          <Image
            src={vehicle.image || "/placeholder.svg"}
            alt={vehicle.name}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className="absolute top-2 right-2 bg-blue-600">Recomendado</Badge>
        </div>
        <CardContent className="p-4 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold">{vehicle.name}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-primary text-primary mr-1" />
              <span className="text-sm">{vehicle.rating}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 mb-3 text-sm">
            <div className="flex items-center gap-1">
              {vehicle.type === "car" ? (
                <Car className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Motorcycle className="h-4 w-4 text-muted-foreground" />
              )}
              <span>{vehicle.type === "car" ? "Carro" : "Moto"}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{vehicle.location}</span>
            </div>
          </div>
          <div className="mt-auto">
            <div className="text-xs text-blue-600 mb-2">{vehicle.reason}</div>
            <div className="flex justify-between items-center">
              <div className="font-bold text-primary">
                R$ {vehicle.price}
                <span className="text-xs font-normal text-muted-foreground">/dia</span>
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Ver
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )

  return (
    <div className="w-full">
      <CardHeader className="px-0">
        <CardTitle className="text-2xl">Recomendações para Você</CardTitle>
        <CardDescription>Veículos selecionados com base no seu histórico e preferências</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <Tabs defaultValue="for-you" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="for-you">Para Você</TabsTrigger>
            <TabsTrigger value="trending">Em Alta</TabsTrigger>
            <TabsTrigger value="nearby">Próximos</TabsTrigger>
          </TabsList>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden h-full">
                  <div className="relative aspect-[4/3] bg-gray-200 animate-pulse"></div>
                  <CardContent className="p-4">
                    <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/2"></div>
                    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
              <TabsContent value="for-you" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendations.forYou.map(renderVehicleCard)}
                </div>
              </TabsContent>

              <TabsContent value="trending" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendations.trending.length > 0 ? (
                    recommendations.trending.map(renderVehicleCard)
                  ) : (
                    <div className="col-span-3 text-center py-12">
                      <p className="text-muted-foreground">Carregando veículos em alta...</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="nearby" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommendations.nearby.length > 0 ? (
                    recommendations.nearby.map(renderVehicleCard)
                  ) : (
                    <div className="col-span-3 text-center py-12">
                      <p className="text-muted-foreground">Carregando veículos próximos...</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>

        <div className="flex justify-center mt-8">
          <Link href="/search">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Ver Mais Veículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </div>
  )
}

