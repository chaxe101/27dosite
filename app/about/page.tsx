import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, TrendingUp, Award, CheckCircle } from "lucide-react"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Sobre Nós</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Conheça a história da RentWheels e nossa missão de transformar o aluguel de veículos no Brasil
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Nossa História</h2>
              <p className="text-lg text-muted-foreground mb-4">
                A RentWheels nasceu em 2020 com uma ideia simples: tornar o aluguel de veículos mais acessível, prático
                e pessoal. Fundada por três amigos apaixonados por tecnologia e mobilidade, nossa plataforma conecta
                proprietários de veículos a pessoas que precisam de um carro ou moto temporariamente.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Começamos com apenas 50 veículos cadastrados em São Paulo e hoje já contamos com mais de 5.000 veículos
                em todo o Brasil, ajudando proprietários a gerar renda extra e oferecendo aos locatários uma alternativa
                mais econômica e flexível às locadoras tradicionais.
              </p>
              <p className="text-lg text-muted-foreground">
                Nossa missão é democratizar o acesso à mobilidade, criando uma comunidade baseada em confiança e
                segurança, onde todos ganham.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Equipe RentWheels"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nossos Valores</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Princípios que guiam nossas decisões e definem quem somos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Segurança</h3>
                <p className="text-muted-foreground">
                  Priorizamos a segurança em todas as etapas, desde a verificação de usuários até o seguro dos veículos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comunidade</h3>
                <p className="text-muted-foreground">
                  Construímos uma comunidade baseada em confiança mútua e respeito entre proprietários e locatários.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inovação</h3>
                <p className="text-muted-foreground">
                  Buscamos constantemente novas formas de melhorar a experiência de aluguel de veículos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Qualidade</h3>
                <p className="text-muted-foreground">
                  Garantimos a qualidade dos veículos e do atendimento em toda a plataforma.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparência</h3>
                <p className="text-muted-foreground">
                  Operamos com total transparência em preços, termos e condições para todos os usuários.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Nossa Equipe</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça as pessoas por trás da RentWheels
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=160&width=160" alt="CEO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Ricardo Oliveira</h3>
              <p className="text-blue-600 mb-2">CEO & Co-fundador</p>
              <p className="text-muted-foreground">
                Apaixonado por tecnologia e mobilidade urbana, lidera a visão estratégica da empresa.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=160&width=160" alt="CTO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Amanda Santos</h3>
              <p className="text-blue-600 mb-2">CTO & Co-fundadora</p>
              <p className="text-muted-foreground">
                Especialista em desenvolvimento de software e experiência do usuário.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=160&width=160" alt="COO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">Carlos Mendes</h3>
              <p className="text-blue-600 mb-2">COO & Co-fundador</p>
              <p className="text-muted-foreground">
                Responsável pelas operações e crescimento da plataforma em todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Faça parte da nossa história</h2>
              <p className="mx-auto max-w-[700px] text-lg text-blue-100">
                Junte-se a milhares de usuários que já estão transformando a forma de alugar veículos no Brasil.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 min-w-[200px] h-12 text-lg">
                  Criar Conta Grátis
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 min-w-[200px] h-12 text-lg"
                >
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

