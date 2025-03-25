import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  HelpCircle,
  FileText,
  MessageCircle,
  Car,
  BikeIcon as Motorcycle,
  CreditCard,
  Shield,
} from "lucide-react"
import Footer from "@/components/footer"

export default function HelpPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Central de Ajuda</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Encontre respostas para suas dúvidas e aprenda a utilizar nossa plataforma
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar por dúvidas frequentes..."
                className="pl-10 h-12 rounded-full border-0 shadow-lg text-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Como podemos ajudar?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Selecione uma categoria para encontrar as informações que você precisa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="#renting">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Car className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Alugar Veículos</h3>
                  <p className="text-muted-foreground">
                    Aprenda como buscar, reservar e alugar carros e motos na plataforma.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#listing">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Motorcycle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cadastrar Veículos</h3>
                  <p className="text-muted-foreground">Saiba como cadastrar e gerenciar seus veículos para aluguel.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#payments">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <CreditCard className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pagamentos</h3>
                  <p className="text-muted-foreground">
                    Informações sobre métodos de pagamento, reembolsos e faturamento.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="#safety">
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-4 rounded-full mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Segurança</h3>
                  <p className="text-muted-foreground">Dicas de segurança, seguros e como resolver problemas.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 bg-gray-50" id="faq">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Perguntas Frequentes</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Respostas para as dúvidas mais comuns dos nossos usuários
            </p>
          </div>

          <Tabs defaultValue="renting" className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="renting">Aluguel</TabsTrigger>
              <TabsTrigger value="listing">Cadastro</TabsTrigger>
              <TabsTrigger value="payments">Pagamentos</TabsTrigger>
              <TabsTrigger value="safety">Segurança</TabsTrigger>
            </TabsList>

            <TabsContent value="renting" id="renting">
              <Card>
                <CardHeader>
                  <CardTitle>Dúvidas sobre Aluguel de Veículos</CardTitle>
                  <CardDescription>Perguntas frequentes sobre como alugar carros e motos</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Como faço para alugar um veículo?</AccordionTrigger>
                      <AccordionContent>
                        Para alugar um veículo, você precisa criar uma conta, verificar seu perfil com documentos,
                        buscar o veículo desejado, selecionar as datas e fazer a reserva. Após a aprovação do
                        proprietário, você poderá combinar a retirada do veículo.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Quais documentos são necessários para alugar?</AccordionTrigger>
                      <AccordionContent>
                        Você precisará de RG, CPF, CNH válida (para carros e motos), comprovante de residência e um
                        cartão de crédito em seu nome. Todos os documentos passarão por verificação antes da aprovação
                        do cadastro.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Posso cancelar uma reserva? Há taxas?</AccordionTrigger>
                      <AccordionContent>
                        Sim, você pode cancelar uma reserva. As políticas de cancelamento variam de acordo com a
                        antecedência: cancelamentos com mais de 7 dias de antecedência recebem reembolso total; entre
                        3-7 dias, reembolso de 70%; menos de 3 dias, reembolso de 50%.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>O que acontece se eu devolver o veículo com atraso?</AccordionTrigger>
                      <AccordionContent>
                        Atrasos na devolução geram cobrança adicional proporcional ao valor da diária, mais uma taxa de
                        20%. É importante comunicar o proprietário caso preveja algum atraso.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>O seguro está incluído no preço do aluguel?</AccordionTrigger>
                      <AccordionContent>
                        Um seguro básico está incluído em todos os aluguéis. Você pode optar por seguros adicionais
                        durante o processo de reserva para maior cobertura e tranquilidade.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="listing" id="listing">
              <Card>
                <CardHeader>
                  <CardTitle>Dúvidas sobre Cadastro de Veículos</CardTitle>
                  <CardDescription>Perguntas frequentes sobre como disponibilizar seu veículo</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Como cadastrar meu veículo na plataforma?</AccordionTrigger>
                      <AccordionContent>
                        Após criar sua conta e verificar seu perfil, acesse "Cadastrar Veículo" no painel, preencha as
                        informações do veículo, faça upload de fotos e documentos, defina preços e disponibilidade. Seu
                        veículo passará por verificação antes de ser listado.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Quanto posso ganhar alugando meu veículo?</AccordionTrigger>
                      <AccordionContent>
                        Os ganhos variam conforme o modelo, ano, condição do veículo e localização. Em média,
                        proprietários ganham entre R$ 1.000 e R$ 3.000 por mês alugando seus veículos nos finais de
                        semana e alguns dias da semana.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Quais são as taxas cobradas dos proprietários?</AccordionTrigger>
                      <AccordionContent>
                        Cobramos uma taxa de 15% sobre o valor de cada aluguel. Não há taxas de cadastro ou
                        mensalidades. Você só paga quando efetivamente alugar seu veículo.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Como funciona o seguro para proprietários?</AccordionTrigger>
                      <AccordionContent>
                        Todos os veículos cadastrados são cobertos por nosso seguro durante o período de aluguel. A
                        cobertura inclui danos materiais, roubo, furto e proteção contra terceiros. Detalhes completos
                        estão disponíveis na seção de seguros.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>
                        Posso definir regras específicas para o aluguel do meu veículo?
                      </AccordionTrigger>
                      <AccordionContent>
                        Sim, você pode definir regras como quilometragem máxima, restrições de uso (ex: proibido fumar),
                        exigências de limpeza e outras condições específicas. Estas regras ficarão visíveis para os
                        locatários antes da reserva.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments" id="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Dúvidas sobre Pagamentos</CardTitle>
                  <CardDescription>Perguntas frequentes sobre pagamentos, reembolsos e faturamento</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Quais formas de pagamento são aceitas?</AccordionTrigger>
                      <AccordionContent>
                        Aceitamos cartões de crédito, débito, PIX e boleto bancário. Para locatários, é necessário um
                        cartão de crédito válido para caução, mesmo que o pagamento seja feito por outro método.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Quando o proprietário recebe o pagamento?</AccordionTrigger>
                      <AccordionContent>
                        O proprietário recebe o pagamento 24 horas após a devolução do veículo, desde que não haja
                        disputas ou problemas reportados. O valor é transferido para a conta bancária cadastrada, já
                        descontada a taxa da plataforma.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Como funciona o sistema de caução?</AccordionTrigger>
                      <AccordionContent>
                        O valor da caução é pré-autorizado no cartão de crédito do locatário no momento da retirada do
                        veículo. Este valor não é debitado, apenas bloqueado, e é liberado automaticamente após a
                        devolução sem danos.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Como solicitar reembolso em caso de problemas?</AccordionTrigger>
                      <AccordionContent>
                        Para solicitar reembolso, acesse "Minhas Reservas", selecione a reserva em questão e clique em
                        "Solicitar Reembolso". Descreva o problema detalhadamente e anexe evidências. Nossa equipe
                        analisará o caso em até 48 horas.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Como emitir nota fiscal dos aluguéis?</AccordionTrigger>
                      <AccordionContent>
                        Para proprietários, as notas fiscais são geradas automaticamente para cada aluguel concluído e
                        podem ser acessadas na seção "Financeiro" do painel. Locatários podem solicitar nota fiscal
                        diretamente na página da reserva.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" id="safety">
              <Card>
                <CardHeader>
                  <CardTitle>Dúvidas sobre Segurança</CardTitle>
                  <CardDescription>
                    Perguntas frequentes sobre segurança, seguros e resolução de problemas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Como a plataforma garante a segurança dos usuários?</AccordionTrigger>
                      <AccordionContent>
                        Verificamos a identidade de todos os usuários através de documentos oficiais, histórico de
                        crédito e validação de dados. Também oferecemos um sistema de avaliações mútuas e monitoramos
                        todas as transações.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>O que fazer em caso de acidente durante o aluguel?</AccordionTrigger>
                      <AccordionContent>
                        Em caso de acidente, primeiro garanta a segurança de todos os envolvidos e acione autoridades se
                        necessário. Em seguida, entre em contato com nossa central de emergência 24h pelo app ou
                        telefone. Registre o ocorrido com fotos e documentos para acionar o seguro.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Como funciona a cobertura do seguro?</AccordionTrigger>
                      <AccordionContent>
                        Nosso seguro básico cobre danos materiais ao veículo até R$ 50.000, proteção contra terceiros
                        até R$ 100.000, assistência 24h e guincho. Seguros adicionais oferecem coberturas maiores e
                        benefícios extras como carro reserva.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Como resolver disputas entre proprietário e locatário?</AccordionTrigger>
                      <AccordionContent>
                        Em caso de disputas, nossa equipe de mediação intervém para analisar evidências de ambas as
                        partes. Recomendamos sempre documentar a condição do veículo na entrega e devolução com fotos e
                        o termo de vistoria disponível no app.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>O que fazer se o veículo apresentar problemas mecânicos?</AccordionTrigger>
                      <AccordionContent>
                        Se o veículo apresentar problemas mecânicos durante o aluguel, entre em contato imediatamente
                        com nossa assistência 24h. Dependendo da situação, providenciaremos reparo, guincho ou veículo
                        substituto, sem custos adicionais para o locatário.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <HelpCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
                <p className="text-muted-foreground mb-4">
                  Nossa equipe está disponível 24 horas por dia, 7 dias por semana para ajudar com qualquer problema.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Falar com Suporte</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Guias e Tutoriais</h3>
                <p className="text-muted-foreground mb-4">
                  Acesse nossos guias detalhados e tutoriais em vídeo para aprender a usar a plataforma.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Ver Tutoriais</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comunidade</h3>
                <p className="text-muted-foreground mb-4">
                  Participe da nossa comunidade para trocar experiências e dicas com outros usuários.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Acessar Fórum</Button>
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

