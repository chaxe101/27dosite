"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Calendar,
  CheckCircle,
  AlertTriangle,
  Clock,
  Phone,
  MessageSquare,
  Upload,
  Shield,
  Info,
  FileImage,
  BarChart,
  Bot,
  DollarSign,
  CreditCard,
  Scale,
  MessageCircle,
  ArrowRight,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function DisputaPage() {
  const router = useRouter()
  const [disputeType, setDisputeType] = useState("damage")
  const [showAIAnalysis, setShowAIAnalysis] = useState(false)
  const [showMediation, setShowMediation] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [disputeResolved, setDisputeResolved] = useState(false)

  const userName = "João Silva"
  const userEmail = "joao@email.com"

  // Dados simulados da reserva e disputa
  const reservation = {
    id: "RES-12345",
    vehicle: {
      name: "Honda Civic 2022",
      image: "/placeholder.svg",
      plate: "ABC-1234",
      color: "Prata",
      year: "2022",
    },
    owner: {
      name: "Ricardo Pereira",
      phone: "(11) 98765-4321",
    },
    dates: {
      pickup: "25/03/2025",
      return: "28/03/2025",
    },
    deposit: 500,
    disputeAmount: 250,
    disputeReason: "Arranhões na lateral direita do veículo não registrados no checklist inicial.",
    disputeStatus: "em_análise",
    disputeDate: "29/03/2025",
    disputeId: "DISP-789",
    aiAnalysis: {
      damageVerified: true,
      preExisting: false,
      estimatedCost: 230,
      confidence: 85,
      recommendation: "Cobrança parcial justificada",
    },
  }

  // Finalizar a disputa
  const resolveDispute = () => {
    setShowConfirmation(false)
    setDisputeResolved(true)

    // Em um app real, aqui enviaríamos os dados para o backend
    setTimeout(() => {
      router.push("/dashboard/renter/reservas")
    }, 3000)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Resolução de Disputa</h1>
                <p className="text-muted-foreground">
                  Disputa #{reservation.disputeId} | Reserva #{reservation.id}
                </p>
              </div>
              <Badge
                className={
                  reservation.disputeStatus === "em_análise"
                    ? "bg-amber-100 text-amber-800"
                    : reservation.disputeStatus === "resolvida"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                }
              >
                {reservation.disputeStatus === "em_análise"
                  ? "Em Análise"
                  : reservation.disputeStatus === "resolvida"
                    ? "Resolvida"
                    : "Rejeitada"}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Detalhes da Disputa</CardTitle>
                  <CardDescription>Informações sobre a disputa aberta pelo proprietário</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                        <div>
                          <h3 className="font-medium text-amber-800">Disputa Aberta pelo Proprietário</h3>
                          <p className="text-sm text-amber-700 mt-1">
                            O proprietário solicitou uma retenção parcial do caução devido a danos identificados no
                            veículo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Motivo da Disputa</h3>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm">{reservation.disputeReason}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Valor Contestado</h3>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-5 w-5 text-red-600" />
                            <span>Valor do reparo solicitado</span>
                          </div>
                          <span className="font-medium">R$ {reservation.disputeAmount}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                            <span>Caução total</span>
                          </div>
                          <span className="font-medium">R$ {reservation.deposit}</span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-green-600" />
                            <span>Valor a ser devolvido (se aprovado)</span>
                          </div>
                          <span className="font-medium">R$ {reservation.deposit - reservation.disputeAmount}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Evidências Enviadas pelo Proprietário</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <div className="relative aspect-square rounded-lg overflow-hidden border">
                          <Image src="/placeholder.svg" alt="Evidência 1" fill className="object-cover" />
                          <Button variant="outline" size="sm" className="absolute bottom-2 right-2 bg-white h-8">
                            <FileImage className="h-4 w-4 mr-1" />
                            <span className="text-xs">Ampliar</span>
                          </Button>
                        </div>
                        <div className="relative aspect-square rounded-lg overflow-hidden border">
                          <Image src="/placeholder.svg" alt="Evidência 2" fill className="object-cover" />
                          <Button variant="outline" size="sm" className="absolute bottom-2 right-2 bg-white h-8">
                            <FileImage className="h-4 w-4 mr-1" />
                            <span className="text-xs">Ampliar</span>
                          </Button>
                        </div>
                        <div className="relative aspect-square rounded-lg overflow-hidden border">
                          <Image src="/placeholder.svg" alt="Evidência 3" fill className="object-cover" />
                          <Button variant="outline" size="sm" className="absolute bottom-2 right-2 bg-white h-8">
                            <FileImage className="h-4 w-4 mr-1" />
                            <span className="text-xs">Ampliar</span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Tabs defaultValue="ai-analysis" className="mt-6">
                      <TabsList className="grid grid-cols-3 w-full">
                        <TabsTrigger value="ai-analysis" className="flex items-center gap-1">
                          <Bot className="h-4 w-4" />
                          <span className="hidden sm:inline">Análise IA</span>
                        </TabsTrigger>
                        <TabsTrigger value="mediation" className="flex items-center gap-1">
                          <Scale className="h-4 w-4" />
                          <span className="hidden sm:inline">Mediação</span>
                        </TabsTrigger>
                        <TabsTrigger value="resolution" className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          <span className="hidden sm:inline">Resolução</span>
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="ai-analysis" className="mt-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Bot className="h-5 w-5 text-blue-600" />
                              Análise de Inteligência Artificial
                            </CardTitle>
                            <CardDescription>Nossa IA analisou as imagens e o histórico da reserva</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-3 bg-gray-50 rounded-lg">
                                <div className="font-medium mb-1">Dano Verificado</div>
                                <div className="flex items-center gap-2">
                                  {reservation.aiAnalysis.damageVerified ? (
                                    <>
                                      <CheckCircle className="h-4 w-4 text-red-600" />
                                      <span className="text-sm">Sim, dano confirmado</span>
                                    </>
                                  ) : (
                                    <>
                                      <X className="h-4 w-4 text-green-600" />
                                      <span className="text-sm">Não identificado</span>
                                    </>
                                  )}
                                </div>
                              </div>

                              <div className="p-3 bg-gray-50 rounded-lg">
                                <div className="font-medium mb-1">Dano Pré-existente</div>
                                <div className="flex items-center gap-2">
                                  {reservation.aiAnalysis.preExisting ? (
                                    <>
                                      <CheckCircle className="h-4 w-4 text-green-600" />
                                      <span className="text-sm">Sim, identificado no checklist inicial</span>
                                    </>
                                  ) : (
                                    <>
                                      <X className="h-4 w-4 text-red-600" />
                                      <span className="text-sm">Não, dano ocorreu durante o período de locação</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div className="p-3 bg-gray-50 rounded-lg">
                                <div className="font-medium mb-1">Custo Estimado do Reparo</div>
                                <div className="flex items-center gap-2">
                                  <BarChart className="h-4 w-4 text-blue-600" />
                                  <span className="text-sm">R$ {reservation.aiAnalysis.estimatedCost}</span>
                                </div>
                              </div>

                              <div className="p-3 bg-gray-50 rounded-lg">
                                <div className="font-medium mb-1">Nível de Confiança</div>
                                <div className="flex items-center gap-2">
                                  <Shield className="h-4 w-4 text-blue-600" />
                                  <span className="text-sm">{reservation.aiAnalysis.confidence}%</span>
                                </div>
                              </div>
                            </div>

                            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                              <div className="flex items-start gap-3">
                                <Bot className="h-5 w-5 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-medium text-blue-800">Recomendação da IA</h3>
                                  <p className="text-sm text-blue-700 mt-1">
                                    {reservation.aiAnalysis.recommendation}. Com base na análise das imagens e
                                    comparação com o checklist inicial, o dano parece ter ocorrido durante o período de
                                    locação. O valor solicitado pelo proprietário está próximo ao custo estimado de
                                    reparo.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <Button variant="outline" className="w-full" onClick={() => setShowAIAnalysis(true)}>
                              <Bot className="h-4 w-4 mr-2" />
                              Ver Análise Detalhada
                            </Button>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="mediation" className="mt-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Scale className="h-5 w-5 text-blue-600" />
                              Mediação e Suporte
                            </CardTitle>
                            <CardDescription>
                              Nossa equipe de suporte está disponível para mediar a disputa
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="counter-offer">Sua Contraproposta (opcional)</Label>
                              <div className="flex gap-2">
                                <span className="flex items-center px-3 bg-gray-100 rounded-l-md border border-r-0">
                                  R$
                                </span>
                                <Input
                                  id="counter-offer"
                                  type="number"
                                  placeholder="Valor que você considera justo"
                                  className="rounded-l-none"
                                />
                              </div>
                              <p className="text-xs text-muted-foreground">
                                Deixe em branco se concordar com o valor solicitado pelo proprietário
                              </p>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="justification">Justificativa</Label>
                              <Textarea
                                id="justification"
                                placeholder="Explique por que você concorda ou discorda do valor solicitado..."
                                rows={3}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label>Enviar Evidências Adicionais (opcional)</Label>
                              <div className="border border-dashed rounded-lg p-4 text-center">
                                <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                                <p className="text-sm text-muted-foreground">
                                  Arraste e solte arquivos aqui ou clique para selecionar
                                </p>
                                <Button variant="outline" size="sm" className="mt-2">
                                  Selecionar Arquivos
                                </Button>
                              </div>
                            </div>

                            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                              <div className="flex items-start gap-3">
                                <MessageCircle className="h-5 w-5 text-blue-600 mt-1" />
                                <div>
                                  <h3 className="font-medium text-blue-800">Suporte Disponível</h3>
                                  <p className="text-sm text-blue-700 mt-1">
                                    Nossa equipe de suporte está disponível para mediar a disputa e ajudar a encontrar
                                    uma solução justa para ambas as partes.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <Button className="w-full" onClick={() => setShowMediation(true)}>
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Solicitar Mediação
                            </Button>
                          </CardContent>
                        </Card>
                      </TabsContent>

                      <TabsContent value="resolution" className="mt-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-blue-600" />
                              Resolução da Disputa
                            </CardTitle>
                            <CardDescription>Escolha como deseja resolver esta disputa</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <RadioGroup defaultValue="accept" className="space-y-3">
                              <div className="flex items-start space-x-2 border p-3 rounded-lg hover:bg-gray-50">
                                <RadioGroupItem value="accept" id="accept" className="mt-1" />
                                <div className="grid gap-1.5">
                                  <Label htmlFor="accept" className="font-medium">
                                    Aceitar o valor solicitado
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    Concordo com a dedução de R$ {reservation.disputeAmount} do meu caução para cobrir
                                    os danos.
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start space-x-2 border p-3 rounded-lg hover:bg-gray-50">
                                <RadioGroupItem value="counter" id="counter" className="mt-1" />
                                <div className="grid gap-1.5">
                                  <Label htmlFor="counter" className="font-medium">
                                    Fazer uma contraproposta
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    Proponho um valor diferente para resolver a disputa.
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-start space-x-2 border p-3 rounded-lg hover:bg-gray-50">
                                <RadioGroupItem value="reject" id="reject" className="mt-1" />
                                <div className="grid gap-1.5">
                                  <Label htmlFor="reject" className="font-medium">
                                    Rejeitar a cobrança
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    Discordo completamente da cobrança e solicito a devolução integral do caução.
                                  </p>
                                </div>
                              </div>
                            </RadioGroup>

                            <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                              <div className="flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                                <div>
                                  <h3 className="font-medium text-amber-800">Importante</h3>
                                  <p className="text-sm text-amber-700 mt-1">
                                    Se não houver acordo entre as partes, a equipe de suporte da VrumGo tomará uma
                                    decisão final com base nas evidências apresentadas e na análise da IA.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <Button className="w-full" onClick={() => setShowConfirmation(true)}>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Finalizar Resolução
                            </Button>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Reservation Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Detalhes da Reserva</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image src="/placeholder.svg" alt={reservation.vehicle.name} fill className="object-cover" />
                  </div>

                  <div>
                    <div className="font-medium text-lg">{reservation.vehicle.name}</div>
                    <div className="text-sm text-muted-foreground">Placa: {reservation.vehicle.plate}</div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {reservation.dates.pickup} - {reservation.dates.return}
                    </span>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Proprietário:</span>
                      <span className="text-sm font-medium">{reservation.owner.name}</span>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar para Proprietário
                    </Button>

                    <Button variant="outline" size="sm" className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2 text-sm">
                      <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span className="text-blue-700">
                        Suporte disponível 24h para ajudar na resolução de disputas.
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">Linha do Tempo</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Reserva Concluída</div>
                          <div className="text-xs text-muted-foreground">{reservation.dates.return}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                          <AlertTriangle className="h-3 w-3 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Disputa Aberta</div>
                          <div className="text-xs text-muted-foreground">{reservation.disputeDate}</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                          <Bot className="h-3 w-3 text-blue-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Análise de IA</div>
                          <div className="text-xs text-muted-foreground">30/03/2025</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                          <Clock className="h-3 w-3" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Aguardando Resolução</div>
                          <div className="text-xs">Prazo: 05/04/2025</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Analysis Dialog */}
          <Dialog open={showAIAnalysis} onOpenChange={setShowAIAnalysis}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  Análise Detalhada de IA
                </DialogTitle>
                <DialogDescription>Análise completa das imagens e dados da reserva</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium mb-2">Imagem da Retirada</h3>
                    <div className="relative aspect-video rounded-lg overflow-hidden border">
                      <Image src="/placeholder.svg" alt="Imagem da Retirada" fill className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Imagem da Devolução</h3>
                    <div className="relative aspect-video rounded-lg overflow-hidden border">
                      <Image src="/placeholder.svg" alt="Imagem da Devolução" fill className="object-cover" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Análise Comparativa</h3>
                  <p className="text-sm">
                    Nossa IA identificou diferenças significativas entre as imagens da retirada e devolução. Os
                    arranhões na lateral direita do veículo não estavam presentes no momento da retirada, conforme
                    evidenciado pelas imagens e pelo checklist inicial.
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Estimativa de Custo</h3>
                  <p className="text-sm">
                    Com base em nosso banco de dados de reparos similares, o custo estimado para corrigir os arranhões
                    identificados é de R$ {reservation.aiAnalysis.estimatedCost}. Este valor está dentro da faixa de
                    mercado para este tipo de reparo em um {reservation.vehicle.name}.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Bot className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-blue-800">Conclusão da IA</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        Com {reservation.aiAnalysis.confidence}% de confiança, nossa análise indica que os danos
                        ocorreram durante o período de locação e não estavam presentes no momento da retirada. O valor
                        solicitado pelo proprietário (R$ {reservation.disputeAmount}) está próximo ao custo estimado de
                        reparo (R$ {reservation.aiAnalysis.estimatedCost}), sendo considerado razoável para este tipo de
                        dano.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => setShowAIAnalysis(false)}>Fechar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Mediation Dialog */}
          <Dialog open={showMediation} onOpenChange={setShowMediation}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  Solicitar Mediação
                </DialogTitle>
                <DialogDescription>
                  Nossa equipe de suporte irá mediar a disputa entre você e o proprietário
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Como Funciona a Mediação</h3>
                  <ol className="space-y-2 text-sm pl-5 list-decimal">
                    <li>Nossa equipe de suporte analisará todas as evidências apresentadas por ambas as partes</li>
                    <li>Um mediador entrará em contato com você e o proprietário separadamente</li>
                    <li>O mediador proporá uma solução que seja justa para ambas as partes</li>
                    <li>Se ambos concordarem, a disputa será resolvida conforme o acordo</li>
                    <li>Se não houver acordo, a equipe de suporte tomará uma decisão final</li>
                  </ol>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mediation-message">Mensagem para o Mediador</Label>
                  <Textarea
                    id="mediation-message"
                    placeholder="Explique sua posição e o que você considera justo nesta situação..."
                    rows={4}
                  />
                </div>

                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-blue-800">Prazo de Resolução</h3>
                      <p className="text-sm text-blue-700 mt-1">
                        O processo de mediação geralmente leva de 2 a 5 dias úteis para ser concluído.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setShowMediation(false)}>
                  Cancelar
                </Button>
                <Button
                  onClick={() => {
                    setShowMediation(false)
                    // Em um app real, aqui enviaríamos a solicitação de mediação
                  }}
                >
                  Solicitar Mediação
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Confirmation Dialog */}
          <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirmar Resolução</AlertDialogTitle>
                <AlertDialogDescription>
                  Você está aceitando a dedução de R$ {reservation.disputeAmount} do seu caução para cobrir os danos
                  identificados no veículo. O valor restante de R$ {reservation.deposit - reservation.disputeAmount}{" "}
                  será devolvido para você.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={resolveDispute}>Confirmar Resolução</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Success Dialog */}
          <AlertDialog open={disputeResolved} onOpenChange={setDisputeResolved}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Disputa Resolvida!
                </AlertDialogTitle>
                <AlertDialogDescription>
                  A disputa foi resolvida com sucesso! O valor de R$ {reservation.deposit - reservation.disputeAmount}{" "}
                  será devolvido para você em até 5 dias úteis.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Número da Disputa:</span>
                  <span>{reservation.disputeId}</span>
                </div>
              </div>
              <AlertDialogFooter>
                <Button onClick={() => router.push("/dashboard/renter/reservas")} className="w-full">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Voltar para Reservas
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}

