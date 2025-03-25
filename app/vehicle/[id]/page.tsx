"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import {
  Car,
  MapPin,
  CalendarIcon,
  Star,
  Shield,
  MessageSquare,
  FileText,
  ArrowRight,
  CheckCircle,
  Fuel,
  Users,
  Gauge,
  Wind,
  Thermometer,
  Music,
  Wifi,
  ThumbsUp,
  AlertTriangle,
  CheckSquare,
  FileCheck,
  HelpCircle,
  Clock,
  BikeIcon as Motorcycle,
  Award,
  BadgeCheck,
  Heart,
  Share2,
  X,
  Map,
} from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { cn } from "@/lib/utils"

export default function VehiclePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedDates, setSelectedDates] = useState<Date | undefined>(undefined)
  const [selectedTab, setSelectedTab] = useState("details")
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined)
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showMobileBooking, setShowMobileBooking] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showChecklistDialog, setShowChecklistDialog] = useState(false)
  const [showContractDialog, setShowContractDialog] = useState(false)
  const [showRefundDialog, setShowRefundDialog] = useState(false)
  const [showMapDialog, setShowMapDialog] = useState(false)
  const [showContactDialog, setShowContactDialog] = useState(false)
  const [messageToOwner, setMessageToOwner] = useState("")
  const [reservationError, setReservationError] = useState<string | null>(null)
  const [isReserving, setIsReserving] = useState(false)

  // Exemplo de veículo (em um app real, isso viria de uma API)
  const vehicle = {
    id: params.id,
    name: params.id === "1" ? "Honda Civic 2022" : params.id === "2" ? "Toyota Corolla 2021" : "Yamaha MT-07 2023",
    type: params.id === "3" ? "motorcycle" : "car", // Determina se é carro ou moto
    price: params.id === "1" ? 150 : params.id === "2" ? 160 : 100,
    location: "São Paulo, SP",
    rating: 4.8,
    reviewCount: 24,
    status: "available", // ou "reserved", "maintenance"
    description:
      params.id === "3"
        ? "Yamaha MT-07 2023 em excelente estado. Moto esportiva com design agressivo, motor potente e econômico. Perfeita para o dia a dia e passeios de fim de semana. Baixa quilometragem e manutenção em dia."
        : "Honda Civic 2022 em excelente estado. Carro completo, com ar-condicionado, direção elétrica, vidros e travas elétricas, central multimídia com Android Auto e Apple CarPlay. Perfeito para viagens e uso na cidade. Econômico e confortável.",
    features:
      params.id === "3"
        ? [
            { icon: Motorcycle, name: "Naked" },
            { icon: Gauge, name: "689cc" },
            { icon: Fuel, name: "Gasolina" },
            { icon: Gauge, name: "74 cv" },
            { icon: Wind, name: "Freios ABS" },
            { icon: Thermometer, name: "Injeção Eletrônica" },
            { icon: Gauge, name: "Painel Digital" },
            { icon: Shield, name: "Protetor de Motor" },
          ]
        : [
            { icon: Car, name: "Sedan" },
            { icon: Gauge, name: "Automático" },
            { icon: Users, name: "5 Lugares" },
            { icon: Thermometer, name: "Ar-condicionado" },
            { icon: Music, name: "Central Multimídia" },
            { icon: Fuel, name: "Flex" },
            { icon: Wifi, name: "Conectividade" },
            { icon: Wind, name: "Vidros Elétricos" },
          ],
    rules: [
      "Proibido fumar no veículo",
      "Devolução com o mesmo nível de combustível",
      params.id === "3"
        ? "Limite de 100km por dia (R$1,50 por km adicional)"
        : "Limite de 200km por dia (R$1,00 por km adicional)",
      "Limpeza básica incluída (limpeza profunda será cobrada à parte)",
      params.id === "3"
        ? "Obrigatório uso de capacete (fornecido)"
        : "Animais de estimação somente com caixa de transporte",
    ],
    owner: {
      name: "Ricardo Pereira",
      memberSince: "Janeiro 2023",
      rating: 4.9,
      reviewCount: 32,
      responseRate: 98,
      responseTime: "1 hora",
      about:
        "Olá! Sou Ricardo, trabalho com tecnologia e tenho 3 veículos disponíveis para aluguel. Sempre mantenho meus carros em excelente estado e ofereço um atendimento personalizado para garantir a melhor experiência aos locatários.",
      otherVehicles: [
        { id: "1", name: "Honda Civic 2022", price: 150, rating: 4.8, image: "/placeholder.svg", type: "car" },
        { id: "2", name: "Toyota Corolla 2021", price: 160, rating: 4.7, image: "/placeholder.svg", type: "car" },
        { id: "3", name: "Yamaha MT-07 2023", price: 100, rating: 4.9, image: "/placeholder.svg", type: "motorcycle" },
      ].filter((v) => v.id !== params.id),
    },
    reviews: [
      {
        id: "1",
        user: { name: "Maria Silva", avatar: "/placeholder.svg", initials: "MS" },
        date: "15 de março de 2025",
        rating: 5,
        comment:
          "Carro em excelente estado, muito confortável e econômico. O proprietário foi muito atencioso e pontual. Recomendo!",
        verified: true,
        helpful: 12,
      },
      {
        id: "2",
        user: { name: "João Paulo", avatar: "/placeholder.svg", initials: "JP" },
        date: "10 de fevereiro de 2025",
        rating: 4,
        comment:
          "Ótima experiência. O carro estava limpo e funcionando perfeitamente. Apenas um pequeno atraso na entrega, mas nada que comprometesse a viagem.",
        verified: true,
        helpful: 8,
      },
      {
        id: "3",
        user: { name: "Carlos Almeida", avatar: "/placeholder.svg", initials: "CA" },
        date: "5 de janeiro de 2025",
        rating: 5,
        comment:
          "Excelente carro, muito confortável e econômico. O proprietário foi super atencioso e flexível com os horários. Recomendo!",
        verified: false,
        helpful: 5,
      },
      {
        id: "4",
        user: { name: "Ana Beatriz", avatar: "/placeholder.svg", initials: "AB" },
        date: "20 de dezembro de 2024",
        rating: 5,
        comment:
          "Veículo impecável e muito econômico. O processo de retirada e devolução foi super tranquilo. Certamente alugarei novamente!",
        verified: true,
        helpful: 15,
      },
      {
        id: "5",
        user: { name: "Pedro Henrique", avatar: "/placeholder.svg", initials: "PH" },
        date: "15 de novembro de 2024",
        rating: 4,
        comment:
          "Carro muito bom, atendeu todas as minhas expectativas. O proprietário foi muito prestativo e respondeu rapidamente a todas as minhas dúvidas.",
        verified: true,
        helpful: 7,
      },
    ],
    ratingBreakdown: {
      5: 18,
      4: 4,
      3: 1,
      2: 1,
      1: 0,
    },
    securityFeatures: [
      "Seguro básico incluso",
      "Proteção contra danos",
      "Assistência 24h",
      "Verificação de identidade",
    ],
    checklistItems: [
      "Verificação de documentação",
      "Inspeção de danos externos",
      "Verificação de nível de combustível",
      "Teste de funcionamento dos equipamentos",
      "Verificação de quilometragem",
    ],
  }

  // Formatar a data para exibição
  const formatDate = (date: Date | undefined) => {
    if (!date) return ""
    return format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
  }

  // Detectar scroll para mostrar o botão flutuante em dispositivos móveis
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle para o card de reserva em dispositivos móveis
  const toggleMobileBooking = () => {
    setShowMobileBooking(!showMobileBooking)
  }

  // Calcular a média de avaliações
  const calculateRatingPercentage = (rating: number, total: number) => {
    return (rating / total) * 100
  }

  // Verificar se é um carro ou uma moto
  const isMotorcycle = vehicle.type === "motorcycle"

  // Função para lidar com o clique em "Reservar Agora"
  const handleReserveNow = async () => {
    if (!pickupDate || !returnDate) {
      setReservationError("Por favor, selecione as datas de retirada e devolução.")
      return
    }

    setReservationError(null)
    setIsReserving(true)

    try {
      // Simular uma chamada de API com um pequeno atraso
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Em um app real, isso enviaria os dados para uma API
      // e redirecionaria para a página de pagamento após o sucesso
      router.push(
        `/dashboard/renter/reservas/confirmar?vehicle=${vehicle.id}&start=${formatDate(pickupDate)}&end=${formatDate(returnDate)}`,
      )
    } catch (error) {
      console.error("Erro ao fazer reserva:", error)
      setReservationError("Ocorreu um erro ao processar sua reserva. Tente novamente.")
    } finally {
      setIsReserving(false)
    }
  }

  // Função para lidar com o clique em "Favoritar"
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
    // Em um app real, isso enviaria os dados para uma API
  }

  // Função para lidar com o clique em "Compartilhar"
  const handleShare = () => {
    // Em um app real, isso abriria opções de compartilhamento
    if (navigator.share) {
      navigator.share({
        title: `VrumGo - ${vehicle.name}`,
        text: `Confira este ${isMotorcycle ? "moto" : "carro"} no VrumGo!`,
        url: window.location.href,
      })
    } else {
      // Fallback para navegadores que não suportam a API Web Share
      alert(`URL copiada para a área de transferência: ${window.location.href}`)
    }
  }

  // Função para enviar mensagem ao proprietário
  const handleSendMessage = () => {
    if (!messageToOwner.trim()) {
      alert("Por favor, escreva uma mensagem para o proprietário.")
      return
    }

    // Em um app real, isso enviaria os dados para uma API
    alert(
      `Mensagem enviada para ${vehicle.owner.name}. Em um app real, você seria redirecionado para a página de mensagens.`,
    )
    setMessageToOwner("")
    setShowContactDialog(false)
  }

  // Função para navegar para outro veículo
  const navigateToVehicle = (vehicleId: string) => {
    router.push(`/vehicle/${vehicleId}`)
  }

  return (
    <div className="container py-8 relative">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Vehicle Details */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{vehicle.name}</h1>
                <div className="flex items-center">
                  {isMotorcycle ? (
                    <Motorcycle className="h-5 w-5 text-primary" />
                  ) : (
                    <Car className="h-5 w-5 text-primary" />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <MapPin className="h-4 w-4" />
                <span>{vehicle.location}</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="ml-1">
                    {vehicle.rating} ({vehicle.reviewCount} avaliações)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {vehicle.status === "available" ? (
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Disponível</Badge>
              ) : vehicle.status === "reserved" ? (
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Reservado</Badge>
              ) : (
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Em manutenção</Badge>
              )}
              <Button
                variant="outline"
                size="sm"
                className={cn(
                  "gap-1",
                  isFavorite && "text-red-500 border-red-200 bg-red-50 hover:bg-red-100 hover:text-red-600",
                )}
                onClick={handleToggleFavorite}
              >
                <Heart className={cn("h-4 w-4", isFavorite && "fill-red-500")} />
                <span className="hidden sm:inline">{isFavorite ? "Favoritado" : "Favoritar"}</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-1" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Compartilhar</span>
              </Button>
            </div>
          </div>

          {/* Vehicle Images */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-6">
            <div className="md:col-span-4 relative aspect-video rounded-lg overflow-hidden">
              <Image src="/placeholder.svg" alt={vehicle.name} fill className="object-cover" priority />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt={vehicle.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback para imagem de erro
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?text=Imagem+não+disponível"
                  target.onerror = null // Prevenir loop infinito
                }}
                priority
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt={vehicle.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback para imagem de erro
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?text=Imagem+não+disponível"
                  target.onerror = null // Prevenir loop infinito
                }}
                priority
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt={vehicle.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback para imagem de erro
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?text=Imagem+não+disponível"
                  target.onerror = null // Prevenir loop infinito
                }}
                priority
              />
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt={vehicle.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback para imagem de erro
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg?text=Imagem+não+disponível"
                  target.onerror = null // Prevenir loop infinito
                }}
                priority
              />
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="details" onValueChange={setSelectedTab} className="mb-6">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="details">Detalhes</TabsTrigger>
              <TabsTrigger value="reviews">Avaliações</TabsTrigger>
              <TabsTrigger value="owner">Proprietário</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-2">Descrição</h2>
                  <p className="text-muted-foreground">{vehicle.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4">Características</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {vehicle.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <feature.icon className="h-6 w-6 text-blue-600" />
                        <span className="text-sm font-medium">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">Regras</h2>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {vehicle.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Segurança e Transparência
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-1">
                        <CheckSquare className="h-4 w-4 text-blue-600" />
                        Checklist de Verificação
                      </h3>
                      <ul className="space-y-1 text-sm">
                        {vehicle.checklistItems.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Dialog open={showChecklistDialog} onOpenChange={setShowChecklistDialog}>
                        <DialogTrigger asChild>
                          <Button variant="link" className="text-blue-600 p-0 h-auto mt-2 flex items-center gap-1">
                            <FileCheck className="h-4 w-4" />
                            Ver exemplo de checklist
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Checklist de Verificação do Veículo</DialogTitle>
                            <DialogDescription>
                              Este checklist é utilizado na retirada e devolução do veículo.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium mb-2">Exterior</h4>
                              <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Verificar arranhões ou amassados</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Verificar faróis e lanternas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Verificar pneus e estepe</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Verificar limpadores de para-brisa</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Interior</h4>
                              <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Verificar limpeza geral</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Verificar funcionamento do ar-condicionado</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Verificar sistema de som</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Documentação e Outros</h4>
                              <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Verificar documentos do veículo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Verificar nível de combustível</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="h-5 w-5 border rounded-sm mt-0.5 flex-shrink-0"></div>
                                  <span>Registrar quilometragem</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex justify-end mt-4">
                            <Button onClick={() => setShowChecklistDialog(false)}>Fechar</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-1">
                        <Shield className="h-4 w-4 text-blue-600" />
                        Proteção e Segurança
                      </h3>
                      <ul className="space-y-1 text-sm">
                        {vehicle.securityFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <Dialog open={showContractDialog} onOpenChange={setShowContractDialog}>
                          <DialogTrigger asChild>
                            <Button variant="link" className="text-blue-600 p-0 h-auto flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              Contrato de aluguel
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>Contrato de Aluguel</DialogTitle>
                              <DialogDescription>Termos e condições para o aluguel do veículo.</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                              <p className="text-sm">
                                Este Contrato de Aluguel de Veículo ("Contrato") é celebrado entre a VrumGo, doravante
                                denominada "LOCADORA", e o cliente cadastrado na plataforma, doravante denominado
                                "LOCATÁRIO".
                              </p>
                              <h4 className="font-medium">1. OBJETO</h4>
                              <p className="text-sm">
                                O objeto deste Contrato é o aluguel do veículo descrito na reserva, que será utilizado
                                pelo LOCATÁRIO exclusivamente para fins civis, sendo vedada a sublocação.
                              </p>
                              <h4 className="font-medium">2. PRAZO</h4>
                              <p className="text-sm">
                                O prazo de locação é aquele definido no momento da reserva, podendo ser prorrogado
                                mediante acordo prévio entre as partes.
                              </p>
                              <h4 className="font-medium">3. PREÇO E FORMA DE PAGAMENTO</h4>
                              <p className="text-sm">
                                O valor da locação será aquele apresentado no momento da reserva, incluindo a diária do
                                veículo e taxas adicionais.
                              </p>
                              <h4 className="font-medium">4. OBRIGAÇÕES DO LOCATÁRIO</h4>
                              <p className="text-sm">O LOCATÁRIO se obriga a:</p>
                              <ul className="text-sm list-disc pl-5 space-y-1">
                                <li>Devolver o veículo na data e local acordados;</li>
                                <li>Utilizar o veículo de acordo com sua destinação;</li>
                                <li>Arcar com as despesas de combustível;</li>
                                <li>Respeitar as leis de trânsito;</li>
                                <li>Não fumar dentro do veículo;</li>
                                <li>Comunicar imediatamente qualquer acidente ou dano.</li>
                              </ul>
                              <h4 className="font-medium">5. SEGURO</h4>
                              <p className="text-sm">
                                O veículo está coberto por seguro básico, conforme detalhado na reserva. Coberturas
                                adicionais podem ser contratadas separadamente.
                              </p>
                              <h4 className="font-medium">6. MULTAS E INFRAÇÕES</h4>
                              <p className="text-sm">
                                O LOCATÁRIO é responsável por todas as multas e infrações cometidas durante o período de
                                locação.
                              </p>
                              <h4 className="font-medium">7. RESCISÃO</h4>
                              <p className="text-sm">
                                Este Contrato poderá ser rescindido por qualquer das partes em caso de descumprimento de
                                suas cláusulas.
                              </p>
                            </div>
                            <div className="flex justify-end mt-4">
                              <Button onClick={() => setShowContractDialog(false)}>Fechar</Button>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Dialog open={showRefundDialog} onOpenChange={setShowRefundDialog}>
                          <DialogTrigger asChild>
                            <Button variant="link" className="text-blue-600 p-0 h-auto flex items-center gap-1">
                              <HelpCircle className="h-4 w-4" />
                              Política de reembolso
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>Política de Reembolso</DialogTitle>
                              <DialogDescription>Informações sobre cancelamentos e reembolsos.</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <h4 className="font-medium">Cancelamento pelo Locatário</h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>7+ dias antes da retirada:</strong> Reembolso de 100% do valor pago
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>3-6 dias antes da retirada:</strong> Reembolso de 70% do valor pago
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>1-2 dias antes da retirada:</strong> Reembolso de 50% do valor pago
                                  </span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                  <span>
                                    <strong>No dia da retirada:</strong> Sem reembolso
                                  </span>
                                </li>
                              </ul>

                              <h4 className="font-medium mt-4">Cancelamento pelo Proprietário</h4>
                              <p className="text-sm">
                                Se o proprietário cancelar a reserva, o locatário receberá reembolso integral do valor
                                pago, independentemente da data do cancelamento.
                              </p>

                              <h4 className="font-medium mt-4">Caução</h4>
                              <p className="text-sm">
                                O valor do caução será integralmente devolvido após a devolução do veículo, desde que
                                não sejam constatados danos ou infrações.
                              </p>

                              <h4 className="font-medium mt-4">Processo de Reembolso</h4>
                              <p className="text-sm">
                                Os reembolsos são processados em até 7 dias úteis e creditados na mesma forma de
                                pagamento utilizada na reserva.
                              </p>
                            </div>
                            <div className="flex justify-end mt-4">
                              <Button onClick={() => setShowRefundDialog(false)}>Fechar</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-2">Localização</h2>
                  <div className="relative w-full h-64 rounded-lg overflow-hidden">
                    <Image src="/placeholder.svg" alt="Map" fill className="object-cover" />
                    <div className="absolute bottom-4 right-4">
                      <Dialog open={showMapDialog} onOpenChange={setShowMapDialog}>
                        <DialogTrigger asChild>
                          <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                            <Map className="h-4 w-4 mr-2" />
                            Ver no mapa
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[80vh]">
                          <DialogHeader>
                            <DialogTitle>Localização do Veículo</DialogTitle>
                            <DialogDescription>
                              {vehicle.location} - A localização exata será compartilhada após a confirmação da reserva.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="relative w-full h-full rounded-lg overflow-hidden">
                            <Image src="/placeholder.svg" alt="Map" fill className="object-cover" />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  <p className="mt-2 text-muted-foreground">
                    Zona Sul de São Paulo, próximo à estação de metrô. Localização exata será compartilhada após a
                    confirmação da reserva.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{vehicle.rating} de 5 estrelas</h2>
                      <p className="text-muted-foreground">Baseado em {vehicle.reviewCount} avaliações</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <div className="w-8 text-right">{rating}</div>
                        <Star className="h-4 w-4 text-primary" />
                        <Progress
                          value={calculateRatingPercentage(
                            vehicle.ratingBreakdown[rating as keyof typeof vehicle.ratingBreakdown],
                            vehicle.reviewCount,
                          )}
                          className="h-2 flex-1"
                        />
                        <div className="w-8 text-muted-foreground text-sm">
                          {vehicle.ratingBreakdown[rating as keyof typeof vehicle.ratingBreakdown]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  {vehicle.reviews.map((review) => (
                    <div key={review.id} className="space-y-2 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={review.user.avatar} alt={review.user.name} />
                            <AvatarFallback>{review.user.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-1">
                              <p className="font-medium">{review.user.name}</p>
                              {review.verified && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <BadgeCheck className="h-4 w-4 text-blue-600" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Avaliação verificada</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ThumbsUp className="h-3.5 w-3.5" />
                          <span>{review.helpful}</span>
                        </div>
                      </div>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn("h-4 w-4", i < review.rating ? "fill-primary text-primary" : "text-gray-300")}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm" className="text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          Útil
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  Ver Todas as Avaliações
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="owner" className="pt-4">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="/placeholder.svg" alt="Owner" />
                    <AvatarFallback>RP</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold">{vehicle.owner.name}</h2>
                    <p className="text-muted-foreground">Membro desde {vehicle.owner.memberSince}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="ml-1">
                        {vehicle.owner.rating} ({vehicle.owner.reviewCount} avaliações)
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Sobre</h3>
                  <p className="text-muted-foreground">{vehicle.owner.about}</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Taxa de Resposta</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="bg-green-100 text-green-600 hover:bg-green-100">
                      <CheckCircle className="h-3.5 w-3.5 mr-1" />
                      Responde em até {vehicle.owner.responseTime}
                    </Badge>
                    <Badge className="bg-green-100 text-green-600 hover:bg-green-100">
                      Taxa de resposta: {vehicle.owner.responseRate}%
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-100">
                      <Award className="h-3.5 w-3.5 mr-1" />
                      Proprietário verificado
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Outros Veículos</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {vehicle.owner.otherVehicles.map((otherVehicle) => (
                      <Card
                        key={otherVehicle.id}
                        className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => navigateToVehicle(otherVehicle.id)}
                      >
                        <div className="relative aspect-video">
                          <Image
                            src={otherVehicle.image || "/placeholder.svg"}
                            alt={otherVehicle.name}
                            fill
                            className="object-cover"
                          />
                          {otherVehicle.type === "motorcycle" ? (
                            <Badge className="absolute top-2 right-2 bg-purple-100 text-purple-800">Moto</Badge>
                          ) : (
                            <Badge className="absolute top-2 right-2 bg-blue-100 text-blue-800">Carro</Badge>
                          )}
                        </div>
                        <CardContent className="p-3">
                          <h4 className="font-medium">{otherVehicle.name}</h4>
                          <div className="flex items-center justify-between mt-1">
                            <div className="text-sm text-muted-foreground">R$ {otherVehicle.price}/dia</div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-primary text-primary" />
                              <span className="text-xs ml-1">{otherVehicle.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-3 pt-0">
                          <Button variant="outline" size="sm" className="w-full">
                            Ver detalhes
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>

                <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
                  <DialogTrigger asChild>
                    <Button className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Entrar em Contato
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Enviar mensagem para {vehicle.owner.name}</DialogTitle>
                      <DialogDescription>
                        Tire suas dúvidas sobre o {isMotorcycle ? "moto" : "carro"} antes de reservar.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Sua mensagem</Label>
                        <Textarea
                          placeholder="Olá! Tenho interesse em alugar seu veículo e gostaria de saber mais detalhes..."
                          rows={5}
                          value={messageToOwner}
                          onChange={(e) => setMessageToOwner(e.target.value)}
                        />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Tempo médio de resposta: {vehicle.owner.responseTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline" onClick={() => setShowContactDialog(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={handleSendMessage}>Enviar Mensagem</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Booking Card */}
        <div className="w-full lg:w-80">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Reservar este veículo</CardTitle>
              <CardDescription>Selecione as datas e faça sua reserva</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-xl">R$ {vehicle.price}</div>
                  <div className="text-muted-foreground">por dia</div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                  <span>
                    {vehicle.rating} ({vehicle.reviewCount} avaliações)
                  </span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Datas de Reserva</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {pickupDate ? format(pickupDate, "dd/MM/yyyy") : <span>Retirada</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={pickupDate}
                        onSelect={setPickupDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>

                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {returnDate ? format(returnDate, "dd/MM/yyyy") : <span>Devolução</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={returnDate}
                        onSelect={setReturnDate}
                        initialFocus
                        disabled={(date) => date < (pickupDate || new Date())}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Mensagem para o proprietário (opcional)</Label>
                <Textarea
                  placeholder="Informe detalhes adicionais sobre sua reserva..."
                  rows={3}
                  value={messageToOwner}
                  onChange={(e) => setMessageToOwner(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                {pickupDate && returnDate && (
                  <>
                    <div className="flex items-center justify-between">
                      <span>
                        R$ {vehicle.price} x{" "}
                        {Math.max(1, Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)))}{" "}
                        dias
                      </span>
                      <span>
                        R${" "}
                        {vehicle.price *
                          Math.max(1, Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)))}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Taxa de serviço</span>
                      <span>
                        R${" "}
                        {Math.round(
                          vehicle.price *
                            0.1 *
                            Math.max(
                              1,
                              Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)),
                            ),
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Caução (reembolsável)</span>
                      <span>R$ 500</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between font-bold">
                      <span>Total</span>
                      <span>
                        R${" "}
                        {vehicle.price *
                          Math.max(
                            1,
                            Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)),
                          ) +
                          Math.round(
                            vehicle.price *
                              0.1 *
                              Math.max(
                                1,
                                Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)),
                              ),
                          )}
                      </span>
                    </div>
                  </>
                )}
                {(!pickupDate || !returnDate) && (
                  <div className="text-sm text-muted-foreground text-center py-2">
                    Selecione as datas para ver o valor total
                  </div>
                )}
              </div>
              {reservationError && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-4">{reservationError}</div>
              )}
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-700">Seguro básico incluído</span>
                </div>
                <p className="text-xs text-green-600 mt-1">Proteção contra danos e assistência 24h</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white"
                onClick={handleReserveNow}
                disabled={!pickupDate || !returnDate || isReserving}
              >
                {isReserving ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processando...
                  </>
                ) : (
                  <>
                    Reservar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
              <Button variant="outline" className="w-full" onClick={() => setShowContactDialog(true)}>
                <MessageSquare className="mr-2 h-4 w-4" />
                Entrar em Contato
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Mobile Floating Button */}
      <div
        className={cn(
          "fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg lg:hidden transform transition-transform duration-300",
          isScrolled ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold">R$ {vehicle.price}/dia</div>
            <div className="text-sm text-muted-foreground flex items-center">
              <Star className="h-3 w-3 fill-primary text-primary mr-1" />
              {vehicle.rating}
            </div>
          </div>
          <Button onClick={toggleMobileBooking} className="bg-primary hover:bg-primary/90 text-white">
            Reservar Agora
          </Button>
        </div>
      </div>

      {/* Mobile Booking Panel */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300",
          showMobileBooking ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-4 transform transition-transform duration-300",
            showMobileBooking ? "translate-y-0" : "translate-y-full",
          )}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Reservar {vehicle.name}</h3>
            <Button variant="ghost" size="sm" onClick={toggleMobileBooking}>
              <span className="sr-only">Fechar</span>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4 max-h-[70vh] overflow-y-auto pb-4">
            <div className="grid grid-cols-2 gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {pickupDate ? format(pickupDate, "dd/MM/yyyy") : <span>Retirada</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={pickupDate}
                    onSelect={setPickupDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {returnDate ? format(returnDate, "dd/MM/yyyy") : <span>Devolução</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                    disabled={(date) => date < (pickupDate || new Date())}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {pickupDate && returnDate && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>
                    R$ {vehicle.price} x{" "}
                    {Math.max(1, Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)))} dias
                  </span>
                  <span>
                    R${" "}
                    {vehicle.price *
                      Math.max(1, Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)))}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taxa de serviço</span>
                  <span>
                    R${" "}
                    {Math.round(
                      vehicle.price *
                        0.1 *
                        Math.max(1, Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24))),
                    )}
                  </span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-bold">
                  <span>Total</span>
                  <span>
                    R${" "}
                    {vehicle.price *
                      Math.max(1, Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24))) +
                      Math.round(
                        vehicle.price *
                          0.1 *
                          Math.max(1, Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24))),
                      )}
                  </span>
                </div>
              </div>
            )}

            <Button className="w-full" onClick={handleReserveNow} disabled={!pickupDate || !returnDate}>
              Reservar Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper component for the Label
function Label({ children }: { children: React.ReactNode }) {
  return <div className="text-sm font-medium mb-1.5">{children}</div>
}

