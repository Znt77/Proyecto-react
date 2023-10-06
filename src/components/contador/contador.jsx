import { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(1)

    const suma = () => {
        setContador(contador + 1)
    }
    
    const resta = () => {
        setContador(contador - 1)
    }
    const resetear = () => {
        setContador(1)
    }
    
    return(
        <>
        <button onClick={suma}>+</button>
        <p>{contador}</p>
        <button onClick={resta}>-</button>
        <button onClick={resetear}>Reset</button>
        </>
    )
}

export default Contador