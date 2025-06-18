import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Target, Eye, Lightbulb, ArrowRight } from "lucide-react"

export default function AcercaDe() {
  const milestones = [
    {
      year: "2019",
      title: "Fundación de Sanda",
      description: "Iniciamos nuestro viaje con la visión de transformar el e-commerce",
    },
    {
      year: "2020",
      title: "Primeros 1,000 clientes",
      description: "Alcanzamos nuestro primer hito importante de clientes satisfechos",
    },
    {
      year: "2021",
      title: "Expansión del catálogo",
      description: "Ampliamos nuestra oferta a más de 5,000 productos diferentes",
    },
    {
      year: "2022",
      title: "Certificación de calidad",
      description: "Obtuvimos certificaciones internacionales de calidad y seguridad",
    },
    {
      year: "2023",
      title: "50,000 clientes",
      description: "Celebramos haber servido a más de 50,000 clientes felices",
    },
    {
      year: "2024",
      title: "Innovación tecnológica",
      description: "Lanzamos nuestra nueva plataforma con IA para mejor experiencia",
    },
  ]

  const achievements = [
    "Más de 50,000 clientes satisfechos",
    "99% de satisfacción del cliente",
    "Envíos a todo el país",
    "Soporte 24/7 disponible",
    "Certificación ISO 9001",
    "Programa de sostenibilidad activo",
  ]

  const technologies = [
    {
      name: "Inteligencia Artificial",
      description: "Recomendaciones personalizadas para cada cliente",
      icon: "🤖",
    },
    {
      name: "Seguridad Avanzada",
      description: "Protección de datos con encriptación de última generación",
      icon: "🔒",
    },
    {
      name: "Logística Inteligente",
      description: "Sistema optimizado para entregas rápidas y eficientes",
      icon: "📦",
    },
    {
      name: "Análisis de Datos",
      description: "Insights profundos para mejorar continuamente",
      icon: "📊",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Conoce más sobre Sanda</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Acerca de <span className="text-teal-600">Sanda</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra misión, visión y los valores que nos impulsan a ser la mejor plataforma de e-commerce
              para nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <Card className="p-8 border-l-4 border-l-teal-600">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-teal-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Democratizar el acceso a productos de calidad a través de una plataforma de e-commerce innovadora,
                  segura y fácil de usar, que conecte a los consumidores con los mejores productos del mercado,
                  ofreciendo precios justos, envíos rápidos y un servicio al cliente excepcional.
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">Nos enfocamos en:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="text-gray-600">Calidad garantizada en cada producto</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="text-gray-600">Experiencia de compra excepcional</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="text-gray-600">Precios competitivos y justos</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="p-8 border-l-4 border-l-teal-600">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Eye className="h-8 w-8 text-teal-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Nuestra Visión</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ser la plataforma de e-commerce líder en América Latina, reconocida por nuestra innovación
                  tecnológica, compromiso con la sostenibilidad y por crear un ecosistema digital que beneficie tanto a
                  consumidores como a vendedores, transformando la forma en que las personas compran online.
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">Aspiramos a:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="text-gray-600">Liderar la innovación en e-commerce</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="text-gray-600">Expandirnos a nuevos mercados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-teal-600" />
                      <span className="text-gray-600">Promover prácticas sostenibles</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Nuestro Camino</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un viaje de crecimiento, innovación y compromiso con nuestros clientes
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent>
                        <div className="space-y-2">
                          <Badge className="bg-teal-100 text-teal-800">{milestone.year}</Badge>
                          <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="flex items-center justify-center space-x-2">
              <Lightbulb className="h-8 w-8 text-teal-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tecnología e Innovación</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Utilizamos las últimas tecnologías para ofrecerte la mejor experiencia de compra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Nuestros Logros</h2>
              <p className="text-xl text-teal-100">
                Estos son algunos de los hitos que hemos alcanzado gracias a la confianza de nuestros clientes y el
                trabajo dedicado de nuestro equipo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-teal-200" />
                    <span className="text-white">{achievement}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-white text-teal-600 hover:bg-gray-100">
                Conoce más sobre nosotros
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Nuestros Logros"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
