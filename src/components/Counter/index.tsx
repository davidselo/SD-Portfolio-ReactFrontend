import React, {useEffect} from 'react';
import {Box, Button} from '@mui/material';
import {store} from 'utils/redux/store';
import {decrement, increaseBy, increment} from 'utils/redux/actionCreators';
import {selectCounterValue} from 'utils/redux/actionSelector';
import {useDispatch, useSelector} from 'react-redux';

export const Counter: React.FC = () => {
    const dispatch = useDispatch();
    // const count = selectCounterValue(store.getState());
    const count = useSelector(selectCounterValue);

    // eslint-disable-next-line no-console
    // useEffect(() => console.log('re-render component'), [count]);
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
                    store.dispatch(decrement());
                }}
            >
                decrease
            </Button>
            <Button
                className="cv--print-button"
                variant="contained"
                onClick={() => {
                    store.dispatch(increaseBy(3));
                }}
            >
                Increase by 3
            </Button>
        </Box>
    );
};
