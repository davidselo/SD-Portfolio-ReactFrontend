import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from 'features/posts/postsSlice';
import userReducer from 'features/users/usersSlice';
import notificationsReducer from 'features/notification/NotificationsSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        users: userReducer,
        notifications: notificationsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
