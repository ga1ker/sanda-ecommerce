'use client'
import { useState } from "react"
import { AddProductForm } from "./AddProduct"
import { AddVehiculoForm } from "./AddVehiculo"
import { AddInmuebleForm } from "./AddInmueble"
import { AddTiendaForm } from "./AddTienda"

export const CategoriaProducto = () =>{
    const [CategoriaSeleccionada, setCategoriaSeleccionada] = useState("")

    const mostrarFormulario = ()=>{
        switch(CategoriaSeleccionada){
            case "Productos":
                return(
                    <div>
                        <AddProductForm />
                    </div>
                )
            case "Vehiculo":
                return(
                    <div>
                        <AddVehiculoForm />
                    </div>
                )
            case "Inmuebles":
                return(
                    <div>
                        <AddInmuebleForm />
                    </div>
                )
            case "Establecimiento":
                return(
                    <div>
                        <AddTiendaForm />
                    </div>
                )
            default:
                return null
        }
    }
    return(
        <>{
            <div className="bg-[#80cbc4] text-center h-[200px]">
            <p> volver</p>
        <div className=" pt-20">
        <h1 className="mb-5 text-3xl text-white ">¿Que es lo que quieres vender?</h1>
        <div className="grid grid-cols-4">
            <div 
            className="m-2 bg-white rounded-md border  border-gray-200 cursor-pointer"
            onClick={()=> setCategoriaSeleccionada("Productos")}
            >
                <h1 className="">Productos</h1>
                <p>Vende ropa, celulares, discos, y cosas que sean  un producto mardfaker</p>
            </div>                   
            <div 
            className="m-2 bg-white rounded-md border  border-gray-200 cursor-pointer"
            onClick={()=> setCategoriaSeleccionada("Vehiculo")}
            >
                <h1>Vehiculos</h1>
                <p>Vende tu carro mai</p>
            </div>                   
            <div 
            className="m-2 bg-white rounded-md border  border-gray-200 cursor-pointer"
            onClick={()=> setCategoriaSeleccionada("Inmuebles")}
            >
                <h1>Inmuebles</h1>
                <p>Vende tu casa amiguin, yo la quiero</p>
            </div>                   
            <div 
            className="m-2 bg-white rounded-md border  border-gray-200 cursor-pointer"
            onClick={()=> setCategoriaSeleccionada("Establecimiento")}
            >
                <h1>Ingresa tu establecimiento</h1>
                <p>Hay que mostrarse al mundo</p>
            </div>                   
        </div>
         <div className="px-4 mt-5">{mostrarFormulario()}</div>
        </div>
        
        </div>
         }
        </>
    )
}