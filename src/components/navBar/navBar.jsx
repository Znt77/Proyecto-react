import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
    {
        key: '1',
        type: 'group',
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
        label: 'Damage Reduction',
        children: [
            {
                key: '2-1',
                label: 'Archer',
            },
            {
                key: '2-2',
                label: 'Berserker',
            },
            {
                key: '2-3',
                label: 'Dark Knight',
            },
            {
                key: '2-4',
                label: 'Drakania',
            },
            {
                key: '2-5',
                label: 'Guardiana',
            },
            {
                key: '2-6',
                label: 'Kunoichi',
            },
            {
                key: '2-7',
                label: 'Maehwa',
            },
            {
                key: '2-8',
                label: 'Kunoichi',
            },
            {
                key: '2-9',
                label: 'Nova',
            },
            {
                key: '2-10',
                label: 'Ranger',
            },
            {
                key: '2-11',
                label: 'Sage',
            },
            {
                key: '2-12',
                label: 'Sorceress',
            },
            {
                key: '2-13',
                label: 'Tamer',
            },
            {
                key: '2-14',
                label: 'Valkyrie',
            },
            {
                key: '2-15',
                label: 'Warrior',
            },
            {
                key: '2-16',
                label: 'Witch',
            },
            {
                key: '2-17',
                label: 'Wizard',
            },
            {
                key: '2-18',
                label: 'Woosa',
            },
        ],
    },
    {
        key: '3',
        label: 'Evasión',
        children: [
            {
                key: '3-1',
                label: 'Corsair',
            },
            {
                key: '3-2',
                label: 'Hashashin',
            },
            {
                key: '3-3',
                label: 'Lahn',
            },
            {
                key: '3-4',
                label: 'Maegu',
            },
            {
                key: '3-5',
                label: 'Musa',
            },
            {
                key: '3-6',
                label: 'Mystic',
            },
            {
                key: '3-7',
                label: 'Ninja',
            },
            {
                key: '3-8',
                label: 'Shai',
            },
            {
                key: '3-9',
                label: 'Striker',
            },
        ],
    },
];

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