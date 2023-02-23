import {Typography} from '@mui/material';
import React, {useState} from 'react';
import {nanoid} from '@reduxjs/toolkit';
import {postAdded} from 'features/posts/postsSlice';
import {useAppDispatch} from 'app/hooks';

export const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useAppDispatch();

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                }),
            );

            setTitle('');
            setContent('');
        }
    };

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
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
