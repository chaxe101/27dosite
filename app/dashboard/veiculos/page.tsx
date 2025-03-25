"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Car,
  BikeIcon as Motorcycle,
  Plus,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Eye,
  Edit,
  Trash2,
  AlertCircle,
  CheckCircle,
  Clock,
  Star,
  Wrench,
  DollarSign,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import React from "react"

interface Vehicle {
  id: number
  type: "car" | "motorcycle"
  model: string
  year: string
  plate: string
  status: "available" | "rented" | "inactive"
  price: number
}

export default function VeiculosPage() {
  const userName = "João Silva"
  const userEmail = "joao@email.com"
  const [searchQuery, setSearchQuery] = useState("")

  const vehicles: Vehicle[] = [
    {
      id: 1,
      type: "motorcycle",
      model: "Honda CB 500",
      year: "2021",
      plate: "XYZ-9876",
      status: "rented",
      price: 80,
    },
    {
      id: 2,
      type: "car",
      model: "Honda Civic",
      year: "2020",
      plate: "ABC-1234",
      status: "available",
      price: 120,
    },
    {
      id: 3,
      type: "car",
      model: "Toyota Corolla",
      year: "2019",
      plate: "DEF-5678",
      status: "inactive",
      price: 110,
    },
  ]

  const filteredVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.plate.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "available":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-600 hover:bg-green-50 flex items-center gap-1 font-normal"
          >
            <CheckCircle className="h-3.5 w-3.5" />
            Disponível
          </Badge>
        )
      case "rented":
        return (
          <Badge
            variant="outline"
            className="bg-orange-50 text-orange-600 hover:bg-orange-50 flex items-center gap-1 font-normal"
          >
            <Clock className="h-3.5 w-3.5" />
            Alugado
          </Badge>
        )
      case "inactive":
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-600 hover:bg-gray-100 flex items-center gap-1 font-normal"
          >
            <AlertCircle className="h-3.5 w-3.5" />
            Inativo
          </Badge>
        )
      default:
        return null
    }
  }

  const getStatusDropdown = (vehicle: Vehicle) => {
    const options = [
      { value: "available", label: "Marcar como disponível" },
      { value: "rented", label: "Marcar como alugado" },
      { value: "inactive", label: "Marcar como inativo" },
    ]

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 text-xs">
            <ChevronDown className="h-3.5 w-3.5 ml-1" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {options
            .filter((option) => option.value !== vehicle.status)
            .map((option) => (
              <DropdownMenuItem key={option.value}>{option.label}</DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  const getVehicleIcon = (type: string) => {
    return type === "car" ? <Car className="h-5 w-5 text-gray-500" /> : <Motorcycle className="h-5 w-5 text-gray-500" />
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Meus Veículos</h1>
            <Link href="/dashboard/add-vehicle">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar veículo
              </Button>
            </Link>
          </div>

          {/* AI Tools for Vehicles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link href="/dashboard/ai-features?tab=maintenance">
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Wrench className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Previsão de Manutenção</h3>
                    <p className="text-sm text-muted-foreground">Análise preditiva do estado dos seus veículos</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard/ai-features?tab=pricing">
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Otimização de Preços</h3>
                    <p className="text-sm text-muted-foreground">Maximize sua receita com preços dinâmicos</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar por modelo, marca, placa..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Vehicles Table */}
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden mb-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Veículo</TableHead>
                  <TableHead>Placa</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Preço/dia</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVehicles.map((vehicle) => (
                  <React.Fragment key={vehicle.id}>
                    <TableRow>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                            {getVehicleIcon(vehicle.type)}
                          </div>
                          <div>
                            <div className="font-medium">
                              {vehicle.model} {vehicle.year}
                            </div>
                            <div className="text-xs text-muted-foreground">{vehicle.year}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{vehicle.plate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {getStatusBadge(vehicle.status)}
                          {getStatusDropdown(vehicle)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div>R$ {vehicle.price}</div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                            {vehicle.id === 1
                              ? "4.0 (2 avaliações)"
                              : vehicle.id === 2
                                ? "4.8 (5 avaliações)"
                                : "Sem avaliações"}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>

                    {/* Expandable reviews section - only for vehicles with reviews */}
                    {vehicle.id === 1 && (
                      <TableRow className="bg-gray-50">
                        <TableCell colSpan={5} className="p-4">
                          <div className="text-sm font-medium mb-2">Avaliações recentes:</div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg" alt="Carlos Santos" />
                                <AvatarFallback>CS</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <span className="font-medium text-sm">Carlos Santos</span>
                                  <span className="text-xs text-muted-foreground ml-2">10/03/2025</span>
                                  <div className="flex ml-2">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 text-gray-300" />
                                  </div>
                                </div>
                                <p className="text-sm">
                                  Moto muito boa, bem conservada. Entrega e devolução sem problemas.
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg" alt="Ana Ferreira" />
                                <AvatarFallback>AF</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <span className="font-medium text-sm">Ana Ferreira</span>
                                  <span className="text-xs text-muted-foreground ml-2">28/02/2025</span>
                                  <div className="flex ml-2">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 text-gray-300" />
                                  </div>
                                </div>
                                <p className="text-sm">Ótima experiência! Recomendo.</p>
                              </div>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}

                    {vehicle.id === 2 && (
                      <TableRow className="bg-gray-50">
                        <TableCell colSpan={5} className="p-4">
                          <div className="text-sm font-medium mb-2">Avaliações recentes:</div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg" alt="Maria Oliveira" />
                                <AvatarFallback>MO</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <span className="font-medium text-sm">Maria Oliveira</span>
                                  <span className="text-xs text-muted-foreground ml-2">15/03/2025</span>
                                  <div className="flex ml-2">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  </div>
                                </div>
                                <p className="text-sm">
                                  Carro em excelente estado, muito confortável e econômico. O proprietário foi muito
                                  atencioso e pontual. Recomendo!
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src="/placeholder.svg" alt="Pedro Costa" />
                                <AvatarFallback>PC</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center">
                                  <span className="font-medium text-sm">Pedro Costa</span>
                                  <span className="text-xs text-muted-foreground ml-2">15/02/2025</span>
                                  <div className="flex ml-2">
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                    <Star className="h-3 w-3 text-gray-300" />
                                    <Star className="h-3 w-3 text-gray-300" />
                                  </div>
                                </div>
                                <p className="text-sm">
                                  Carro bom, mas havia alguns arranhões que não estavam nas fotos.
                                </p>
                              </div>
                            </div>
                            <div className="mt-2">
                              <Link href="/dashboard/avaliacoes">
                                <Button variant="ghost" size="sm" className="text-blue-600 text-xs">
                                  Ver todas as avaliações
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    )}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Tips for Owners */}
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold text-blue-800 mb-4">Dicas para proprietários</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Mantenha seu calendário de disponibilidade sempre atualizado</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Fotos de qualidade aumentam em até 70% as chances de locação</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Veículos bem avaliados recebem destaque na plataforma</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Responda rapidamente às solicitações para melhorar sua reputação</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

