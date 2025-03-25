"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Send, X, Minimize2, Maximize2, User } from "lucide-react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá! Sou o assistente virtual da VrumGo. Como posso ajudar você hoje?",
    },
  ])

  // Carregar mensagens do localStorage ao iniciar
  useEffect(() => {
    const savedMessages = localStorage.getItem("vrumgo-chat-messages")
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages) as Message[]
        setMessages(parsedMessages)
      } catch (error) {
        console.error("Erro ao carregar mensagens salvas:", error)
      }
    }
  }, [])

  // Salvar mensagens no localStorage quando atualizadas
  useEffect(() => {
    if (messages.length > 1) {
      // Não salvar apenas a mensagem inicial
      localStorage.setItem("vrumgo-chat-messages", JSON.stringify(messages))
    }
  }, [messages])

  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll para a última mensagem quando novas mensagens são adicionadas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userInput = input.trim()
    // Adiciona a mensagem do usuário
    const userMessage = { role: "user" as const, content: userInput }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Gera resposta usando a AI SDK
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: `
        Você é um assistente virtual para um marketplace de aluguel de carros e motos chamado VrumGo.
        Responda de forma amigável, concisa e útil.
        
        Informações sobre a plataforma:
        - Os usuários podem alugar veículos ou disponibilizar seus próprios veículos para aluguel
        - Há um sistema de avaliação para veículos e usuários
        - O pagamento é processado pela plataforma
        - Há um seguro básico incluído em todos os aluguéis
        - Documentos são verificados para garantir a segurança
        - Oferecemos suporte 24/7 para todos os usuários
        - Temos um sistema de resolução de disputas
        - Utilizamos IA para otimização de preços e análise de risco
        
        Pergunta do usuário: ${userInput}
      `,
        maxTokens: 500,
      })

      // Adiciona a resposta do assistente
      setMessages((prev) => [...prev, { role: "assistant", content: text }])
    } catch (error) {
      console.error("Erro ao gerar resposta:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Desculpe, tive um problema ao processar sua pergunta. Nossa equipe foi notificada. Pode tentar novamente em alguns instantes?",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
      >
        <Bot className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <Card
      className={`fixed right-6 bg-white shadow-xl transition-all duration-300 z-50 ${
        isMinimized ? "bottom-6 h-14 w-80" : "bottom-6 h-[500px] w-80 flex flex-col"
      }`}
    >
      {/* Cabeçalho do chat */}
      <div
        className="p-3 bg-blue-600 text-white flex justify-between items-center cursor-pointer"
        onClick={() => setIsMinimized(!isMinimized)}
      >
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          <span className="font-medium">Assistente RentWheels</span>
        </div>
        <div className="flex items-center gap-1">
          {isMinimized ? (
            <Maximize2 className="h-4 w-4" />
          ) : (
            <>
              <Minimize2 className="h-4 w-4" />
              <X
                className="h-4 w-4 ml-1 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(false)
                }}
              />
            </>
          )}
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Área de mensagens */}
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {messages.length > 1 && (
              <div className="text-center mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setMessages([
                      {
                        role: "assistant",
                        content: "Olá! Sou o assistente virtual da VrumGo. Como posso ajudar você hoje?",
                      },
                    ])
                    localStorage.removeItem("vrumgo-chat-messages")
                  }}
                  className="text-xs text-muted-foreground hover:text-destructive"
                >
                  Limpar conversa
                </Button>
              </div>
            )}
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex items-start gap-2 max-w-[85%]">
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 mt-0.5">
                      <AvatarImage src="/placeholder.svg" alt="AI Assistant" />
                      <AvatarFallback className="bg-blue-600 text-white">AI</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-gray-100 text-gray-800 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 mt-0.5">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback className="bg-gray-400">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2 max-w-[85%]">
                  <Avatar className="h-8 w-8 mt-0.5">
                    <AvatarFallback className="bg-blue-600 text-white">AI</AvatarFallback>
                  </Avatar>
                  <div className="p-3 rounded-lg bg-gray-100 text-gray-800 rounded-tl-none">
                    <div className="flex space-x-1">
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "600ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Área de input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </>
      )}
    </Card>
  )
}

