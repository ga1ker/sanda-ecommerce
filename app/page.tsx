import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, Shield, Headphones, ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Smartphone Pro Max",
      price: 899,
      originalPrice: 999,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Laptop Gaming Elite",
      price: 1299,
      originalPrice: 1499,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
    },
    {
      id: 3,
      name: "Auriculares Wireless",
      price: 199,
      originalPrice: 249,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 256,
    },
    {
      id: 4,
      name: "Smartwatch Sport",
      price: 299,
      originalPrice: 349,
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 178,
    },
  ]

  const features = [
    {
      icon: <Truck className="h-8 w-8 text-teal-600 dark:text-teal-200" />,
      title: "Envío Gratis",
      description: "En compras mayores a $1000",
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-600 dark:text-teal-200" />,
      title: "Compra Segura",
      description: "Protección total en tus pagos",
    },
    {
      icon: <Headphones className="h-8 w-8 text-teal-600 dark:text-teal-200" />,
      title: "Soporte 24/7",
      description: "Atención al cliente siempre disponible",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 dark:to-teal-900 dark:from-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">¡Nuevos productos disponibles!</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Descubre lo mejor en <span className="text-teal-600 dark:text-teal-200">Sanda</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Tu tienda online de confianza con los mejores productos, precios increíbles y servicio excepcional.
                  ¡Compra ahora y disfruta de envío gratis!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="dark:bg-teal-800 hover:bg-teal-700 text-white px-8 py-3">
                  Explorar Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 dark:text-teal-200 hover:bg-teal-50 px-8 py-3"
                >
                  Ver Ofertas
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Hero Image"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-teal-900 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 (2 reseñas)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Productos Destacados</h2>
            <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
              Descubre nuestra selección de productos más populares con ofertas especiales
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                id={product.id}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-teal-600 text-teal-600 dark:text-teal-200 hover:bg-teal-50">
              Ver Todos los Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
