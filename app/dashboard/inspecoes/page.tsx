"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Calendar,
  Car,
  BikeIcon as Motorcycle,
  CheckCircle,
  Clock,
  AlertCircle,
  Eye,
  Download,
  Plus,
} from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

interface Inspection {
  id: number
  vehicleId: number
  vehicleName: string
  vehicleType: "car" | "motorcycle"
  plate: string
  date: string
  time: string
  status: "scheduled" | "completed" | "cancelled"
  location: string
  inspector?: string
  report?: string
}

export default function InspecoesPage() {
  const userName = "João Silva"
  const userEmail = "joao@email.com"

  const inspections: Inspection[] = [
    {
      id: 1,
      vehicleId: 1,
      vehicleName: "Honda Civic 2020",
      vehicleType: "car",
      plate: "ABC-1234",
      date: "25/03/2025",
      time: "14:30",
      status: "scheduled",
      location: "Oficina Central - São Paulo",
    },
    {
      id: 2,
      vehicleId: 2,
      vehicleName: "Honda CB 500 2021",
      vehicleType: "motorcycle",
      plate: "XYZ-9876",
      date: "15/03/2025",
      time: "10:00",
      status: "completed",
      location: "Oficina Moto Express - São Paulo",
      inspector: "Ricardo Oliveira",
      report: "/reports/inspection-123.pdf",
    },
    {
      id: 3,
      vehicleId: 3,
      vehicleName: "Toyota Corolla 2019",
      vehicleType: "car",
      plate: "DEF-5678",
      date: "10/03/2025",
      time: "16:45",
      status: "cancelled",
      location: "Auto Center - São Paulo",
    },
    {
      id: 4,
      vehicleId: 1,
      vehicleName: "Honda Civic 2020",
      vehicleType: "car",
      plate: "ABC-1234",
      date: "05/02/2025",
      time: "09:15",
      status: "completed",
      location: "Oficina Central - São Paulo",
      inspector: "Amanda Santos",
      report: "/reports/inspection-456.pdf",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "scheduled":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-600 hover:bg-blue-50 flex items-center gap-1 font-normal"
          >
            <Clock className="h-3.5 w-3.5" />
            Agendada
          </Badge>
        )
      case "completed":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-600 hover:bg-green-50 flex items-center gap-1 font-normal"
          >
            <CheckCircle className="h-3.5 w-3.5" />
            Concluída
          </Badge>
        )
      case "cancelled":
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-600 hover:bg-gray-100 flex items-center gap-1 font-normal"
          >
            <AlertCircle className="h-3.5 w-3.5" />
            Cancelada
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-2">Inspeções de Veículos</h1>
              <p className="text-muted-foreground">Gerencie as inspeções técnicas dos seus veículos</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Agendar Inspeção
            </Button>
          </div>

          <Tabs defaultValue="todas" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="todas">Todas</TabsTrigger>
              <TabsTrigger value="agendadas">Agendadas</TabsTrigger>
              <TabsTrigger value="concluidas">Concluídas</TabsTrigger>
              <TabsTrigger value="canceladas">Canceladas</TabsTrigger>
            </TabsList>

            <TabsContent value="todas">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Veículo</TableHead>
                        <TableHead>Placa</TableHead>
                        <TableHead>Data e Hora</TableHead>
                        <TableHead>Local</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inspections.map((inspection) => (
                        <TableRow key={inspection.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                                {inspection.vehicleType === "car" ? (
                                  <Car className="h-5 w-5 text-gray-500" />
                                ) : (
                                  <Motorcycle className="h-5 w-5 text-gray-500" />
                                )}
                              </div>
                              <div>
                                <div className="font-medium">{inspection.vehicleName}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{inspection.plate}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>
                                {inspection.date} às {inspection.time}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>{inspection.location}</TableCell>
                          <TableCell>{getStatusBadge(inspection.status)}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              {inspection.status === "completed" && inspection.report && (
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Download className="h-4 w-4" />
                                </Button>
                              )}
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="agendadas">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Veículo</TableHead>
                        <TableHead>Placa</TableHead>
                        <TableHead>Data e Hora</TableHead>
                        <TableHead>Local</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inspections
                        .filter((i) => i.status === "scheduled")
                        .map((inspection) => (
                          <TableRow key={inspection.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                                  {inspection.vehicleType === "car" ? (
                                    <Car className="h-5 w-5 text-gray-500" />
                                  ) : (
                                    <Motorcycle className="h-5 w-5 text-gray-500" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium">{inspection.vehicleName}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{inspection.plate}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {inspection.date} às {inspection.time}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>{inspection.location}</TableCell>
                            <TableCell>{getStatusBadge(inspection.status)}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}

                      {inspections.filter((i) => i.status === "scheduled").length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="h-24 text-center">
                            Nenhuma inspeção agendada
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="concluidas">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Veículo</TableHead>
                        <TableHead>Placa</TableHead>
                        <TableHead>Data e Hora</TableHead>
                        <TableHead>Local</TableHead>
                        <TableHead>Inspetor</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inspections
                        .filter((i) => i.status === "completed")
                        .map((inspection) => (
                          <TableRow key={inspection.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                                  {inspection.vehicleType === "car" ? (
                                    <Car className="h-5 w-5 text-gray-500" />
                                  ) : (
                                    <Motorcycle className="h-5 w-5 text-gray-500" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium">{inspection.vehicleName}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{inspection.plate}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {inspection.date} às {inspection.time}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>{inspection.location}</TableCell>
                            <TableCell>{inspection.inspector}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                {inspection.report && (
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Download className="h-4 w-4" />
                                  </Button>
                                )}
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}

                      {inspections.filter((i) => i.status === "completed").length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="h-24 text-center">
                            Nenhuma inspeção concluída
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="canceladas">
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Veículo</TableHead>
                        <TableHead>Placa</TableHead>
                        <TableHead>Data e Hora</TableHead>
                        <TableHead>Local</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {inspections
                        .filter((i) => i.status === "cancelled")
                        .map((inspection) => (
                          <TableRow key={inspection.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center">
                                  {inspection.vehicleType === "car" ? (
                                    <Car className="h-5 w-5 text-gray-500" />
                                  ) : (
                                    <Motorcycle className="h-5 w-5 text-gray-500" />
                                  )}
                                </div>
                                <div>
                                  <div className="font-medium">{inspection.vehicleName}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{inspection.plate}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span>
                                  {inspection.date} às {inspection.time}
                                </span>
                              </div>
                            </TableCell>
                            <TableCell>{inspection.location}</TableCell>
                            <TableCell>{getStatusBadge(inspection.status)}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}

                      {inspections.filter((i) => i.status === "cancelled").length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="h-24 text-center">
                            Nenhuma inspeção cancelada
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Tips Card */}
          <Card className="bg-blue-50 border-blue-100">
            <CardContent className="p-6">
              <h2 className="text-lg font-bold text-blue-800 mb-4">Sobre as inspeções de veículos</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Inspeções regulares são obrigatórias para manter seu veículo na plataforma</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Recomendamos agendar inspeções a cada 6 meses ou a cada 10.000 km rodados</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Veículos aprovados nas inspeções recebem um selo de qualidade na plataforma</span>
                </li>
                <li className="flex items-start gap-2 text-blue-700">
                  <div className="min-w-4 mt-1">•</div>
                  <span>Cancelamentos de inspeções com menos de 24h de antecedência estão sujeitos a taxas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

