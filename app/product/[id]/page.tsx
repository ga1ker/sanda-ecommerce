import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, ShieldCheck, Truck, CreditCard, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container px-4 py-6 md:px-6 md:py-8">
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:underline">
          Inicio
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/category/electronics" className="hover:underline">
          Categoría
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/category/electronics/smartphones" className="hover:underline">
          SubCategoría
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="hidden md:flex flex-col gap-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="border rounded cursor-pointer hover:border-teal-500">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    width={80}
                    height={80}
                    alt={`Vista ${item}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
            <div className="md:col-span-4 bg-white rounded-lg p-4 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="Producto"
                className="max-h-[400px] w-auto"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <Badge className="mb-2">Más vendido</Badge>
            <h1 className="text-2xl font-bold">nombre del producto con id: {params.id}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(3 opiniones)</span>
            </div>
          </div>

          <div>
            <div className="text-3xl font-bold">$8,999</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm line-through text-muted-foreground">$10,000</span>
              <Badge className="bg-green-600">18% OFF</Badge>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-green-600 font-medium">Envío a todo el país</p>
                <p className="text-sm text-muted-foreground">Conoce los tiempos y las formas de envío.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Especificaciones técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">General</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Marca</span>
                    <span>Galker</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Modelo</span>
                    <span>Pro 2</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Color</span>
                    <span>Negro</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Garantía</span>
                    <span>No</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Pantalla</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Tipo</span>
                    <span>ChidOled</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Tamaño</span>
                    <span>6.5"</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Resolución</span>
                    <span>1920 x 1080 px</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Tasa de refresco</span>
                    <span>240 Hz</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button className="w-full">Comprar ahora</Button>
            <Button variant="outline" className="w-full">
              Agregar al carrito
            </Button>
            <Button variant="ghost" className="w-full flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Agregar a favoritos
            </Button>
          </div>
        </div>
      </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 bg-muted p-4 rounded-lg text-center">
                <div className="text-5xl font-bold">4.8</div>
                <div className="flex justify-center my-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Promedio entre 3 opiniones</p>
              </div>
              <div className="md:w-2/3 space-y-4">
                {[
                  { name: "Ana L.", rating: 5, date: "hace 2 semanas" },
                  { name: "Carlos M.", rating: 4, date: "hace 1 mes" },
                  { name: "Laura P.", rating: 2, date: "hace 2 meses" },
                ].map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.date}</div>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm">
                        Excelente producto muy bonito además
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
    </div>
  )
}
