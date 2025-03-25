import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { StarIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Minhas Avaliações | Locatário | VrumGo",
  description: "Gerencie suas avaliações de veículos alugados",
}

export default function RenterAvaliacoesPage() {
  // Dados simulados de avaliações
  const avaliacoes = {
    minhas: [
      {
        id: 1,
        veiculo: "Honda Civic 2022",
        proprietario: "Roberto Oliveira",
        data: "05/06/2023",
        nota: 5,
        comentario:
          "Carro em excelente estado, muito confortável e econômico. O proprietário foi muito atencioso e pontual.",
        imagem: "/placeholder.svg?height=60&width=100",
      },
      {
        id: 2,
        veiculo: "Kawasaki Z900 2022",
        proprietario: "Mariana Costa",
        data: "12/05/2023",
        nota: 4,
        comentario:
          "Moto incrível, muito potente e bem cuidada. A entrega foi um pouco atrasada, mas nada que comprometesse a experiência.",
        imagem: "/placeholder.svg?height=60&width=100",
      },
      {
        id: 3,
        veiculo: "Volkswagen T-Cross 2022",
        proprietario: "Paulo Mendes",
        data: "25/04/2023",
        nota: 5,
        comentario: "SUV perfeito para viagem em família. Muito espaçoso e confortável. Recomendo!",
        imagem: "/placeholder.svg?height=60&width=100",
      },
    ],
    pendentes: [
      {
        id: 4,
        veiculo: "Fiat Argo 2021",
        proprietario: "Carlos Santos",
        dataFim: "05/06/2023",
        imagem: "/placeholder.svg?height=60&width=100",
      },
    ],
    recebidas: [
      {
        id: 5,
        veiculo: "Honda Civic 2022",
        proprietario: "Roberto Oliveira",
        data: "06/06/2023",
        nota: 5,
        comentario: "Ótimo locatário, devolveu o carro limpo e no horário combinado. Recomendo!",
        imagemProprietario: "/placeholder.svg?height=40&width=40",
      },
      {
        id: 6,
        veiculo: "Kawasaki Z900 2022",
        proprietario: "Mariana Costa",
        data: "13/05/2023",
        nota: 4,
        comentario: "Bom locatário, cuidou bem da moto. Apenas um pequeno atraso na devolução.",
        imagemProprietario: "/placeholder.svg?height=40&width=40",
      },
    ],
  }

  // Função para renderizar estrelas
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <StarIcon key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} />
      ))
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Minhas Avaliações</h1>

      <Tabs defaultValue="minhas" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="minhas">Minhas Avaliações</TabsTrigger>
          <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
          <TabsTrigger value="recebidas">Recebidas</TabsTrigger>
        </TabsList>

        <TabsContent value="minhas">
          <div className="grid grid-cols-1 gap-6">
            {avaliacoes.minhas.map((avaliacao) => (
              <Card key={avaliacao.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <img
                        src={avaliacao.imagem || "/placeholder.svg"}
                        alt={avaliacao.veiculo}
                        className="w-[100px] h-[60px] object-cover rounded-md"
                      />
                      <div>
                        <CardTitle className="text-lg">{avaliacao.veiculo}</CardTitle>
                        <CardDescription>Proprietário: {avaliacao.proprietario}</CardDescription>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{avaliacao.data}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars(avaliacao.nota)}
                    <span className="ml-2 text-sm font-medium">{avaliacao.nota}/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{avaliacao.comentario}</p>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pendentes">
          {avaliacoes.pendentes.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {avaliacoes.pendentes.map((avaliacao) => (
                <Card key={avaliacao.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <img
                          src={avaliacao.imagem || "/placeholder.svg"}
                          alt={avaliacao.veiculo}
                          className="w-[100px] h-[60px] object-cover rounded-md"
                        />
                        <div>
                          <CardTitle className="text-lg">{avaliacao.veiculo}</CardTitle>
                          <CardDescription>Proprietário: {avaliacao.proprietario}</CardDescription>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">Aluguel finalizado em: {avaliacao.dataFim}</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Você ainda não avaliou este veículo. Compartilhe sua experiência para ajudar outros usuários!
                    </p>
                    <div className="flex justify-end">
                      <Button>Avaliar Agora</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-6 text-center">
                <p className="text-muted-foreground">Você não tem avaliações pendentes no momento.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="recebidas">
          <div className="grid grid-cols-1 gap-6">
            {avaliacoes.recebidas.map((avaliacao) => (
              <Card key={avaliacao.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{avaliacao.veiculo}</CardTitle>
                      <CardDescription>Avaliação do proprietário</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">{avaliacao.data}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src={avaliacao.imagemProprietario} alt={avaliacao.proprietario} />
                      <AvatarFallback>{avaliacao.proprietario.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{avaliacao.proprietario}</p>
                      <div className="flex items-center gap-1 my-1">
                        {renderStars(avaliacao.nota)}
                        <span className="ml-2 text-sm font-medium">{avaliacao.nota}/5</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{avaliacao.comentario}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

