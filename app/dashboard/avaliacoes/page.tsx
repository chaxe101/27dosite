"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, MessageSquare, ThumbsUp, Car, BikeIcon as Motorcycle } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

interface Review {
  id: number
  vehicle: string
  vehicleType: "car" | "motorcycle"
  reviewer: string
  reviewerAvatar?: string
  rating: number
  comment: string
  date: string
  replied: boolean
}

export default function AvaliacoesPage() {
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  const reviews: Review[] = [
    {
      id: 1,
      vehicle: "Honda Civic 2020",
      vehicleType: "car",
      reviewer: "Maria Oliveira",
      reviewerAvatar: "/placeholder.svg",
      rating: 5,
      comment:
        "Carro em excelente estado, muito confortável e econômico. O proprietário foi muito atencioso e pontual. Recomendo!",
      date: "15/03/2025",
      replied: true,
    },
    {
      id: 2,
      vehicle: "Honda CB 500 2021",
      vehicleType: "motorcycle",
      reviewer: "Carlos Santos",
      reviewerAvatar: "/placeholder.svg",
      rating: 4,
      comment:
        "Moto muito boa, bem conservada. Entrega e devolução sem problemas. Só achei que poderia estar um pouco mais limpa.",
      date: "10/03/2025",
      replied: false,
    },
    {
      id: 3,
      vehicle: "Toyota Corolla 2019",
      vehicleType: "car",
      reviewer: "Ana Ferreira",
      reviewerAvatar: "/placeholder.svg",
      rating: 5,
      comment:
        "Excelente experiência! Carro muito bom, limpo e bem cuidado. João foi super atencioso e flexível com os horários.",
      date: "28/02/2025",
      replied: true,
    },
    {
      id: 4,
      vehicle: "Honda Civic 2020",
      vehicleType: "car",
      reviewer: "Pedro Costa",
      reviewerAvatar: "/placeholder.svg",
      rating: 3,
      comment:
        "Carro bom, mas havia alguns arranhões que não estavam nas fotos. O proprietário foi atencioso, mas precisa melhorar a descrição do veículo.",
      date: "15/02/2025",
      replied: true,
    },
    {
      id: 5,
      vehicle: "Honda CB 500 2021",
      vehicleType: "motorcycle",
      reviewer: "Juliana Mendes",
      reviewerAvatar: "/placeholder.svg",
      rating: 5,
      comment:
        "Moto impecável! Funcionou perfeitamente durante toda a viagem. O proprietário foi muito prestativo e deu várias dicas sobre a região. Certamente alugarei novamente!",
      date: "05/02/2025",
      replied: true,
    },
    {
      id: 6,
      vehicle: "Toyota Corolla 2019",
      vehicleType: "car",
      reviewer: "Roberto Almeida",
      reviewerAvatar: "/placeholder.svg",
      rating: 4,
      comment:
        "Veículo em bom estado, confortável e econômico. A entrega e devolução foram tranquilas. Recomendo o serviço.",
      date: "20/01/2025",
      replied: true,
    },
    {
      id: 7,
      vehicle: "Honda Civic 2020",
      vehicleType: "car",
      reviewer: "Fernanda Lima",
      reviewerAvatar: "/placeholder.svg",
      rating: 5,
      comment:
        "Experiência incrível! O carro estava impecável e o proprietário foi extremamente profissional. Recomendo a todos!",
      date: "10/01/2025",
      replied: true,
    },
    {
      id: 8,
      vehicle: "Honda CB 500 2021",
      vehicleType: "motorcycle",
      reviewer: "Lucas Oliveira",
      reviewerAvatar: "/placeholder.svg",
      rating: 2,
      comment:
        "A moto apresentou alguns problemas durante o uso. O proprietário até tentou resolver, mas acabou prejudicando minha viagem. Precisa de manutenção melhor.",
      date: "05/01/2025",
      replied: false,
    },
  ]

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Minhas Avaliações</h1>
            <p className="text-muted-foreground">Veja o que os locatários estão falando sobre seus veículos</p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Star className="h-6 w-6 text-yellow-600 fill-yellow-600" />
              </div>
              <div>
                <div className="text-lg font-bold">4.7</div>
                <div className="text-sm text-muted-foreground">Média geral (12 avaliações)</div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="todas" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="todas">Todas</TabsTrigger>
              <TabsTrigger value="respondidas">Respondidas</TabsTrigger>
              <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
            </TabsList>

            <TabsContent value="todas" className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={review.reviewerAvatar} alt={review.reviewer} />
                            <AvatarFallback>{review.reviewer.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{review.reviewer}</div>
                            <div className="text-sm text-muted-foreground">{review.date}</div>
                            <div className="flex mt-1">{renderStars(review.rating)}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center gap-2 text-sm">
                            <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                              {review.vehicleType === "car" ? (
                                <Car className="h-4 w-4 text-gray-500" />
                              ) : (
                                <Motorcycle className="h-4 w-4 text-gray-500" />
                              )}
                            </div>
                            <span>{review.vehicle}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-sm">{review.comment}</div>

                      <div className="flex justify-between items-center">
                        <div>
                          {review.replied ? (
                            <Badge variant="outline" className="bg-green-50 text-green-600">
                              Respondida
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-orange-50 text-orange-600">
                              Aguardando resposta
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="h-8">
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            Agradecer
                          </Button>
                          <Button size="sm" className="h-8">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            {review.replied ? "Ver resposta" : "Responder"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="respondidas" className="space-y-6">
              {reviews
                .filter((r) => r.replied)
                .map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={review.reviewerAvatar} alt={review.reviewer} />
                              <AvatarFallback>{review.reviewer.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{review.reviewer}</div>
                              <div className="text-sm text-muted-foreground">{review.date}</div>
                              <div className="flex mt-1">{renderStars(review.rating)}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                                {review.vehicleType === "car" ? (
                                  <Car className="h-4 w-4 text-gray-500" />
                                ) : (
                                  <Motorcycle className="h-4 w-4 text-gray-500" />
                                )}
                              </div>
                              <span>{review.vehicle}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-sm">{review.comment}</div>

                        <div className="flex justify-between items-center">
                          <div>
                            <Badge variant="outline" className="bg-green-50 text-green-600">
                              Respondida
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8">
                              <ThumbsUp className="h-4 w-4 mr-2" />
                              Agradecer
                            </Button>
                            <Button size="sm" className="h-8">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Ver resposta
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>

            <TabsContent value="pendentes" className="space-y-6">
              {reviews
                .filter((r) => !r.replied)
                .map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={review.reviewerAvatar} alt={review.reviewer} />
                              <AvatarFallback>{review.reviewer.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{review.reviewer}</div>
                              <div className="text-sm text-muted-foreground">{review.date}</div>
                              <div className="flex mt-1">{renderStars(review.rating)}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="flex items-center gap-2 text-sm">
                              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                                {review.vehicleType === "car" ? (
                                  <Car className="h-4 w-4 text-gray-500" />
                                ) : (
                                  <Motorcycle className="h-4 w-4 text-gray-500" />
                                )}
                              </div>
                              <span>{review.vehicle}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-sm">{review.comment}</div>

                        <div className="flex justify-between items-center">
                          <div>
                            <Badge variant="outline" className="bg-orange-50 text-orange-600">
                              Aguardando resposta
                            </Badge>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8">
                              <ThumbsUp className="h-4 w-4 mr-2" />
                              Agradecer
                            </Button>
                            <Button size="sm" className="h-8">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Responder
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

              {reviews.filter((r) => !r.replied).length === 0 && (
                <Card>
                  <CardContent className="p-6 flex flex-col items-center justify-center py-12">
                    <Star className="h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Nenhuma avaliação pendente</h3>
                    <p className="text-muted-foreground text-center max-w-md">
                      Você respondeu a todas as avaliações. Bom trabalho! Responder rapidamente às avaliações melhora
                      sua reputação na plataforma.
                    </p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Tips Card */}
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold text-blue-800 mb-4">Dicas para melhorar suas avaliações</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Responda a todas as avaliações, mesmo as negativas, de forma educada e construtiva</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Mantenha seus veículos sempre limpos e em bom estado de conservação</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Seja pontual nas entregas e devoluções dos veículos</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Forneça informações precisas e detalhadas sobre seus veículos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

