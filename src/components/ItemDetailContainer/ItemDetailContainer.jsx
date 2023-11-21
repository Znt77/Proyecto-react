import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../../firebase/client';
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore"

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productRef = collection(db, "cuentas")
                const snapshot = await getDocs(productRef)
                const productsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                const filteredProducts = categoryId
                    ? productsData.filter((product) => product.categoryId === categoryId)
                    : productsData
                setProducts(filteredProducts)
            } catch (error) {
                console.error("Error fetching products:", error)
            } 
        }
        fetchProducts()
    }, [categoryId])

    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
