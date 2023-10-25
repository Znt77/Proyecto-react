import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items = [
    {
        key: '1',
        label: 'Services',
        children: [
            {
                key: '1-1',
                label: <Link to="/grind-hour">Grind for hour</Link>,
            },
            {
                key: '1-2',
                label: <Link to="/grind-billion">Grind for billion</Link>,
            },
        ],
    },
    {
        key: '2',
        label: 'Accounts',
        children: [
            {
                key: '2-1',
                label: <Link to="/">Buy</Link>,
            },
            {
                key: '2-2',
                label: <Link to="/sell">Sell</Link>,
            },
        ],
    }
]

const navBar = () => {
    return (
        <div>
            <p>Black desert online accounts/gold</p>
            <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        Services and accounts
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
        </div>
    )
}

export default navBar