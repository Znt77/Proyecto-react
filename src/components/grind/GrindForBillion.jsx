import React, { useState } from 'react';
import { Card, Typography, Slider, Button } from 'antd';

const { Paragraph } = Typography;

const GrindForBillion = ({ hourlyRate }) => {
    const [selectedBillions, setSelectedBillions] = useState(1)

    const handleSliderChange = (value) => {
        setSelectedBillions(Math.round(value))
    };

    const handleContractClick = () => {
        console.log(`We will grind for you ${selectedBillions} hours.`);
    };

    const calculateTotalCost = () => {
        return hourlyRate * selectedBillions;
    };

    return (
        <Card title="Grind for Billion" style={{ width: 300, margin: '20px' }}>
            <Paragraph>Price per billion: ${hourlyRate}</Paragraph>
            <Paragraph>Select the quantity of billions:</Paragraph>
            <Slider
                min={1}
                max={50}
                step={1}
                marks={{ 1: '1', 50: '200' }}
                onChange={handleSliderChange}
                value={selectedBillions}/>
            <Paragraph>We will grind on your account {selectedBillions} billions</Paragraph>
            <Paragraph>Total price: ${calculateTotalCost()}</Paragraph>
            <Button type="primary" onClick={handleContractClick}>
                Hire us
            </Button>
        </Card>
    );
}

export default GrindForBillion;
