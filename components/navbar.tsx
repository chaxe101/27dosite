"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Car, BikeIcon as Motorcycle, Menu, User, LogOut, Settings, Home, Info, HelpCircle, Phone } from "lucide-react"

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Verificar se o usuário está logado ao carregar o componente
  useEffect(() => {
    try {
      // Em um app real, isso verificaria um token JWT ou cookie de sessão
      const userLoggedIn = localStorage.getItem("vrumgo-user-logged-in") === "true"
      setIsLoggedIn(userLoggedIn)
    } catch (error) {
      console.error("Erro ao verificar login:", error)
    }
  }, [])

  // Detecta o scroll para aplicar efeitos visuais
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Adiciona o evento apenas no cliente
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Função para fazer login
  const handleLogin = () => {
    try {
      setIsLoggedIn(true)
      localStorage.setItem("vrumgo-user-logged-in", "true")
    } catch (error) {
      console.error("Erro ao fazer login:", error)
    }
  }

  // Função para fazer logout
  const handleLogout = () => {
    try {
      setIsLoggedIn(false)
      localStorage.setItem("vrumgo-user-logged-in", "false")
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white shadow-sm transition-all duration-200 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container flex h-16 items-center">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu de navegação">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[300px] sm:w-[400px]"
            onOpenAutoFocus={(e) => e.preventDefault()} // Prevenir foco automático para melhor UX
          >
            <SheetHeader className="pb-6">
              <SheetTitle className="text-xl">Menu</SheetTitle>
              <SheetDescription>Navegue pelo site</SheetDescription>
            </SheetHeader>
            <div className="grid gap-6 py-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
                prefetch={false}
              >
                <div className="flex items-center">
                  <Car className="h-6 w-6" />
                  <Motorcycle className="h-5 w-5 -ml-1" />
                </div>
                <span>VrumGo</span>
              </Link>
              <div className="grid gap-3">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Home className="mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="truncate">Início</span>
                  </Button>
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Info className="mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="truncate">Sobre Nós</span>
                  </Button>
                </Link>
                <Link href="/search?type=car" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Car className="mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="truncate">Alugar Carro</span>
                  </Button>
                </Link>
                <Link href="/search?type=motorcycle" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Motorcycle className="mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="truncate">Alugar Moto</span>
                  </Button>
                </Link>
                <Link href="/dashboard/add-vehicle" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Car className="mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="truncate">Cadastrar Veículo</span>
                  </Button>
                </Link>
                <Link href="/help" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <HelpCircle className="mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="truncate">Ajuda</span>
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                  <Button variant="ghost" className="w-full justify-start text-base h-12">
                    <Phone className="mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="truncate">Contato</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-3 mt-6">
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                    <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700">Minha Conta</Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full h-12"
                    onClick={() => {
                      handleLogout()
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                    <Button variant="outline" className="w-full h-12 border-blue-600 text-blue-600 hover:bg-blue-50">
                      Entrar
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
                    <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700">Criar Conta</Button>
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="hidden md:flex items-center gap-2 mr-8" prefetch={false}>
          <div className="flex items-center">
            <Car className="h-6 w-6 text-blue-600" />
            <Motorcycle className="h-5 w-5 text-blue-600 -ml-1" />
          </div>
          <span className="font-bold text-xl">VrumGo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-base">
          <Link href="/" className="font-medium transition-colors hover:text-blue-600" prefetch={false}>
            Início
          </Link>
          <Link href="/about" className="font-medium transition-colors hover:text-blue-600" prefetch={false}>
            Sobre Nós
          </Link>
          <Link href="/search" className="font-medium transition-colors hover:text-blue-600" prefetch={false}>
            Veículos
          </Link>
          <Link href="/help" className="font-medium transition-colors hover:text-blue-600" prefetch={false}>
            Ajuda
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-blue-600" prefetch={false}>
            Contato
          </Link>
        </nav>

        <div className="flex items-center ml-auto gap-3">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link href="/dashboard" prefetch={false}>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/dashboard/settings" prefetch={false}>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Configurações</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="hidden sm:block" prefetch={false}>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={handleLogin}
                >
                  Entrar
                </Button>
              </Link>
              <Link href="/register" prefetch={false}>
                <Button className="bg-blue-600 hover:bg-blue-700">Criar Conta</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

