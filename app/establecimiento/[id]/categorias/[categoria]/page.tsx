import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Star,
  Share2,
  UserPlus,
  Shield,
  Filter,
  Grid3X3,
  List,
  ChevronRight,
  Heart,
  ShoppingCart,
  Home,
} from "lucide-react"
import { ProductCard } from "@/components/product-card"

interface StoreCategoryProps {
  categoryName: string
  categoryIcon: React.ReactNode
}

export default function StoreCategory({ categoryName = "Tecnología", categoryIcon }: StoreCategoryProps) {
  const storeInfo = {
    name: "TechStore Premium",
    isVerified: true,
    followers: "12.5k",
    rating: 4.8,
    reviews: 2847,
    location: "Ciudad de México",
    memberSince: "2019",
    avatar: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=200&width=1200",
  }

  // Productos de la categoría seleccionada
  const categoryProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB",
      price: 28999,
      originalPrice: 32999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.8,
      reviews: 234,
      discount: 12,
      brand: "Apple",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      price: 26999,
      originalPrice: 29999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.7,
      reviews: 189,
      discount: 10,
      brand: "Samsung",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 3,
      name: "MacBook Pro 14 M3",
      price: 45999,
      originalPrice: 49999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.9,
      reviews: 156,
      discount: 8,
      brand: "Apple",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 4,
      name: "Dell XPS 13 Plus",
      price: 32999,
      originalPrice: 36999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.6,
      reviews: 98,
      discount: 11,
      brand: "Dell",
      inStock: true,
      freeShipping: false,
    },
    {
      id: 5,
      name: "iPad Air 5ta Gen",
      price: 15999,
      originalPrice: 18999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.8,
      reviews: 267,
      discount: 16,
      brand: "Apple",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 6,
      name: "AirPods Pro 2da Gen",
      price: 5999,
      originalPrice: 6999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.7,
      reviews: 445,
      discount: 14,
      brand: "Apple",
      inStock: false,
      freeShipping: true,
    },
    {
      id: 7,
      name: "Sony WH-1000XM5",
      price: 7999,
      originalPrice: 9999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.8,
      reviews: 334,
      discount: 20,
      brand: "Sony",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 8,
      name: "Nintendo Switch OLED",
      price: 8999,
      originalPrice: 9999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.9,
      reviews: 567,
      discount: 10,
      brand: "Nintendo",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 9,
      name: "Apple Watch Series 9",
      price: 9999,
      originalPrice: 11999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.6,
      reviews: 178,
      discount: 17,
      brand: "Apple",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 10,
      name: "Samsung Galaxy Tab S9",
      price: 18999,
      originalPrice: 21999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.5,
      reviews: 123,
      discount: 14,
      brand: "Samsung",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 11,
      name: "Google Pixel 8 Pro",
      price: 22999,
      originalPrice: 25999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.7,
      reviews: 89,
      discount: 12,
      brand: "Google",
      inStock: true,
      freeShipping: true,
    },
    {
      id: 12,
      name: "Microsoft Surface Pro 9",
      price: 28999,
      originalPrice: 32999,
      image: "/placeholder.svg?height=250&width=250",
      rating: 4.4,
      reviews: 67,
      discount: 12,
      brand: "Microsoft",
      inStock: true,
      freeShipping: false,
    },
  ]

  const brands = ["Apple", "Samsung", "Sony", "Dell", "Google", "Nintendo", "Microsoft"]
  const totalProducts = categoryProducts.length

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Store Header - Simplified */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact Banner */}
          <div className="relative h-32 rounded-lg overflow-hidden mb-4">
            <Image src={storeInfo.banner || "/placeholder.svg"} alt="Store Banner" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Compact Store Info */}
          <div className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
                  <AvatarImage src={storeInfo.avatar || "/placeholder.svg"} alt={storeInfo.name} />
                  <AvatarFallback className="text-lg font-bold bg-teal-100 text-teal-700">
                    {storeInfo.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">{storeInfo.name}</h1>
                    {storeInfo.isVerified && (
                      <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 text-xs">
                        <Shield className="h-3 w-3 mr-1" />
                        Oficial
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{storeInfo.rating}</span>
                    </div>
                    <span>+{storeInfo.followers} seguidores</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <UserPlus className="h-4 w-4 mr-1" />
                  Seguir
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Home className="h-4 w-4" />
          <ChevronRight className="h-4 w-4" />
          <span>{storeInfo.name}</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 dark:text-white font-medium">{categoryName}</span>
        </nav>

        {/* Category Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
              {categoryIcon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{categoryName}</h2>
              <p className="text-gray-600 dark:text-gray-400">{totalProducts} productos encontrados</p>
            </div>
          </div>          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Products Grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product, index) => (
                <ProductCard id={index} key={index}/>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Anterior
                </Button>
                <Button variant="outline" className="bg-teal-600 text-white">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <span className="px-2">...</span>
                <Button variant="outline">10</Button>
                <Button variant="outline">Siguiente</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
