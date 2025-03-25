import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock, AlertTriangle, Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "Segurança | Locatário | VrumGo",
  description: "Gerencie a segurança da sua conta",
}

export default function RenterSegurancaPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Segurança da Conta</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <CardTitle>Alterar Senha</CardTitle>
              </div>
              <CardDescription>Mantenha sua conta segura com uma senha forte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="senha-atual">Senha Atual</Label>
                <Input id="senha-atual" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nova-senha">Nova Senha</Label>
                <Input id="nova-senha" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmar-senha">Confirmar Nova Senha</Label>
                <Input id="confirmar-senha" type="password" />
              </div>
              <Button>Atualizar Senha</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <CardTitle>Autenticação de Dois Fatores</CardTitle>
              </div>
              <CardDescription>Adicione uma camada extra de segurança à sua conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Ativar 2FA</p>
                  <p className="text-sm text-muted-foreground">Proteja sua conta com autenticação de dois fatores</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="metodo-2fa">Método Preferido</Label>
                <Select defaultValue="app">
                  <SelectTrigger id="metodo-2fa">
                    <SelectValue placeholder="Selecione um método" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="app">Aplicativo Autenticador</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button variant="outline">Configurar 2FA</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <CardTitle>Sessões Ativas</CardTitle>
              </div>
              <CardDescription>Gerencie os dispositivos conectados à sua conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">São Paulo, Brasil</p>
                    <p className="text-sm text-muted-foreground">Chrome em Windows • Atual</p>
                  </div>
                  <Button variant="ghost" size="sm" disabled>
                    Atual
                  </Button>
                </div>
              </div>

              <div className="bg-muted p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Rio de Janeiro, Brasil</p>
                    <p className="text-sm text-muted-foreground">Safari em iPhone • 2 dias atrás</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Encerrar
                  </Button>
                </div>
              </div>

              <div className="bg-muted p-3 rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Belo Horizonte, Brasil</p>
                    <p className="text-sm text-muted-foreground">Firefox em MacBook • 5 dias atrás</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Encerrar
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Encerrar Todas as Outras Sessões
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>Dicas de Segurança</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Use senhas fortes</h3>
                <p className="text-sm text-muted-foreground">
                  Combine letras maiúsculas, minúsculas, números e símbolos.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-1">Ative a autenticação de dois fatores</h3>
                <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança à sua conta.</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-1">Verifique regularmente suas sessões ativas</h3>
                <p className="text-sm text-muted-foreground">Encerre sessões em dispositivos que você não reconhece.</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-medium mb-1">Mantenha seu email seguro</h3>
                <p className="text-sm text-muted-foreground">Seu email é a chave para recuperar sua conta.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Histórico de Atividades</CardTitle>
              <CardDescription>Atividades recentes na sua conta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <p className="text-sm font-medium">Login bem-sucedido</p>
                <p className="text-xs text-muted-foreground">Hoje, 10:30 • São Paulo, Brasil</p>
              </div>
              <Separator />
              <div className="space-y-1">
                <p className="text-sm font-medium">Senha alterada</p>
                <p className="text-xs text-muted-foreground">15/06/2023, 14:45 • São Paulo, Brasil</p>
              </div>
              <Separator />
              <div className="space-y-1">
                <p className="text-sm font-medium">Login bem-sucedido</p>
                <p className="text-xs text-muted-foreground">14/06/2023, 09:15 • Rio de Janeiro, Brasil</p>
              </div>
              <Separator />
              <div className="space-y-1">
                <p className="text-sm font-medium">2FA ativado</p>
                <p className="text-xs text-muted-foreground">10/06/2023, 16:20 • São Paulo, Brasil</p>
              </div>

              <Button variant="link" className="px-0">
                Ver histórico completo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

