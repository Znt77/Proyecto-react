import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useEffect } from "react";

const Productos = () =>{
useEffect(() => {
    const productsRef = collection(db, "products")

    getDoc(productsRef)
    .then((snapshot) => {
        if(snapshot.exists()){
            console.log({ id: snapshot.id, ...snapshot.data()})
        }
    })
}, [])
}

export default Productos