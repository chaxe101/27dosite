"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Car, BikeIcon as Motorcycle, Phone, Calendar, Info } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

interface Contact {
  id: number
  name: string
  avatar?: string
  lastMessage: string
  time: string
  unread: boolean
  isOnline: boolean
  vehicle?: {
    name: string
    type: "car" | "motorcycle"
  }
}

interface Message {
  id: number
  content: string
  time: string
  sender: "user" | "contact"
  read: boolean
}

export default function MensagensPage() {
  const userName = "João Silva"
  const userEmail = "joao@email.com"
  const [searchQuery, setSearchQuery] = useState("")
  const [activeContact, setActiveContact] = useState<number>(1)
  const [newMessage, setNewMessage] = useState("")

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Maria Oliveira",
      avatar: "/placeholder.svg",
      lastMessage: "Olá, gostaria de confirmar o horário de entrega do carro.",
      time: "10:30",
      unread: true,
      isOnline: true,
      vehicle: {
        name: "Honda Civic 2020",
        type: "car",
      },
    },
    {
      id: 2,
      name: "Carlos Santos",
      avatar: "/placeholder.svg",
      lastMessage: "Obrigado pela moto, estava em ótimo estado!",
      time: "Ontem",
      unread: false,
      isOnline: false,
      vehicle: {
        name: "Honda CB 500 2021",
        type: "motorcycle",
      },
    },
    {
      id: 3,
      name: "Ana Ferreira",
      avatar: "/placeholder.svg",
      lastMessage: "Posso pegar o carro às 14h?",
      time: "Ontem",
      unread: false,
      isOnline: true,
      vehicle: {
        name: "Toyota Corolla 2019",
        type: "car",
      },
    },
    {
      id: 4,
      name: "Pedro Costa",
      avatar: "/placeholder.svg",
      lastMessage: "Vou atrasar uns 15 minutos, tudo bem?",
      time: "20/03",
      unread: false,
      isOnline: false,
    },
  ]

  const messages: Record<number, Message[]> = {
    1: [
      {
        id: 1,
        content: "Olá João, tudo bem?",
        time: "10:15",
        sender: "contact",
        read: true,
      },
      {
        id: 2,
        content: "Gostaria de confirmar o horário de entrega do Honda Civic.",
        time: "10:16",
        sender: "contact",
        read: true,
      },
      {
        id: 3,
        content: "Olá Maria, tudo ótimo! Podemos manter o horário combinado às 15h. Está bom para você?",
        time: "10:20",
        sender: "user",
        read: true,
      },
      {
        id: 4,
        content: "Perfeito! Estarei lá no horário combinado.",
        time: "10:25",
        sender: "contact",
        read: true,
      },
      {
        id: 5,
        content: "Olá, gostaria de confirmar o horário de entrega do carro.",
        time: "10:30",
        sender: "contact",
        read: false,
      },
    ],
    2: [
      {
        id: 1,
        content: "João, acabei de devolver a moto. Muito obrigado!",
        time: "Ontem",
        sender: "contact",
        read: true,
      },
      {
        id: 2,
        content: "Obrigado pela moto, estava em ótimo estado!",
        time: "Ontem",
        sender: "contact",
        read: true,
      },
      {
        id: 3,
        content:
          "Fico feliz que tenha gostado, Carlos! Foi um prazer te atender. Espero que tenha aproveitado o passeio!",
        time: "Ontem",
        sender: "user",
        read: true,
      },
    ],
    3: [
      {
        id: 1,
        content: "Olá João, tudo bem? Estou interessada em alugar o Toyota Corolla.",
        time: "Ontem",
        sender: "contact",
        read: true,
      },
      {
        id: 2,
        content: "Olá Ana! Tudo bem sim. O carro está disponível. Quando você gostaria de pegar?",
        time: "Ontem",
        sender: "user",
        read: true,
      },
      {
        id: 3,
        content: "Posso pegar o carro às 14h?",
        time: "Ontem",
        sender: "contact",
        read: true,
      },
      {
        id: 4,
        content: "Sim, 14h está perfeito. Nos encontramos no local combinado.",
        time: "Ontem",
        sender: "user",
        read: true,
      },
    ],
    4: [
      {
        id: 1,
        content: "Olá João, estou a caminho para devolver o carro.",
        time: "20/03",
        sender: "contact",
        read: true,
      },
      {
        id: 2,
        content: "Vou atrasar uns 15 minutos, tudo bem?",
        time: "20/03",
        sender: "contact",
        read: true,
      },
      {
        id: 3,
        content: "Sem problemas, Pedro. Estarei aguardando.",
        time: "20/03",
        sender: "user",
        read: true,
      },
    ],
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (contact.vehicle?.name && contact.vehicle.name.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // In a real app, this would send the message to the server
    console.log("Sending message:", newMessage)
    setNewMessage("")
  }

  const activeContactData = contacts.find((c) => c.id === activeContact)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Mensagens</h1>
            <p className="text-muted-foreground">Gerencie suas conversas com locatários e proprietários</p>
          </div>

          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="flex h-[600px]">
              {/* Contacts List */}
              <div className="w-1/3 border-r">
                <div className="p-4 border-b">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar conversas..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="overflow-y-auto h-[calc(600px-73px)]">
                  {filteredContacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${activeContact === contact.id ? "bg-blue-50" : ""}`}
                      onClick={() => setActiveContact(contact.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={contact.avatar} alt={contact.name} />
                            <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {contact.isOnline && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <div className="font-medium truncate">{contact.name}</div>
                            <div className="text-xs text-muted-foreground whitespace-nowrap ml-2">{contact.time}</div>
                          </div>
                          {contact.vehicle && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                              {contact.vehicle.type === "car" ? (
                                <Car className="h-3 w-3" />
                              ) : (
                                <Motorcycle className="h-3 w-3" />
                              )}
                              <span className="truncate">{contact.vehicle.name}</span>
                            </div>
                          )}
                          <div className="text-sm text-muted-foreground truncate mt-1">{contact.lastMessage}</div>
                        </div>
                        {contact.unread && (
                          <Badge className="bg-blue-600 text-white h-5 w-5 flex items-center justify-center p-0 rounded-full">
                            1
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}

                  {filteredContacts.length === 0 && (
                    <div className="p-8 text-center">
                      <p className="text-muted-foreground">Nenhuma conversa encontrada</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                {activeContactData ? (
                  <>
                    {/* Chat Header */}
                    <div className="p-4 border-b flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={activeContactData.avatar} alt={activeContactData.name} />
                            <AvatarFallback>{activeContactData.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          {activeContactData.isOnline && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{activeContactData.name}</div>
                          {activeContactData.vehicle && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              {activeContactData.vehicle.type === "car" ? (
                                <Car className="h-3 w-3" />
                              ) : (
                                <Motorcycle className="h-3 w-3" />
                              )}
                              <span>{activeContactData.vehicle.name}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Calendar className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Info className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages[activeContact]?.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            <div className="text-sm">{message.content}</div>
                            <div className="text-xs mt-1 flex items-center justify-end gap-1">
                              {message.time}
                              {message.sender === "user" && (
                                <span className="text-blue-200">
                                  {message.read ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="h-3 w-3"
                                    >
                                      <path d="M18 6 9 18 12 15 21 3" />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="h-3 w-3"
                                    >
                                      <path d="m9 12 2 2 4-4" />
                                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                                      <path d="M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
                                    </svg>
                                  )}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Digite sua mensagem..."
                          className="flex-1"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSendMessage()
                            }
                          }}
                        />
                        <Button onClick={handleSendMessage}>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar
                        </Button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Selecione uma conversa</h3>
                      <p className="text-muted-foreground max-w-md">
                        Escolha uma conversa à esquerda para começar a trocar mensagens.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tips Card */}
          <div className="mt-8">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold text-blue-800 mb-4">Dicas para comunicação eficiente</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Responda às mensagens em até 1 hora para manter uma boa reputação</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Seja claro sobre horários, locais de entrega e condições do veículo</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Use a função de agendamento para marcar entregas e devoluções</span>
                  </li>
                  <li className="flex items-start gap-2 text-blue-700">
                    <div className="min-w-4 mt-1">•</div>
                    <span>Mantenha um tom profissional e cordial em todas as comunicações</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

// Missing import
import { MessageSquare } from "lucide-react"

