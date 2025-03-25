"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer, Share2 } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { toast } from "@/hooks/use-toast"

export default function ComprovantePagePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  // Dados de exemplo para o comprovante
  const paymentData = {
    id: params.id,
    date: "15/03/2025",
    amount: 600.0,
    method: "Transferência bancária",
    status: "Concluído",
    reference: `PAG-${params.id}-2025`,
    bank: "Banco do Brasil",
    account: "****-5678",
    description: "Pagamento referente a aluguéis de veículos no período de 01/03/2025 a 15/03/2025",
  }

  // Função para baixar comprovante
  const handleDownloadReceipt = () => {
    toast({
      title: "Comprovante baixado",
      description: "O comprovante foi baixado com sucesso.",
    })
  }

  // Função para imprimir comprovante
  const handlePrintReceipt = () => {
    window.print()
  }

  // Função para compartilhar comprovante
  const handleShareReceipt = () => {
    toast({
      title: "Link copiado",
      description: "O link do comprovante foi copiado para a área de transferência.",
    })
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
              <Button variant="ghost" size="sm" className="mb-2" onClick={() => router.push("/dashboard/owner/ganhos")}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Ganhos
              </Button>
              <h1 className="text-2xl font-bold">Comprovante de Pagamento</h1>
              <p className="text-muted-foreground">Detalhes do pagamento recebido</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handlePrintReceipt}>
                <Printer className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleShareReceipt}>
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex items-center gap-2" onClick={handleDownloadReceipt}>
                <Download className="h-4 w-4" />
                Baixar PDF
              </Button>
            </div>
          </div>

          {/* Receipt Card */}
          <Card className="mb-8 print:shadow-none" id="receipt">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <span className="font-bold text-xl">VrumGo</span>
                  </div>
                </div>
                <div className="text-right">
                  <CardTitle>Comprovante de Pagamento</CardTitle>
                  <p className="text-sm text-muted-foreground">Nº {paymentData.reference}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Data do Pagamento</p>
                    <p className="font-medium">{paymentData.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Valor</p>
                    <p className="font-medium">R$ {paymentData.amount.toFixed(2)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Método de Pagamento</p>
                    <p className="font-medium">{paymentData.method}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Status</p>
                    <p className="font-medium text-green-600">{paymentData.status}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Banco</p>
                    <p className="font-medium">{paymentData.bank}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Conta</p>
                    <p className="font-medium">{paymentData.account}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Descrição</p>
                  <p className="text-sm">{paymentData.description}</p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Beneficiário</p>
                  <p className="font-medium">{userName}</p>
                  <p className="text-sm">{userEmail}</p>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Pagador</p>
                  <p className="font-medium">VrumGo Serviços de Aluguel Ltda.</p>
                  <p className="text-sm">CNPJ: 12.345.678/0001-90</p>
                </div>

                <div className="border-t pt-4 text-center">
                  <p className="text-xs text-muted-foreground">
                    Este comprovante é válido como documento fiscal. Em caso de dúvidas, entre em contato com nosso
                    suporte.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

