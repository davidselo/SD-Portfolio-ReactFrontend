import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {client} from 'api/client.js';
import {RootState} from 'app/store';

const initialState: Array<any> = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users');
    return response.data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default usersSlice.reducer;

// Selectors
export const selectAllUsers = (state: RootState) => state.users;

export const selectUserById = (state: RootState, userId: string) =>
    state.users.find(user => user.id === userId);
