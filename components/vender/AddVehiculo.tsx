import { useState } from "react"

export const AddVehiculoForm = () =>  {
    const [pasoActual, setPasoActual] = useState(1)

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