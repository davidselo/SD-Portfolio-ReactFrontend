import {counterReducer} from 'utils/redux/reducers/counter';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({reducer: {counter: counterReducer}});
