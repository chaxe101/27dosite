"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Car,
  BikeIcon as Motorcycle,
  MapPin,
  Calendar,
  Star,
  Filter,
  Heart,
  SlidersHorizontal,
  AlertCircle,
  Search,
} from "lucide-react"
import dynamic from "next/dynamic"
import CategoryFilters from "@/components/category-filters"
import SearchBar from "@/components/search-bar"

// Carregamento dinâmico do footer
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-40 bg-gray-100"></div>,
})

// Componente de carregamento para os resultados da pesquisa
const SearchResultsSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="aspect-square rounded-xl bg-gray-200 mb-3"></div>
        <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div className="h-5 bg-gray-200 rounded w-1/4"></div>
      </div>
    ))}
  </div>
)

// Componente de resultados da pesquisa
const SearchResults = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Vehicle Card 1 */}
      <Link href="/vehicle/1" className="group">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Honda Civic"
            fill
            className="object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-5 w-5 text-neutral-500 hover:text-red-500" />
          </button>
          <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white border-0">
            Preferido dos usuários
          </Badge>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">Honda Civic 2022</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-black text-black" />
              <span className="ml-1 text-sm">4.91</span>
            </div>
          </div>
          <div className="text-muted-foreground text-sm">São Paulo, Brasil</div>
          <div className="text-muted-foreground text-sm">24 – 29 de mar.</div>
          <div className="mt-1">
            <span className="font-semibold">R$ 150</span>
            <span className="text-muted-foreground"> noite</span>
          </div>
        </div>
      </Link>

      {/* Vehicle Card 2 */}
      <Link href="/vehicle/2" className="group">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Yamaha MT-07"
            fill
            className="object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-5 w-5 text-neutral-500 hover:text-red-500" />
          </button>
          <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white border-0">
            Preferido dos usuários
          </Badge>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">Yamaha MT-07</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-black text-black" />
              <span className="ml-1 text-sm">4.88</span>
            </div>
          </div>
          <div className="text-muted-foreground text-sm">São Paulo, Brasil</div>
          <div className="text-muted-foreground text-sm">15 – 20 de abr.</div>
          <div className="mt-1">
            <span className="font-semibold">R$ 100</span>
            <span className="text-muted-foreground"> noite</span>
          </div>
        </div>
      </Link>

      {/* Vehicle Card 3 */}
      <Link href="/vehicle/3" className="group">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Toyota Corolla"
            fill
            className="object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-5 w-5 text-neutral-500 hover:text-red-500" />
          </button>
          <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white border-0">
            Preferido dos usuários
          </Badge>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">Toyota Corolla 2021</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-black text-black" />
              <span className="ml-1 text-sm">4.85</span>
            </div>
          </div>
          <div className="text-muted-foreground text-sm">Rio de Janeiro, Brasil</div>
          <div className="text-muted-foreground text-sm">5 – 10 de mai.</div>
          <div className="mt-1">
            <span className="font-semibold">R$ 160</span>
            <span className="text-muted-foreground"> noite</span>
          </div>
        </div>
      </Link>

      {/* Vehicle Card 4 */}
      <Link href="/vehicle/4" className="group">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Honda CB 500F"
            fill
            className="object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-5 w-5 text-neutral-500 hover:text-red-500" />
          </button>
          <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white border-0">
            Preferido dos usuários
          </Badge>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">Honda CB 500F</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-black text-black" />
              <span className="ml-1 text-sm">4.87</span>
            </div>
          </div>
          <div className="text-muted-foreground text-sm">Belo Horizonte, Brasil</div>
          <div className="text-muted-foreground text-sm">7 – 12 de abr.</div>
          <div className="mt-1">
            <span className="font-semibold">R$ 90</span>
            <span className="text-muted-foreground"> noite</span>
          </div>
        </div>
      </Link>

      {/* Vehicle Card 5 */}
      <Link href="/vehicle/5" className="group">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Jeep Renegade"
            fill
            className="object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-5 w-5 text-neutral-500 hover:text-red-500" />
          </button>
          <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white border-0">
            Preferido dos usuários
          </Badge>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">Jeep Renegade 2020</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-black text-black" />
              <span className="ml-1 text-sm">4.92</span>
            </div>
          </div>
          <div className="text-muted-foreground text-sm">Curitiba, Brasil</div>
          <div className="text-muted-foreground text-sm">22 – 27 de mar.</div>
          <div className="mt-1">
            <span className="font-semibold">R$ 180</span>
            <span className="text-muted-foreground"> noite</span>
          </div>
        </div>
      </Link>

      {/* Vehicle Card 6 */}
      <Link href="/vehicle/6" className="group">
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Kawasaki Z900"
            fill
            className="object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 hover:bg-white">
            <Heart className="h-5 w-5 text-neutral-500 hover:text-red-500" />
          </button>
          <Badge className="absolute top-3 left-3 bg-white/90 text-black hover:bg-white border-0">
            Preferido dos usuários
          </Badge>
        </div>
        <div className="mt-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium">Kawasaki Z900</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-black text-black" />
              <span className="ml-1 text-sm">4.91</span>
            </div>
          </div>
          <div className="text-muted-foreground text-sm">São Paulo, Brasil</div>
          <div className="text-muted-foreground text-sm">6 – 11 de mai.</div>
          <div className="mt-1">
            <span className="font-semibold">R$ 200</span>
            <span className="text-muted-foreground"> noite</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

