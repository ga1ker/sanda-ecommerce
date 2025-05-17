import { Car, PcCase, Smartphone } from "lucide-react";

export default function Categorias () {
    return (
        <div className="grid justify-items-center gap-7 grid-cols-2 lg:grid-cols-3 px-5 py-6">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-7"></div>
                <div className="flex flex-col items-center pb-10">
                    <div className="w-24 h-24 flex items-center justify-center mb-3 rounded-full shadow-lg">
                        <Car className="size-12" />
                    </div>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Carros</h5>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Ver productos</a>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-7"></div>
                <div className="flex flex-col items-center pb-10">
                    <div className="w-24 h-24 flex items-center justify-center mb-3 rounded-full shadow-lg">
                        <Smartphone className="size-12" />
                    </div>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Celulares</h5>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Ver productos</a>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-7"></div>
                <div className="flex flex-col items-center pb-10">
                    <div className="w-24 h-24 flex items-center justify-center mb-3 rounded-full shadow-lg">
                        <PcCase className="size-12" />
                    </div>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Computación</h5>
                    <div className="flex mt-4 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Ver productos</a>
                    </div>
                </div>
            </div>
        </div>
    )
}