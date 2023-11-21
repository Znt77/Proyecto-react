import React from 'react'
import { Card, List } from 'antd'
import { Link } from 'react-router-dom'

const { Meta } = Card;
const Item = ({ description, imageSrc, clase, gear, id, price }) => {
    return (
    <List.Item>
        <Card
            hoverable
            style={{width: 240}}
            cover={<img alt="Example image" src={imageSrc} />}
            >
            <Meta title={clase + ' ' + gear + 'GS' + ' $' + price} description={description} />
            <Link to={`/product/${id}`}>Buy</Link>
        </Card>
    </List.Item>
    )
}
export default Item