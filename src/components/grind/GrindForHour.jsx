import React, { useState } from 'react';
import { Card, Typography, Slider, Button } from 'antd';

const { Paragraph } = Typography;

const GrindForHour = ({ hourlyRate }) => {
    const [selectedHours, setSelectedHours] = useState(1)

    const handleSliderChange = (value) => {
        setSelectedHours(Math.round(value))
    };

    const handleContractClick = () => {
        console.log(`We will grind for you ${selectedHours} hours.`);
    };

    const calculateTotalCost = () => {
        return hourlyRate * selectedHours;
    };

    return (
        <Card title="Grind for Hour" style={{ width: 300, margin: '20px' }}>
            <Paragraph>Price per hour: ${hourlyRate}</Paragraph>
            <Paragraph>Select the quantity of hours:</Paragraph>
            <Slider
                min={1}
                max={50}
                step={1}
                marks={{ 1: '1', 50: '50' }}
                onChange={handleSliderChange}
                value={selectedHours}/>
            <Paragraph>We will grind on your account {selectedHours} hours</Paragraph>
            <Paragraph>Total price: ${calculateTotalCost()}</Paragraph>
            <Button type="primary" onClick={handleContractClick}>
                Hire us
            </Button>
        </Card>
    );
}

export default GrindForHour;