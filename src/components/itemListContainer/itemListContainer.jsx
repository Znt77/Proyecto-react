import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "react-bootstrap"
import ItemList from "./ItemList"
import { db } from "../../firebase/client"
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {

        const fetchProducts = async () => {
            setIsLoading(true)
            try {
                const productRef = collection(db, "cuentas")
                const snapshot = await getDocs(productRef)
                const productsData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                const filterAccounts = categoryId
                    ? productsData.filter((product) => product.categoryId === categoryId)
                    : productsData
                setProducts(filterAccounts)
            } catch (error) {
                console.error("Error fetching products:", error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchProducts()
    }, [categoryId]) 

    return (
        <div>
            <h1>{greeting}</h1>
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" className="m-5" />
                </div>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    )
}

export default ItemListContainer