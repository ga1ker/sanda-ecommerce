"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Upload, Plus, X } from "lucide-react"
import Link from "next/link"

interface FormField {
  name: string
  label: string
  type: "text" | "number" | "select" | "textarea"
  required: boolean
  options?: string[]
  placeholder?: string
}

const fieldConfigurations: Record<string, Record<string, FormField[]>> = {
  productos: {
    electronicos: [
      { 
        name: "marca", 
        label: "Marca", 
        type: "text", 
        required: true, 
        placeholder: "Ej: Samsung, Apple, Sony" },
      { 
        name: "modelo", 
        label: "Modelo", 
        type: "text", 
        required: true, 
        placeholder: "Ej: Galaxy S23, iPhone 14" },
      {
        name: "estado",
        label: "Estado",
        type: "select",
        required: true,
        options: ["Nuevo", "Usado - Excelente", "Usado - Muy bueno", "Usado - Bueno", "Para repuestos"],
      },
      {
        name: "garantia",
        label: "Garantía",
        type: "select",
        required: false,
        options: ["Sin garantía", "3 meses", "6 meses", "1 año", "2 años", "Garantía de fábrica"],
      },
      {
        name: "especificaciones",
        label: "Especificaciones técnicas",
        type: "textarea",
        required: false,
        placeholder: "Detalla las características técnicas principales",
      },
    ],
    "ropa-accesorios": [
      {
        name: "talla",
        label: "Talla",
        type: "select",
        required: true,
        options: ["XS", "S", "M", "L", "XL", "XXL", "Talla única"],
      },
      { name: "color", label: "Color", type: "text", required: true, placeholder: "Ej: Azul marino, Rojo, Negro" },
      {
        name: "material",
        label: "Material",
        type: "text",
        required: false,
        placeholder: "Ej: Algodón 100%, Poliéster, Cuero",
      },
      { name: "marca", label: "Marca", type: "text", required: false, placeholder: "Ej: Nike, Adidas, Zara" },
      {
        name: "genero",
        label: "Género",
        type: "select",
        required: true,
        options: ["Hombre", "Mujer", "Unisex", "Niño", "Niña"],
      },
    ],
    "hogar-jardin": [
      { 
        name: "dimensiones-alto", 
        label: "Altura (muebles)", 
        type: "number", 
        required: false, 
        placeholder: "Ingresa los metros de alto" 
      },
      { 
        name: "dimensiones-ancho", 
        label: "Ancho (muebles)", 
        type: "number", 
        required: false, 
        placeholder: "Ingresa los metros de ancho" 
      },
      { 
        name: "material", 
        label: "Material", 
        type: "text", 
        required: false, 
        placeholder: "Ej: Madera" 
      },
      {
        name: "color",
        label: "Color",
        type: "text",
        required: false,
        placeholder: "Ej: Morado"
      },
      {
        name: "estado",
        label: "Estado",
        type: "select",
        required: true,
        options: ["Nuevo", "Usado - Excelente", "Usado - Muy Bueno", "Usado - Bueno" ],
      },
      {
        name: "Marca",
        label: "Marca",
        type: "select",
        required: true,
        options:["IKEA","Ashley Furniture",
"Muebles Ros",
"Muebles JJP",
"Muebles Azor",
"Muebles Miv",
"Muebles Max Descuento",
"Muebles Intermobil",
"Muebles Interiores",]
      },
    ],
  },
  inmuebles: {
    casas: [
      {
        name: "habitaciones",
        label: "Habitaciones",
        type: "number",
        required: true,
        placeholder: "Número de habitaciones",
      },
      { name: "baños", label: "Baños", type: "number", required: true, placeholder: "Número de baños" },
      {
        name: "superficie",
        label: "Superficie cubierta (m²)",
        type: "number",
        required: true,
        placeholder: "Metros cuadrados cubiertos",
      },
      {
        name: "terreno",
        label: "Superficie del terreno (m²)",
        type: "number",
        required: false,
        placeholder: "Metros cuadrados del terreno",
      },
      {
        name: "garage",
        label: "Garage",
        type: "select",
        required: false,
        options: ["Sin garage", "1 auto", "2 autos", "3 o más autos"],
      },
    ],
    departamentos: [
      {
        name: "habitaciones",
        label: "Habitaciones",
        type: "number",
        required: true,
        placeholder: "Número de habitaciones",
      },
      { name: "baños", label: "Baños", type: "number", required: true, placeholder: "Número de baños" },
      { name: "superficie", label: "Superficie (m²)", type: "number", required: true, placeholder: "Metros cuadrados" },
      { name: "piso", label: "Piso", type: "text", required: false, placeholder: "Ej: 5to piso, Planta baja" },
      {
        name: "amenities",
        label: "Amenities",
        type: "textarea",
        required: false,
        placeholder: "Ej: Piscina, Gimnasio, Seguridad 24hs",
      },
    ],
    terrenos: [
      {
        name: "superficie",
        label: "Superficie",
        type: "number",
        required: true,
        placeholder: "Ingresa los metros cuadrados",
      },
      {
        name: "servicios",
        label: "Servicios",
        type: "textarea",
        required: true,
        placeholder: "Servicios del terreno",
      },
      {
        name: "zonificacion",
        label: "Zonificación",
        type: "select",
        required: true,
        placeholder: "Zonificacion",
        options: ["Residencial", "Comercial", "Mixta", "Industrial", "Recreativa", "Agricola"],
      },
      
    ],
  },
  servicios: {
    reparaciones: [
      {
        name: "especialidad",
        label: "Especialidad",
        type: "select",
        required: true,
        options: [
          "Electrodomésticos",
          "Electrónicos",
          "Computadoras",
          "Celulares",
          "Aire acondicionado",
          "Plomería",
          "Electricidad",
        ],
      },
      {
        name: "experiencia",
        label: "Años de experiencia",
        type: "number",
        required: true,
        placeholder: "Años de experiencia",
      },
      {
        name: "zona",
        label: "Zona de trabajo",
        type: "text",
        required: true,
        placeholder: "Ej: CABA, Zona Norte, Todo GBA",
      },
      {
        name: "garantia",
        label: "Garantía del servicio",
        type: "select",
        required: false,
        options: ["Sin garantía", "1 mes", "3 meses", "6 meses", "1 año"],
      },
      {
        name: "disponibilidad",
        label: "Disponibilidad",
        type: "select",
        required: true,
        options: ["Lunes a Viernes", "Fines de semana", "24 horas", "A convenir"],
      },
    ],
    consultoria: [
      {
        name: "especialidad",
        label: "Área de especialidad",
        type: "select",
        required: true,
        options: ["Legal", "Contable", "Marketing", "Recursos Humanos", "Tecnología", "Finanzas", "Negocios"],
      },
      {
        name: "experiencia",
        label: "Años de experiencia",
        type: "number",
        required: true,
        placeholder: "Años de experiencia",
      },
      {
        name: "modalidad",
        label: "Modalidad",
        type: "select",
        required: true,
        options: ["Presencial", "Virtual", "Ambas"],
      },
      {
        name: "certificaciones",
        label: "Certificaciones",
        type: "textarea",
        required: false,
        placeholder: "Títulos, certificaciones y credenciales",
      },
      {
        name: "idiomas",
        label: "Idiomas",
        type: "text",
        required: false,
        placeholder: "Ej: Español, Inglés, Portugués",
      },
    ],
  },
  automoviles: {
    autos: [
      { name: "marca", label: "Marca", type: "text", required: true, placeholder: "Ej: Toyota, Ford, Chevrolet" },
      { name: "modelo", label: "Modelo", type: "text", required: true, placeholder: "Ej: Corolla, Focus, Cruze" },
      { name: "año", label: "Año", type: "number", required: true, placeholder: "Año del vehículo" },
      {
        name: "kilometraje",
        label: "Kilometraje",
        type: "number",
        required: true,
        placeholder: "Kilómetros recorridos",
      },
      {
        name: "combustible",
        label: "Combustible",
        type: "select",
        required: true,
        options: ["Nafta", "Diesel", "GNC", "Híbrido", "Eléctrico"],
      },
      {
        name: "transmision",
        label: "Transmisión",
        type: "select",
        required: true,
        options: ["Manual", "Automática", "CVT"],
      },
    ],
    motos: [
      { name: "marca", label: "Marca", type: "text", required: true, placeholder: "Ej: Honda, Yamaha, Bajaj" },
      { name: "modelo", label: "Modelo", type: "text", required: true, placeholder: "Ej: CB 125, YBR 125, Rouser" },
      { name: "año", label: "Año", type: "number", required: true, placeholder: "Año del vehículo" },
      { name: "cilindrada", label: "Cilindrada (cc)", type: "number", required: true, placeholder: "Cilindrada en cc" },
      {
        name: "kilometraje",
        label: "Kilometraje",
        type: "number",
        required: true,
        placeholder: "Kilómetros recorridos",
      },
      {
        name: "tipo",
        label: "Tipo",
        type: "select",
        required: true,
        options: ["Street", "Deportiva", "Cruiser", "Enduro", "Scooter", "Cuatriciclo"],
      },
    ],
  },
}

