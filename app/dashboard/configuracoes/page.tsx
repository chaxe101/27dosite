"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { User, CreditCard, Bell, Shield, Languages, Upload, Save, Lock, Bot, ArrowRight } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import Link from "next/link"

export default function ConfiguracoesPage() {
  const userName = "João Silva"
  const userEmail = "joao@email.com"
  const [activeTab, setActiveTab] = useState("perfil")

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Configurações</h1>
            <p className="text-muted-foreground">Gerencie suas preferências e informações pessoais</p>
          </div>

          {/* AI Features Card */}
          <Card className="mb-8 bg-blue-50 border-blue-100">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Bot className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Recursos de Inteligência Artificial</h3>
                  <p className="text-muted-foreground">
                    Configure e personalize os recursos de IA para melhorar sua experiência
                  </p>
                </div>
              </div>
              <Link href="/dashboard/ai-features">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Configurar IA
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="perfil" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Perfil</span>
              </TabsTrigger>
              <TabsTrigger value="pagamentos" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span className="hidden md:inline">Pagamentos</span>
              </TabsTrigger>
              <TabsTrigger value="notificacoes" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden md:inline">Notificações</span>
              </TabsTrigger>
              <TabsTrigger value="seguranca" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Segurança</span>
              </TabsTrigger>
              <TabsTrigger value="preferencias" className="flex items-center gap-2">
                <Languages className="h-4 w-4" />
                <span className="hidden md:inline">Preferências</span>
              </TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="perfil">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>Atualize suas informações pessoais e de contato</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder.svg" alt={userName} />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm" className="mt-2">
                        <Upload className="h-4 w-4 mr-2" />
                        Alterar foto
                      </Button>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome completo</Label>
                          <Input id="name" defaultValue="João Silva" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cpf">CPF</Label>
                          <Input id="cpf" defaultValue="123.456.789-00" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="joao@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input id="phone" defaultValue="(11) 98765-4321" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bio">Biografia</Label>
                        <Textarea
                          id="bio"
                          placeholder="Conte um pouco sobre você..."
                          className="min-h-[100px]"
                          defaultValue="Olá! Sou João, trabalho com tecnologia e tenho 3 veículos disponíveis para aluguel. Sempre mantenho meus carros em excelente estado e ofereço um atendimento personalizado para garantir a melhor experiência aos locatários."
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Endereço</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="cep">CEP</Label>
                        <Input id="cep" defaultValue="01310-100" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="street">Rua</Label>
                        <Input id="street" defaultValue="Av. Paulista" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="number">Número</Label>
                        <Input id="number" defaultValue="1000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="complement">Complemento</Label>
                        <Input id="complement" defaultValue="Apto 101" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="neighborhood">Bairro</Label>
                        <Input id="neighborhood" defaultValue="Bela Vista" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input id="city" defaultValue="São Paulo" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">Estado</Label>
                        <Select defaultValue="SP">
                          <SelectTrigger id="state">
                            <SelectValue placeholder="Selecione o estado" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="SP">São Paulo</SelectItem>
                            <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                            <SelectItem value="MG">Minas Gerais</SelectItem>
                            <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                            <SelectItem value="PR">Paraná</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Salvar alterações
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payment Settings */}
            <TabsContent value="pagamentos">
              <Card>
                <CardHeader>
                  <CardTitle>Métodos de Pagamento</CardTitle>
                  <CardDescription>Gerencie seus cartões e informações de pagamento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Cartões cadastrados</h3>

                    <div className="border rounded-lg p-4 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-100 p-2 rounded-md">
                          <CreditCard className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium">Mastercard •••• 4321</div>
                          <div className="text-sm text-muted-foreground">Expira em 12/2026</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Remover
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 flex justify-between items-center">
                      <div className="flex items-center gap-4">
                        <div className="bg-gray-100 p-2 rounded-md">
                          <CreditCard className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium">Visa •••• 7890</div>
                          <div className="text-sm text-muted-foreground">Expira em 08/2025</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          Editar
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Remover
                        </Button>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Adicionar novo cartão
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Dados bancários para recebimento</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bank">Banco</Label>
                        <Select defaultValue="itau">
                          <SelectTrigger id="bank">
                            <SelectValue placeholder="Selecione o banco" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="itau">Itaú</SelectItem>
                            <SelectItem value="bradesco">Bradesco</SelectItem>
                            <SelectItem value="santander">Santander</SelectItem>
                            <SelectItem value="bb">Banco do Brasil</SelectItem>
                            <SelectItem value="caixa">Caixa Econômica</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="account-type">Tipo de conta</Label>
                        <Select defaultValue="checking">
                          <SelectTrigger id="account-type">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="checking">Conta Corrente</SelectItem>
                            <SelectItem value="savings">Conta Poupança</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="agency">Agência</Label>
                        <Input id="agency" defaultValue="1234" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="account">Conta</Label>
                        <Input id="account" defaultValue="56789-0" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pix-key">Chave PIX</Label>
                        <Input id="pix-key" defaultValue="joao@email.com" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Salvar alterações
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notificacoes">
              <Card>
                <CardHeader>
                  <CardTitle>Preferências de Notificação</CardTitle>
                  <CardDescription>Escolha como e quando deseja receber notificações</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notificações por email</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Reservas</Label>
                          <p className="text-sm text-muted-foreground">
                            Receba emails sobre novas reservas, alterações e cancelamentos
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Mensagens</Label>
                          <p className="text-sm text-muted-foreground">
                            Receba emails quando alguém enviar uma mensagem para você
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Avaliações</Label>
                          <p className="text-sm text-muted-foreground">
                            Receba emails quando alguém avaliar seus veículos
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Pagamentos</Label>
                          <p className="text-sm text-muted-foreground">
                            Receba emails sobre pagamentos recebidos e transferências
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Promoções e novidades</Label>
                          <p className="text-sm text-muted-foreground">
                            Receba emails sobre promoções, novidades e dicas da plataforma
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notificações por SMS</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Reservas</Label>
                          <p className="text-sm text-muted-foreground">
                            Receba SMS sobre novas reservas, alterações e cancelamentos
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Mensagens</Label>
                          <p className="text-sm text-muted-foreground">
                            Receba SMS quando alguém enviar uma mensagem para você
                          </p>
                        </div>
                        <Switch />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Lembretes</Label>
                          <p className="text-sm text-muted-foreground">
                            Receba lembretes por SMS sobre entregas e devoluções de veículos
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Salvar alterações
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="seguranca">
              <Card>
                <CardHeader>
                  <CardTitle>Segurança da Conta</CardTitle>
                  <CardDescription>Gerencie sua senha e configurações de segurança</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Alterar senha</h3>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Senha atual</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nova senha</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar nova senha</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Lock className="h-4 w-4 mr-2" />
                        Atualizar senha
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Verificação em duas etapas</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Ativar verificação em duas etapas</Label>
                          <p className="text-sm text-muted-foreground">
                            Adicione uma camada extra de segurança à sua conta
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="2fa-method">Método de verificação</Label>
                        <Select defaultValue="sms">
                          <SelectTrigger id="2fa-method">
                            <SelectValue placeholder="Selecione o método" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="app">Aplicativo autenticador</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone-2fa">Telefone para verificação</Label>
                        <div className="flex gap-2">
                          <Input id="phone-2fa" defaultValue="(11) 98765-4321" />
                          <Button variant="outline">Verificar</Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Sessões ativas</h3>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="bg-green-100 p-2 rounded-full">
                            <Shield className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">Este dispositivo</div>
                            <div className="text-sm text-muted-foreground">São Paulo, Brasil • Chrome • Windows</div>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Ativo agora</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="bg-gray-100 p-2 rounded-full">
                            <Shield className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">iPhone 13</div>
                            <div className="text-sm text-muted-foreground">São Paulo, Brasil • Safari • iOS</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          Encerrar
                        </Button>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full">
                      <Shield className="h-4 w-4 mr-2" />
                      Encerrar todas as outras sessões
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Preferences Settings */}
            <TabsContent value="preferencias">
              <Card>
                <CardHeader>
                  <CardTitle>Preferências do Sistema</CardTitle>
                  <CardDescription>Personalize sua experiência na plataforma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Idioma e região</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Idioma</Label>
                        <Select defaultValue="pt-BR">
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Selecione o idioma" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                            <SelectItem value="en-US">English (US)</SelectItem>
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency">Moeda</Label>
                        <Select defaultValue="BRL">
                          <SelectTrigger id="currency">
                            <SelectValue placeholder="Selecione a moeda" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="BRL">Real (R$)</SelectItem>
                            <SelectItem value="USD">US Dollar ($)</SelectItem>
                            <SelectItem value="EUR">Euro (€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Tema</h3>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Modo escuro</Label>
                        <p className="text-sm text-muted-foreground">
                          Ativar modo escuro para reduzir o cansaço visual
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Privacidade</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Mostrar status online</Label>
                          <p className="text-sm text-muted-foreground">
                            Permitir que outros usuários vejam quando você está online
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label className="text-base">Compartilhar estatísticas</Label>
                          <p className="text-sm text-muted-foreground">
                            Compartilhar estatísticas anônimas para melhorar a plataforma
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Salvar alterações
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

