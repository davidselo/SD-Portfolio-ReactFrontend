import {
    createSlice,
    createEntityAdapter,
    nanoid,
    createAsyncThunk,
    createSelector,
} from '@reduxjs/toolkit';
// import {sub} from 'date-fns';
import {RootState} from 'app/store';
import {client} from 'api/client.js';

// const initialState = {
//     posts: [],
//     status: 'idle',
//     error: null,
// };

// Creating Adapter
const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
    status: 'idle',
    error: null,
});

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts');
    return response.data;
});

export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    // The payload creator receives the partial `{title, content, user}` object
    async (initialPost: {title: string; content: string; user: string}) => {
        // We send the initial data to the fake API server
        const response = await client.post('/fakeApi/posts', initialPost);
        // The response includes the complete post object, including unique ID
        return response.data;
    },
);

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: Number(userId),
                        reactions: {
                            thumbsUp: 0,
                            hooray: 0,
                            heart: 0,
                            rocket: 0,
                            eyes: 0,
                        },
                    },
                };
            },
        },
        postUpdated(state, action) {
            const {id, title, content} = action.payload;
            // const existingPost = state.posts.find(post => post.id === id);
            const existingPost = state.entities[id];
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
        reactionAdded(state, action) {
            const {postId, reaction} = action.payload;
            const existingPost = state.entities[postId];
            // const existingPost = state.posts.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Add any fetched posts to the array
                // state.posts = state.posts.concat(action.payload);
                // Use the `upsertMany` reducer as a mutating update utility
                postsAdapter.upsertMany(state, action.payload);
            })
            // Use the `addOne` reducer for the fulfilled case
            .addCase(addNewPost.fulfilled, postsAdapter.addOne)
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const {postAdded, postUpdated, reactionAdded} = postsSlice.actions;

// Selectors
// export const selectAllPosts = (state: RootState) => {
//     console.log('Select All posts', state.posts);
//     return state.posts.posts;
// };

// Export the customized selectors for this adapter using `getSelectors`

export const selectPostById = (state: RootState, postId: string) =>
    state.posts.posts.find(post => post.id === postId);

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds,
    // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => state.posts);

export const selectPostsByUser = createSelector(
    [selectAllPosts, (state, userId) => userId],
    (posts, userId) => posts.filter(post => post.user === userId),
);

export default postsSlice.reducer;
