import {Typography} from '@mui/material';
import React, {useState} from 'react';
import {postAdded} from 'features/posts/postsSlice';
import {useAppDispatch, useAppSelector} from 'app/hooks';

export const AddPostForm = () => {
    // local state variables
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const dispatch = useAppDispatch();

    // Using selector to retrieve Global state information
    const users = useAppSelector(state => state.users);

    // handling onchange events
    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));

            setTitle('');
            setContent('');
        }
    };

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <Typography variant="h3">Add a New Post</Typography>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChanged}
                >
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
