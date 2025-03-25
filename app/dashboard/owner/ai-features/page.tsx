"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { useSearchParams } from "next/navigation"
import { TrendingUp, Shield, DollarSign, Wrench } from "lucide-react"
import AIRecommendations from "@/components/ai-recommendations"
import AIRiskAnalysis from "@/components/ai-risk-analysis"
import AIPriceOptimization from "@/components/ai-price-optimization"
import AIMaintenancePrediction from "@/components/ai-maintenance-prediction"

export default function AIFeaturesPage() {
  const searchParams = useSearchParams()
  const defaultTab = searchParams.get("tab") || "recommendations"
  const [activeTab, setActiveTab] = useState(defaultTab)

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
            <h1 className="text-2xl font-bold mb-2">Recursos de Inteligência Artificial</h1>
            <p className="text-muted-foreground">
              Utilize nossas ferramentas de IA para otimizar seus anúncios, preços e manutenção de veículos.
            </p>
          </div>

          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <TabsTrigger
                  value="recommendations"
                  className="flex items-center gap-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  <TrendingUp className="h-5 w-5" />
                  <span>Recomendações</span>
                </TabsTrigger>
                <TabsTrigger
                  value="risk"
                  className="flex items-center gap-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  <Shield className="h-5 w-5" />
                  <span>Análise de Risco</span>
                </TabsTrigger>
                <TabsTrigger
                  value="pricing"
                  className="flex items-center gap-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  <DollarSign className="h-5 w-5" />
                  <span>Otimização de Preços</span>
                </TabsTrigger>
                <TabsTrigger
                  value="maintenance"
                  className="flex items-center gap-2 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                >
                  <Wrench className="h-5 w-5" />
                  <span>Previsão de Manutenção</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="recommendations" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recomendações Inteligentes</CardTitle>
                  <CardDescription>
                    Sugestões personalizadas para melhorar seus anúncios e aumentar a taxa de ocupação dos seus
                    veículos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AIRecommendations />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risk" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Análise de Risco e Fraude</CardTitle>
                  <CardDescription>
                    Avaliação de segurança para identificar potenciais riscos e prevenir fraudes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AIRiskAnalysis />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pricing" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Otimização de Preços</CardTitle>
                  <CardDescription>
                    Ajuste dinâmico de preços com base na demanda, sazonalidade e competição.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AIPriceOptimization />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="maintenance" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Previsão de Manutenção</CardTitle>
                  <CardDescription>
                    Análise preditiva para antecipar necessidades de manutenção e evitar problemas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AIMaintenancePrediction />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

