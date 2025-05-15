import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function Carrito () {
    return (
        <div>
            <div className="overflow-hidden">
                <div className="overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 top-20 right-0 flex max-w-full">
                        <div className="pointer-events-auto w-screen transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
                            <div className="flex h-full flex-col overflow-y-scroll shadow-xl">
                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <div className="text-lg font-medium text-gray-900 dark:text-gray-200">Carrito</div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="flow-root">
                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                {/*productos*/}
                                                <li className="flex py-6">
                                                    <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                        <img alt="producto" src="/logo.png" className="size-full object-cover" />
                                                    </div>

                                                    <div className="ml-4 flex flex-1 flex-col">
                                                        <div>
                                                            <div className="flex justify-between text-base text-gray-900 dark:text-gray-200">
                                                                <h3 className="font-medium">Samsung 20 Max</h3>
                                                                <button className="p-1 border h-fit border-red-600 rounded-md hover:bg-red-600 hover:text-gray-200 transition"><X width={20}/></button>
                                                            </div>
                                                            <Link href={"/vendedores/" + "telcel-bernal"} className="mt-1 text-sm border-b w-fit text-gray-500 dark:text-gray-200">Telcel Bernal</Link>
                                                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-200">Celular</p>
                                                        </div>

                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                            <div className="text-gray-500 dark:text-gray-200">
                                                                Cantidad: 1
                                                            </div>
                                                            <p className="ml-4 font-medium text-base dark:text-gray-200">$213</p>
                                                        </div>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="flex justify-between text-base font-medium text-gray-900 dark:text-gray-200">
                                        <p>Subtotal</p>
                                        <p>$223</p>
                                    </div>
                                    <p className="mt-0.5 text-sm text-gray-500">El envío es calculado en el siguiente paso.</p>
                                    <div className="mt-6">
                                        <Button className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 dark:bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-teal-700">
                                            Compra ahora
                                        </Button>
                                    </div>
                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            o{' '}
                                            <Link href={"/"} className="font-medium text-teal-600 hover:text-teal-500">
                                                Continua viendo
                                                <span aria-hidden="true"> &rarr;</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}