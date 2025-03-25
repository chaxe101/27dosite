"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HelpCircle, MessageSquare, FileText, AlertTriangle, CheckCircle, Search } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SuportePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Suporte</h1>
            <p className="text-muted-foreground">
              Encontre ajuda, tire dúvidas e entre em contato com nossa equipe de suporte.
            </p>
          </div>

          <Tabs defaultValue="faq" className="space-y-6">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                <span>Perguntas frequentes</span>
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Contato</span>
              </TabsTrigger>
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Guias e tutoriais</span>
              </TabsTrigger>
              <TabsTrigger value="issues" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                <span>Reportar problema</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Perguntas frequentes</CardTitle>
                  <CardDescription>Encontre respostas para as dúvidas mais comuns.</CardDescription>
                  <div className="relative mt-4">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar perguntas frequentes..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Como recebo meus pagamentos?</AccordionTrigger>
                      <AccordionContent>
                        Os pagamentos são processados automaticamente após a conclusão do aluguel e são transferidos
                        para sua conta bancária cadastrada em até 3 dias úteis. Você pode verificar o status dos seus
                        pagamentos na seção "Ganhos" do seu painel.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>O que acontece se meu veículo for danificado?</AccordionTrigger>
                      <AccordionContent>
                        Todos os aluguéis incluem cobertura de seguro. Em caso de danos, você deve documentar o problema
                        imediatamente e reportar através da plataforma. Nossa equipe de suporte irá orientá-lo sobre o
                        processo de sinistro e reembolso.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Como cancelar uma reserva?</AccordionTrigger>
                      <AccordionContent>
                        Para cancelar uma reserva, acesse a seção "Minhas reservas", localize a reserva específica e
                        clique em "Cancelar reserva". As políticas de cancelamento variam de acordo com a proximidade da
                        data de início do aluguel.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Como adicionar ou remover um veículo?</AccordionTrigger>
                      <AccordionContent>
                        Para adicionar um novo veículo, acesse a seção "Meus veículos" e clique em "Adicionar veículo".
                        Preencha todas as informações necessárias e envie para aprovação. Para remover, localize o
                        veículo na lista e clique em "Remover".
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Quais são as taxas cobradas pela plataforma?</AccordionTrigger>
                      <AccordionContent>
                        A plataforma cobra uma taxa de serviço de 15% sobre o valor total de cada aluguel. Esta taxa
                        cobre o processamento de pagamentos, seguro, suporte ao cliente e marketing para promover seu
                        veículo.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Entre em contato</CardTitle>
                  <CardDescription>Nossa equipe de suporte está disponível para ajudar.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Envie uma mensagem</h3>
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Assunto</label>
                            <Input placeholder="Digite o assunto da sua mensagem" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Mensagem</label>
                            <Textarea placeholder="Descreva detalhadamente sua dúvida ou problema" rows={5} />
                          </div>
                          <Button className="w-full">Enviar mensagem</Button>
                        </form>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Informações de contato</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <MessageSquare className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Chat ao vivo</p>
                              <p className="text-sm text-muted-foreground">
                                Disponível de segunda a sexta, das 8h às 20h
                              </p>
                              <Button variant="link" className="p-0 h-auto mt-1">
                                Iniciar chat
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <HelpCircle className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Central de ajuda</p>
                              <p className="text-sm text-muted-foreground">Acesse nossa base de conhecimento</p>
                              <Button variant="link" className="p-0 h-auto mt-1">
                                Visitar central de ajuda
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                              <MessageSquare className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">E-mail</p>
                              <p className="text-sm text-muted-foreground">suporte@vrumgo.com.br</p>
                              <p className="text-sm text-muted-foreground">Resposta em até 24 horas</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Tickets recentes</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">Problema com pagamento</p>
                              <p className="text-xs text-muted-foreground">Ticket #12345 • 2 dias atrás</p>
                            </div>
                            <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Resolvido</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">Dúvida sobre seguro</p>
                              <p className="text-xs text-muted-foreground">Ticket #12346 • 5 dias atrás</p>
                            </div>
                            <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Resolvido</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guides">
              <Card>
                <CardHeader>
                  <CardTitle>Guias e tutoriais</CardTitle>
                  <CardDescription>Aprenda a utilizar todas as funcionalidades da plataforma.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-blue-100 p-3 rounded-full mb-4">
                            <FileText className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-medium mb-2">Guia para iniciantes</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Aprenda os primeiros passos para cadastrar e gerenciar seus veículos na plataforma.
                          </p>
                          <Button variant="outline" className="w-full">
                            Ver guia
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-blue-100 p-3 rounded-full mb-4">
                            <CheckCircle className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-medium mb-2">Melhores práticas</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Dicas para otimizar seus anúncios e aumentar suas chances de locação.
                          </p>
                          <Button variant="outline" className="w-full">
                            Ver guia
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="bg-blue-100 p-3 rounded-full mb-4">
                            <AlertTriangle className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-medium mb-2">Resolução de problemas</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            Como lidar com situações imprevistas e resolver problemas comuns.
                          </p>
                          <Button variant="outline" className="w-full">
                            Ver guia
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-medium mb-4">Tutoriais em vídeo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-100 rounded-lg p-4 flex gap-4">
                        <div className="bg-gray-200 rounded-md w-24 h-16 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Como cadastrar um veículo</h4>
                          <p className="text-sm text-muted-foreground mb-2">Duração: 5 min</p>
                          <Button variant="link" className="p-0 h-auto">
                            Assistir vídeo
                          </Button>
                        </div>
                      </div>

                      <div className="bg-gray-100 rounded-lg p-4 flex gap-4">
                        <div className="bg-gray-200 rounded-md w-24 h-16 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Como gerenciar reservas</h4>
                          <p className="text-sm text-muted-foreground mb-2">Duração: 7 min</p>
                          <Button variant="link" className="p-0 h-auto">
                            Assistir vídeo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="issues">
              <Card>
                <CardHeader>
                  <CardTitle>Reportar um problema</CardTitle>
                  <CardDescription>Informe-nos sobre qualquer problema que você esteja enfrentando.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Tipo de problema</label>
                        <select className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value="">Selecione o tipo de problema</option>
                          <option value="technical">Problema técnico</option>
                          <option value="payment">Problema com pagamento</option>
                          <option value="reservation">Problema com reserva</option>
                          <option value="vehicle">Problema com veículo</option>
                          <option value="other">Outro</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Prioridade</label>
                        <select className="w-full h-10 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value="">Selecione a prioridade</option>
                          <option value="low">Baixa</option>
                          <option value="medium">Média</option>
                          <option value="high">Alta</option>
                          <option value="critical">Crítica</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Título do problema</label>
                      <Input placeholder="Descreva o problema em poucas palavras" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Descrição detalhada</label>
                      <Textarea
                        placeholder="Forneça todos os detalhes relevantes sobre o problema, incluindo quando ocorreu, quais ações você estava realizando, etc."
                        rows={5}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Anexos (opcional)</label>
                      <div className="border-2 border-dashed rounded-md p-6 text-center">
                        <p className="text-sm text-muted-foreground mb-2">
                          Arraste e solte arquivos aqui ou clique para selecionar
                        </p>
                        <Button variant="outline" size="sm">
                          Selecionar arquivos
                        </Button>
                        <p className="text-xs text-muted-foreground mt-2">
                          Formatos aceitos: JPG, PNG, PDF. Tamanho máximo: 10MB
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Enviar relatório</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

