"use client"

import type React from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Car, BikeIcon as Motorcycle, Truck, Zap, Leaf, DollarSign, Star } from "lucide-react"

type Category = {
  id: string
  name: string
  icon: React.ElementType
}

export default function CategoryFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  const categories: Category[] = [
    { id: "all", name: "Todos", icon: Star },
    { id: "sedan", name: "Sedan", icon: Car },
    { id: "suv", name: "SUV", icon: Car },
    { id: "hatch", name: "Hatch", icon: Car },
    { id: "pickup", name: "Pickup", icon: Truck },
    { id: "sport", name: "Esportivo", icon: Car },
    { id: "luxury", name: "Luxo", icon: Car },
    { id: "electric", name: "Elétrico", icon: Zap },
    { id: "hybrid", name: "Híbrido", icon: Leaf },
    { id: "naked", name: "Naked", icon: Motorcycle },
    { id: "sport-bike", name: "Sport", icon: Motorcycle },
    { id: "cruiser", name: "Cruiser", icon: Motorcycle },
    { id: "scooter", name: "Scooter", icon: Motorcycle },
    { id: "adventure", name: "Adventure", icon: Motorcycle },
    { id: "economic", name: "Econômico", icon: DollarSign },
    { id: "automatic", name: "Automático", icon: Car },
    { id: "manual", name: "Manual", icon: Car },
  ]

  const handleCategoryClick = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (categoryId === "all") {
      params.delete("category")
    } else {
      params.set("category", categoryId)
    }

    router.push(`/search?${params.toString()}`)
  }

  return (
    <div className="relative">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 py-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="ghost"
              className={`flex flex-col items-center rounded-lg px-3 py-2 ${
                currentCategory === category.id ? "bg-blue-50 text-blue-600" : ""
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <category.icon className="mb-1 h-5 w-5" />
              <span className="text-xs font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

