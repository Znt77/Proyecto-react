import React, { useState } from 'react';
import { Card, Typography, Slider, Button, Input } from 'antd';
import Swal from 'sweetalert2';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { db } from '../../firebase/client';

const { Paragraph } = Typography;

const GrindForHour = ({ hourlyRate }) => {
    const [selectedHours, setSelectedBillions] = useState(1);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSliderChange = (value) => {
        setSelectedBillions(Math.round(value));
    };

    const calculateTotalCost = () => {
        return hourlyRate * selectedHours;
    };

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleContractClick = () => {
        const orderData = {
            buyer: user.name,
            email: user.email,
            password: user.password,
            hours: selectedHours,
            price: calculateTotalCost(),
        };

        const db = getFirestore();
        const hoursCollection = collection(db, "hours");

        addDoc(hoursCollection, orderData)
            .then(({ id }) =>
                Swal.fire({
                    title: 'Success!',
                    text: `We will grind for you ${selectedHours} hours on the provided account.
                        Your grind ID is: ${id}`,
                    icon: 'success',
                    confirmButtonText: 'Cool',
                })
            )
            .catch((error) =>
                Swal.fire({
                    title: 'Error!',
                    text: `Something bad happened: ${error}`,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                })
            );
    };

    return (
        <Card title="Grind for Hour" style={{ width: 300, margin: '20px' }}>
            <Paragraph>Price per hour: ${hourlyRate}</Paragraph>
            <Input
                placeholder="Your name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
            />
            <Input
                placeholder="Email (BDO Account)"
                name="email"
                type="email"
                value={user.email}
                onChange={handleInputChange}
            />
            <Input
                placeholder="Password (BDO Account)"
                name="password"
                type="password"
                value={user.password}
                onChange={handleInputChange}
            />
            <Paragraph>Select the quantity of hours:</Paragraph>
            <Slider
                min={1}
                max={50}
                step={1}
                marks={{ 1: '1', 50: '200' }}
                onChange={handleSliderChange}
                value={selectedHours}
            />
            <Paragraph>We will grind on your account {selectedHours} hours</Paragraph>
            <Paragraph>Total price: ${calculateTotalCost()}</Paragraph>
            <Button type="primary" onClick={handleContractClick}>
                Place order
            </Button>
        </Card>
    );
};

export default GrindForHour;
