import React from 'react';
import {Card, CardContent, TextareaAutosize, Typography} from '@mui/material';
import {RootState} from 'app/store';
import {useAppSelector} from 'app/hooks';
import {Link} from 'react-router-dom';
import {ReactionButtons} from 'components/ReactionButtons';

interface Post {
    id: string;
    title: string;
    content: string;
    user: number;
    date: string;
}

export const PostList = () => {
    const posts: Array<Post> = useAppSelector(
        (state: RootState) => state.posts,
    );

    // Sort posts in reverse chronological order by datetime string
    const orderedPosts = posts
        .slice()
        .sort((a: Post, b: Post) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
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
                    <Link
                        to={`/posts/${post.id}`}
                        className="button muted-button"
                    >
                        View Post
                    </Link>
                    <ReactionButtons post={post} />
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
