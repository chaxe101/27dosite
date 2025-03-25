"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
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
  CreditCard,
  CheckCircle,
  Shield,
  AlertTriangle,
  MapPin,
  Clock,
  Info,
  Landmark,
  Wallet,
  QrCode,
  Receipt,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function ConfirmarReservaPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card")
  const [additionalInsurance, setAdditionalInsurance] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [reservationComplete, setReservationComplete] = useState(false)

  const userName = "João Silva"
  const userEmail = "joao@email.com"

  // Dados simulados da reserva
  const reservation = {
    id: "RES-12345",
    vehicle: {
      name: "Honda Civic 2022",
      image: "/placeholder.svg",
      plate: "ABC-1234",
      price: 120,
    },
    owner: {
      name: "Ricardo Pereira",
      rating: 4.9,
    },
    dates: {
      pickup: "25/03/2025",
      return: "28/03/2025",
      days: 3,
    },
    location: "São Paulo, SP - Zona Sul",
    meetingPoint: "Estacionamento do Shopping Ibirapuera",
    costs: {
      dailyRate: 120,
      serviceFee: 36,
      deposit: 500,
      additionalInsurance: 45,
    },
  }

  // Calcular o total sem seguro adicional
  const calculateSubtotal = () => {
    return reservation.costs.dailyRate * reservation.dates.days + reservation.costs.serviceFee
  }

  // Calcular o total com todas as taxas
  const calculateTotal = () => {
    let total = calculateSubtotal()
    if (additionalInsurance) {
      total += reservation.costs.additionalInsurance
    }
    return total
  }

  // Avançar para o próximo passo
  const nextStep = () => {
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

  // Finalizar a reserva
  const completeReservation = () => {
    setShowConfirmation(false)
    setReservationComplete(true)

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
            <h1 className="text-2xl font-bold mb-2">Confirmar Reserva</h1>
            <p className="text-muted-foreground">Complete os passos abaixo para finalizar sua reserva</p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  1
                </div>
                <span className={currentStep >= 1 ? "font-medium" : "text-muted-foreground"}>Pagamento</span>
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
                <span className={currentStep >= 2 ? "font-medium" : "text-muted-foreground"}>Seguro</span>
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
            <Progress value={(currentStep / 3) * 100} className="h-2" />
          </div>

          {/* Reservation Summary Card - Always visible */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-2">
              {/* Step 1: Payment Method */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Método de Pagamento</CardTitle>
                    <CardDescription>Escolha como deseja pagar por esta reserva</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="credit-card" id="credit-card" />
                        <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">Cartão de Crédito</div>
                            <div className="text-sm text-muted-foreground">Visa, Mastercard, Elo, American Express</div>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                        <Label htmlFor="bank-transfer" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Landmark className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">Transferência Bancária</div>
                            <div className="text-sm text-muted-foreground">Pix, TED, DOC</div>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                        <RadioGroupItem value="digital-wallet" id="digital-wallet" />
                        <Label htmlFor="digital-wallet" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Wallet className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">Carteira Digital</div>
                            <div className="text-sm text-muted-foreground">PayPal, PicPay, Mercado Pago</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "credit-card" && (
                      <div className="mt-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Número do Cartão</Label>
                            <Input id="card-number" placeholder="0000 0000 0000 0000" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="card-name">Nome no Cartão</Label>
                            <Input id="card-name" placeholder="Nome como aparece no cartão" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Data de Validade</Label>
                            <Input id="expiry" placeholder="MM/AA" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="save-card" />
                          <label
                            htmlFor="save-card"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Salvar cartão para futuras reservas
                          </label>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "bank-transfer" && (
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-blue-800">Instruções para Transferência</p>
                            <p className="text-sm text-blue-700 mt-1">
                              Após clicar em "Continuar", você receberá as informações para realizar o pagamento via Pix
                              ou transferência bancária.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "digital-wallet" && (
                      <div className="mt-6 flex flex-col items-center justify-center p-6 border rounded-lg">
                        <QrCode className="h-32 w-32 text-blue-600 mb-4" />
                        <p className="text-center text-sm text-muted-foreground">
                          Escaneie o QR code com seu aplicativo de pagamento ou clique em "Continuar" para ser
                          redirecionado.
                        </p>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Voltar
                    </Button>
                    <Button onClick={nextStep}>Continuar</Button>
                  </CardFooter>
                </Card>
              )}

              {/* Step 2: Insurance Options */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Opções de Seguro</CardTitle>
                    <CardDescription>Escolha a proteção ideal para sua viagem</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Shield className="h-5 w-5 text-green-600 mt-1" />
                          <div>
                            <h3 className="font-medium text-green-800">Seguro Básico (Incluído)</h3>
                            <p className="text-sm text-green-700 mt-1">
                              Proteção contra danos de terceiros e assistência 24h em caso de pane ou acidente.
                            </p>
                            <ul className="mt-2 space-y-1 text-sm text-green-700">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                                <span>Cobertura de responsabilidade civil</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                                <span>Assistência 24h para guincho e serviços emergenciais</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                                <span>Proteção contra roubo (com franquia)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="pt-1">
                            <Checkbox
                              id="additional-insurance"
                              checked={additionalInsurance}
                              onCheckedChange={(checked) => setAdditionalInsurance(checked as boolean)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="additional-insurance" className="font-medium cursor-pointer">
                              Seguro Premium (+ R$ {reservation.costs.additionalInsurance})
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Proteção completa com franquia reduzida e cobertura para danos ao veículo.
                            </p>
                            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                                <span>Tudo do seguro básico</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                                <span>Franquia reduzida em 70% em caso de sinistro</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                                <span>Cobertura para danos ao veículo</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                                <span>Proteção para vidros, faróis e retrovisores</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                                <span>Carro reserva por até 7 dias em caso de sinistro</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-amber-600 mt-1" />
                          <div>
                            <h3 className="font-medium text-amber-800">Importante</h3>
                            <p className="text-sm text-amber-700 mt-1">
                              Independente da opção de seguro, será bloqueado um valor caução de R${" "}
                              {reservation.costs.deposit} no seu cartão, que será desbloqueado após a devolução do
                              veículo em perfeitas condições.
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
                    <CardTitle>Confirmar Reserva</CardTitle>
                    <CardDescription>Revise os detalhes da sua reserva antes de finalizar</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="font-medium">Detalhes do Veículo</h3>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Car className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">{reservation.vehicle.name}</div>
                            <div className="text-sm text-muted-foreground">Placa: {reservation.vehicle.plate}</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Período da Reserva</h3>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">
                              {reservation.dates.pickup} a {reservation.dates.return}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {reservation.dates.days} {reservation.dates.days === 1 ? "dia" : "dias"} de locação
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Local de Retirada e Devolução</h3>
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
                        <h3 className="font-medium">Método de Pagamento</h3>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          {paymentMethod === "credit-card" && <CreditCard className="h-5 w-5 text-blue-600" />}
                          {paymentMethod === "bank-transfer" && <Landmark className="h-5 w-5 text-blue-600" />}
                          {paymentMethod === "digital-wallet" && <Wallet className="h-5 w-5 text-blue-600" />}
                          <div>
                            <div className="font-medium">
                              {paymentMethod === "credit-card" && "Cartão de Crédito"}
                              {paymentMethod === "bank-transfer" && "Transferência Bancária"}
                              {paymentMethod === "digital-wallet" && "Carteira Digital"}
                            </div>
                            {paymentMethod === "credit-card" && (
                              <div className="text-sm text-muted-foreground">Cartão terminado em **** 1234</div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Proteção Selecionada</h3>
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Shield className="h-5 w-5 text-blue-600" />
                          <div>
                            <div className="font-medium">
                              {additionalInsurance ? "Seguro Premium" : "Seguro Básico"}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {additionalInsurance
                                ? "Proteção completa com franquia reduzida"
                                : "Proteção básica incluída na reserva"}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Próximos Passos</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                              1
                            </div>
                            <div>
                              <div className="font-medium">Confirmação da Reserva</div>
                              <div className="text-sm text-muted-foreground">
                                Você receberá um e-mail com todos os detalhes da sua reserva.
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                              2
                            </div>
                            <div>
                              <div className="font-medium">Contato com o Proprietário</div>
                              <div className="text-sm text-muted-foreground">
                                O proprietário entrará em contato para confirmar o local e horário de retirada.
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                              3
                            </div>
                            <div>
                              <div className="font-medium">Retirada do Veículo</div>
                              <div className="text-sm text-muted-foreground">
                                No dia da retirada, você e o proprietário preencherão o checklist digital.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Concordo com os{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Termos de Uso
                          </a>{" "}
                          e{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Política de Privacidade
                          </a>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={prevStep}>
                      Voltar
                    </Button>
                    <Button onClick={() => setShowConfirmation(true)}>Finalizar Reserva</Button>
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
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                      <Car className="h-6 w-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium">{reservation.vehicle.name}</div>
                      <div className="text-sm text-muted-foreground">Proprietário: {reservation.owner.name}</div>
                    </div>
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
                    <span>
                      {reservation.dates.days} {reservation.dates.days === 1 ? "dia" : "dias"} de locação
                    </span>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>
                        Diária x {reservation.dates.days} {reservation.dates.days === 1 ? "dia" : "dias"}
                      </span>
                      <span>R$ {reservation.costs.dailyRate * reservation.dates.days}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Taxa de serviço</span>
                      <span>R$ {reservation.costs.serviceFee}</span>
                    </div>
                    {additionalInsurance && (
                      <div className="flex justify-between text-sm">
                        <span>Seguro Premium</span>
                        <span>R$ {reservation.costs.additionalInsurance}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Subtotal</span>
                      <span>R$ {calculateTotal()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Caução (bloqueado)</span>
                      <span>R$ {reservation.costs.deposit}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2 text-sm">
                      <Info className="h-4 w-4 text-blue-600 mt-0.5" />
                      <span className="text-blue-700">
                        O valor do caução será desbloqueado após a devolução do veículo em perfeitas condições.
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Confirmation Dialog */}
          <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirmar Reserva</AlertDialogTitle>
                <AlertDialogDescription>
                  Você está prestes a finalizar a reserva do veículo {reservation.vehicle.name} por{" "}
                  {reservation.dates.days} dias. O valor total a ser pago agora é de R$ {calculateTotal()}. Além disso,
                  um caução de R$ {reservation.costs.deposit} será bloqueado no seu cartão.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction onClick={completeReservation}>Confirmar Reserva</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          {/* Success Dialog */}
          <AlertDialog open={reservationComplete} onOpenChange={setReservationComplete}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Reserva Confirmada!
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Sua reserva foi realizada com sucesso! Enviamos um e-mail com todos os detalhes. O proprietário
                  entrará em contato em breve para combinar a retirada do veículo.
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
                  <Receipt className="h-4 w-4 mr-2" />
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

