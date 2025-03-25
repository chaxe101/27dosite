"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  BikeIcon as Motorcycle,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function OwnerVeiculosPage() {
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">Meus Veículos</h1>
              <p className="text-muted-foreground">Gerencie seus veículos cadastrados na plataforma.</p>
            </div>
            <Link href="/dashboard/add-vehicle">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Veículo
              </Button>
            </Link>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar veículo..." className="pl-10" />
                </div>
                <Select defaultValue="todos">
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de veículo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os tipos</SelectItem>
                    <SelectItem value="carro">Carros</SelectItem>
                    <SelectItem value="moto">Motos</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="todos">
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os status</SelectItem>
                    <SelectItem value="disponivel">Disponível</SelectItem>
                    <SelectItem value="alugado">Alugado</SelectItem>
                    <SelectItem value="inativo">Inativo</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Mais filtros
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Vehicles Table */}
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-muted-foreground">Veículo</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Placa</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Preço/dia</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Reservas</th>
                    <th className="text-right p-4 font-medium text-muted-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                          <Motorcycle className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">Honda CB 500 2021</div>
                          <div className="text-xs text-muted-foreground">2021</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">XYZ-9876</td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className="bg-orange-50 text-orange-600 hover:bg-orange-50 flex items-center gap-1 font-normal"
                      >
                        <Clock className="h-3.5 w-3.5" />
                        Alugado
                      </Badge>
                    </td>
                    <td className="p-4">R$ 80</td>
                    <td className="p-4">12</td>
                    <td className="p-4 text-right">
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
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                          <Car className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">Honda Civic 2020</div>
                          <div className="text-xs text-muted-foreground">2020</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">ABC-1234</td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className="bg-green-50 text-green-600 hover:bg-green-50 flex items-center gap-1 font-normal"
                      >
                        <CheckCircle className="h-3.5 w-3.5" />
                        Disponível
                      </Badge>
                    </td>
                    <td className="p-4">R$ 120</td>
                    <td className="p-4">8</td>
                    <td className="p-4 text-right">
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
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                          <Car className="h-5 w-5 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">Toyota Corolla 2019</div>
                          <div className="text-xs text-muted-foreground">2019</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">DEF-5678</td>
                    <td className="p-4">
                      <Badge
                        variant="outline"
                        className="bg-gray-100 text-gray-600 hover:bg-gray-100 flex items-center gap-1 font-normal"
                      >
                        <AlertCircle className="h-3.5 w-3.5" />
                        Inativo
                      </Badge>
                    </td>
                    <td className="p-4">R$ 110</td>
                    <td className="p-4">5</td>
                    <td className="p-4 text-right">
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-muted-foreground">Mostrando 1-3 de 3 veículos</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" disabled>
                Próximo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

