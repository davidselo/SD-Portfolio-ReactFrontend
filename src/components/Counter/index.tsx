import React, {useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {
    decrement,
    increment,
    selectCount,
    incrementByAmount,
} from 'features/counter/counterSlice';
import {useAppSelector, useAppDispatch} from 'app/hooks';

export const Counter: React.FC = () => {
    const dispatch = useAppDispatch();
    const count = useAppSelector(selectCount);
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <Box textAlign="center" marginTop="20px">
            <Button
                className="cv--print-button"
                variant="contained"
                onClick={() => {
                    dispatch(increment());
                }}
            >
                Increase
            </Button>
            <span>{count}</span>
            <Button
                className="cv--print-button"
                variant="contained"
                onClick={() => {
                    dispatch(decrement());
                }}
            >
                decrease
            </Button>
            <Button
                className="cv--print-button"
                variant="contained"
                onClick={() => {
                    dispatch(incrementByAmount(Number(incrementAmount)));
                }}
            >
                Increase by Amount
            </Button>
            <TextField
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
            />
        </Box>
    );
};