export default function PublicarPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const categoria = searchParams.get("categoria")
  const subcategoria = searchParams.get("subcategoria")

  const [formData, setFormData] = useState<Record<string, string>>({})
  const [images, setImages] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fields = categoria && subcategoria ? fieldConfigurations[categoria]?.[subcategoria] || [] : []

  useEffect(() => {
    if (!categoria || !subcategoria) {
      router.push("/vender")
    }
  }, [categoria, subcategoria, router])

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      // Simular carga de imágenes
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages].slice(0, 10)) // Máximo 10 imágenes
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("¡Publicación creada exitosamente!")
    setIsSubmitting(false)
    router.push("/vender")
  }

  if (!categoria || !subcategoria) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4 mb-4">
            <Link href={`/vender/${categoria}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver
              </Button>
            </Link>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Publicar en {categoria} - {subcategoria}
            </h1>
            <p className="text-gray-600">Completa la información de tu publicación</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Información básica */}
            <Card>
              <CardHeader>
                <CardTitle>Información básica</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="titulo">Título de la publicación *</Label>
                  <Input
                    id="titulo"
                    placeholder="Escribe un título descriptivo y atractivo"
                    value={formData.titulo || ""}
                    onChange={(e) => handleInputChange("titulo", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descripcion">Descripción *</Label>
                  <Textarea
                    id="descripcion"
                    placeholder="Describe detalladamente tu producto o servicio"
                    rows={4}
                    value={formData.descripcion || ""}
                    onChange={(e) => handleInputChange("descripcion", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="precio">Precio *</Label>
                    <Input
                      id="precio"
                      type="number"
                      placeholder="0.00"
                      value={formData.precio || ""}
                      onChange={(e) => handleInputChange("precio", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ubicacion">Ubicación *</Label>
                    <Input
                      id="ubicacion"
                      placeholder="Ciudad, Provincia"
                      value={formData.ubicacion || ""}
                      onChange={(e) => handleInputChange("ubicacion", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campos específicos */}
            {fields.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Detalles específicos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fields.map((field) => (
                      <div key={field.name} className="space-y-2">
                        <Label htmlFor={field.name}>
                          {field.label} {field.required && "*"}
                        </Label>

                        {field.type === "select" ? (
                          <Select
                            value={formData[field.name] || ""}
                            onValueChange={(value) => handleInputChange(field.name, value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={`Selecciona ${field.label.toLowerCase()}`} />
                            </SelectTrigger>
                            <SelectContent>
                              {field.options?.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : field.type === "textarea" ? (
                          <Textarea
                            id={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            required={field.required}
                          />
                        ) : (
                          <Input
                            id={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.name] || ""}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            required={field.required}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Imágenes */}
            <Card>
              <CardHeader>
                <CardTitle>Imágenes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-lg font-medium text-gray-900">Sube tus imágenes</p>
                      <p className="text-gray-600">Máximo 10 imágenes. Formatos: JPG, PNG</p>
                    </div>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className=""
                      id="image-upload"
                    />
                    <Label htmlFor="image-upload" className="cursor-pointer">
                      <Button type="button" className="mt-4">
                        <Plus className="h-4 w-4 mr-2" />
                        Seleccionar imágenes
                      </Button>
                    </Label>
                  </div>

                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Imagen ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                          {index === 0 && <Badge className="absolute bottom-2 left-2 bg-teal-600">Principal</Badge>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancelar
              </Button>
              <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
                {isSubmitting ? "Publicando..." : "Publicar gratis"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
