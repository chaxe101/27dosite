"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Car, BikeIcon as Motorcycle, MapPin, CalendarIcon, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SearchBar() {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [vehicleType, setVehicleType] = useState<"all" | "car" | "motorcycle">("all")
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [dateOpen, setDateOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Construir query params
    const params = new URLSearchParams()

    if (location) {
      params.append("location", location)
    }

    if (vehicleType !== "all") {
      params.append("type", vehicleType)
    }

    if (startDate) {
      params.append("start", format(startDate, "yyyy-MM-dd"))
    }

    if (endDate) {
      params.append("end", format(endDate, "yyyy-MM-dd"))
    }

    // Navegar para a página de resultados
    router.push(`/search?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row gap-3 p-2 bg-white rounded-full border shadow-sm"
    >
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Para onde você vai?"
          className="pl-10 h-12 rounded-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="flex-1">
        <Popover open={dateOpen} onOpenChange={setDateOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left h-12 rounded-full border-0 focus:ring-0 focus:ring-offset-0",
                !startDate && !endDate && "text-muted-foreground",
              )}
            >
              <CalendarIcon className="mr-2 h-5 w-5" />
              {startDate && endDate ? (
                <>
                  {format(startDate, "dd/MM/yyyy", { locale: ptBR })} -{" "}
                  {format(endDate, "dd/MM/yyyy", { locale: ptBR })}
                </>
              ) : (
                <span>Selecione as datas</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <Calendar
              mode="range"
              selected={{
                from: startDate,
                to: endDate,
              }}
              onSelect={(range) => {
                setStartDate(range?.from)
                setEndDate(range?.to)
                if (range?.to) {
                  setDateOpen(false)
                }
              }}
              numberOfMonths={2}
              disabled={(date) => date < new Date()}
              locale={ptBR}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex gap-2">
        <div className="flex rounded-full border overflow-hidden">
          <Button
            type="button"
            variant={vehicleType === "all" ? "default" : "ghost"}
            className={`rounded-none ${vehicleType === "all" ? "bg-blue-600" : ""}`}
            onClick={() => setVehicleType("all")}
          >
            Todos
          </Button>
          <Button
            type="button"
            variant={vehicleType === "car" ? "default" : "ghost"}
            className={`rounded-none ${vehicleType === "car" ? "bg-blue-600" : ""}`}
            onClick={() => setVehicleType("car")}
          >
            <Car className="h-4 w-4 mr-2" />
            Carros
          </Button>
          <Button
            type="button"
            variant={vehicleType === "motorcycle" ? "default" : "ghost"}
            className={`rounded-none ${vehicleType === "motorcycle" ? "bg-blue-600" : ""}`}
            onClick={() => setVehicleType("motorcycle")}
          >
            <Motorcycle className="h-4 w-4 mr-2" />
            Motos
          </Button>
        </div>

        <Button type="submit" size="icon" className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </form>
  )
}

