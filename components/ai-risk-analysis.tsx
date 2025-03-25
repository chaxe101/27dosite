"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Shield, AlertTriangle, CheckCircle, Info, User, Car, CreditCard, AlertCircle } from "lucide-react"

type RiskLevel = "low" | "medium" | "high"

type RiskFactor = {
  name: string
  description: string
  level: RiskLevel
  score: number
}

type RiskAnalysis = {
  overallScore: number
  overallLevel: RiskLevel
  factors: RiskFactor[]
  recommendations: string[]
}

export default function AIRiskAnalysis() {
  const [activeTab, setActiveTab] = useState<string>("user")

  // Dados simulados de análise de risco que seriam gerados por IA
  const userRiskAnalysis: RiskAnalysis = {
    overallScore: 87,
    overallLevel: "low",
    factors: [
      {
        name: "Verificação de Identidade",
        description: "Documentos verificados e validados",
        level: "low",
        score: 95,
      },
      {
        name: "Histórico de Pagamentos",
        description: "Todos os pagamentos realizados em dia",
        level: "low",
        score: 98,
      },
      {
        name: "Padrão de Uso",
        description: "Comportamento consistente na plataforma",
        level: "low",
        score: 90,
      },
      {
        name: "Avaliações Recebidas",
        description: "Média de 4.7/5 em 12 avaliações",
        level: "low",
        score: 94,
      },
      {
        name: "Localização",
        description: "Acesso de locais variados não habituais",
        level: "medium",
        score: 75,
      },
    ],
    recommendations: [
      "Manter documentação atualizada",
      "Continuar com bom histórico de pagamentos",
      "Considerar ativar verificação em duas etapas para maior segurança",
    ],
  }

  const transactionRiskAnalysis: RiskAnalysis = {
    overallScore: 72,
    overallLevel: "medium",
    factors: [
      {
        name: "Valor da Transação",
        description: "Valor acima da média para este tipo de veículo",
        level: "medium",
        score: 65,
      },
      {
        name: "Método de Pagamento",
        description: "Cartão de crédito verificado",
        level: "low",
        score: 90,
      },
      {
        name: "Tempo de Reserva",
        description: "Período de aluguel muito longo (21 dias)",
        level: "medium",
        score: 70,
      },
      {
        name: "Distância Geográfica",
        description: "Usuário e veículo em cidades diferentes",
        level: "medium",
        score: 60,
      },
      {
        name: "Histórico de Reservas",
        description: "Primeira reserva deste tipo de veículo",
        level: "high",
        score: 50,
      },
    ],
    recommendations: [
      "Solicitar confirmação adicional para o período extenso",
      "Verificar intenção de uso para o período prolongado",
      "Considerar depósito caução maior para esta reserva",
    ],
  }

  const vehicleRiskAnalysis: RiskAnalysis = {
    overallScore: 92,
    overallLevel: "low",
    factors: [
      {
        name: "Documentação do Veículo",
        description: "Documentos completos e atualizados",
        level: "low",
        score: 98,
      },
      {
        name: "Estado de Conservação",
        description: "Veículo em excelente estado, conforme fotos",
        level: "low",
        score: 95,
      },
      {
        name: "Histórico de Manutenção",
        description: "Manutenções regulares registradas",
        level: "low",
        score: 97,
      },
      {
        name: "Avaliações do Veículo",
        description: "Média de 4.9/5 em 8 avaliações",
        level: "low",
        score: 98,
      },
      {
        name: "Idade do Veículo",
        description: "Veículo com 3 anos de uso",
        level: "low",
        score: 85,
      },
    ],
    recommendations: [
      "Manter registro de manutenções atualizado",
      "Continuar com verificações regulares",
      "Considerar seguro premium para maior proteção",
    ],
  }

  // Função para renderizar o indicador de nível de risco
  const renderRiskLevelBadge = (level: RiskLevel) => {
    switch (level) {
      case "low":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="h-3.5 w-3.5 mr-1" />
            Baixo Risco
          </Badge>
        )
      case "medium":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            <AlertCircle className="h-3.5 w-3.5 mr-1" />
            Risco Médio
          </Badge>
        )
      case "high":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <AlertTriangle className="h-3.5 w-3.5 mr-1" />
            Alto Risco
          </Badge>
        )
    }
  }

  // Função para renderizar a cor da barra de progresso baseada no nível de risco
  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-amber-500"
    return "bg-red-500"
  }

  // Função para renderizar a análise de risco
  const renderRiskAnalysis = (analysis: RiskAnalysis) => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-2xl font-bold mb-1">Pontuação de Risco: {analysis.overallScore}/100</div>
          <div className="flex items-center">{renderRiskLevelBadge(analysis.overallLevel)}</div>
        </div>
        <Progress
          value={analysis.overallScore}
          className="h-3 w-full md:w-1/3"
          indicatorClassName={getProgressColor(analysis.overallScore)}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Fatores de Risco Analisados</h3>
        <div className="space-y-3">
          {analysis.factors.map((factor, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-3 border rounded-lg"
            >
              <div>
                <div className="font-medium">{factor.name}</div>
                <div className="text-sm text-muted-foreground">{factor.description}</div>
              </div>
              <div className="flex items-center gap-3">
                <Progress
                  value={factor.score}
                  className="h-2 w-24"
                  indicatorClassName={getProgressColor(factor.score)}
                />
                {renderRiskLevelBadge(factor.level)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Recomendações</h3>
        <Alert>
          <Info className="h-4 w-4" />
          <AlertTitle>Ações sugeridas pelo sistema</AlertTitle>
          <AlertDescription>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {analysis.recommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          <CardTitle>Análise de Risco e Fraude</CardTitle>
        </div>
        <CardDescription>Avaliação de segurança baseada em inteligência artificial</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="user" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 grid grid-cols-3">
            <TabsTrigger value="user" className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Usuário</span>
            </TabsTrigger>
            <TabsTrigger value="transaction" className="flex items-center gap-1">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Transação</span>
            </TabsTrigger>
            <TabsTrigger value="vehicle" className="flex items-center gap-1">
              <Car className="h-4 w-4" />
              <span className="hidden sm:inline">Veículo</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="user">{renderRiskAnalysis(userRiskAnalysis)}</TabsContent>

          <TabsContent value="transaction">{renderRiskAnalysis(transactionRiskAnalysis)}</TabsContent>

          <TabsContent value="vehicle">{renderRiskAnalysis(vehicleRiskAnalysis)}</TabsContent>
        </Tabs>

        <div className="flex justify-end mt-6">
          <Button className="bg-blue-600 hover:bg-blue-700">Gerar Relatório Completo</Button>
        </div>
      </CardContent>
    </Card>
  )
}

