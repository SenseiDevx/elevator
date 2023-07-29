import React from 'react';
import Elevator from '../Elevator/Elevator';

const ElevatorControlPanel = () => {
    return (
        <div className="container">
            <h1>Панель Управление Лифтом</h1>
            <div className="elevatorBlock">
                <Elevator elevatorId={0} />
                <Elevator elevatorId={1} />
                <Elevator elevatorId={2} />
            </div>
        </div>
    );
};

export default ElevatorControlPanel;
