import {Action} from 'contracts/redux/actions';

export const increment = (): Action<undefined> => {
    return {
        type: 'counter/increment',
    };
};
export const decrement = (): Action<undefined> => {
    return {
        type: 'counter/decrement',
    };
};
export const increaseBy = (num = 0): Action<number> => {
    return {
        type: 'counter/increaseBy',
        payload: num,
    };
};
