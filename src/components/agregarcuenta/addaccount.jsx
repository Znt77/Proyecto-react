import React, { useState, useEffect } from 'react'
import { Input, Button, Select, Form, List, Card } from 'antd'

const { Option } = Select;

const clasesBDO = {
    Class1: 'Wizard',
    Class2: 'Witch',
    Class3: 'Dark Knight',
    Class4: 'Archer',
    Class5: 'Warrior',
}

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
}

const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
}


function AddAccount() {
    const productosIniciales = JSON.parse(localStorage.getItem('products')) || []
    const [productList, setProductList] = useState(productosIniciales)
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0, class: 'Class1' })
    const [filtroClase, setFiltroClase] = useState('All')

    const registrarNuevoProducto = () => {
        if (newProduct.name) {
            setProductList([...productList, newProduct])
            setNewProduct({ name: '', description: '', price: 0, class: 'Class1' })
        }
    }
    const filtroProductos = filtroClase === 'All' ? productList : productList.filter(product => product.class === filtroClase);

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(productList));
    }, [productList])

    return (
        <div>
            <h1>My accounts panel</h1>
            <Form {...layout}>
                <Form.Item label="Gear score">
                    <Input
                        type="number"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <Input
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="Price (USD)">
                    <Input
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="Class">
                    <Select
                        value={newProduct.class}
                        onChange={(value) => setNewProduct({ ...newProduct, class: value })}
                    >
                        {Object.keys(clasesBDO).map((classKey) => (
                            <Option key={classKey} value={classKey}>
                                {clasesBDO[classKey]}
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" onClick={registrarNuevoProducto}>
                        Add account
                    </Button>
                </Form.Item>
            </Form>
            <div>
                <h2>Filter by Class</h2>
                <Select
                    defaultValue="All"
                    style={{ width: 120 }}
                    onChange={(value) => setFiltroClase(value)}
                >
                    <Option value="All">All</Option>
                    {Object.keys(clasesBDO).map((classKey) => (
                        <Option key={classKey} value={classKey}>
                            {clasesBDO[classKey]}
                        </Option>
                    ))}
                </Select>
            </div>
            <div>
                <h2>My registered accounts</h2>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={filtroProductos}
                    renderItem={(product, index) => (
                        <List.Item>
                            <Card
                                title={`${clasesBDO[product.class]} ${product.name}GS`}
                            >
                                <p>{product.description}</p>
                                <p>${product.price} USD</p>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default AddAccount






