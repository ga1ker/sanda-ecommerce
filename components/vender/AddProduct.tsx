import { useState } from "react"

export const AddProductForm = () =>  {
    const [pasoActual, setPasoActual] = useState(1)
    const [categoriaProducto, setCategoriaProducto] = useState("")
    const [nombreProducto, setNombreProducto] = useState("")
    const [descripcionProducto, setDescripcionProducto] = useState("")
    const [imagenProducto, setImagenProducto] = useState("")
    const [precioProducto, setPrecioProducto] = useState(0)

return(
    <>
            {
                pasoActual === 1 && (
                    <>
                        <h1>Este es el paso 1</h1>
                        <button onClick={()=> setPasoActual(2)}>Pasa</button>
                    </>
                )
            }

            {
                pasoActual === 2 &&(
                    <>
                        <h1>Este es el paso 2</h1>
                    </>       
                )  
            }
            </>
)
}