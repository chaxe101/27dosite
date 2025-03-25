"use client"

import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Calendar,
  Car,
  Settings,
  LogOut,
  Menu,
  X,
  MessageSquare,
  Star,
  FileText,
  Bot,
  DollarSign,
  Heart,
  Shield,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface DashboardSidebarProps {
  userName: string
  userEmail: string
  userType: "owner" | "renter"
}

export default function DashboardSidebar({ userName, userEmail, userType = "owner" }: DashboardSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Menu items for vehicle owners
  const ownerMenuItems = [
    {
      title: "Meu painel",
      href: "/dashboard/owner",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Minhas reservas",
      href: "/dashboard/owner/reservas",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Meus veículos",
      href: "/dashboard/owner/veiculos",
      icon: <Car className="h-5 w-5" />,
    },
    {
      title: "Minhas avaliações",
      href: "/dashboard/owner/avaliacoes",
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: "Mensagens",
      href: "/dashboard/owner/mensagens",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Inspeções de veículos",
      href: "/dashboard/owner/inspecoes",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Recursos de IA",
      href: "/dashboard/owner/ai-features",
      icon: <Bot className="h-5 w-5" />,
    },
    {
      title: "Ganhos",
      href: "/dashboard/owner/ganhos",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "Configurações",
      href: "/dashboard/owner/configuracoes",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  // Menu items for renters
  const renterMenuItems = [
    {
      title: "Meu painel",
      href: "/dashboard/renter",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Minhas reservas",
      href: "/dashboard/renter/reservas",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Veículos favoritos",
      href: "/dashboard/renter/favoritos",
      icon: <Heart className="h-5 w-5" />,
    },
    {
      title: "Minhas avaliações",
      href: "/dashboard/renter/avaliacoes",
      icon: <Star className="h-5 w-5" />,
    },
    {
      title: "Mensagens",
      href: "/dashboard/renter/mensagens",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Recomendações",
      href: "/dashboard/renter/recomendacoes",
      icon: <Bot className="h-5 w-5" />,
    },
    {
      title: "Pagamentos",
      href: "/dashboard/renter/pagamentos",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "Segurança",
      href: "/dashboard/renter/seguranca",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Configurações",
      href: "/dashboard/renter/configuracoes",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  // Select menu items based on user type
  const menuItems = userType === "owner" ? ownerMenuItems : renterMenuItems

  // Função para fazer logout
  const handleLogout = () => {
    try {
      localStorage.removeItem("vrumgo-user-logged-in")
      router.push("/login")
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out md:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* User Profile - Corrigido para evitar corte */}
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage src="/placeholder.svg" alt={userName} />
                <AvatarFallback>
                  {userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm truncate">{userName}</p>
                <p className="text-xs text-muted-foreground truncate">{userEmail}</p>
                <Badge className="mt-1 text-xs bg-blue-100 text-blue-600 hover:bg-blue-100">
                  {userType === "owner" ? "Proprietário" : "Locatário"}
                </Badge>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} prefetch={false}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        pathname === item.href && "bg-blue-50 text-blue-600",
                      )}
                    >
                      <span className="flex-shrink-0 mr-3">{item.icon}</span>
                      <span className="truncate">{item.title}</span>
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5 mr-3 flex-shrink-0" />
              <span className="truncate">Sair</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/20 z-30 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </>
  )
}

