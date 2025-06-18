import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Share2,
  UserPlus,
  MapPin,
  Clock,
  Shield,
  Baby,
  Shirt,
  Candy,
  Coffee,
  Gamepad2,
  Home,
  Smartphone,
  Book,
  ChevronRight,
  Heart,
} from "lucide-react"
import { ProductCard } from "@/components/product-card"

export default function StoreProfile() {
  const storeInfo = {
    name: "TechStore Premium",
    isVerified: true,
    followers: "12.5k",
    rating: 4.8,
    reviews: 2847,
    location: "Ciudad de México",
    memberSince: "2019",
    avatar: "/placeholder.svg?height=80&width=80",
    banner: "/placeholder.svg?height=300&width=1200",
  }

  const categories = [
    { name: "Bebés", icon: <Baby className="h-6 w-6" />, count: 156, color: "bg-pink-100 text-pink-700" },
    { name: "Ropa", icon: <Shirt className="h-6 w-6" />, count: 324, color: "bg-purple-100 text-purple-700" },
    { name: "Dulces", icon: <Candy className="h-6 w-6" />, count: 89, color: "bg-yellow-100 text-yellow-700" },
    { name: "Bebidas", icon: <Coffee className="h-6 w-6" />, count: 67, color: "bg-orange-100 text-orange-700" },
    { name: "Juguetes", icon: <Gamepad2 className="h-6 w-6" />, count: 198, color: "bg-blue-100 text-blue-700" },
    { name: "Hogar", icon: <Home className="h-6 w-6" />, count: 245, color: "bg-green-100 text-green-700" },
    { name: "Tecnología", icon: <Smartphone className="h-6 w-6" />, count: 134, color: "bg-teal-100 text-teal-700" },
    { name: "Libros", icon: <Book className="h-6 w-6" />, count: 78, color: "bg-indigo-100 text-indigo-700" },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone Galaxy Pro",
      price: 15999,
      originalPrice: 18999,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 89,
      discount: 16,
    },
    {
      id: 2,
      name: "Laptop Gaming Elite",
      price: 25999,
      originalPrice: 29999,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 156,
      discount: 13,
    },
    {
      id: 3,
      name: "Auriculares Bluetooth",
      price: 2999,
      originalPrice: 3999,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 234,
      discount: 25,
    },
    {
      id: 4,
      name: "Smartwatch Sport",
      price: 4999,
      originalPrice: 6999,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 167,
      discount: 29,
    },
    {
      id: 5,
      name: "Tablet Pro 11",
      price: 12999,
      originalPrice: 15999,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 98,
      discount: 19,
    },
  ]

  const recentProducts = [
    {
      id: 6,
      name: "Cámara Digital 4K",
      price: 8999,
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.7,
    },
    {
      id: 7,
      name: "Teclado Mecánico RGB",
      price: 1899,
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Monitor 27 4K",
      price: 7999,
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.8,
    },
    {
      id: 9,
      name: "Mouse Gaming Pro",
      price: 1299,
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.5,
    },
    {
      id: 10,
      name: "Webcam HD 1080p",
      price: 899,
      image: "/placeholder.svg?height=150&width=150",
      rating: 4.4,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Store Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Banner */}
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-6">
            <Image src={storeInfo.banner || "/placeholder.svg"} alt="Store Banner" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Store Info */}
          <div className="pb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                  <AvatarImage src={storeInfo.avatar || "/placeholder.svg"} alt={storeInfo.name} />
                  <AvatarFallback className="text-2xl font-bold bg-teal-100 text-teal-700">
                    {storeInfo.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{storeInfo.name}</h1>
                    {storeInfo.isVerified && (
                      <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                        <Shield className="h-3 w-3 mr-1" />
                        Tienda Oficial
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{storeInfo.rating}</span>
                      <span>({storeInfo.reviews.toLocaleString()} reseñas)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{storeInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Desde {storeInfo.memberSince}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:ml-auto">
                <div className="text-center sm:text-right">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">+{storeInfo.followers}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">seguidores</div>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Seguir
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="inicio" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="inicio">Inicio</TabsTrigger>
            <TabsTrigger value="productos">Todos los productos</TabsTrigger>
            <TabsTrigger value="sobre">Sobre la tienda</TabsTrigger>
          </TabsList>

          <TabsContent value="inicio" className="space-y-8">
            {/* Categories */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Categorías de productos</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {categories.map((category, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4 text-center space-y-3">
                      <div
                        className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto`}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white">{category.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{category.count} productos</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Featured Products */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Productos destacados</h2>
                <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
                  Ver todos
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {featuredProducts.map((product, index) => (
                  <ProductCard id={index} key={index}/>
                ))}
              </div>
            </section>

            {/* Recent Products */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Relacionado con lo último que viste
                </h2>
                <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
                  Ver más
                </Button>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {recentProducts.map((product, index) => (
                  <ProductCard id={index} key={index}/>
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="productos">
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Todos los productos</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Aquí se mostrarían todos los productos de la tienda con filtros y paginación.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="sobre">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Sobre TechStore Premium</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Somos una tienda especializada en tecnología con más de 5 años de experiencia en el mercado.
                    Ofrecemos productos de las mejores marcas con garantía oficial y envío a todo el país. Nuestro
                    compromiso es brindar la mejor experiencia de compra con productos de calidad y atención
                    personalizada.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
