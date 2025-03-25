"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer, CheckCircle, XCircle } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InspecaoDetalhesPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const userName = "João Silva"
  const userEmail = "joao@email.com"
  const [activeTab, setActiveTab] = useState("retirada")

  // Dados de exemplo da inspeção
  const inspectionData = {
    id: params.id,
    vehicle: params.id === "1" ? "Fiat Argo 2021" : params.id === "2" ? "Yamaha Fazer 250" : "Honda Civic 2022",
    renterName: params.id === "1" ? "Pedro Almeida" : params.id === "2" ? "Ana Ferreira" : "Carlos Mendes",
    pickupDate:
      params.id === "1" ? "15 de agosto de 2023" : params.id === "2" ? "10 de julho de 2023" : "01 de julho de 2023",
    returnDate:
      params.id === "1" ? "18 de agosto de 2023" : params.id === "2" ? "12 de julho de 2023" : "05 de julho de 2023",
    inspectionNumber: `INS-${params.id}-${Date.now().toString().substring(5, 13)}`,
    pickupItems: [
      { name: "Nível de combustível", status: "ok", notes: "Tanque cheio" },
      { name: "Quilometragem", status: "ok", notes: "45.320 km" },
      { name: "Pneus", status: "ok", notes: "Em bom estado" },
      { name: "Lataria", status: "ok", notes: "Sem arranhões ou amassados" },
      { name: "Vidros", status: "ok", notes: "Sem trincas" },
      { name: "Faróis", status: "ok", notes: "Funcionando normalmente" },
      { name: "Limpadores", status: "ok", notes: "Funcionando normalmente" },
      { name: "Freios", status: "ok", notes: "Funcionando normalmente" },
      { name: "Documentação", status: "ok", notes: "Completa e em dia" },
      { name: "Itens obrigatórios", status: "ok", notes: "Triângulo, macaco e chave de roda presentes" },
      { name: "Estepe", status: "ok", notes: "Em bom estado" },
    ],
    returnItems: [
      { name: "Nível de combustível", status: "ok", notes: "Tanque 3/4" },
      { name: "Quilometragem", status: "ok", notes: "45.620 km" },
      { name: "Pneus", status: "ok", notes: "Em bom estado" },
      { name: "Lataria", status: "ok", notes: "Sem novos danos" },
      { name: "Vidros", status: "ok", notes: "Sem trincas" },
      { name: "Faróis", status: "ok", notes: "Funcionando normalmente" },
      { name: "Limpadores", status: "ok", notes: "Funcionando normalmente" },
      { name: "Freios", status: "ok", notes: "Funcionando normalmente" },
      { name: "Documentação", status: "ok", notes: "Completa e em dia" },
      { name: "Itens obrigatórios", status: "ok", notes: "Triângulo, macaco e chave de roda presentes" },
      { name: "Estepe", status: "ok", notes: "Em bom estado" },
    ],
  }

  // Função para baixar o relatório
  const handleDownload = () => {
    toast({
      title: "Download iniciado",
      description: "O relatório de inspeção está sendo baixado para o seu dispositivo.",
    })
  }

  // Função para imprimir o relatório
  const handlePrint = () => {
    toast({
      title: "Preparando impressão",
      description: "O relatório de inspeção está sendo preparado para impressão.",
    })
    window.print()
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button
                variant="ghost"
                size="sm"
                className="mb-2"
                onClick={() => router.push(`/dashboard/owner/reservas/${params.id}`)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Detalhes da Reserva
              </Button>
              <h1 className="text-2xl font-bold">Relatório de Inspeção</h1>
              <p className="text-muted-foreground">Inspeção #{inspectionData.inspectionNumber}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2" onClick={handleDownload}>
                <Download className="h-4 w-4" />
                Baixar PDF
              </Button>
              <Button variant="outline" className="flex items-center gap-2" onClick={handlePrint}>
                <Printer className="h-4 w-4" />
                Imprimir
              </Button>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">RELATÓRIO DE INSPEÇÃO DE VEÍCULO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center text-sm text-muted-foreground">
                <p>Inspeção #{inspectionData.inspectionNumber}</p>
                <p>Veículo: {inspectionData.vehicle}</p>
                <p>Locatário: {inspectionData.renterName}</p>
              </div>

              <Separator />

              <Tabs defaultValue="retirada" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="retirada">Inspeção de Retirada</TabsTrigger>
                  <TabsTrigger value="devolucao">Inspeção de Devolução</TabsTrigger>
                </TabsList>
                <TabsContent value="retirada" className="space-y-4 pt-4">
                  <div className="text-sm text-muted-foreground mb-4">
                    <p>Data da Retirada: {inspectionData.pickupDate}</p>
                  </div>

                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Item</th>
                          <th className="text-left p-3">Status</th>
                          <th className="text-left p-3">Observações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inspectionData.pickupItems.map((item, index) => (
                          <tr key={index} className={index !== inspectionData.pickupItems.length - 1 ? "border-b" : ""}>
                            <td className="p-3">{item.name}</td>
                            <td className="p-3">
                              {item.status === "ok" ? (
                                <div className="flex items-center">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                                  <span>OK</span>
                                </div>
                              ) : (
                                <div className="flex items-center">
                                  <XCircle className="h-4 w-4 text-red-500 mr-1" />
                                  <span>Problema</span>
                                </div>
                              )}
                            </td>
                            <td className="p-3">{item.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Assinaturas</h3>
                    <div className="flex justify-around pt-4">
                      <div className="text-center">
                        <div className="border-t border-gray-300 w-48 mx-auto mb-2"></div>
                        <p className="font-medium">{userName}</p>
                        <p className="text-sm text-muted-foreground">LOCADOR</p>
                      </div>
                      <div className="text-center">
                        <div className="border-t border-gray-300 w-48 mx-auto mb-2"></div>
                        <p className="font-medium">{inspectionData.renterName}</p>
                        <p className="text-sm text-muted-foreground">LOCATÁRIO</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="devolucao" className="space-y-4 pt-4">
                  <div className="text-sm text-muted-foreground mb-4">
                    <p>Data da Devolução: {inspectionData.returnDate}</p>
                  </div>

                  <div className="border rounded-md">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3">Item</th>
                          <th className="text-left p-3">Status</th>
                          <th className="text-left p-3">Observações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inspectionData.returnItems.map((item, index) => (
                          <tr key={index} className={index !== inspectionData.returnItems.length - 1 ? "border-b" : ""}>
                            <td className="p-3">{item.name}</td>
                            <td className="p-3">
                              {item.status === "ok" ? (
                                <div className="flex items-center">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                                  <span>OK</span>
                                </div>
                              ) : (
                                <div className="flex items-center">
                                  <XCircle className="h-4 w-4 text-red-500 mr-1" />
                                  <span>Problema</span>
                                </div>
                              )}
                            </td>
                            <td className="p-3">{item.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-medium mb-2">Assinaturas</h3>
                    <div className="flex justify-around pt-4">
                      <div className="text-center">
                        <div className="border-t border-gray-300 w-48 mx-auto mb-2"></div>
                        <p className="font-medium">{userName}</p>
                        <p className="text-sm text-muted-foreground">LOCADOR</p>
                      </div>
                      <div className="text-center">
                        <div className="border-t border-gray-300 w-48 mx-auto mb-2"></div>
                        <p className="font-medium">{inspectionData.renterName}</p>
                        <p className="text-sm text-muted-foreground">LOCATÁRIO</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

