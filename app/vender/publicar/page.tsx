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
import { ArrowLeft, Upload, Plus, X, Search, FileInput } from "lucide-react"

import Link from "next/link"
import { ComboBox } from "@/components/ui/comboBox"
import { Value } from "@radix-ui/react-select"
import { FileSelector } from "@/components/ui/formField"

interface FormField {
  name: string
  label: string
  type: "text" | "number" | "select" | "textarea" | "comboBox" | "file"
  required: boolean
  options?: string[]
  placeholder?: string
  accept?: string
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
        name: "marca",
        label: "Marca",
        type: "comboBox",
        required: true,
        options:["IKEA",
          "Ashley Furniture",
          "Muebles Ros",
          "Muebles JJP",
          "Muebles Azor",
          "Muebles Miv",
          "Muebles Max Descuento",
          "Muebles Intermobil",
          "Muebles Interiores",
        ]
      },
    ],
    "libros-musica":[
      {
        name:"autor",
        label: "Autor",
        type: "text",
        required: true
      },
      {
        name:"generoMusical",
        label: "Genero Musical",
        type: "comboBox",
        required: false,
        options:["Rock",
          "Pop",
          "Metal",
          "Regional Mexicano"
        ]
      },
      {
        name:"idioma",
        label: "Idioma",
        type: "select",
        required: true,
        options:["Español",
          "English"
        ]
      },
      {
        name: "estado",
        label: "Estado",
        type: "select",
        required: true,
        options: ["Nuevo", "Usado - Excelente", "Usado - Muy Bueno", "Usado - Bueno" ],
      },
      {
        name: "year",
        label: "año",
        type: "number",
        required: true,
      },
    ],
    "deportes-fitness": [
      {
        name: "deporte",
        label: "Deporte",
        type: "comboBox",
        required: true,
        options: ["Fútbol", "Baloncesto", "Béisbol", "Tenis", "Golf", "Boxeo", "Natación", "Ciclismo", "Atletismo", "Esquí", "Snowboard", "Hockey Sobre Hielo", "Hockey Sobre Césped", "Rugby", "Cricket", "Voleibol", "Surf", "Skateboarding", "Escalada", "Alpinismo", "Senderismo", "Buceo", "Kárate", "Taekwondo", "Judo", "Mma", "Esgrima", "Equitación", "Automovilismo", "Motociclismo", "Bádminton", "Ping Pong", "Padel", "Parkour", "Vela", "Remo", "Pesca Deportiva", "Gimnasia", "Halterofilia", "Lucha Libre", "Aeróbic", "Pilates", "Yoga", "Paintball", "Airsoft", "Caza Deportiva", "Triatlón", "Polo", "Curling", "Lanzamiento De Disco", "Lanzamiento De Jabalina", "Tiro Con Arco", "Tiro Deportivo", "Rafting", "Canotaje", "Kitesurf", "Windsurf", "Bodyboard", "Snorkel", "Slackline", "Breakdance", "Cheerleading"],
      },
      {
        name: "talla",
        label: "Talla",
        type: "select",
        required: true,
        options: ["XS", "S", "M", "L", "XL", "XXL", "Talla única"],
      },
      {
       name: "marca",
        label: "Marca",
        type: "comboBox",
        required: true,
        options:["Nike", "Adidas", "Puma", "Under Armour", "Reebok", "New Balance", "Asics", "Fila", "Mizuno", "Columbia", "The North Face", "Patagonia", "Salomon", "Merrell", "Skechers", "Converse", "Vans", "Jordan", "Champion", "Oakley", "Speedo", "Arena", "Brooks", "Saucony", "Hoka One One", "Lotto", "Diadora", "Kappa", "Le Coq Sportif", "Umbro", "Castore", "Joma", "Kelme", "Slazenger", "Everlast", "Lonsdale", "Wilson", "Head", "Babolat", "Yonex", "Dunlop", "Spalding", "Molten", "Mikasa", "Decathlon", "Quechua", "Domyos", "Kipsta", "Artengo", "Tribord", "Northwave", "Pedaled", "Fox Racing", "Altra", "Inov-8", "Xtep", "361 Degrees", "Li-Ning", "Anta", "Peak", "Erke", "Trek", "Specialized", "Giant", "Cannondale", "Scott", "Shimano", "Thule", "Oakley", "Osprey", "Camelbak"]
      },
      {
        name: "estado",
        label: "Estado",
        type: "select",
        required: true,
        options: ["Nuevo", "Usado - Excelente", "Usado - Muy Bueno", "Usado - Bueno" ],
      },
      {
        name: "year",
        label: "Año",
        type: "number",
        required: false,
      },
    ],
    "juguetes-bebes": [
      {
        name: "edad",
        label: "Edad",
        type: "number",
        required: false,
        placeholder:"pj. 4 años"
      },
      {
        name: "marca",
        label: "Marca",
        type: "comboBox",
        required: true,
        options:["Fisher-Price", "Chicco", "Vtech", "LeapFrog", "Playskool", "Melissa & Doug", "Little Tikes", "Playmobil", "Lego", "Mattel", "Hasbro", "Nerf", "Hot Wheels", "Barbie", "Mega Bloks", "Tomy", "Baby Einstein", "Bright Starts", "Infantino", "Lamaze", "Hape", "Skip Hop", "B. Toys", "Manhattan Toy", "Janod", "Tiny Love", "Lovevery", "SmartMax", "Djeco", "Brio", "Green Toys", "Fat Brain Toys", "Battat", "KidKraft", "Step2", "WowWee", "Spin Master", "Hexbug", "Clementoni", "Ravensburger", "Vulli", "Oball", "Gund", "Ty", "Play-Doh", "Crayola", "Tonka", "L.O.L. Surprise!", "Paw Patrol", "Peppa Pig", "Disney Baby", "Sesame Street", "Little Dutch", "PlanToys"]
      },
      {
        name: "estado",
        label: "Estado",
        type: "select",
        required: true,
        options: ["Nuevo", "Usado - Excelente", "Usado - Muy Bueno", "Usado - Bueno" ],
      }
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
    "locales-comerciales": [
      {
        name: "superficie",
        label: "Superficie",
        type: "number",
        required: true,
        placeholder: "Ingresa los metros cuadrados",
      },
      {
        name: "tipo",
        label: "Tipo de local",
        type: "comboBox",
        required: true,
        placeholder: "pj. Farmacia",
        options:["Tienda De Ropa", "Zapatería", "Farmacia", "Mini Supermercado", "Tienda De Conveniencia", "Papelería", "Ferretería", "Juguetería", "Librería", "Estética", "Barbería", "Spa", "Panadería", "Cafetería", "Restaurante", "Taquería", "Heladería", "Pastelería", "Oficina", "Consultorio Médico", "Consultorio Dental", "Consultorio Psicológico", "Veterinaria", "Agencia De Viajes", "Boutique", "Salón De Eventos", "Gimnasio", "Tienda De Electrónica", "Centro De Copiado", "Ciber Café", "Tienda De Celulares", "Tienda De Accesorios", "Tienda Naturista", "Tienda De Regalos", "Tienda De Mascotas", "Tienda De Artesanías", "Tienda De Segunda Mano", "Local De Comida Para Llevar", "Tienda De Deportes", "Centro De Capacitación", "Escuela De Idiomas", "Estudio Fotográfico", "Local De Servicios Financieros", "Lavandería", "Tintorería", "Reparación De Electrónicos", "Reparación De Calzado", "Tienda De Mejoras Para El Hogar", "Florería"
]
      },
      {
        name: "servicios",
        label: "Servicios",
        type: "textarea",
        required: true,
        placeholder: "Servicios del terreno",
      },
      {
        name: "accesos",
        label: "Accesos",
        type: "comboBox",
        required: true,
        placeholder: "pj. Acceso con tarjeta digital",
        options: ["Acceso Peatonal", "Acceso Vehicular", "Acceso Desde La Calle", "Acceso Desde Estacionamiento", "Acceso Interior Desde Plaza Comercial", "Acceso Frontal", "Acceso Lateral", "Acceso Trasero", "Acceso Para Carga Y Descarga", "Acceso Para Personas Con Discapacidad", "Acceso Con Rampa", "Acceso Con Escalera", "Acceso Con Elevador", "Acceso Con Puerta Automática", "Acceso Con Cortina Metálica", "Acceso Con Reja", "Acceso Privado", "Acceso Compartido", "Acceso Con Tarjeta O Código", "Acceso 24 Horas"],
      },
      
    ],
    "quintas-campos": [
      {
        name: "Hectareas",
        label: "Hectareas",
        type: "number",
        required: true,
        placeholder: "Ingresa los kilometros cuadrados",
      },
      {
        name: "construcciones",
        label: "Construcciones",
        type: "textarea",
        required: false,
        placeholder: "pj. Dos casas",
      },
      {
        name: "servicios",
        label: "Servicios",
        type: "textarea",
        required: true,
        placeholder: "Servicios del terreno",
      },
      {
        name: "accesos",
        label: "Accesos",
        type: "comboBox",
        required: false,
        placeholder: "pj. Acceso con tarjeta digital",
        options: ["Acceso Peatonal", "Acceso Vehicular", "Acceso Desde La Calle", "Acceso Desde Estacionamiento", "Acceso Interior Desde Plaza Comercial", "Acceso Frontal", "Acceso Lateral", "Acceso Trasero", "Acceso Para Carga Y Descarga", "Acceso Para Personas Con Discapacidad", "Acceso Con Rampa", "Acceso Con Escalera", "Acceso Con Elevador", "Acceso Con Puerta Automática", "Acceso Con Cortina Metálica", "Acceso Con Reja", "Acceso Privado", "Acceso Compartido", "Acceso Con Tarjeta O Código", "Acceso 24 Horas"],
      },
      {
        name: "produccion",
        label: "Produccion",
        type: "comboBox",
        required: false,
        placeholder: "pj. Produccion frutal",
        options: ["Producción Agrícola", "Producción Ganadera", "Producción Forestal", "Producción Frutícola", "Producción Hortícola", "Producción Vitivinícola", "Producción Apícola", "Producción Avícola", "Producción Lechera", "Producción De Carne", "Producción De Granos", "Producción De Hortalizas", "Producción De Madera", "Producción De Oliva", "Producción De Plantas Aromáticas", "Producción De Semillas", "Producción Artesanal", "Producción Mixta", "Sin Producción Actualmente", "Con Potencial Productivo"],
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
    "diseno-creativos": [
      {
        name: "especialidad",
        label: "Área de especialidad",
        type: "comboBox",
        required: true,
        options: ["Diseño Gráfico", "Diseño Web", "Diseño UX/UI", "Diseño De Producto", "Diseño Industrial", "Diseño De Interiores", "Diseño De Moda", "Diseño Editorial", "Diseño De Empaques", "Diseño De Marca", "Dirección De Arte", "Ilustración", "Animación 2D", "Animación 3D", "Motion Graphics", "Fotografía", "Fotografía De Producto", "Fotografía Publicitaria", "Retoque Fotográfico", "Modelado 3D", "Renderizado", "Diseño De Escenografía", "Diseño Publicitario", "Diseño De Experiencia", "Diseño Tipográfico", "Diseño De Señalética", "Diseño De Videojuegos", "Diseño De Interfaces", "Diseño De Presentaciones", "Diseño De Contenido Para Redes Sociales", "Producción Audiovisual", "Edición De Video", "Creatividad Publicitaria", "Storytelling Visual", "Ilustración Digital", "Diseño De Experiencias Inmersivas", "Diseño Sonoro", "Diseño De Exposiciones"],
      },
      {
        name: "experiencia",
        label: "Años de experiencia",
        type: "number",
        required: false,
        placeholder: "Años de experiencia",
      },
      {
        name: "software",
        label: "Software Utilizado",
        type: "comboBox",
        required: true,
        options: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "Adobe After Effects", "Adobe Premiere Pro", "Adobe Lightroom", "Figma", "Sketch", "Canva", "CorelDRAW", "Affinity Designer", "Affinity Photo", "Affinity Publisher", "Blender", "Cinema 4D", "Autodesk Maya", "Autodesk 3ds Max", "ZBrush", "Procreate", "Krita", "Clip Studio Paint", "InVision", "Marvel App", "Rhinoceros", "Fusion 360", "Substance Painter", "Substance Designer", "DaVinci Resolve", "Final Cut Pro", "Avid Media Composer", "Unity", "Unreal Engine", "Tinkercad", "Gravit Designer", "Crello", "GIMP", "Spark AR", "Adobe Aero", "Vectr", "SketchUp", "Notch", "Toon Boom Harmony", "Houdini", "Lightwave 3D", "MagicaVoxel"],
      },
      {
        name: "portafolio",
        label: "Portafolio",
        type: "file",
        required: false,
        placeholder: "Ingresa algunas de tus obras",
        accept:"application/pdf"
      },
      {
        name: "estilo",
        label: "Estilo",
        type: "text",
        required: false,
        placeholder: "Estilo con el que dibujas",
      },
    ],
     educacion: [
      {
        name: "materia",
        label: "Materia Impartida",
        type: "comboBox",
        required: true,
        options: ["Matemáticas", "Álgebra", "Geometría", "Trigonometría", "Cálculo", "Estadística", "Probabilidad", "Física", "Química", "Biología", "Ciencias Naturales", "Geografía", "Historia", "Cívica", "Educación Ética", "Lengua Española", "Literatura", "Ortografía", "Redacción", "Comprensión Lectora", "Filosofía", "Educación Artística", "Música", "Artes Plásticas", "Teatro", "Dibujo Técnico", "Educación Física", "Tecnología", "Informática", "Programación", "Robótica", "Emprendimiento", "Economía", "Administración", "Contabilidad", "Finanzas", "Inglés", "Francés", "Alemán", "Italiano", "Portugués", "Chino", "Japonés", "Latín", "Religión", "Psicología", "Sociología", "Derecho", "Comunicación", "Diseño Gráfico", "Diseño Industrial", "Fotografía", "Marketing", "Publicidad", "Ciencias De La Tierra", "Ecología", "Educación Ambiental", "Salud", "Anatomía", "Fisiología", "Enfermería", "Pedagogía", "Didáctica", "Lengua De Señas"
],
      },
      {
        name: "nivel",
        label: "Nivel",
        type: "comboBox",
        required: true,
        options:["Educación Inicial", "Preescolar", "Educación Básica", "Primaria", "Secundaria", "Educación Media", "Bachillerato", "Educación Técnica", "Educación Tecnológica", "Educación Profesional Técnica", "Educación Media Superior", "Formación Para El Trabajo", "Educación Superior", "Universidad", "Licenciatura", "Posgrado", "Maestría", "Doctorado", "Educación Continua", "Educación Abierta", "Educación A Distancia", "Educación En Línea", "Educación Especial", "Educación Para Adultos", "Capacitación Empresarial", "Talleres Extracurriculares", "Cursos Libres", "Clases Particulares"]
      },
      {
        name: "modalidad",
        label: "Modalidad",
        type: "comboBox",
        required: true,
        options:["Presencial", "En Línea", "Virtual", "A Distancia", "Semipresencial", "Híbrida", "Autodirigida", "Tutoría Personalizada", "Grupal", "Individual", "Sincrónica", "Asincrónica", "Modular", "Por Competencias", "Flexible", "Intensiva", "Continua", "Abierta", "Dual", "On Demand"]
      },
      {
        name: "experiencia",
        label: "Experiencia",
        type: "number",
        required: true,
        placeholder: "Años de experiencia",
      },
      {
        name: "certificaciones",
        label: "Certificaciones",
        type: "file",
        required: true,
        accept: "application/pdf"
      },
    ],
    "salud-belleza": [
      {
        name: "especialidad",
        label: "Especialidad",
        type: "comboBox",
        required: true,
        options:["Medicina General", "Medicina Interna", "Pediatría", "Ginecología", "Obstetricia", "Dermatología", "Cardiología", "Traumatología", "Ortopedia", "Neurología", "Oftalmología", "Otorrinolaringología", "Endocrinología", "Urología", "Psiquiatría", "Psicología Clínica", "Nutrición", "Odontología", "Odontopediatría", "Ortodoncia", "Fisioterapia", "Kinesiología", "Terapia Ocupacional", "Enfermería", "Cosmetología", "Cosmiatría", "Estética Facial", "Estética Corporal", "Maquillaje Profesional", "Barbería", "Estilismo", "Colorimetría", "Peinados", "Manicure", "Pedicure", "Depilación", "Micropigmentación", "Lifting De Pestañas", "Extensión De Pestañas", "Masoterapia", "Spa Y Bienestar", "Reiki", "Reflexología", "Aromaterapia", "Podología", "Tatuajes", "Body Piercing"]
      },
      {
        name: "certificaciones",
        label: "Certificaciones",
        type: "file",
        required: true,
        accept: "application/pdf"
      },
      {
        name: "horarios",
        label: "Horarios",
        type: "textarea",
        required: true,
      },
      {
        name: "experiencia",
        label: "Experiencia",
        type: "number",
        required: true,
        placeholder: "Años de experiencia",
      },
    ],
    eventos: [
      {
        name: "tipo_evento",
        label: "Tipo de Evento",
        type: "comboBox",
        required: true,
        options:["Bodas", "Quince Años", "Bautizos", "Primera Comunión", "Confirmaciones", "Cumpleaños Infantiles", "Cumpleaños De Adultos", "Despedidas De Soltero", "Baby Showers", "Gender Reveal", "Fiestas Temáticas", "Aniversarios", "Reuniones Familiares", "Graduaciones", "Eventos Escolares", "Eventos Religiosos", "Eventos Culturales", "Eventos Deportivos", "Eventos Empresariales", "Conferencias", "Seminarios", "Congresos", "Ferias", "Exposiciones", "Lanzamientos De Producto", "Inauguraciones", "Ruedas De Prensa", "Eventos Corporativos", "Cocteles Empresariales", "Capacitaciones", "Team Building", "Activaciones De Marca", "Fiestas De Fin De Año", "Eventos Virtuales", "Eventos Híbridos"]
      },
      {
        name: "capacidad",
        label: "Capacidad",
        type: "number",
        required: true,
        placeholder:"pj. 50 personas"
      },
      {
        name: "Servicios",
        label: "Servicios",
        type: "textarea",
        required: false,
      },
      {
        name: "experiencia",
        label: "Experiencia",
        type: "number",
        required: true,
        placeholder: "Años de experiencia",
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
    "camiones-comerciales": [
      { name: "marca", label: "Marca", type: "text", required: true, placeholder: "Ej: Honda, Yamaha, Bajaj" },
      { name: "modelo", label: "Modelo", type: "text", required: true, placeholder: "Ej: CB 125, YBR 125, Rouser" },
      { name: "año", label: "Año", type: "number", required: true, placeholder: "Año del vehículo" },
      {
        name: "kilometraje",
        label: "Kilometraje",
        type: "number",
        required: true,
        placeholder: "Kilómetros recorridos",
      },
      {
        name: "carga",
        label: "Carga",
        type: "number",
        required: true,
        placeholder: "pj. 500 kg.",
      },
      {
        name: "uso",
        label: "Uso",
        type: "comboBox",
        required: true,
        options: ["Carga General", "Transporte De Mercancías", "Mudanzas", "Transporte De Alimentos", "Reparto Urbano", "Reparto Última Milla", "Transporte De Bebidas", "Transporte De Materiales De Construcción", "Transporte De Maquinaria", "Transporte De Combustible", "Transporte De Gas", "Transporte De Animales", "Transporte De Refrigerados", "Transporte Escolar", "Transporte De Personal", "Transporte Turístico", "Transporte De Paquetería", "Transporte De Valores", "Transporte De Residuos", "Uso Agrícola", "Uso Industrial", "Uso Comercial", "Uso Logístico", "Uso Institucional", "Uso Municipal", "Vehículo Taller", "Vehículo Publicitario", "Camión De Bomberos", "Camión Cisterna", "Camión Recolector De Basura", "Camión De Volteo", "Camión Plataforma", "Camión Grúa", "Camión De Servicios Especiales"],
      },
    ],
    repuestos: [
      {
        name: "vehiculo_compatible",
        label: "Vehiculo Compatible",
        type: "text",
        required: true,
        placeholder: "pj. Jetta 2009",
      },
      {
        name: "marca",
        label: "Marca",
        type: "comboBox",
        required: true,
        placeholder:"Buscar aquí",
        options:["Bosch", "NGK", "Denso", "ACDelco", "Delphi", "Valeo", "Mopar", "Motorcraft", "Magneti Marelli", "Gates", "SKF", "Timken", "KYB", "Monroe", "TRW", "Brembo", "Zimmermann", "Textar", "Hella", "Philips", "Osram", "Mahle", "Mann-Filter", "Fram", "K&N", "Champion", "Ferodo", "Sachs", "LUK", "Exedy", "Febi Bilstein", "Dayco", "Contitech", "Beck/Arnley", "Hitachi", "Blueprint", "URO Parts", "Corteco", "Nissens", "Wagner", "ATE", "Seiken", "Tein", "Tokico", "SuperPro", "Moog"]
      },
      {
        name: "numero_parte",
        label: "Numero de Parte",
        type: "number",
        required: false,
      },
      {
        name: "estado",
        label: "Estado",
        type: "select",
        required: true,
        options: ["Nuevo", "Usado - Excelente", "Usado - Muy Bueno", "Usado - Bueno" ],
      },
      {
        name: "garantia",
        label: "Garantía",
        type: "text",
        required: false,
      },
    ],
    accesorios: [
      {
        name: "vehiculo_compatible",
        label: "Vehiculo Compatible",
        type: "text",
        required: true,
        placeholder: "pj. Jetta 2009",
      },
      {
        name: "marca",
        label: "Marca",
        type: "comboBox",
        required: false,
        placeholder:"Buscar aquí",
        options:["Thule", "WeatherTech", "Bosch", "Pioneer", "Kenwood", "Alpine", "Sony", "JVC", "JL Audio", "Rockford Fosgate", "Kicker", "JBL", "MTX Audio", "Garmin", "Cobra", "Escort", "Viper", "Compustar", "Covercraft", "3M", "Armor All", "Meguiar’s", "Chemical Guys", "Yakima", "Rhino-Rack", "Curt", "Draw-Tite", "Reese", "Hopkins", "Mopar", "TRD", "Ford Accessories", "GM Accessories", "Toyota Accessories", "Honda Genuine Accessories", "Rugged Ridge", "Smittybilt", "Bushwacker", "Westin", "Dee Zee", "Husky Liners", "AVS", "Putco", "AMP Research", "BedRug", "Extang", "Tonno Pro", "UnderCover", "K&N", "AEM", "Hella", "Philips", "Osram", "Anzo USA", "Spyder Auto"]
      },
      {
        name: "tipo",
        label: "Tipo de accesorio",
        type: "comboBox",
        required: true,
        options:["Interiores", "Exteriores", "Seguridad", "Audio Y Video", "Tecnología", "Iluminación", "Performance", "Carga Y Transporte", "Protección", "Conectividad", "Organización", "Estética", "Navegación", "Accesorios Para Mascotas", "Accesorios Deportivos", "Accesorios De Invierno", "Accesorios De Verano", "Accesorios Todo Terreno", "Accesorios Para Camperización", "Accesorios Para Remolque", "Accesorios Para Viajes", "Accesorios Personalizados", "Repuestos Estéticos", "Accesorios OEM", "Accesorios Aftermarket"
]
      },
      {
        name: "estado",
        label: "Estado",
        type: "select",
        required: true,
        options: ["Nuevo", "Usado - Excelente", "Usado - Muy Bueno", "Usado - Bueno" ],
      },
      {
        name: "instalacion",
        label: "Instalación",
        type: "textarea",
        required: false,
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
  const [selected, setOnSelected] = useState("")
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
                        ) : field.type === "comboBox" ?(
                          <ComboBox
                          label={field.label}
                          options={field.options}
                          onSelect={(value)=>setOnSelected(value)}
                          selectedValue={selected}
                          />
                        ) : field.type === "file" ?(
                          <FileSelector
                          name={field.name}
                          label={field.label}
                          required={field.required}
                          placeholder={field.placeholder}
                          accept={field.accept || ".pdf"}
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
