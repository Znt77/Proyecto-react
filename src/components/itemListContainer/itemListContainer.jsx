import React, { useEffect, useState } from "react";
import { Card, Select } from "antd";

const { Option } = Select;

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [FiltroProductos, setFiltroProductos] = useState([]);
    const [seleccionarCategoria, setSeleccionarCategoria] = useState("all");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (!response.ok) {
                    return new Error("Network error");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setFiltroProductos(data);
            })
            .catch((error) => {
                console.error("Error in fetching", error);
            });
    }, []);

    const cambioDeCategoria = (value) => {
        setSeleccionarCategoria(value);
        if (value === "all") {
            setFiltroProductos(products);
        } else {
            const filtrado = products.filter((product) => product.category === value);
            setFiltroProductos(filtrado);
        }
    };

    return (
        <div>
            <h1>Catalog</h1>
            <Select
                defaultValue="all"
                style={{ width: 150, marginBottom: 16 }}
                onChange={cambioDeCategoria}
            >
                <Option value="all">All</Option>
                <Option value="electronics">Electronics</Option>
                <Option value="jewelery">Jewelery</Option>
                <Option value="men's clothing">Men's clothing</Option>
                <Option value="women's clothing">Women's clothing</Option>
            </Select>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {FiltroProductos.map((product) => (
                    <Card
                        key={product.id}
                        title={product.title}
                        style={{ width: 300, margin: 16 }}
                    >
                        <p>{product.price}</p>
                        <a href={`/product/${product.id}`}>View Details</a>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;
