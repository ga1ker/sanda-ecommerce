import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductCardProps = {
    id: number;
}

export const ProductCard = ({
    id
}: ProductCardProps) => {

    return (
        <Card className="group hover:shadow-lg hover:cursor-pointer transition-shadow duration-300">
            <Link href={`/product/${id}`}>
                <CardContent className="p-4">
                  <div className="relative mb-4">
                    <Image
                      src={"/placeholder.svg"}
                      alt="hola"
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    {
                        //descuento si hay

                        <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                            10%
                        </Badge>
                    }
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 dark:text-teal-200 transition-colors">
                      Prodicto
                    </h3>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                          <Star className="h-4 w-4 fill-current" />
                      </div>
                      <span className="text-sm text-gray-500">(20)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-teal-600 dark:text-teal-200">$293</span>
                      <span className="text-sm text-gray-500 line-through">$300</span>
                    </div>
                    <Button className="w-full dark:bg-teal-800 hover:bg-teal-700 text-white">Agregar al Carrito</Button>
                  </div>
                </CardContent>
                </Link>
              </Card>
    );
}