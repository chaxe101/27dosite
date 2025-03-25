"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer, CheckSquare } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { toast } from "@/hooks/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function ChecklistPage() {
  const router = useRouter()
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  // Função para baixar checklist
  const handleDownloadChecklist = () => {
    toast({
      title: "Checklist baixado",
      description: "O checklist foi baixado com sucesso.",
    })
  }

  // Função para imprimir checklist
  const handlePrintChecklist = () => {
    window.print()
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button variant="ghost" size="sm" className="mb-2" onClick={() => router.push("/dashboard/owner")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para o Painel
              </Button>
              <h1 className="text-2xl font-bold">Checklist de Inspeção</h1>
              <p className="text-muted-foreground">Modelo de checklist para inspeção de veículos</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handlePrintChecklist}>
                <Printer className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex items-center gap-2" onClick={handleDownloadChecklist}>
                <Download className="h-4 w-4" />
                Baixar PDF
              </Button>
            </div>
          </div>

          {/* Checklist Card */}
          <Card className="mb-8 print:shadow-none" id="checklist">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                  <CardTitle>Checklist de Inspeção de Veículo</CardTitle>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">VrumGo</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Informações do Veículo</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="vehicle-model">Modelo do Veículo</Label>
                      <div className="h-10 px-3 py-2 border rounded-md mt-1"></div>
                    </div>
                    <div>
                      <Label htmlFor="vehicle-plate">Placa</Label>
                      <div className="h-10 px-3 py-2 border rounded-md mt-1"></div>
                    </div>
                    <div>
                      <Label htmlFor="vehicle-owner">Proprietário</Label>
                      <div className="h-10 px-3 py-2 border rounded-md mt-1"></div>
                    </div>
                    <div>
                      <Label htmlFor="vehicle-renter">Locatário</Label>
                      <div className="h-10 px-3 py-2 border rounded-md mt-1"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Exterior</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exterior-1" />
                      <Label htmlFor="exterior-1">Verificar arranhões ou amassados</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exterior-2" />
                      <Label htmlFor="exterior-2">Verificar faróis e lanternas</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exterior-3" />
                      <Label htmlFor="exterior-3">Verificar pneus e estepe</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exterior-4" />
                      <Label htmlFor="exterior-4">Verificar limpadores de para-brisa</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exterior-5" />
                      <Label htmlFor="exterior-5">Verificar retrovisores</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Interior</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interior-1" />
                      <Label htmlFor="interior-1">Verificar limpeza geral</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interior-2" />
                      <Label htmlFor="interior-2">Verificar funcionamento do ar-condicionado</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interior-3" />
                      <Label htmlFor="interior-3">Verificar sistema de som</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interior-4" />
                      <Label htmlFor="interior-4">Verificar bancos e cintos de segurança</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="interior-5" />
                      <Label htmlFor="interior-5">Verificar painel e luzes de advertência</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Documentação e Outros</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="docs-1" />
                      <Label htmlFor="docs-1">Verificar documentos do veículo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="docs-2" />
                      <Label htmlFor="docs-2">Verificar nível de combustível</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="docs-3" />
                      <Label htmlFor="docs-3">Registrar quilometragem</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="docs-4" />
                      <Label htmlFor="docs-4">Verificar chave reserva</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="docs-5" />
                      <Label htmlFor="docs-5">Verificar manual do proprietário</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Observações</h3>
                  <div className="h-24 px-3 py-2 border rounded-md"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <Label htmlFor="owner-signature">Assinatura do Proprietário</Label>
                    <div className="h-16 border-b mt-8"></div>
                  </div>
                  <div>
                    <Label htmlFor="renter-signature">Assinatura do Locatário</Label>
                    <div className="h-16 border-b mt-8"></div>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground pt-4">
                  <p>Data da Inspeção: ___/___/______</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => router.push("/dashboard/owner/inspecoes")}>
              Ir para Inspeções
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

