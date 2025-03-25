"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Save, Trash2 } from "lucide-react"
import DashboardSidebar from "@/components/dashboard-sidebar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export default function EditarVeiculoPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const userName = "João Silva"
  const userEmail = "joao@email.com"
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Dados de exemplo do veículo
  const vehicleData = {
    id: params.id,
    name: params.id === "1" ? "Honda Civic 2020" : params.id === "2" ? "Toyota Corolla 2019" : "Honda CB 500 2021",
    type: params.id === "3" ? "motorcycle" : "car",
    plate: params.id === "1" ? "ABC-1234" : params.id === "2" ? "DEF-5678" : "XYZ-9876",
    year: params.id === "1" ? "2020" : params.id === "2" ? "2019" : "2021",
    price: params.id === "1" ? "120" : params.id === "2" ? "110" : "80",
    description:
      params.id === "3"
        ? "Moto em excelente estado, com baixa quilometragem e manutenção em dia."
        : "Carro completo, com ar-condicionado, direção elétrica, vidros e travas elétricas, central multimídia.",
    status: params.id === "1" ? "available" : params.id === "2" ? "inactive" : "rented",
    features:
      params.id === "3"
        ? ["Freios ABS", "Injeção Eletrônica", "Painel Digital"]
        : ["Ar-condicionado", "Direção Elétrica", "Central Multimídia", "Vidros Elétricos"],
  }

  // Função para salvar alterações
  const handleSaveChanges = () => {
    setIsSaving(true)

    // Simular uma chamada de API com um pequeno atraso
    setTimeout(() => {
      toast({
        title: "Veículo atualizado",
        description: "As alterações foram salvas com sucesso.",
      })
      setIsSaving(false)
      router.push("/dashboard/owner/veiculos")
    }, 1500)
  }

  // Função para excluir veículo
  const handleDeleteVehicle = () => {
    // Em um app real, isso enviaria uma requisição para a API
    toast({
      title: "Veículo excluído",
      description: "O veículo foi excluído com sucesso.",
    })
    setDeleteDialogOpen(false)
    router.push("/dashboard/owner/veiculos")
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebar userName={userName} userEmail={userEmail} userType="owner" />

      {/* Main Content */}
      <div className="flex-1 p-8 md:ml-64">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <Button
                variant="ghost"
                size="sm"
                className="mb-2"
                onClick={() => router.push("/dashboard/owner/veiculos")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Veículos
              </Button>
              <h1 className="text-2xl font-bold">Editar Veículo</h1>
              <p className="text-muted-foreground">Atualize as informações do seu veículo</p>
            </div>
            <Button variant="destructive" onClick={() => setDeleteDialogOpen(true)}>
              <Trash2 className="h-4 w-4 mr-2" />
              Excluir Veículo
            </Button>
          </div>

          {/* Edit Vehicle Form */}
          <Card>
            <CardHeader>
              <CardTitle>Informações do Veículo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome do Veículo</Label>
                    <Input id="name" defaultValue={vehicleData.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Tipo de Veículo</Label>
                    <Select defaultValue={vehicleData.type}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="car">Carro</SelectItem>
                        <SelectItem value="motorcycle">Moto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plate">Placa</Label>
                    <Input id="plate" defaultValue={vehicleData.plate} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year">Ano</Label>
                    <Input id="year" defaultValue={vehicleData.year} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Preço por dia (R$)</Label>
                    <Input id="price" defaultValue={vehicleData.price} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select defaultValue={vehicleData.status}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="available">Disponível</SelectItem>
                        <SelectItem value="rented">Alugado</SelectItem>
                        <SelectItem value="inactive">Inativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea id="description" rows={4} defaultValue={vehicleData.description} />
                </div>

                <div className="space-y-2">
                  <Label>Características</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {vehicleData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Switch id={`feature-${index}`} defaultChecked />
                        <Label htmlFor={`feature-${index}`}>{feature}</Label>
                      </div>
                    ))}
                    <div className="flex items-center space-x-2">
                      <Switch id="feature-new" />
                      <Label htmlFor="feature-new">Adicionar nova característica</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Fotos do Veículo</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="aspect-square bg-gray-100 rounded-md flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50">
                      <span className="text-sm text-gray-500">+ Adicionar foto</span>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-md relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm text-gray-500">Foto 1</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-md relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm text-gray-500">Foto 2</span>
                      </div>
                    </div>
                    <div className="aspect-square bg-gray-100 rounded-md relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm text-gray-500">Foto 3</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSaveChanges} disabled={isSaving}>
                    {isSaving ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Salvando...
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        Salvar Alterações
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Dialog de confirmação para excluir veículo */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir este veículo? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancelar
            </Button>
            <Button variant="destructive" onClick={handleDeleteVehicle}>
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

