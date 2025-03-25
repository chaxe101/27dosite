import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Entre em Contato</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Estamos aqui para ajudar. Entre em contato conosco para tirar dúvidas, fazer sugestões ou resolver
              problemas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Envie uma mensagem</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome completo
                    </label>
                    <Input id="name" placeholder="Digite seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Digite seu email" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Telefone
                  </label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Assunto
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="support">Suporte Técnico</SelectItem>
                      <SelectItem value="billing">Pagamentos e Faturamento</SelectItem>
                      <SelectItem value="partnership">Parcerias</SelectItem>
                      <SelectItem value="suggestion">Sugestões</SelectItem>
                      <SelectItem value="complaint">Reclamações</SelectItem>
                      <SelectItem value="other">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <Textarea id="message" placeholder="Digite sua mensagem" rows={5} />
                </div>

                <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Informações de Contato</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Você também pode entrar em contato conosco diretamente pelos canais abaixo.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Endereço</h3>
                    <p className="text-muted-foreground">
                      Av. Paulista, 1000, 10º andar
                      <br />
                      Bela Vista, São Paulo - SP
                      <br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Telefone</h3>
                    <p className="text-muted-foreground">
                      (11) 3456-7890
                      <br />
                      Suporte 24h: 0800 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-muted-foreground">
                      contato@rentwheels.com.br
                      <br />
                      suporte@rentwheels.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 20h
                      <br />
                      Sábado: 9h às 15h
                      <br />
                      Suporte técnico: 24h todos os dias
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Mapa da localização"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Departamentos Específicos</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Entre em contato diretamente com o departamento que melhor pode ajudar você
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Suporte Técnico</h3>
                <p className="text-muted-foreground mb-4">
                  Problemas com o aplicativo, site ou durante o aluguel de veículos.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-blue-600 mr-2" />
                    <span>0800 123 4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    <span>suporte@rentwheels.com.br</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Financeiro</h3>
                <p className="text-muted-foreground mb-4">Pagamentos, reembolsos, faturas e questões financeiras.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-blue-600 mr-2" />
                    <span>(11) 3456-7891</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    <span>financeiro@rentwheels.com.br</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Parcerias</h3>
                <p className="text-muted-foreground mb-4">
                  Propostas de parcerias, marketing e oportunidades de negócio.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-blue-600 mr-2" />
                    <span>(11) 3456-7892</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    <span>parcerias@rentwheels.com.br</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

