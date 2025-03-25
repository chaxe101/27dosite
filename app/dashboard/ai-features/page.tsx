"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, TrendingUp, Shield, DollarSign, Wrench } from "lucide-react"
import AIRecommendations from "@/components/ai-recommendations"
import AIRiskAnalysis from "@/components/ai-risk-analysis"
import AIPriceOptimization from "@/components/ai-price-optimization"
import AIMaintenancePrediction from "@/components/ai-maintenance-prediction"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function AIFeaturesPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<string>("recommendations")
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  // Set the active tab based on URL parameter
  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab && ["recommendations", "risk", "pricing", "maintenance", "chatbot"].includes(tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Recursos de Inteligência Artificial</h1>
            <p className="text-muted-foreground">
              Tecnologias avançadas de IA que tornam a RentWheels uma plataforma inteligente e eficiente
            </p>
          </div>

          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
              <TabsTrigger value="recommendations" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden md:inline">Recomendações</span>
              </TabsTrigger>
              <TabsTrigger value="risk" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden md:inline">Análise de Risco</span>
              </TabsTrigger>
              <TabsTrigger value="pricing" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span className="hidden md:inline">Otimização de Preços</span>
              </TabsTrigger>
              <TabsTrigger value="maintenance" className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <span className="hidden md:inline">Previsão de Manutenção</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recommendations">
              <Card>
                <CardHeader>
                  <CardTitle>Recomendações Personalizadas</CardTitle>
                  <CardDescription>
                    Sugestões de veículos baseadas no seu histórico, preferências e comportamento na plataforma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AIRecommendations />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risk">
              <AIRiskAnalysis />
            </TabsContent>

            <TabsContent value="pricing">
              <AIPriceOptimization />
            </TabsContent>

            <TabsContent value="maintenance">
              <AIMaintenancePrediction />
            </TabsContent>
          </Tabs>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Como a IA melhora sua experiência na RentWheels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  Chatbot Inteligente
                </h3>
                <p className="text-sm text-gray-700">
                  Nosso assistente virtual utiliza processamento de linguagem natural avançado para entender suas
                  perguntas e fornecer respostas precisas e personalizadas em tempo real, 24 horas por dia.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Recomendações Personalizadas
                </h3>
                <p className="text-sm text-gray-700">
                  Algoritmos de aprendizado de máquina analisam seu histórico de navegação, reservas anteriores e
                  preferências para sugerir veículos que melhor atendam às suas necessidades específicas.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Análise de Risco e Fraude
                </h3>
                <p className="text-sm text-gray-700">
                  Sistemas avançados de detecção analisam padrões de comportamento, histórico de transações e outros
                  fatores para identificar atividades suspeitas e proteger todos os usuários da plataforma.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                  Otimização de Preços
                </h3>
                <p className="text-sm text-gray-700">
                  Algoritmos de precificação dinâmica ajustam os valores com base na demanda, sazonalidade, localização
                  e outros fatores de mercado, maximizando a receita para proprietários e oferecendo preços justos para
                  locatários.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-blue-600" />
                  Previsão de Manutenção
                </h3>
                <p className="text-sm text-gray-700">
                  Análise preditiva identifica potenciais problemas mecânicos antes que eles ocorram, sugerindo
                  manutenções preventivas que prolongam a vida útil do veículo e reduzem custos com reparos maiores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

