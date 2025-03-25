"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UploadIcon as FileUpload, Car, BikeIcon as Motorcycle, DollarSign, MapPin, Calendar } from "lucide-react"

export default function AddVehiclePage() {
  const [step, setStep] = useState(1)
  const [vehicleType, setVehicleType] = useState("car")

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Adicionar Veículo</h1>
          <p className="text-muted-foreground">Cadastre seu veículo para disponibilizá-lo para aluguel.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {step === 1 && "Informações Básicas"}
              {step === 2 && "Fotos e Documentação"}
              {step === 3 && "Preços e Disponibilidade"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Preencha as informações básicas do seu veículo."}
              {step === 2 && "Adicione fotos e documentação do veículo."}
              {step === 3 && "Configure preços e disponibilidade."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  1
                </div>
                <div className={`h-1 flex-1 mx-2 ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  2
                </div>
                <div className={`h-1 flex-1 mx-2 ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  3
                </div>
              </div>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <Tabs defaultValue="car" onValueChange={setVehicleType} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="car">
                      <Car className="h-4 w-4 mr-2" />
                      Carro
                    </TabsTrigger>
                    <TabsTrigger value="motorcycle">
                      <Motorcycle className="h-4 w-4 mr-2" />
                      Moto
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                <div className="space-y-2">
                  <Label htmlFor="brand">Marca</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a marca" />
                    </SelectTrigger>
                    <SelectContent>
                      {vehicleType === "car" ? (
                        <>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="toyota">Toyota</SelectItem>
                          <SelectItem value="volkswagen">Volkswagen</SelectItem>
                          <SelectItem value="chevrolet">Chevrolet</SelectItem>
                          <SelectItem value="ford">Ford</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="honda">Honda</SelectItem>
                          <SelectItem value="yamaha">Yamaha</SelectItem>
                          <SelectItem value="kawasaki">Kawasaki</SelectItem>
                          <SelectItem value="suzuki">Suzuki</SelectItem>
                          <SelectItem value="bmw">BMW</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model">Modelo</Label>
                  <Input id="model" placeholder="Ex: Civic, Gol, CB 500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="year">Ano</Label>
                    <Input id="year" placeholder="Ex: 2022" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plate">Placa</Label>
                    <Input id="plate" placeholder="Ex: ABC1234" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Textarea
                    id="description"
                    placeholder="Descreva seu veículo, incluindo características, estado de conservação, etc."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="location" placeholder="Ex: São Paulo, SP" className="pl-10" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Fotos do Veículo (mínimo 4 fotos)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((index) => (
                      <div
                        key={index}
                        className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-muted/50 aspect-square"
                      >
                        <FileUpload className="h-8 w-8 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground text-center">Foto {index}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Documento do Veículo (CRLV)</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-muted/50">
                    <FileUpload className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Clique para fazer upload ou arraste o arquivo</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG ou PDF (max. 5MB)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Comprovante de Seguro (opcional)</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-muted/50">
                    <FileUpload className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Clique para fazer upload ou arraste o arquivo</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG ou PDF (max. 5MB)</p>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="daily-price">Preço por Dia</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="daily-price" placeholder="Ex: 150" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weekly-price">Preço por Semana (opcional)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="weekly-price" placeholder="Ex: 900" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthly-price">Preço por Mês (opcional)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="monthly-price" placeholder="Ex: 3000" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="caution">Valor da Caução</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="caution" placeholder="Ex: 500" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Disponibilidade</Label>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Selecione os dias em que o veículo estará disponível</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {["D", "S", "T", "Q", "Q", "S", "S"].map((day, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center h-10 rounded-md bg-muted/50 cursor-pointer hover:bg-muted"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep}>
                Voltar
              </Button>
            ) : (
              <Link href="/dashboard">
                <Button variant="outline">Cancelar</Button>
              </Link>
            )}
            {step < 3 ? <Button onClick={nextStep}>Continuar</Button> : <Button>Finalizar Cadastro</Button>}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

