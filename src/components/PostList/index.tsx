import React from 'react';
import {useAppSelector, useAppDispatch} from 'app/hooks';
import {Card, CardContent, TextareaAutosize, Typography} from '@mui/material';
import {RootState} from 'app/store';
import {useSelector} from 'react-redux';

interface Post {
    id: string;
    title: string;
    content: string;
}

export const PostList = () => {
    const posts: Array<Post> = useSelector((state: RootState) => state.posts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <Card>
                <CardContent>
                    <Typography variant="h3">{post.title}</Typography>
                    <TextareaAutosize
                        maxRows={4}
                        aria-label="maximum height"
                        placeholder="Maximum 4 rows"
                        defaultValue={post.content}
                        style={{width: 200}}
                    />
                </CardContent>
            </Card>
        </article>
    ));

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostList;
