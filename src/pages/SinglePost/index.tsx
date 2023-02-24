import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'app/store';
import {Typography} from '@mui/material';
import {useParams} from 'react-router-dom';

export const SinglePostPage = () => {
    const params = useParams();
    // eslint-disable-next-line no-console
    console.log('Patata', params);
    const {postId} = params;

    const post = useSelector((state: RootState) =>
        state.posts.find(post => post.id === postId),
    );

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        );
    }

    return (
        <section>
            <article className="post">
                <Typography variant="h2">{post.title}</Typography>
                <Typography variant="subtitle1">{post.content}</Typography>
            </article>
        </section>
    );
};
