import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, Heart } from "lucide-react"

export default function SobreNosotros() {
  const stats = [
    { number: "50K+", label: "Clientes Satisfechos" },
    { number: "10K+", label: "Productos Vendidos" },
    { number: "5", label: "Años de Experiencia" },
    { number: "99%", label: "Satisfacción del Cliente" },
  ]

  const team = [
    {
      name: "Ismael Otamendi Sanchez",
      role: "CEO & Fundadora",
      image: "/placeholder.svg?height=300&width=300",
      description: "Visionaria con más de 15 años de experiencia en e-commerce",
    },
    {
      name: "Gadiel Alcazar Bernal",
      role: "Director de Tecnología",
      image: "/placeholder.svg?height=300&width=300",
      description: "Experto en desarrollo web y experiencia de usuario",
    },
    {
      name: "Carlos Eduardo Cuamatzi Conde",
      role: "Directora de Marketing",
      image: "/placeholder.svg?height=300&width=300",
      description: "Especialista en marketing digital y estrategias de crecimiento",
    },
    {
      name: "Gabriel García Luna",
      role: "Director de Operaciones",
      image: "/placeholder.svg?height=300&width=300",
      description: "Responsable de la logística y cadena de suministro",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-teal-600" />,
      title: "Pasión por el Cliente",
      description: "Cada decisión que tomamos está centrada en brindar la mejor experiencia a nuestros clientes.",
    },
    {
      icon: <Award className="h-8 w-8 text-teal-600" />,
      title: "Calidad Garantizada",
      description: "Seleccionamos cuidadosamente cada producto para asegurar la más alta calidad.",
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-600" />,
      title: "Innovación Constante",
      description: "Siempre buscamos nuevas formas de mejorar y evolucionar nuestros servicios.",
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Trabajo en Equipo",
      description: "Creemos en el poder de la colaboración para alcanzar objetivos extraordinarios.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Conoce nuestra historia</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Sobre <span className="text-teal-600">Nosotros</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos un equipo apasionado dedicado a revolucionar la experiencia de compra online, ofreciendo productos
              de calidad y un servicio excepcional desde 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sanda nació en 2019 con una visión simple pero poderosa: hacer que las compras online sean más
                  fáciles, seguras y satisfactorias para todos. Lo que comenzó como una pequeña startup con grandes
                  sueños, se ha convertido en una de las plataformas de e-commerce más confiables del mercado.
                </p>
                <p>
                  Desde nuestros humildes comienzos en un pequeño garaje, hemos crecido hasta convertirnos en un equipo
                  de más de 100 profesionales dedicados, sirviendo a más de 50,000 clientes satisfechos en todo el país.
                </p>
                <p>
                  Nuestra misión es clara: democratizar el acceso a productos de calidad, ofreciendo precios justos,
                  envíos rápidos y un servicio al cliente que supere las expectativas.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Nuestra Historia"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-teal-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en Sanda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce a las personas apasionadas que hacen posible la magia de Sanda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}