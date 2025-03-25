"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Lock, Smartphone, ArrowRight, KeyRound } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [verificationMethod, setVerificationMethod] = useState("sms")
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validação básica
    if (!email.trim()) {
      setError("Por favor, informe seu email")
      return
    }

    if (!password) {
      setError("Por favor, informe sua senha")
      return
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Por favor, informe um email válido")
      return
    }

    setIsSubmitting(true)

    try {
      // Simular uma chamada de API com um pequeno atraso
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Simulação de login bem-sucedido
      // Em um app real, isso seria uma chamada à API de autenticação
      setStep(2)
    } catch (err) {
      setError("Ocorreu um erro ao fazer login. Tente novamente.")
      console.error("Erro de login:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleVerificationCodeChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.charAt(0)
    }

    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) {
        nextInput.focus()
      }
    }
  }

  const handleVerificationCodeKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  const handleVerifyCode = () => {
    // Simulate successful verification
    router.push("/dashboard")
  }

  const isCodeComplete = verificationCode.every((digit) => digit !== "")

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-md mx-auto px-4">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {step === 1 ? "Fazer Login" : "Verificação em Duas Etapas"}
            </CardTitle>
            <CardDescription>
              {step === 1
                ? "Entre com suas credenciais para acessar sua conta."
                : "Por segurança, precisamos verificar sua identidade."}
            </CardDescription>
          </CardHeader>

          {step === 1 && (
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Digite seu email"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Digite sua senha"
                      className="pl-10"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {error && <div className="bg-red-50 text-red-600 p-2 rounded-md text-sm">{error}</div>}

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Lembrar de mim
                  </Label>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-4">
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Entrando...
                    </>
                  ) : (
                    <>
                      Entrar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <div className="text-center text-sm">
                  Não tem uma conta?{" "}
                  <Link href="/register" className="text-blue-600 hover:underline">
                    Criar conta
                  </Link>
                </div>
              </CardFooter>
            </form>
          )}

          {step === 2 && (
            <>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <div className="flex">
                    <KeyRound className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <p className="text-sm text-blue-800">
                      Para sua segurança, enviamos um código de verificação. Este processo ajuda a proteger sua conta
                      contra acessos não autorizados.
                    </p>
                  </div>
                </div>

                <Tabs defaultValue="sms" onValueChange={setVerificationMethod} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="sms">SMS</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                  </TabsList>

                  <TabsContent value="sms" className="mt-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-muted-foreground" />
                        <p className="text-sm">
                          Enviamos um código de 6 dígitos para <span className="font-medium">+55 (11) *****-1234</span>
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="email" className="mt-4">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <p className="text-sm">
                          Enviamos um código de 6 dígitos para <span className="font-medium">u****@email.com</span>
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-4">
                  <Label htmlFor="verification-code">Digite o código de verificação</Label>
                  <div className="flex justify-between gap-2">
                    {verificationCode.map((digit, index) => (
                      <Input
                        key={index}
                        id={`code-${index}`}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={1}
                        className="w-12 h-12 text-center text-lg font-bold"
                        value={digit}
                        onChange={(e) => handleVerificationCodeChange(index, e.target.value)}
                        onKeyDown={(e) => handleVerificationCodeKeyDown(index, e)}
                      />
                    ))}
                  </div>

                  <div className="text-center">
                    <button type="button" className="text-sm text-blue-600 hover:underline">
                      Não recebeu o código? Reenviar
                    </button>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-4">
                <Button
                  onClick={handleVerifyCode}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={!isCodeComplete}
                >
                  Verificar e Entrar
                </Button>

                <Button variant="outline" onClick={() => setStep(1)} className="w-full">
                  Voltar
                </Button>
              </CardFooter>
            </>
          )}
        </Card>
      </div>
    </div>
  )
}

