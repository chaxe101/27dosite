"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Car,
  Calendar,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Camera,
  Clipboard,
  Clock,
  Phone,
  MessageSquare,
  Upload,
  Info,
  Shield,
  Star,
  DollarSign,
  CreditCard,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function DevolucaoVeiculoPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [showCamera, setShowCamera] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [returnComplete, setReturnComplete] = useState(false)
  const [vehicleCondition, setVehicleCondition] = useState("perfect")
  const [rating, setRating] = useState(5)
  const [checklistItems, setChecklistItems] = useState({
    exterior: {
      scratches: false,
      lights: false,
      tires: false,
      wipers: false,
    },
    interior: {
      cleanliness: false,
      ac: false,
      sound: false,
    },
    documents: {
      vehicleDocs: false,
      fuel: false,
      mileage: false,
    },
  })

  const userName = "João Silva"
  const userEmail = "joao@email.com"

  // Dados simulados da reserva
  const reservation = {
    id: "RES-12345",
    vehicle: {
      name: "Honda Civic 2022",
      image: "/placeholder.svg",
      plate: "ABC-1234",
      color: "Prata",
      year: "2022",
    },
    owner: {
      name: "Ricardo Pereira",
      phone: "(11) 98765-4321",
      rating: 4.9,
    },
    dates: {
      pickup: "25/03/2025",
      pickupTime: "14:00",
      return: "28/03/2025",
      returnTime: "14:00",
    },
    location: "São Paulo, SP - Zona Sul",
    meetingPoint: "Estacionamento do Shopping Ibirapuera",
    initialFuel: "Tanque cheio",
    initialMileage: "15.230 km",
    currentMileage: "15.580 km",
    deposit: 500,
  }

  // Verificar se todos os itens do checklist estão marcados
  const isChecklistComplete = () => {
    return (
      Object.values(checklistItems.exterior).every(Boolean) &&
      Object.values(checklistItems.interior).every(Boolean) &&
      Object.values(checklistItems.documents).every(Boolean)
    )
  }

  // Atualizar um item do checklist
  const updateChecklistItem = (category, item, value) => {
    setChecklistItems((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [item]: value,
      },
    }))
  }

  // Avançar para o próximo passo
  const nextStep = () => {
    if (currentStep === 1 && !isChecklistComplete()) {
      alert("Por favor, complete todos os itens do checklist antes de continuar.")
      return
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowConfirmation(true)
    }
  }

  // Voltar para o passo anterior
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    } else {
      router.back()
    }
  }

  // Finalizar o processo de devolução
  const completeReturn = () => {
    setShowConfirmation(false)
    setReturnComplete(true)

    // Em um app real, aqui enviaríamos os dados para o backend
    setTimeout(() => {
      router.push("/dashboard/renter/reservas")
    }, 3000)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Devolução do Veículo</h1>
            <p className="text-muted-foreground">
              Complete o checklist e avalie sua experiência para devolver o veículo
            </p>
          </div>

          {/* Steps Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  1
                </div>
                <span className={currentStep >= 1 ? "font-medium" : "text-muted-foreground"}>Checklist</span>
              </div>
              <div className="h-1 w-16 bg-gray-200">
                <div
                  className={`h-1 bg-blue-600 ${currentStep >= 2 ? "w-full" : "w-0"} transition-all duration-300`}
                ></div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  2
                </div>
                <span className={currentStep >= 2 ? "font-medium" : "text-muted-foreground"}>Avaliação</span>
              </div>
              <div className="h-1 w-16 bg-gray-200">
                <div
                  className={`h-1 bg-blue-600 ${currentStep >= 3 ? "w-full" : "w-0"} transition-all duration-300`}
                ></div>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  3
                </div>
                <span className={currentStep >= 3 ? "font-medium" : "text-muted-foreground"}>Confirmação</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {/* Step 1: Checklist */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Checklist de Devolução</CardTitle>
                    <CardDescription>
                      Verifique cada item junto com o proprietário antes de devolver o veículo
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Exterior</h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="scratches"
                              checked={checklistItems.exterior.scratches}
                              onCheckedChange={(checked) => updateChecklistItem("exterior", "scratches", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="scratches" className="font-medium">
                                Verificar arranhões ou amassados
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Inspecione toda a carroceria do veículo e registre qualquer dano novo
                              </p>

                              <div className="flex items-center gap-2 mt-1">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 text-xs"
                                  onClick={() => setShowCamera(true)}
                                >
                                  <Camera className="h-3.5 w-3.5 mr-1" />
                                  Tirar Foto
                                </Button>
                                <Button variant="outline" size="sm" className="h-8 text-xs">
                                  <Upload className="h-3.5 w-3.5 mr-1" />
                                  Anexar Foto
                                </Button>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="lights"
                              checked={checklistItems.exterior.lights}
                              onCheckedChange={(checked) => updateChecklistItem("exterior", "lights", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="lights" className="font-medium">
                                Verificar faróis e lanternas
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Teste todos os faróis, lanternas e setas para garantir que estão funcionando
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="tires"
                              checked={checklistItems.exterior.tires}
                              onCheckedChange={(checked) => updateChecklistItem("exterior", "tires", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="tires" className="font-medium">
                                Verificar pneus e estepe
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Verifique o estado e a pressão dos pneus, incluindo o estepe
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="wipers"
                              checked={checklistItems.exterior.wipers}
                              onCheckedChange={(checked) => updateChecklistItem("exterior", "wipers", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="wipers" className="font-medium">
                                Verificar limpadores de para-brisa
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Teste os limpadores e verifique o nível do reservatório de água
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Interior</h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="cleanliness"
                              checked={checklistItems.interior.cleanliness}
                              onCheckedChange={(checked) => updateChecklistItem("interior", "cleanliness", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="cleanliness" className="font-medium">
                                Verificar limpeza geral
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Verifique se o interior do veículo está limpo e em boas condições
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="ac"
                              checked={checklistItems.interior.ac}
                              onCheckedChange={(checked) => updateChecklistItem("interior", "ac", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="ac" className="font-medium">
                                Verificar funcionamento do ar-condicionado
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Teste o ar-condicionado em diferentes velocidades
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="sound"
                              checked={checklistItems.interior.sound}
                              onCheckedChange={(checked) => updateChecklistItem("interior", "sound", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="sound" className="font-medium">
                                Verificar sistema de som
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Teste o rádio, conexão Bluetooth e outras funcionalidades multimídia
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Documentação e Outros</h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="vehicleDocs"
                              checked={checklistItems.documents.vehicleDocs}
                              onCheckedChange={(checked) => updateChecklistItem("documents", "vehicleDocs", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="vehicleDocs" className="font-medium">
                                Verificar documentos do veículo
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Confira se o CRLV está presente no veículo
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="fuel"
                              checked={checklistItems.documents.fuel}
                              onCheckedChange={(checked) => updateChecklistItem("documents", "fuel", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="fuel" className="font-medium">
                                Verificar nível de combustível
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Nível na retirada: {reservation.initialFuel}
                              </p>

                              <div className="mt-2">
                                <Label htmlFor="current-fuel" className="text-sm">
                                  Nível atual:
                                </Label>
                                <select id="current-fuel" className="w-full mt-1 p-2 border rounded-md">
                                  <option value="full">Tanque cheio</option>
                                  <option value="3/4">3/4 do tanque</option>
                                  <option value="1/2">1/2 do tanque</option>
                                  <option value="1/4">1/4 do tanque</option>
                                  <option value="empty">Reserva</option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-2">
                            <Checkbox
                              id="mileage"
                              checked={checklistItems.documents.mileage}
                              onCheckedChange={(checked) => updateChecklistItem("documents", "mileage", checked)}
                            />
                            <div className="grid gap-1.5">
                              <Label htmlFor="mileage" className="font-medium">
                                Registrar quilometragem
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                Quilometragem na retirada: {reservation.initialMileage}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Quilometragem atual: {reservation.currentMileage}
                              </p>

                              <div className="flex items-center gap-2 mt-1">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 text-xs"
                                  onClick={() => setShowCamera(true)}
                                >
                                  <Camera className="h-3.5 w-3.5 mr-1" />
                                  Tirar Foto do Odômetro
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Estado do Veículo</h3>
                        <RadioGroup value={vehicleCondition} onValueChange={setVehicleCondition} className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="perfect" id="perfect" />
                            <Label htmlFor="perfect" className="font-medium">
                              Perfeito estado - Sem danos ou problemas
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="minor" id="minor" />
                            <Label htmlFor="minor" className="font-medium">
                              Pequenos problemas - Desgaste normal de uso
                            </Label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <RadioGroupItem value="issues" id="issues" />
                            <Label htmlFor="issues" className="font-medium">
                              Problemas identificados - Necessita atenção
                            </Label>
                          </div>
                        </RadioGroup>

                        {vehicleCondition === "issues" && (
                          <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-lg">
                            <div className="flex items-start gap-3">
                              <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                              <div>
                                <h3 className="font-medium text-amber-800">Atenção</h3>
                                <p className="text-sm text-amber-700 mt-1">
                                  Por favor, descreva detalhadamente os problemas identificados e anexe fotos. Isso
                                  ajudará na resolução rápida de qualquer disputa.
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="observations">Observações Adicionais</Label>
                        <Textarea
                          id="observations"
                          placeholder="Registre aqui qualquer observação adicional sobre o estado do veículo..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Voltar
                    </Button>
                    <Button onClick={nextStep} disabled={!isChecklistComplete()}>
                      Continuar para Avaliação
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {/* Step 2: Rating */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Avalie sua Experiência</CardTitle>
                    <CardDescription>Compartilhe sua opinião sobre o veículo e o proprietário</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Avaliação do Veículo</h3>
                        <div className="flex items-center gap-2 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              className="focus:outline-none"
                            >
                              <Star
                                className={`h-8 w-8 ${
                                  star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground">
                            {rating === 5
                              ? "Excelente"
                              : rating === 4
                                ? "Muito bom"
                                : rating === 3
                                  ? "Bom"
                                  : rating === 2
                                    ? "Regular"
                                    : "Ruim"}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="vehicle-comment">Comentário sobre o veículo</Label>
                          <Textarea
                            id="vehicle-comment"
                            placeholder="Conte como foi sua experiência com este veículo..."
                            rows={3}
                          />
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Avaliação do Proprietário</h3>
                        <div className="flex items-center gap-2 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button" onClick={() => {}} className="focus:outline-none">
                              <Star
                                className={`h-8 w-8 ${
                                  star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            </button>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="owner-comment">Comentário sobre o proprietário</Label>
                          <Textarea
                            id="owner-comment"
                            placeholder="Como foi sua experiência com o proprietário? Ele foi pontual, prestativo, comunicativo?"
                            rows={3}
                          />
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Info className="h-5 w-5 text-blue-600 mt-1" />
                          <div>
                            <h3 className="font-medium text-blue-800">Sua avaliação é importante</h3>
                            <p className="text-sm text-blue-700 mt-1">
                              Avaliações honestas ajudam outros usuários a tomar decisões informadas e contribuem para a
                              melhoria contínua da plataforma.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Voltar
                    </Button>
                    <Button onClick={nextStep}>Continuar</Button>
                  </CardFooter>
                </Card>
              )}

              {/* Step 3: Confirmation */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Confirmação de Devolução</CardTitle>
                    <CardDescription>Confirme os detalhes finais antes de concluir a devolução</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                          <div>
                            <h3 className="font-medium text-green-800">Checklist Concluído</h3>
                            <p className="text-sm text-green-700 mt-1">
                              Todos os itens do checklist foram verificados e aprovados.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                          <div>
                            <h3 className="font-medium text-green-800">Avaliação Registrada</h3>
                            <p className="text-sm text-green-700 mt-1">
                              Sua avaliação foi registrada e será publicada após a confirmação do proprietário.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Detalhes do Veículo</h3>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Car className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">{reservation.vehicle.name}</div>
                            <div className="text-sm text-muted-foreground">
                              Placa: {reservation.vehicle.plate} | Cor: {reservation.vehicle.color}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Período da Locação</h3>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">
                              {reservation.dates.pickup} a {reservation.dates.return}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Retirada: {reservation.dates.pickupTime} | Devolução: {reservation.dates.returnTime}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Informações Registradas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Clipboard className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-medium">Quilometragem</div>
                              <div className="text-sm text-muted-foreground">
                                Inicial: {reservation.initialMileage}
                                <br />
                                Final: {reservation.currentMileage}
                                <br />
                                Total percorrido: 350 km
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Clipboard className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-medium">Estado do Veículo</div>
                              <div className="text-sm text-muted-foreground">
                                {vehicleCondition === "perfect" && "Perfeito estado - Sem danos ou problemas"}
                                {vehicleCondition === "minor" && "Pequenos problemas - Desgaste normal de uso"}
                                {vehicleCondition === "issues" && "Problemas identificados - Necessita atenção"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Liberação do Caução</h3>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <CreditCard className="h-5 w-5 text-blue-600" />
                              <span>Valor do caução</span>
                            </div>
                            <span className="font-medium">R$ {reservation.deposit}</span>
                          </div>

                          {vehicleCondition === "perfect" ? (
                            <div className="mt-2 flex items-center gap-2 text-green-600">
                              <CheckCircle className="h-4 w-4" />
                              <span className="text-sm">Caução será liberado integralmente em até 3 dias úteis</span>
                            </div>
                          ) : vehicleCondition === "minor" ? (
                            <div className="mt-2 flex items-center gap-2 text-amber-600">
                              <AlertTriangle className="h-4 w-4" />
                              <span className="text-sm">Caução será liberado após avaliação do proprietário</span>
                            </div>
                          ) : (
                            <div className="mt-2 flex items-center gap-2 text-red-600">
                              <AlertTriangle className="h-4 w-4" />
                              <span className="text-sm">
                                Caução será retido até resolução dos problemas identificados
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Info className="h-5 w-5 text-blue-600 mt-1" />
                          <div>
                            <h3 className="font-medium text-blue-800">Próximos Passos</h3>
                            <p className="text-sm text-blue-700 mt-1">
                              Após confirmar a devolução, o proprietário terá 24 horas para aprovar o estado do veículo.
                              Se não houver contestação, o caução será liberado automaticamente.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Voltar
                    </Button>
                    <Button onClick={() => setShowConfirmation(true)}>Confirmar Devolução</Button>
                  </CardFooter>
                </Card>
              )}
            </div>

            {/* Reservation Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Resumo da Reserva</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image src="/placeholder.svg" alt={reservation.vehicle.name} fill className="object-cover" />
                  </div>

                  <div>
                    <div className="font-medium text-lg">{reservation.vehicle.name}</div>
                    <div className="text-sm text-muted-foreground">Placa: {reservation.vehicle.plate}</div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {reservation.dates.pickup} - {reservation.dates.return}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{reservation.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Devolução: {reservation.dates.returnTime}</span>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Proprietário:</span>
                      <span className="text-sm font-medium">{reservation.owner.name}</span>
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Ligar para Proprietário
                    </Button>

                    <Button variant="outline" size="sm" className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2 text-sm">
                      <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span className="text-blue-700">
                        Suporte disponível 24h em caso de problemas durante a devolução.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Camera Dialog */}
          <Dialog open={showCamera} onOpenChange={setShowCamera}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Tirar Foto</DialogTitle>
                <DialogDescription>Use a câmera para registrar o estado do veículo</DialogDescription>
              </DialogHeader>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <Camera className="h-12 w-12 text-gray-400" />
              </div>
              <DialogFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setShowCamera(false)}>
                  Cancelar
                </Button>
                <Button onClick={() => setShowCamera(false)}>Tirar Foto</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Confirmation Dialog */}
          <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirmar Devolução do Veículo</AlertDialogTitle>
                <AlertDialogDescription>
                  Ao confirmar, você declara que devolveu o veículo {reservation.vehicle.name}, placa{" "}
                  {reservation.vehicle.plate}, nas condições descritas no checklist.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={completeReturn}>Confirmar Devolução</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Success Dialog */}
          <AlertDialog open={returnComplete} onOpenChange={setReturnComplete}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Devolução Concluída!
                </AlertDialogTitle>
                <AlertDialogDescription>
                  A devolução do veículo foi registrada com sucesso! O proprietário será notificado e avaliará o estado
                  do veículo.
                  {vehicleCondition === "perfect" && " O caução será liberado em até 3 dias úteis."}
                  {vehicleCondition === "minor" && " O caução será liberado após a avaliação do proprietário."}
                  {vehicleCondition === "issues" &&
                    " O caução será retido até a resolução dos problemas identificados."}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Número da Reserva:</span>
                  <span>{reservation.id}</span>
                </div>
              </div>
              <AlertDialogFooter>
                <Button onClick={() => router.push("/dashboard/renter/reservas")} className="w-full">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Ver Minhas Reservas
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}

