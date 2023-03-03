import {createSlice, createAsyncThunk, createSelector} from '@reduxjs/toolkit';
import {client} from 'api/client.js';
import {RootState} from 'app/store';
import {selectAllPosts} from 'features/posts/postsSlice';

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

export const selectPostsByUser = createSelector(
    [selectAllPosts, (state, userId) => userId],
    (posts, userId) => posts.filter(post => post.user === userId),
);
