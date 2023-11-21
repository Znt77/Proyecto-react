import React from 'react';
import { Card, Button } from 'antd';

const ItemDetail = ({ item }) => {
    return (
        <div>
            <Card title={item.clase + ' ' + item.gear} style={{ width: 300 }}>
                <p>Description: {item.description}</p>
                <p>Price: {item.price}</p>
                <Button type="primary">Add to Cart</Button>
            </Card>
        </div>
    );
};

export default ItemDetail;
