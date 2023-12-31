import { createContext, useState } from "react"

export const CartContext = createContext()

const CartComponentContext = ({children}) => {
    const [numero, setNumero] = useState (1)

    return(
        <CartContext.Provider value={{numero, setNumero}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartComponentContext