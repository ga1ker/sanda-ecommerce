import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";


export const ProductCard = () => {
    return ( 
        <div className="group relative bg-white overflow-hidden rounded-lg border">
            <Link href="#" className="absolute inset-0 z-10">
            <span className="sr-only">Ver producto</span>
            </Link>
            <div
            className="h-30 w-full object-cover transition-transform group-hover:scale-105 bg-green-100"
            />
            <div className="p-2">
            <h3 className="font-semibold">Producto</h3>
            <p className="text-sm text-gray-500">Categoría</p>
            <div className="mt-2 flex items-center justify-between">
                <span className="font-bold text-emerald-600">$99.99</span>
                <Button size="sm" className="bg-[#80cbc4] hover:bg-emerald-300">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Añadir
                </Button>
            </div>
            </div>
        </div>
    );
}