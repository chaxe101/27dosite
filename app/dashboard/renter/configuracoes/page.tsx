import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Configurações | Locatário | VrumGo",
  description: "Gerencie suas configurações de conta",
}

export default function RenterConfiguracoesPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Configurações</h1>

      <Tabs defaultValue="perfil" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="perfil">Perfil</TabsTrigger>
          <TabsTrigger value="preferencias">Preferências</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          <TabsTrigger value="pagamentos">Pagamentos</TabsTrigger>
        </TabsList>

        <TabsContent value="perfil">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Perfil</CardTitle>
              <CardDescription>Atualize suas informações pessoais e de contato</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" defaultValue="Maria Silva" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="maria.silva@email.com" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" defaultValue="(11) 98765-4321" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" defaultValue="123.456.789-00" disabled />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input id="endereco" defaultValue="Rua das Flores, 123" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" defaultValue="São Paulo" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Select defaultValue="SP">
                    <SelectTrigger id="estado">
                      <SelectValue placeholder="Selecione um estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" defaultValue="01234-567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Sobre Mim</Label>
                <Textarea
                  id="bio"
                  placeholder="Conte um pouco sobre você..."
                  defaultValue="Adoro viajar e conhecer novos lugares. Sempre cuido bem dos veículos que alugo e sou pontual com horários."
                  className="min-h-[100px]"
                />
              </div>

              <div className="pt-4">
                <Button>Salvar Alterações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferencias">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Aluguel</CardTitle>
              <CardDescription>Personalize sua experiência de aluguel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Preferências de Veículos</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Tipo de veículo preferido</p>
                      <p className="text-sm text-muted-foreground">Escolha seu tipo de veículo preferido para alugar</p>
                    </div>
                    <Select defaultValue="carro">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="carro">Carro</SelectItem>
                        <SelectItem value="moto">Moto</SelectItem>
                        <SelectItem value="ambos">Ambos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Transmissão preferida</p>
                      <p className="text-sm text-muted-foreground">Escolha o tipo de transmissão que você prefere</p>
                    </div>
                    <Select defaultValue="automatico">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="automatico">Automático</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                        <SelectItem value="qualquer">Qualquer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Preferências de Busca</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Ordenar resultados por</p>
                      <p className="text-sm text-muted-foreground">
                        Escolha como os resultados de busca serão ordenados
                      </p>
                    </div>
                    <Select defaultValue="preco-asc">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="preco-asc">Menor preço</SelectItem>
                        <SelectItem value="preco-desc">Maior preço</SelectItem>
                        <SelectItem value="avaliacao">Melhor avaliação</SelectItem>
                        <SelectItem value="distancia">Mais próximo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Distância máxima</p>
                      <p className="text-sm text-muted-foreground">Defina a distância máxima para buscar veículos</p>
                    </div>
                    <Select defaultValue="10">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 km</SelectItem>
                        <SelectItem value="10">10 km</SelectItem>
                        <SelectItem value="20">20 km</SelectItem>
                        <SelectItem value="50">50 km</SelectItem>
                        <SelectItem value="100">100 km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Idioma e Moeda</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Idioma</p>
                      <p className="text-sm text-muted-foreground">Escolha o idioma da plataforma</p>
                    </div>
                    <Select defaultValue="pt-br">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pt-br">Português (BR)</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Moeda</p>
                      <p className="text-sm text-muted-foreground">Escolha a moeda para exibição de preços</p>
                    </div>
                    <Select defaultValue="brl">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brl">Real (R$)</SelectItem>
                        <SelectItem value="usd">Dólar (US$)</SelectItem>
                        <SelectItem value="eur">Euro (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button>Salvar Preferências</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>Controle como e quando você recebe notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Confirmações de reserva</p>
                      <p className="text-sm text-muted-foreground">Receba notificações sobre suas reservas</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Mensagens</p>
                      <p className="text-sm text-muted-foreground">Receba notificações de novas mensagens</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Lembretes</p>
                      <p className="text-sm text-muted-foreground">Receba lembretes sobre retiradas e devoluções</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Promoções e ofertas</p>
                      <p className="text-sm text-muted-foreground">Receba notificações sobre promoções e descontos</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">SMS</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Confirmações de reserva</p>
                      <p className="text-sm text-muted-foreground">Receba SMS sobre suas reservas</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Lembretes importantes</p>
                      <p className="text-sm text-muted-foreground">Receba SMS para lembretes importantes</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button>Salvar Preferências</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pagamentos">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
              <CardDescription>Gerencie seus cartões e métodos de pagamento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cartões Salvos</h3>
                <div className="space-y-3">
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Mastercard terminando em 4567</p>
                          <p className="text-sm text-muted-foreground">Expira em 05/2025</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                        <Button variant="ghost" size="sm">
                          Remover
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                            <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium">Visa terminando em 8901</p>
                          <p className="text-sm text-muted-foreground">Expira em 09/2024</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                        <Button variant="ghost" size="sm">
                          Remover
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Adicionar Novo Cartão
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Outros Métodos de Pagamento</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M15 9.5C15 8.12 13.88 7 12.5 7H10V12H12.5C13.88 12 15 10.88 15 9.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M10 16.5C10 17.88 11.12 19 12.5 19H15V14H12.5C11.12 14 10 15.12 10 16.5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <p className="font-medium">PIX</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configurar
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                          <path d="M7 15H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M11 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <p className="font-medium">Boleto Bancário</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configurar
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Preferências de Faturamento</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Método de pagamento padrão</p>
                      <p className="text-sm text-muted-foreground">Escolha seu método de pagamento preferido</p>
                    </div>
                    <Select defaultValue="mastercard">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mastercard">Mastercard (...4567)</SelectItem>
                        <SelectItem value="visa">Visa (...8901)</SelectItem>
                        <SelectItem value="pix">PIX</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button>Salvar Configurações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

