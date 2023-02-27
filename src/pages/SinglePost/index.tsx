import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'app/store';
import {Typography} from '@mui/material';
import {Link, useParams} from 'react-router-dom';
import {PostAuthor} from 'components/PostAuthor';
import {ReactionButtons} from 'components/ReactionButtons';

export const SinglePostPage = () => {
    const params = useParams();

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
                <PostAuthor userId={post.user} />
                <ReactionButtons post={post} />
                <Link to={`/editPost/${post.id}`} className="button">
                    Edit Post
                </Link>
            </article>
        </section>
    );
};
