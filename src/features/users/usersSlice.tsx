import {
    createSlice,
    createAsyncThunk,
    createSelector,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import {client} from 'api/client.js';
import {RootState} from 'app/store';
import {selectAllPosts} from 'features/posts/postsSlice';

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users');
    return response.data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll);
    },
});

export default usersSlice.reducer;

// Selectors

export const {selectAll: selectAllUsers, selectById: selectUserById} =
    usersAdapter.getSelectors((state: RootState) => state.users);

export const selectPostsByUser = createSelector(
    [selectAllPosts, (state, userId) => userId],
    (posts, userId) => posts.filter(post => post.user === userId),
);
