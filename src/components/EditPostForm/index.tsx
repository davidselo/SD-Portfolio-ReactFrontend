import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from 'app/hooks';

import {useParams, useNavigate} from 'react-router-dom';
import {RootState} from 'app/store';

import {postUpdated} from 'features/posts/postsSlice';
import {Typography} from '@mui/material';

export const EditPostForm = () => {
    const params = useParams();
    const {postId} = params;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Selector definition.
    const post = useAppSelector((state: RootState) =>
        state.posts.find(post => post.id === postId),
    );
    // State constant definition.
    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.content);

    // event definition.
    const onTitleChanged = (e: {target: {value: any}}) =>
        setTitle(e.target.value);
    const onContentChanged = (e: {target: {value: any}}) =>
        setContent(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({id: postId, title, content}));
            navigate(`/posts/${postId}`);
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
