import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveElevator } from '../../redux/slices/elevatorSlice';
import elevatorLift from '../elevator.png'

const Elevator = ({ elevatorId }) => {
    const dispatch = useDispatch();
    const elevators = useSelector((state) => state.elevator.elevators);
    const elevator = elevators.find((el) => el.id === elevatorId);

    const [indicatorPosition, setIndicatorPosition] = useState(0);

    const handleMove = (targetFloor) => {
        dispatch(moveElevator({ elevatorId, targetFloor }));

        if (targetFloor > elevator.position) {
            setIndicatorPosition(-20);
        } else if (targetFloor < elevator.position) {
            setIndicatorPosition(20);
        } else {
            setIndicatorPosition(0);
        }

        setTimeout(() => {
            setIndicatorPosition(0);
        }, 200);
    };

    return (
        <div className="elevator">
            <div>
                <h2>Лифт {elevatorId + 1}</h2>
                <p>Текущий Этаж: {elevator.position}</p>
                <button
                    disabled={elevator.position === 1}
                    onClick={() => handleMove(elevator.position - 1)}
                    className="control-button"
                >
                    ▲
                </button>
                <button
                    disabled={elevator.position === 11}
                    onClick={() => handleMove(elevator.position + 1)}
                    className="control-button"
                >
                    ▼
                </button>
            </div>
            <div className="square" style={{ marginTop: indicatorPosition }}>
                <img className="elevatorimage" src={elevatorLift} alt=""/>
            </div>
        </div>
    );
};

export default Elevator;
