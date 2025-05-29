import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Home, Wrench, Car, ArrowRight, TrendingUp, Shield, Clock, Users } from "lucide-react"

export default function VenderPage() {
  const categories = [
    {
      id: "productos",
      name: "Productos",
      description: "Vende artículos físicos de todo tipo",
      icon: <Smartphone className="h-12 w-12 text-teal-600" />,
      subcategories: ["Electrónicos", "Ropa", "Hogar", "Deportes", "Libros", "Juguetes"],
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "inmuebles",
      name: "Inmuebles",
      description: "Propiedades para venta y alquiler",
      icon: <Home className="h-12 w-12 text-teal-600" />,
      subcategories: ["Casas", "Departamentos", "Terrenos", "Locales", "Quintas"],
      color: "bg-green-50 border-green-200",
    },
    {
      id: "servicios",
      name: "Servicios",
      description: "Servicios profesionales y especializados",
      icon: <Wrench className="h-12 w-12 text-teal-600" />,
      subcategories: ["Reparaciones", "Consultoría", "Diseño", "Educación", "Salud", "Eventos"],
      color: "bg-purple-50 border-purple-200",
    },
    {
      id: "automoviles",
      name: "Automóviles",
      description: "Vehículos y accesorios automotrices",
      icon: <Car className="h-12 w-12 text-teal-600" />,
      subcategories: ["Autos", "Motos", "Camiones", "Repuestos", "Accesorios"],
      color: "bg-orange-50 border-orange-200",
    },
  ]


  return (
    <div className="min-h-screen">

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Qué quieres vender?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elige la categoría que mejor se adapte a tu producto o servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/vender/${category.id}`}>
                <Card
                  className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 ${category.color}`}
                >
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="flex justify-center">{category.icon}</div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-700">Subcategorías populares:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {category.subcategories.slice(0, 3).map((sub, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {sub}
                          </Badge>
                        ))}
                        {category.subcategories.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.subcategories.length - 3} más
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      Vender {category.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
