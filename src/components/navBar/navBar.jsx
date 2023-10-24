import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
        key: '1',
        label: 'Services',
        children: [
            {
                key: '1-1',
                label: 'Grind for hour',
            },
            {
                key: '1-2',
                label: 'Grind for billion',
            },
        ],
    },
    {
        key: '2',
        label: 'Accounts',
        children: [
            {
                key: '2-1',
                label: 'Buy',
            },
            {
                key: '2-2',
                label: 'Sell',
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