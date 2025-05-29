import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus } from "lucide-react"

interface CategoryData {
  name: string
  description: string
  subcategories: {
    id: string
    name: string
    description: string
    fields: string[]
  }[]
}

const categoriesData: Record<string, CategoryData> = {
  productos: {
    name: "Productos",
    description: "Vende artículos físicos de todo tipo",
    subcategories: [
      {
        id: "electronicos",
        name: "Electrónicos",
        description: "Smartphones, laptops, tablets, accesorios",
        fields: ["marca", "modelo", "estado", "garantia", "especificaciones"],
      },
      {
        id: "ropa-accesorios",
        name: "Ropa y Accesorios",
        description: "Vestimenta, calzado, bolsos, joyería",
        fields: ["talla", "color", "material", "marca", "genero"],
      },
      {
        id: "hogar-jardin",
        name: "Hogar y Jardín",
        description: "Muebles, decoración, electrodomésticos",
        fields: ["dimensiones", "material", "color", "estado", "marca"],
      },
      {
        id: "deportes-fitness",
        name: "Deportes y Fitness",
        description: "Equipamiento deportivo, ropa deportiva",
        fields: ["deporte", "talla", "marca", "estado", "nivel"],
      },
      {
        id: "libros-musica",
        name: "Libros y Música",
        description: "Libros, instrumentos musicales, vinilos",
        fields: ["autor", "genero", "idioma", "estado", "año"],
      },
      {
        id: "juguetes-bebes",
        name: "Juguetes y Bebés",
        description: "Juguetes, artículos para bebés, puericultura",
        fields: ["edad", "marca", "estado", "material", "seguridad"],
      },
    ],
  },
  inmuebles: {
    name: "Inmuebles",
    description: "Propiedades para venta y alquiler",
    subcategories: [
      {
        id: "casas",
        name: "Casas",
        description: "Casas unifamiliares, chalets, villas",
        fields: ["habitaciones", "baños", "superficie", "terreno", "garage"],
      },
      {
        id: "departamentos",
        name: "Departamentos",
        description: "Apartamentos, estudios, lofts",
        fields: ["habitaciones", "baños", "superficie", "piso", "amenities"],
      },
      {
        id: "terrenos",
        name: "Terrenos",
        description: "Lotes, terrenos urbanos y rurales",
        fields: ["superficie", "zonificacion", "servicios"],
      },
      {
        id: "locales-comerciales",
        name: "Locales Comerciales",
        description: "Oficinas, locales, galpones industriales",
        fields: ["superficie", "ubicacion", "tipo", "servicios", "accesos"],
      },
      {
        id: "quintas-campos",
        name: "Quintas y Campos",
        description: "Propiedades rurales, quintas, estancias",
        fields: ["hectareas", "construcciones", "agua", "accesos", "produccion"],
      },
    ],
  },
  servicios: {
    name: "Servicios",
    description: "Servicios profesionales y especializados",
    subcategories: [
      {
        id: "reparaciones",
        name: "Reparaciones",
        description: "Reparación de electrodomésticos, electrónicos",
        fields: ["especialidad", "experiencia", "zona", "garantia", "disponibilidad"],
      },
      {
        id: "consultoria",
        name: "Consultoría",
        description: "Asesoramiento profesional, legal, contable",
        fields: ["especialidad", "experiencia", "modalidad", "certificaciones", "idiomas"],
      },
      {
        id: "diseno-creativos",
        name: "Diseño y Creativos",
        description: "Diseño gráfico, web, fotografía, video",
        fields: ["especialidad", "portfolio", "software", "experiencia", "estilo"],
      },
      {
        id: "educacion",
        name: "Educación",
        description: "Clases particulares, cursos, capacitaciones",
        fields: ["materia", "nivel", "modalidad", "experiencia", "certificaciones"],
      },
      {
        id: "salud-belleza",
        name: "Salud y Belleza",
        description: "Servicios de estética, masajes, terapias",
        fields: ["especialidad", "certificaciones", "experiencia", "ubicacion", "horarios"],
      },
      {
        id: "eventos",
        name: "Eventos",
        description: "Organización de eventos, catering, música",
        fields: ["tipo_evento", "capacidad", "servicios", "zona", "experiencia"],
      },
    ],
  },
  automoviles: {
    name: "Automóviles",
    description: "Vehículos y accesorios automotrices",
    subcategories: [
      {
        id: "autos",
        name: "Autos",
        description: "Automóviles nuevos y usados",
        fields: ["marca", "modelo", "año", "kilometraje", "combustible", "transmision"],
      },
      {
        id: "motos",
        name: "Motos",
        description: "Motocicletas, scooters, cuatriciclos",
        fields: ["marca", "modelo", "año", "cilindrada", "kilometraje", "tipo"],
      },
      {
        id: "camiones-comerciales",
        name: "Camiones y Comerciales",
        description: "Camiones, utilitarios, vehículos comerciales",
        fields: ["marca", "modelo", "año", "carga", "kilometraje", "uso"],
      },
      {
        id: "repuestos",
        name: "Repuestos",
        description: "Repuestos y autopartes originales y alternativos",
        fields: ["vehiculo_compatible", "marca", "numero_parte", "estado", "garantia"],
      },
      {
        id: "accesorios",
        name: "Accesorios",
        description: "Accesorios para vehículos, tuning, audio",
        fields: ["vehiculo_compatible", "marca", "tipo", "estado", "instalacion"],
      },
    ],
  },
}

export default function CategoriaPage({ params }: { params: { categoria: string } }) {
  const categoryData = categoriesData[params.categoria]

  if (!categoryData) {
    console.log("Category not found:", params.categoria)
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/vender">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a categorías
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Vender en <span className="text-teal-600">{categoryData.name}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">{categoryData.description}</p>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Elige una subcategoría</h2>
            <p className="text-lg text-gray-600">
              Selecciona la subcategoría que mejor describa tu producto o servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                href={`/vender/publicar?categoria=${params.categoria}&subcategoria=${subcategory.id}`}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105">
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">{subcategory.name}</h3>
                      <p className="text-gray-600">{subcategory.description}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Campos requeridos:</p>
                      <div className="flex flex-wrap gap-1">
                        {subcategory.fields.slice(0, 3).map((field, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {field}
                          </Badge>
                        ))}
                        {subcategory.fields.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{subcategory.fields.length - 3} más
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                      Publicar en {subcategory.name}
                      <Plus className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Consejos para vender en {categoryData.name}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="space-y-3">
                <h3 className="font-semibold text-gray-900">📸 Fotos de calidad</h3>
                <p className="text-gray-600 text-sm">
                  Usa fotos claras y bien iluminadas. Muestra el producto desde diferentes ángulos.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-3">
                <h3 className="font-semibold text-gray-900">📝 Descripción detallada</h3>
                <p className="text-gray-600 text-sm">
                  Incluye todas las características importantes y el estado del producto.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-3">
                <h3 className="font-semibold text-gray-900">💰 Precio competitivo</h3>
                <p className="text-gray-600 text-sm">
                  Investiga precios similares en el mercado para establecer un precio justo.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-3">
                <h3 className="font-semibold text-gray-900">⚡ Respuesta rápida</h3>
                <p className="text-gray-600 text-sm">Responde rápidamente a las consultas para generar confianza.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
