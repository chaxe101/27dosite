"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Fuel } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"

export default function UsoVeiculoPage() {
  const router = useRouter()
  const [showSupportDialog, setShowSupportDialog] = useState(false)
  const [showExtendDialog, setShowExtendDialog] = useState(false)
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false)
  
  const userName = "João Silva"
  const userEmail = "joao@email.com"
  
  // Dados simulados da reserva
  const reservation = {
    id: "RES-12345",
    vehicle: {
      name: "Honda Civic 2022",
      image: "/placeholder.svg",
      plate: "ABC-1234",
      color: "Prata",
      year: "2022",
    },
    owner: {
      name: "Ricardo Pereira",
      phone: "(11) 98765-4321",
    },
    dates: {
      pickup: "25/03/2025",
      pickupTime: "14:00",
      return: "28/03/2025",
      returnTime: "14:00",
    },
    location: "São Paulo, SP - Zona Sul",
    meetingPoint: "Estacionamento do Shopping Ibirapuera",
    initialFuel: "Tanque cheio",
    initialMileage: "15.230 km",
    currentMileage: "15.580 km",
    deposit: 500,
    status: "em_uso",
    timeRemaining: "2 dias e 5 horas",
    fuelLevel: 75,
    vehicleHealth: {
      overall: "good",
      engine: "good",
      tires: "good",
      battery: "good",
      brakes: "good",
      oil: "good",
    },
    nearbyServices: [
      {
        name: "Posto Shell",
        type: "gas",
        distance: "1.2 km",
        address: "Av. Paulista, 1000",
      },
      {
        name: "Auto Center Express",
        type: "mechanic",
        distance: "2.5 km",
        address: "Rua Augusta, 500",
      },
      {
        name: "Lava Rápido Clean",
        type: "wash",
        distance: "3.1 km",
        address: "Rua Oscar Freire, 200",
      },
    ],
  }
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} />
      
      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">Veículo em Uso</h1>
                <p className="text-muted-foreground">Acompanhe e gerencie sua reserva atual</p>
              </div>
              <Badge 
                className="bg-green-100 text-green-800"
              >
                Em Uso
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Status da Reserva</CardTitle>
                  <CardDescription>
                    Informações sobre sua reserva atual
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-medium text-blue-800">Tempo Restante</h3>
                          <p className="text-lg font-bold text-blue-700 mt-1">
                            {reservation.timeRemaining}
                          </p>
                          <p className="text-xs text-blue-600 mt-1">
                            Devolução: {reservation.dates.return} às {reservation.dates.returnTime}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Fuel className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-medium text-green-800">Nível de Combustível</h3>
                          <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                            <div \

