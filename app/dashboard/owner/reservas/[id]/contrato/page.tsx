"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"

export default function ContratoPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  // Dados de exemplo do contrato
  const contractData = {
    id: params.id,
    vehicle: params.id === "1" ? "Fiat Argo 2021" : params.id === "2" ? "Yamaha Fazer 250" : "Honda Civic 2022",
    renterName: params.id === "1" ? "Pedro Almeida" : params.id === "2" ? "Ana Ferreira" : "Carlos Mendes",
    ownerName: "João Silva",
    startDate:
      params.id === "1" ? "15 de agosto de 2023" : params.id === "2" ? "10 de julho de 2023" : "01 de julho de 2023",
    endDate:
      params.id === "1" ? "18 de agosto de 2023" : params.id === "2" ? "12 de julho de 2023" : "05 de julho de 2023",
    totalValue: params.id === "1" ? "R$ 330,00" : params.id === "2" ? "R$ 160,00" : "R$ 480,00",
    contractNumber: `VG-${params.id}-${Date.now().toString().substring(5, 13)}`,
    creationDate: "01 de julho de 2023",
  }

  // Função para baixar o contrato
  const handleDownload = () => {
    toast({
      title: "Download iniciado",
      description: "O contrato está sendo baixado para o seu dispositivo.",
    })
  }

  // Função para imprimir o contrato
  const handlePrint = () => {
    toast({
      title: "Preparando impressão",
      description: "O contrato está sendo preparado para impressão.",
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
              <h1 className="text-2xl font-bold">Contrato de Locação</h1>
              <p className="text-muted-foreground">Contrato #{contractData.contractNumber}</p>
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
              <CardTitle className="text-center">CONTRATO DE LOCAÇÃO DE VEÍCULO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center text-sm text-muted-foreground">
                <p>Contrato #{contractData.contractNumber}</p>
                <p>Gerado em {contractData.creationDate}</p>
              </div>

              <Separator />

              <div>
                <h3 className="font-bold mb-2">1. PARTES</h3>
                <p className="text-sm mb-4">
                  <strong>LOCADOR:</strong> {contractData.ownerName}, doravante denominado LOCADOR.
                </p>
                <p className="text-sm">
                  <strong>LOCATÁRIO:</strong> {contractData.renterName}, doravante denominado LOCATÁRIO.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">2. OBJETO</h3>
                <p className="text-sm">
                  O presente contrato tem como objeto a locação do veículo {contractData.vehicle}, de propriedade do
                  LOCADOR, que será utilizado pelo LOCATÁRIO exclusivamente para fins particulares.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">3. PRAZO</h3>
                <p className="text-sm">
                  A locação terá início em {contractData.startDate} e término em {contractData.endDate}, podendo ser
                  prorrogada mediante acordo entre as partes e pagamento adicional proporcional.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">4. VALOR E FORMA DE PAGAMENTO</h3>
                <p className="text-sm">
                  O valor total da locação é de {contractData.totalValue}, que será pago pelo LOCATÁRIO através da
                  plataforma VrumGo, conforme os termos e condições da plataforma.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">5. OBRIGAÇÕES DO LOCATÁRIO</h3>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>Utilizar o veículo de acordo com sua destinação, com cuidado e zelo;</li>
                  <li>Não sublocar ou emprestar o veículo a terceiros;</li>
                  <li>Arcar com as despesas de combustível durante o período de locação;</li>
                  <li>Respeitar as leis de trânsito e arcar com eventuais multas;</li>
                  <li>Devolver o veículo nas mesmas condições em que o recebeu;</li>
                  <li>Comunicar imediatamente qualquer problema ou dano ao veículo.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">6. OBRIGAÇÕES DO LOCADOR</h3>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>Entregar o veículo em perfeitas condições de uso;</li>
                  <li>Fornecer toda a documentação necessária para a circulação do veículo;</li>
                  <li>Arcar com as despesas de manutenção preventiva;</li>
                  <li>Manter o veículo segurado durante o período de locação.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">7. RESCISÃO</h3>
                <p className="text-sm">
                  O presente contrato poderá ser rescindido por qualquer das partes em caso de descumprimento de
                  qualquer cláusula contratual, mediante comunicação prévia através da plataforma VrumGo.
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">8. FORO</h3>
                <p className="text-sm">
                  As partes elegem o foro da comarca de São Paulo para dirimir quaisquer dúvidas ou litígios decorrentes
                  deste contrato.
                </p>
              </div>

              <Separator />

              <div className="pt-8 space-y-8">
                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="border-t border-gray-300 w-48 mx-auto mb-2"></div>
                    <p className="font-medium">{contractData.ownerName}</p>
                    <p className="text-sm text-muted-foreground">LOCADOR</p>
                  </div>
                  <div className="text-center">
                    <div className="border-t border-gray-300 w-48 mx-auto mb-2"></div>
                    <p className="font-medium">{contractData.renterName}</p>
                    <p className="text-sm text-muted-foreground">LOCATÁRIO</p>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Este contrato é validado eletronicamente através da plataforma VrumGo.</p>
                  <p>Código de verificação: {contractData.contractNumber}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

