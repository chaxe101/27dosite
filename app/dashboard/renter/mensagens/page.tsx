import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Mensagens | Locatário | VrumGo",
  description: "Gerencie suas mensagens com proprietários",
}

export default function RenterMensagensPage() {
  // Dados simulados de mensagens
  const conversations = [
    {
      id: 1,
      name: "Roberto Oliveira",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Sim, o carro está disponível para as datas solicitadas. Você pode fazer a reserva pelo sistema.",
      time: "10:45",
      unread: true,
    },
    {
      id: 2,
      name: "Ana Pereira",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "A moto está em perfeitas condições. Acabou de passar por revisão.",
      time: "Ontem",
      unread: false,
    },
    {
      id: 3,
      name: "Carlos Santos",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Obrigado por escolher meu veículo. Espero que tenha gostado da experiência!",
      time: "Seg",
      unread: false,
    },
    {
      id: 4,
      name: "Mariana Costa",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Sim, podemos combinar a entrega para esse horário sem problemas.",
      time: "Seg",
      unread: false,
    },
  ]

  // Mensagens da conversa ativa
  const activeConversation = {
    id: 1,
    name: "Roberto Oliveira",
    avatar: "/placeholder.svg?height=40&width=40",
    messages: [
      {
        id: 1,
        sender: "me",
        content: "Olá, gostaria de saber se o carro está disponível para o próximo final de semana?",
        time: "10:30",
      },
      {
        id: 2,
        sender: "them",
        content: "Olá! Sim, o carro está disponível. Quais datas você está interessado?",
        time: "10:35",
      },
      {
        id: 3,
        sender: "me",
        content: "Estou interessado de sexta-feira (dia 15) até domingo (dia 17).",
        time: "10:40",
      },
      {
        id: 4,
        sender: "them",
        content: "Sim, o carro está disponível para as datas solicitadas. Você pode fazer a reserva pelo sistema.",
        time: "10:45",
      },
      {
        id: 5,
        sender: "me",
        content: "Ótimo! Tem alguma recomendação sobre o local de retirada?",
        time: "10:50",
      },
    ],
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Mensagens</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lista de conversas */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversas</CardTitle>
            <CardDescription>Gerencie suas conversas com proprietários</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[500px] pr-4">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer hover:bg-muted ${
                    conversation.id === activeConversation.id ? "bg-muted" : ""
                  }`}
                >
                  <Avatar>
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>{conversation.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="font-medium truncate">{conversation.name}</p>
                      <span className="text-xs text-muted-foreground">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Conversa ativa */}
        <Card className="md:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={activeConversation.avatar} alt={activeConversation.name} />
                <AvatarFallback>{activeConversation.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{activeConversation.name}</CardTitle>
                <CardDescription>Online agora</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[400px] p-4">
              <div className="space-y-4 p-4">
                {activeConversation.messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input placeholder="Digite sua mensagem..." className="flex-1" />
                <Button>Enviar</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

