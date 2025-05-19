import {Header} from "@/components/header";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader,  CardTitle, CardDescription,CardFooter  } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";  
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const imageStatics = [
  "/carouselStatic/image1.png",
  "/carouselStatic/image3.png",
];

const Opciones = [
    {image: "/carouselStatic/image1.png", nombre:"AAAA1"},
    {image: "/carouselStatic/image3.png", nombre:"AAAA2"},
    {image: "/carouselStatic/image1.png", nombre:"AAAA3"},
    {image: "/carouselStatic/image3.png", nombre:"AAAA4"},
    {image: "/carouselStatic/image1.png", nombre:"AAAA5"},
    {image: "/carouselStatic/image3.png", nombre:"AAAA6"},
]

const  DetailPage = () => {
    return(        
        <div>
            <Header/>
            <div className="flex flex-row ">
                <div className="w-1/4 flex-center">
                <Card>
                    <CardHeader>
                        <CardTitle>Tienda de Robando</CardTitle>
                        <CardDescription>Descripcion de prueba</CardDescription>
                        <CardContent className="flex flex-col">
                            {Opciones.map((src, index) =>(                                
                                <Button className=" flex justify-start bg-teal-000 border- hover:bg-teal-400 border-0 " key={index}>
                                    <img src={src.image} alt={src.nombre} className="w-8 rounded-full"/>
                                    <CardTitle className="">{src.nombre}</CardTitle>
                                </Button>
                            ))}
                        </CardContent>
                    </CardHeader>
                </Card>
                </div>
                <div className="w-3/8">
                <Carousel className="">
                    <CarouselContent>
                        {imageStatics.map((src, index)=> (
                        <CarouselItem key={index}>
                            <div className="p-2">                                
                                <Card>
                                    <CardContent className="flex items-center justify-center p-0 ">
                                        <img
                                            src={src}
                                            alt={`Imagen ${index + 1}`}
                                            className="object-cover w-full h-full rounded-lg"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
                </div>
                <div className="w-3/8 flex justify-center ">
                        <Card className="w-[350px] ">
                            <CardHeader>
                                <CardTitle>Samsung Galaxy A56 5g 256 GB 8 GB RAM</CardTitle>
                                <CardDescription>El Samsung Galaxy A56 5G es la elección perfecta para quienes buscan un smartphone potente y elegante. Con una impresionante capacidad de almacenamiento de 256 GB, tendrás suficiente espacio para fotos, vídeos y aplicaciones. Sus 8 GB de RAM garantizan un rendimiento fluido, lo que te permite realizar múltiples tareas sin ralentización.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Version</Label>
                                    <Select>                                    
                                        <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="next">128gb + 6gb</SelectItem>
                                            <SelectItem value="sveltekit">128gb + 8gb</SelectItem>
                                            <SelectItem value="astro">256gb + 8gb</SelectItem>
                                            <SelectItem value="nuxt">256gb +12gb</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    </div>
                                    <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="framework">Color</Label>
                                    <Select>
                                        <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="next">Verde</SelectItem>
                                            <SelectItem value="sveltekit">Blanco</SelectItem>
                                            <SelectItem value="astro">Lila</SelectItem>
                                            <SelectItem value="nuxt">Negro</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    </div>
                                </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button className="bg-teal-600">Agregar al carrito</Button>
                            </CardFooter>
                            </Card>
                </div>
            </div>
        </div>
    );
}

export default DetailPage;