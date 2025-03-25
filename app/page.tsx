import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  BikeIcon as Motorcycle,
  Shield,
  Star,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  MapPin,
} from "lucide-react"
import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Carregamento dinâmico do footer para reduzir o peso inicial
const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <div className="h-40 bg-gray-100"></div>,
})

// Carregamento dinâmico do componente de recomendações AI
const AIRecommendations = dynamic(() => import("@/components/ai-recommendations"), {
  loading: () => (
    <div className="space-y-4">
      <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-video bg-gray-200 rounded animate-pulse"></div>
        ))}
      </div>
    </div>
  ),
  ssr: false,
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        {/* Background decorative images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -right-20 top-1/4 opacity-10">
            <Car className="h-96 w-96 text-white" />
          </div>
          <div className="absolute -left-20 bottom-1/4 opacity-10">
            <Motorcycle className="h-72 w-72 text-white" />
          </div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-blue-600">
                Compartilhe seu veículo ou encontre o ideal para alugar
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Aluguel de carros e motos entre pessoas
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Plataforma segura para alugar veículos diretamente de proprietários vindo a você. Ou coloque seu veículo
              para alugar e obter renda extra!
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">Preços acessíveis</span>
              </div>
              <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">Sem burocracia</span>
              </div>
              <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                <Clock className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-800">Suporte 24h</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/register?source=rent">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 h-14 px-8 text-lg rounded-full shadow-lg w-full sm:w-auto"
                >
                  <Car className="mr-2 h-5 w-5" />
                  Alugue Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register?source=register">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-14 px-8 text-lg rounded-full shadow-lg w-full sm:w-auto"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Cadastre seu Veículo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Veículos em Destaque</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Confira os veículos mais populares disponíveis para aluguel
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vehicle Card 1 */}
            <Link href="/vehicle/1">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Honda Civic"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                  />
                  <Badge className="absolute top-2 right-2">Disponível</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">Honda Civic 2022</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      <span>Sedan</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>São Paulo</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-primary">
                      R$ 150<span className="text-xs font-normal text-muted-foreground">/dia</span>
                    </div>
                    <Button size="sm">Ver Detalhes</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Vehicle Card 2 */}
            <Link href="/vehicle/2">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Yamaha MT-07"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                  />
                  <Badge className="absolute top-2 right-2">Disponível</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">Yamaha MT-07</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm">4.9</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Motorcycle className="h-4 w-4 text-muted-foreground" />
                      <span>Naked</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>São Paulo</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-primary">
                      R$ 100<span className="text-xs font-normal text-muted-foreground">/dia</span>
                    </div>
                    <Button size="sm">Ver Detalhes</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Vehicle Card 3 */}
            <Link href="/vehicle/3">
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Toyota Corolla"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+PC9zdmc+"
                  />
                  <Badge className="absolute top-2 right-2">Disponível</Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold">Toyota Corolla 2021</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                      <span className="text-sm">4.7</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4 text-muted-foreground" />
                      <span>Sedan</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Rio de Janeiro</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold text-primary">
                      R$ 160<span className="text-xs font-normal text-muted-foreground">/dia</span>
                    </div>
                    <Button size="sm">Ver Detalhes</Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/search">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Ver Todos os Veículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section - Simplificado */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Por que escolher nossa plataforma?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos a melhor experiência para proprietários e locatários de veículos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Preços Acessíveis</h3>
              <p className="text-muted-foreground">
                Economize até 30% comparado às locadoras tradicionais com preços transparentes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Processo Seguro</h3>
              <p className="text-muted-foreground">Verificação de usuários, seguro opcional e pagamentos protegidos.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
              <p className="text-muted-foreground">
                Assistência disponível a qualquer hora para garantir sua tranquilidade.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Garantia de Qualidade</h3>
              <p className="text-muted-foreground">
                Todos os veículos são verificados e avaliados antes de serem listados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carregado dinamicamente */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">O que nossos usuários dizem</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Experiências reais de pessoas que utilizam nossa plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" alt="Marcelo Silva" />
                  <AvatarFallback>MS</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">Marcelo Silva</h4>
                  <div className="flex">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Já utilizei a plataforma várias vezes para alugar carros em viagens. O processo é super simples, os
                preços são ótimos e os proprietários são muito atenciosos. Recomendo a todos!"
              </p>
              <div className="mt-4 text-sm text-muted-foreground">Locatário desde 2023</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" alt="Fernanda Costa" />
                  <AvatarFallback>FC</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">Fernanda Costa</h4>
                  <div className="flex">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Como proprietária, consegui uma renda extra significativa alugando meu carro nos finais de semana. A
                plataforma cuida de tudo, desde a verificação dos locatários até o seguro. Me sinto muito segura!"
              </p>
              <div className="mt-4 text-sm text-muted-foreground">Proprietária desde 2022</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" alt="Rafael Mendes" />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold">Rafael Mendes</h4>
                  <div className="flex">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
              </div>
              <p className="italic text-gray-700">
                "Aluguei uma moto para um passeio no fim de semana e foi uma experiência incrível! O app é intuitivo, o
                suporte é rápido e o preço foi muito melhor que nas locadoras tradicionais. Já estou planejando o
                próximo aluguel!"
              </p>
              <div className="mt-4 text-sm text-muted-foreground">Locatário desde 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Recommendations Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <AIRecommendations />
          </div>
        </div>
      </section>

      {/* CTA Section - Simplificado */}
      <section className="w-full py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Pronto para começar?</h2>
              <p className="mx-auto max-w-[700px] text-lg text-blue-100">
                Cadastre-se gratuitamente e comece a alugar ou disponibilizar veículos em minutos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 min-w-[200px] h-12 text-lg">
                  Criar Conta Grátis
                </Button>
              </Link>
              <Link href="/search">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 min-w-[200px] h-12 text-lg"
                >
                  Explorar Veículos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="w-full py-8 bg-white border-t">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-medium mb-2">Sua opinião é importante para nós</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ajude-nos a melhorar a plataforma compartilhando sua experiência
            </p>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Enviar Feedback
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Carregado dinamicamente */}
      <Footer />
    </div>
  )
}

