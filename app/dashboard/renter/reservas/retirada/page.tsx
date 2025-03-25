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
  User,
  Phone,
  MessageSquare,
  Upload,
  X,
  Info,
  Shield,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function RetiradaVeiculoPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [showCamera, setShowCamera] = useState(false)
  const [showContract, setShowContract] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [checklistCompleted, setChecklistCompleted] = useState(false)
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

  // Finalizar o processo de retirada
  const completePickup = () => {
    setShowConfirmation(false)
    // Em um app real, aqui enviaríamos os dados para o backend
    router.push("/dashboard/renter/reservas")
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Retirada do Veículo</h1>
            <p className="text-muted-foreground">Complete o checklist e assine o contrato para retirar o veículo</p>
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
                <span className={currentStep >= 2 ? "font-medium" : "text-muted-foreground"}>Contrato</span>
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
                    <CardTitle>Checklist de Verificação</CardTitle>
                    <CardDescription>
                      Verifique cada item junto com o proprietário antes de retirar o veículo
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
                                Inspecione toda a carroceria do veículo e registre qualquer dano existente
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
                                Confira se o CRLV está em dia e dentro do veículo
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
                                Registre o nível atual de combustível: {reservation.initialFuel}
                              </p>
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
                                Quilometragem atual: {reservation.initialMileage}
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

                      <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                          <div>
                            <h3 className="font-medium text-amber-800">Importante</h3>
                            <p className="text-sm text-amber-700 mt-1">
                              Registre qualquer dano ou problema existente antes de retirar o veículo. Isso evitará
                              cobranças indevidas na devolução.
                            </p>
                          </div>
                        </div>
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
                      Continuar para Contrato
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {/* Step 2: Contract */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Contrato de Locação</CardTitle>
                    <CardDescription>Leia e assine o contrato digital para formalizar a locação</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border rounded-lg p-4 h-96 overflow-y-auto">
                      <h3 className="font-bold text-center mb-4">CONTRATO DE LOCAÇÃO DE VEÍCULO</h3>

                      <p className="mb-4">
                        Este Contrato de Locação de Veículo ("Contrato") é celebrado entre a VrumGo, doravante
                        denominada "LOCADORA", e o cliente cadastrado na plataforma, doravante denominado "LOCATÁRIO".
                      </p>

                      <h4 className="font-medium mb-2">1. OBJETO</h4>
                      <p className="mb-4">
                        O objeto deste Contrato é o aluguel do veículo {reservation.vehicle.name}, placa{" "}
                        {reservation.vehicle.plate}, ano {reservation.vehicle.year}, cor {reservation.vehicle.color},
                        que será utilizado pelo LOCATÁRIO exclusivamente para fins civis, sendo vedada a sublocação.
                      </p>

                      <h4 className="font-medium mb-2">2. PRAZO</h4>
                      <p className="mb-4">
                        O prazo de locação é de {reservation.dates.pickup} a {reservation.dates.return}, com retirada às{" "}
                        {reservation.dates.pickupTime} e devolução às {reservation.dates.returnTime}, podendo ser
                        prorrogado mediante acordo prévio entre as partes.
                      </p>

                      <h4 className="font-medium mb-2">3. PREÇO E FORMA DE PAGAMENTO</h4>
                      <p className="mb-4">
                        O valor da locação será aquele apresentado no momento da reserva, incluindo a diária do veículo
                        e taxas adicionais. O pagamento já foi processado através da plataforma VrumGo.
                      </p>

                      <h4 className="font-medium mb-2">4. OBRIGAÇÕES DO LOCATÁRIO</h4>
                      <p className="mb-2">O LOCATÁRIO se obriga a:</p>
                      <ul className="list-disc pl-5 mb-4 space-y-1">
                        <li>Devolver o veículo na data e local acordados;</li>
                        <li>Utilizar o veículo de acordo com sua destinação;</li>
                        <li>Arcar com as despesas de combustível;</li>
                        <li>Respeitar as leis de trânsito;</li>
                        <li>Não fumar dentro do veículo;</li>
                        <li>Comunicar imediatamente qualquer acidente ou dano.</li>
                      </ul>

                      <h4 className="font-medium mb-2">5. SEGURO</h4>
                      <p className="mb-4">
                        O veículo está coberto por seguro básico, conforme detalhado na reserva. Coberturas adicionais
                        podem ter sido contratadas separadamente.
                      </p>

                      <h4 className="font-medium mb-2">6. MULTAS E INFRAÇÕES</h4>
                      <p className="mb-4">
                        O LOCATÁRIO é responsável por todas as multas e infrações cometidas durante o período de
                        locação.
                      </p>

                      <h4 className="font-medium mb-2">7. RESCISÃO</h4>
                      <p className="mb-4">
                        Este Contrato poderá ser rescindido por qualquer das partes em caso de descumprimento de suas
                        cláusulas.
                      </p>

                      <h4 className="font-medium mb-2">8. FORO</h4>
                      <p className="mb-4">
                        Fica eleito o foro da comarca de São Paulo para dirimir quaisquer dúvidas ou controvérsias
                        oriundas deste Contrato.
                      </p>

                      <p className="mb-4">
                        E, por estarem assim justas e contratadas, as partes assinam o presente Contrato
                        eletronicamente.
                      </p>

                      <p className="mb-4">São Paulo, {reservation.dates.pickup}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="agree-contract" required />
                        <label
                          htmlFor="agree-contract"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Li e concordo com os termos do contrato
                        </label>
                      </div>

                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Assinatura Digital</h3>
                        <div className="h-32 border-dashed border-2 rounded-lg flex items-center justify-center mb-2">
                          <p className="text-muted-foreground text-sm">Assine aqui</p>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          <X className="h-4 w-4 mr-2" />
                          Limpar Assinatura
                        </Button>
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
                    <CardTitle>Confirmação de Retirada</CardTitle>
                    <CardDescription>Confirme os detalhes finais antes de retirar o veículo</CardDescription>
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
                            <h3 className="font-medium text-green-800">Contrato Assinado</h3>
                            <p className="text-sm text-green-700 mt-1">
                              O contrato de locação foi assinado digitalmente.
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
                        <h3 className="font-medium">Local de Retirada</h3>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <MapPin className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">{reservation.location}</div>
                            <div className="text-sm text-muted-foreground">
                              Ponto de encontro: {reservation.meetingPoint}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Proprietário</h3>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <User className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">{reservation.owner.name}</div>
                            <div className="text-sm text-muted-foreground">Telefone: {reservation.owner.phone}</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Informações Registradas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Clipboard className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-medium">Nível de Combustível</div>
                              <div className="text-sm text-muted-foreground">{reservation.initialFuel}</div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Clipboard className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-medium">Quilometragem</div>
                              <div className="text-sm text-muted-foreground">{reservation.initialMileage}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Info className="h-5 w-5 text-blue-600 mt-1" />
                          <div>
                            <h3 className="font-medium text-blue-800">Próximos Passos</h3>
                            <p className="text-sm text-blue-700 mt-1">
                              Após confirmar a retirada, você poderá utilizar o veículo conforme o contrato. Lembre-se
                              de devolvê-lo no local e horário combinados.
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
                    <Button onClick={() => setShowConfirmation(true)}>Confirmar Retirada</Button>
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
                    <span>Retirada: {reservation.dates.pickupTime}</span>
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
                        Lembre-se: o veículo está protegido pelo seguro da plataforma durante todo o período de locação.
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

          {/* Contract Dialog */}
          <Dialog open={showContract} onOpenChange={setShowContract}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Contrato de Locação</DialogTitle>
                <DialogDescription>Leia atentamente todos os termos do contrato</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">{/* Conteúdo do contrato */}</div>
              <DialogFooter>
                <Button onClick={() => setShowContract(false)}>Fechar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Confirmation Dialog */}
          <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirmar Retirada do Veículo</AlertDialogTitle>
                <AlertDialogDescription>
                  Ao confirmar, você declara que verificou todos os itens do checklist e concorda com o estado atual do
                  veículo {reservation.vehicle.name}, placa {reservation.vehicle.plate}.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={completePickup}>Confirmar Retirada</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}

