import { Car, Home, PcCase, Shirt, Smartphone, ToyBrick } from "lucide-react";
import Link from "next/link";

export default function Categorias () {

    const categorias = [
        { name: "Vehículos", href:"vehiculos", icon: <Car className="size-12" /> },
        { name: "Celulares", href:"celulares", icon: <Smartphone className="size-12" /> },
        { name: "Computación", href:"computacion", icon: <PcCase className="size-12" /> },
        { name: "Ropa", href:"ropa", icon: <Shirt className="size-12" /> },
        { name: "Juguetes", href:"juguetes", icon: <ToyBrick className="size-12" /> },
        { name: "Hogar", href:"hogar", icon: <Home className="size-12" /> },
    ]

    return (
        <div className="grid justify-items-center gap-7 grid-cols-2 lg:grid-cols-4 px-5 py-6">
            {
                categorias.map((categoria, index) => (
                    <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm transition dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-end px-4 pt-7"></div>
                        <div className="flex flex-col items-center pb-10">
                            <div className="w-24 h-24 flex items-center justify-center mb-3 rounded-full shadow-lg">
                                {categoria.icon}
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 transition dark:text-white">{categoria.name}</h5>
                            <div className="flex mt-4 md:mt-6">
                                <Link href={'/categorias/' + categoria.href} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Ver productos</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}