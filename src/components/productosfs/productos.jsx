import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useEffect } from "react";

const Producto = () =>{
useEffect(() => {
    const productRef = doc(db, "products", "iGgsTdYUsGvPYuYJervf")

    getDoc(productRef)
    .then((snapshot) => {
        if(snapshot.exists()){
            console.log({ id: snapshot.id, ...snapshot.data()})
        }
    })
}, [])
}

export default Producto