// Componente principal da página de pesquisa
export default function SearchPage() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [vehicleType, setVehicleType] = useState("all")
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const searchParams = useSearchParams()
  const router = useRouter()

  // Simular busca de veículos com base nos parâmetros da URL
  useEffect(() => {
    const fetchVehicles = async () => {
      setIsLoading(true)
      setError(null)

      try {
        // Extrair parâmetros de busca
        const location = searchParams.get("location")
        const type = searchParams.get("type")
        const category = searchParams.get("category")
        const start = searchParams.get("start")
        const end = searchParams.get("end")

        // Simular uma chamada de API com um pequeno atraso
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Em um app real, esses parâmetros seriam enviados para a API
        console.log("Buscando veículos com:", { location, type, category, start, end })

        // Dados simulados que viriam da API
        setSearchResults([
          // Aqui estariam os resultados reais da busca
        ])
      } catch (err) {
        console.error("Erro ao buscar veículos:", err)
        setError("Não foi possível carregar os resultados. Tente novamente mais tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchVehicles()
  }, [searchParams])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Search Bar Section - Airbnb Style */}
      <section className="w-full py-6 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Category Filters - Airbnb Style */}
      <section className="w-full pt-4 pb-4 bg-white border-b">
        <div className="container px-4 md:px-6">
          <CategoryFilters />
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar - Can be toggled on mobile */}
            <div className={`w-full md:w-64 space-y-6 ${isFilterVisible ? "block" : "hidden"} md:block`}>
              <div className="sticky top-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-lg">Filtros</h2>
                  <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => router.push("/search")}>
                    <Filter className="h-4 w-4 mr-2" />
                    Limpar filtros
                  </Button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Tipo de Veículo</h3>
                    <Tabs defaultValue="all" onValueChange={setVehicleType} className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="all">Todos</TabsTrigger>
                        <TabsTrigger value="car">
                          <Car className="h-4 w-4 mr-1" />
                          Carros
                        </TabsTrigger>
                        <TabsTrigger value="motorcycle">
                          <Motorcycle className="h-4 w-4 mr-1" />
                          Motos
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Preço por dia</h3>
                    <div className="flex items-center justify-between">
                      <Input
                        type="number"
                        placeholder="Min"
                        className="w-20"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
                      />
                      <span className="mx-2">-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        className="w-20"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 500])}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Localização</h3>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Cidade, Estado" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">Disponibilidade</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Data inicial" className="pl-10" />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Data final" className="pl-10" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full">Aplicar Filtros</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Results - Airbnb Style */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-bold">Veículos disponíveis</h1>
                  <p className="text-muted-foreground">24 veículos encontrados</p>
                </div>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-9 rounded-full md:hidden"
                    onClick={() => setIsFilterVisible(!isFilterVisible)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 rounded-full">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Ordenar
                  </Button>
                  <Button variant="outline" size="sm" className="h-9 rounded-full">
                    Exibir preço total
                  </Button>
                </div>
              </div>

              {isLoading ? (
                <SearchResultsSkeleton />
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg max-w-md text-center">
                    <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium mb-2">Erro ao carregar resultados</p>
                    <p className="text-sm mb-4">{error}</p>
                    <Button
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50"
                      onClick={() => window.location.reload()}
                    >
                      Tentar novamente
                    </Button>
                  </div>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="bg-blue-50 text-blue-600 p-4 rounded-lg max-w-md text-center">
                    <Search className="h-8 w-8 mx-auto mb-2" />
                    <p className="font-medium mb-2">Nenhum resultado encontrado</p>
                    <p className="text-sm mb-4">Tente ajustar seus filtros ou buscar em outra localização.</p>
                    <Button onClick={() => router.push("/")}>Voltar para a página inicial</Button>
                  </div>
                </div>
              ) : (
                <SearchResults />
              )}

              <div className="flex justify-center mt-10">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" className="w-9 h-9 rounded-full">
                    1
                  </Button>
                  <Button variant="outline" size="icon" className="w-9 h-9 rounded-full">
                    2
                  </Button>
                  <Button variant="outline" size="icon" className="w-9 h-9 rounded-full">
                    3
                  </Button>
                  <span>...</span>
                  <Button variant="outline" size="icon" className="w-9 h-9 rounded-full">
                    8
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

