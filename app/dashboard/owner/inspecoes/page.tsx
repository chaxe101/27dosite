import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertCircle, Clock, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Inspeções de Veículo | Proprietário | VrumGo",
  description: "Gerencie as inspeções dos seus veículos",
}

export default function OwnerInspecoesPage() {
  // Dados simulados de inspeções
  const inspecoes = {
    pendentes: [
      {
        id: 1,
        veiculo: "Honda Civic 2022",
        placa: "ABC1234",
        locatario: "Maria Silva",
        dataAgendada: "15/06/2023 - 14:00",
        tipo: "Devolução",
      },
      {
        id: 2,
        veiculo: "Toyota Corolla 2021",
        placa: "DEF5678",
        locatario: "João Pereira",
        dataAgendada: "18/06/2023 - 10:30",
        tipo: "Retirada",
      },
    ],
    concluidas: [
      {
        id: 3,
        veiculo: "Hyundai HB20 2020",
        placa: "GHI9012",
        locatario: "Ana Costa",
        dataRealizada: "10/06/2023",
        tipo: "Devolução",
        resultado: "aprovado",
        observacoes: "Veículo devolvido em perfeitas condições.",
      },
      {
        id: 4,
        veiculo: "Fiat Argo 2021",
        placa: "JKL3456",
        locatario: "Carlos Oliveira",
        dataRealizada: "05/06/2023",
        tipo: "Retirada",
        resultado: "aprovado",
        observacoes: "Veículo entregue conforme checklist.",
      },
      {
        id: 5,
        veiculo: "Volkswagen Gol 2019",
        placa: "MNO7890",
        locatario: "Fernanda Santos",
        dataRealizada: "01/06/2023",
        tipo: "Devolução",
        resultado: "com_problemas",
        observacoes: "Arranhão na porta do motorista. Taxa de reparo aplicada.",
      },
    ],
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Inspeções de Veículo</h1>

      <Tabs defaultValue="pendentes" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
          <TabsTrigger value="concluidas">Concluídas</TabsTrigger>
        </TabsList>

        <TabsContent value="pendentes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inspecoes.pendentes.map((inspecao) => (
              <Card key={inspecao.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{inspecao.veiculo}</CardTitle>
                      <CardDescription>Placa: {inspecao.placa}</CardDescription>
                    </div>
                    <Badge variant={inspecao.tipo === "Retirada" ? "outline" : "secondary"}>{inspecao.tipo}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Agendada para: {inspecao.dataAgendada}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>Locatário: {inspecao.locatario}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Reagendar</Button>
                  <Button>Iniciar Inspeção</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="concluidas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inspecoes.concluidas.map((inspecao) => (
              <Card key={inspecao.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{inspecao.veiculo}</CardTitle>
                      <CardDescription>Placa: {inspecao.placa}</CardDescription>
                    </div>
                    <Badge variant={inspecao.tipo === "Retirada" ? "outline" : "secondary"}>{inspecao.tipo}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>Realizada em: {inspecao.dataRealizada}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span>Locatário: {inspecao.locatario}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {inspecao.resultado === "aprovado" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span>
                        {inspecao.resultado === "aprovado" ? "Aprovado sem problemas" : "Problemas identificados"}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-medium">Observações:</span> {inspecao.observacoes}
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver Relatório Completo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

