import { useEffect } from "react";

const ejerciciot = ({props}) => {
    const promesa = new Promise ((res, rej)=>{
        setTimeout(() => {
            const productos = [
                {name: "producto1" , precio:2000 , id: 1},
                {name: "producto2" , precio:2000 , id: 2},
                {name: "producto3" , precio:2000 , id: 3},
                {name: "producto4" , precio:2000 , id: 4},
                {name: "producto5" , precio:2000 , id: 5},
                {name: "producto6" , precio:2000 , id: 6},
                {name: "producto7" , precio:2000 , id: 7},

                productos.lenght > 0 ? res(productos) : rej({data: [], message: `No hay productos`})
            ]
        }, 2000);
    })
    useEffect(() => {
        Promise
        .then(res=> console.log(res))
        .catch(error=> console.error(error.message))
    })
}

export default ejerciciot