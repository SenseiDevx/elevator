import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    floors: 11,
    elevators: [
        { id: 0, position: 1, indicatorPosition: 0 },
        { id: 1, position: 1, indicatorPosition: 0 },
        { id: 2, position: 1, indicatorPosition: 0 },
    ],
};

const elevatorSlice = createSlice({
    name: 'elevator',
    initialState,
    reducers: {
        moveElevator: (state, action) => {
            const { elevatorId, targetFloor } = action.payload;
            state.elevators = state.elevators.map((elevator) =>
                elevator.id === elevatorId
                    ? {
                        ...elevator,
                        position: targetFloor,
                        indicatorPosition:
                            targetFloor > elevator.position ? -20 : targetFloor < elevator.position ? 20 : 0,
                    }
                    : elevator
            );
        },
    },
});


export const { moveElevator } = elevatorSlice.actions;
export default elevatorSlice.reducer;
