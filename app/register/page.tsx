"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import {
  UploadIcon as FileUpload,
  User,
  Mail,
  Lock,
  Phone,
  CreditCard,
  Car,
  BikeIcon as Motorcycle,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Camera,
  Info,
  ThumbsUp,
  Star,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState("both")
  const [registrationSource, setRegistrationSource] = useState<string | null>(null)
  const [documentStatus, setDocumentStatus] = useState({
    frontId: false,
    backId: false,
    selfie: false,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }))

    // Limpar erro do campo quando o usuário digita
    if (formErrors[id]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[id]
        return newErrors
      })
    }
  }

  const validateStep1 = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = "Nome é obrigatório"
    }

    if (!formData.email.trim()) {
      errors.email = "Email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email inválido"
    }

    if (!formData.phone.trim()) {
      errors.phone = "Telefone é obrigatório"
    }

    if (!formData.password) {
      errors.password = "Senha é obrigatória"
    } else if (formData.password.length < 6) {
      errors.password = "A senha deve ter pelo menos 6 caracteres"
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "As senhas não coincidem"
    }

    if (!formData.termsAccepted) {
      errors.terms = "Você precisa aceitar os termos"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Determinar o tipo de usuário com base no parâmetro da URL
  useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const source = params.get("source")
      if (source === "register") {
        setUserType("owner")
      } else if (source === "rent") {
        setUserType("renter")
      }
      if (source) {
        setRegistrationSource(source)
      }
    }
  })

  // Check if there's a registration source in the URL
  useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)
      const source = params.get("source")
      if (source === "register") {
        setUserType("owner")
      } else if (source === "rent") {
        setUserType("renter")
      }
      if (source) {
        setRegistrationSource(source)
      }
    }
  })

  const nextStep = () => {
    if (step === 1) {
      if (!validateStep1()) {
        return
      }

      setIsSubmitting(true)

      // Simular verificação de email/telefone
      setTimeout(() => {
        setIsSubmitting(false)
        setStep(step + 1)
      }, 1000)
    } else {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleDocumentUpload = (documentType: "frontId" | "backId" | "selfie") => {
    // Simulate document upload
    setDocumentStatus((prev) => ({
      ...prev,
      [documentType]: true,
    }))
  }

  const getProgressValue = () => {
    return (step / 3) * 100
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-md mx-auto px-4">
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-6">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-2xl font-bold">Criar Conta</CardTitle>
              <div className="text-sm text-muted-foreground">Passo {step} de 3</div>
            </div>
            <Progress value={getProgressValue()} className="h-2 bg-gray-100" />
            <CardDescription className="mt-4">
              {step === 1 && "Preencha seus dados pessoais para criar sua conta."}
              {step === 2 && "Envie seus documentos para verificação de segurança."}
              {step === 3 && "Escolha como deseja utilizar a plataforma."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Digite seu nome completo"
                      className={`pl-10 ${formErrors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu email"
                      className={`pl-10 ${formErrors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="(00) 00000-0000"
                      className={`pl-10 ${formErrors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Crie uma senha forte"
                      className={`pl-10 ${formErrors.password ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirme sua senha"
                      className={`pl-10 ${formErrors.confirmPassword ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                  {formErrors.confirmPassword && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox
                    id="terms"
                    checked={formData.termsAccepted}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, termsAccepted: checked === true }))}
                    className={formErrors.terms ? "border-red-500 text-red-500" : ""}
                  />
                  <Label htmlFor="terms" className="text-sm font-normal">
                    Concordo com os{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Termos de Uso
                    </Link>{" "}
                    e{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Política de Privacidade
                    </Link>
                  </Label>
                </div>
                {formErrors.terms && <p className="text-red-500 text-xs mt-1">{formErrors.terms}</p>}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Por que precisamos dos seus documentos?</p>
                      <p>
                        Para garantir a segurança de todos os usuários, precisamos verificar sua identidade. Seus
                        documentos são criptografados e tratados com total confidencialidade.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="flex items-center justify-between">
                      <span>RG ou CNH (frente)</span>
                      {documentStatus.frontId && (
                        <span className="flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" /> Enviado
                        </span>
                      )}
                    </Label>
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-blue-50 transition-colors ${documentStatus.frontId ? "border-green-300 bg-green-50" : "border-gray-200"}`}
                      onClick={() => handleDocumentUpload("frontId")}
                    >
                      {documentStatus.frontId ? (
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      ) : (
                        <FileUpload className="h-10 w-10 text-blue-500" />
                      )}
                      <p className="text-sm text-center font-medium">
                        {documentStatus.frontId
                          ? "Documento enviado com sucesso"
                          : "Clique para fazer upload ou arraste o arquivo"}
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG ou PDF (max. 5MB)</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center justify-between">
                      <span>RG ou CNH (verso)</span>
                      {documentStatus.backId && (
                        <span className="flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" /> Enviado
                        </span>
                      )}
                    </Label>
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-blue-50 transition-colors ${documentStatus.backId ? "border-green-300 bg-green-50" : "border-gray-200"}`}
                      onClick={() => handleDocumentUpload("backId")}
                    >
                      {documentStatus.backId ? (
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      ) : (
                        <FileUpload className="h-10 w-10 text-blue-500" />
                      )}
                      <p className="text-sm text-center font-medium">
                        {documentStatus.backId
                          ? "Documento enviado com sucesso"
                          : "Clique para fazer upload ou arraste o arquivo"}
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG ou PDF (max. 5MB)</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="flex items-center justify-between">
                      <span>Selfie com documento</span>
                      {documentStatus.selfie && (
                        <span className="flex items-center text-sm text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" /> Enviado
                        </span>
                      )}
                    </Label>
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-blue-50 transition-colors ${documentStatus.selfie ? "border-green-300 bg-green-50" : "border-gray-200"}`}
                      onClick={() => handleDocumentUpload("selfie")}
                    >
                      {documentStatus.selfie ? (
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      ) : (
                        <Camera className="h-10 w-10 text-blue-500" />
                      )}
                      <p className="text-sm text-center font-medium">
                        {documentStatus.selfie
                          ? "Selfie enviada com sucesso"
                          : "Tire uma selfie segurando seu documento"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        A foto deve mostrar claramente seu rosto e o documento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                {registrationSource === "rent" && (
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-2">
                    <div className="flex">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-blue-800">
                        Você está se cadastrando para alugar um veículo. Você também pode disponibilizar seus próprios
                        veículos para aluguel.
                      </p>
                    </div>
                  </div>
                )}

                {registrationSource === "register" && (
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-2">
                    <div className="flex">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      <p className="text-sm text-blue-800">
                        Você está se cadastrando para disponibilizar seu veículo. Você também pode alugar veículos de
                        outros usuários.
                      </p>
                    </div>
                  </div>
                )}

                <p className="text-sm text-muted-foreground mb-4">
                  Como você deseja utilizar nossa plataforma? Você pode alterar esta opção posteriormente.
                </p>

                <Tabs
                  defaultValue={
                    registrationSource === "register" ? "owner" : registrationSource === "rent" ? "renter" : "both"
                  }
                  onValueChange={setUserType}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="owner">Proprietário</TabsTrigger>
                    <TabsTrigger value="renter">Locatário</TabsTrigger>
                    <TabsTrigger value="both">Ambos</TabsTrigger>
                  </TabsList>

                  <TabsContent value="owner" className="p-4 border rounded-lg mt-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Car className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Proprietário</h3>
                        <p className="text-sm text-muted-foreground">
                          Disponibilize seus veículos para aluguel e ganhe dinheiro extra
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="vehicle-count">Quantos veículos você pretende cadastrar?</Label>
                        <Select defaultValue="1">
                          <SelectTrigger id="vehicle-count">
                            <SelectValue placeholder="Selecione a quantidade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 veículo</SelectItem>
                            <SelectItem value="2-3">2 a 3 veículos</SelectItem>
                            <SelectItem value="4-10">4 a 10 veículos</SelectItem>
                            <SelectItem value="10+">Mais de 10 veículos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="vehicle-type">Que tipo de veículos você possui?</Label>
                        <Select defaultValue="car">
                          <SelectTrigger id="vehicle-type">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="car">Apenas carros</SelectItem>
                            <SelectItem value="motorcycle">Apenas motos</SelectItem>
                            <SelectItem value="both">Carros e motos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="availability">Disponibilidade para aluguel</Label>
                        <Select defaultValue="weekends">
                          <SelectTrigger id="availability">
                            <SelectValue placeholder="Selecione a disponibilidade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Tempo integral</SelectItem>
                            <SelectItem value="weekends">Apenas fins de semana</SelectItem>
                            <SelectItem value="weekdays">Apenas dias úteis</SelectItem>
                            <SelectItem value="occasional">Ocasionalmente</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                        <div className="flex">
                          <Info className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0" />
                          <p className="text-sm text-amber-800">
                            Após o cadastro, você poderá adicionar seus veículos e configurar preços, disponibilidade e
                            regras de aluguel.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="renter" className="p-4 border rounded-lg mt-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <CreditCard className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Locatário</h3>
                        <p className="text-sm text-muted-foreground">
                          Alugue veículos de outros usuários quando precisar
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="rental-purpose">Principal motivo para alugar</Label>
                        <Select defaultValue="travel">
                          <SelectTrigger id="rental-purpose">
                            <SelectValue placeholder="Selecione o motivo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="travel">Viagens e turismo</SelectItem>
                            <SelectItem value="business">Negócios e trabalho</SelectItem>
                            <SelectItem value="replacement">Substituição temporária</SelectItem>
                            <SelectItem value="test">Teste antes de comprar</SelectItem>
                            <SelectItem value="other">Outro motivo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferred-vehicle">Tipo de veículo que mais interessa</Label>
                        <Select defaultValue="car">
                          <SelectTrigger id="preferred-vehicle">
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="car">Carros</SelectItem>
                            <SelectItem value="motorcycle">Motos</SelectItem>
                            <SelectItem value="both">Ambos</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="rental-frequency">Com que frequência pretende alugar?</Label>
                        <Select defaultValue="monthly">
                          <SelectTrigger id="rental-frequency">
                            <SelectValue placeholder="Selecione a frequência" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekly">Semanalmente</SelectItem>
                            <SelectItem value="monthly">Mensalmente</SelectItem>
                            <SelectItem value="quarterly">A cada 3 meses</SelectItem>
                            <SelectItem value="occasionally">Ocasionalmente</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                        <div className="flex">
                          <ThumbsUp className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                          <p className="text-sm text-green-800">
                            Após o cadastro, você poderá buscar veículos disponíveis, fazer reservas e entrar em contato
                            com proprietários.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="both" className="p-4 border rounded-lg mt-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <div className="relative">
                          <Car className="h-6 w-6 text-blue-600" />
                          <Motorcycle className="h-4 w-4 text-blue-600 absolute -bottom-1 -right-1" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Ambos</h3>
                        <p className="text-sm text-muted-foreground">
                          Disponibilize seus veículos e alugue de outros usuários
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="vehicle-count-both">Veículos para cadastrar</Label>
                          <Select defaultValue="1">
                            <SelectTrigger id="vehicle-count-both">
                              <SelectValue placeholder="Quantidade" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 veículo</SelectItem>
                              <SelectItem value="2-3">2 a 3 veículos</SelectItem>
                              <SelectItem value="4+">4 ou mais</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="rental-frequency-both">Frequência de aluguel</Label>
                          <Select defaultValue="monthly">
                            <SelectTrigger id="rental-frequency-both">
                              <SelectValue placeholder="Frequência" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="weekly">Semanal</SelectItem>
                              <SelectItem value="monthly">Mensal</SelectItem>
                              <SelectItem value="occasionally">Ocasional</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
                        <div className="flex">
                          <Star className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                          <p className="text-sm text-purple-800">
                            Você terá acesso a todos os recursos da plataforma, podendo tanto disponibilizar seus
                            veículos quanto alugar de outros usuários.
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
                  <h4 className="font-medium mb-2">Próximos passos:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">Verificaremos seus documentos (geralmente em até 24 horas)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">
                        Você receberá um email de confirmação quando sua conta for aprovada
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span className="text-sm">
                        Após aprovação, você poderá{" "}
                        {userType === "owner"
                          ? "cadastrar seus veículos"
                          : userType === "renter"
                            ? "alugar veículos"
                            : "cadastrar e alugar veículos"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between pt-2">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep} className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            ) : (
              <Link href="/login">
                <Button variant="outline" className="flex items-center">
                  Já tenho conta
                </Button>
              </Link>
            )}

            {step < 3 ? (
              <Button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processando...
                  </>
                ) : (
                  <>
                    Continuar
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            ) : (
              <Button className="bg-blue-600 hover:bg-blue-700">Finalizar Cadastro</Button>
            )}
          </CardFooter>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Ao criar uma conta, você concorda com nossos{" "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Termos de Uso
          </Link>{" "}
          e{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Política de Privacidade
          </Link>
          .
        </div>
      </div>
    </div>
  )
}

