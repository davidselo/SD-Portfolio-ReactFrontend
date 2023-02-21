const initialState = {value: 0};
import {Action} from 'contracts/redux/actions';

export function counterReducer(
    state = initialState,
    action: Action<undefined> | Action<number>,
) {
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/increment') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value + 1,
        };
    }
    if (action.type === 'counter/decrement') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value - 1,
        };
    }
    if (action.type === 'counter/increaseBy') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: state.value + Number(action.payload),
        };
    }
    // otherwise return the existing state unchanged
    return state;
}
