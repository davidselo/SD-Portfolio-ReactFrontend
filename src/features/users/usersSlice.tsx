import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {id: '0', name: 'John Doe'},
    {id: '1', name: 'Zampabollos'},
    {id: '2', name: 'Chato'},
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
});

export default usersSlice.reducer;
