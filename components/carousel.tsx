import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel"

export const CarouselHome = () => {
    return (
        <div className="">
            <Carousel className="p-3">
                <CarouselContent>
                    <CarouselItem className="">
                        <div className="p-2">                                
                            <Card className="py-0">
                                <CardContent className="items-center justify-center p-0 ">
                                    <div
                                        className="object-cover w-full h-52 rounded-lg bg-blue-300"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-2">                                
                            <Card className="py-0">
                                <CardContent className="items-center justify-center p-0 ">
                                    <div
                                        className="object-cover w-full h-52 rounded-lg bg-red-300"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-1/2 transform -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10" />
            </Carousel>
        </div>
    )
}