import React, {useEffect} from 'react';
import {
    Box,
    Card,
    CardContent,
    TextareaAutosize,
    Typography,
} from '@mui/material';
import {RootState} from 'app/store';
import {useAppSelector} from 'app/hooks';
import {Link} from 'react-router-dom';
import {ReactionButtons} from 'components/ReactionButtons';
import {selectAllPosts, fetchPosts} from 'features/posts/postsSlice';
import {useAppDispatch} from 'app/hooks';
import CircularProgress from '@mui/material/CircularProgress';
import {PostAuthor} from 'components/PostAuthor';

interface ReactionsInterface {
    thumbsUp: number;
    hooray: number;
    heart: number;
    rocket: number;
    eyes: number;
}

interface Post {
    id: string;
    title: string;
    content: string;
    user: number;
    date: string;
    reactions: ReactionsInterface;
}
interface Props {
    post: Post;
}

const PostExcerpt: React.FC<Props> = ({post}: Props) => {
    return (
        <section>
            <article className="post">
                <Typography variant="h2">{post.title}</Typography>
                <Typography variant="subtitle1">{post.content}</Typography>
                <PostAuthor userId={post.user} />
                <ReactionButtons post={post} />
                <Link to={`/posts/${post.id}`} className="button">
                    View Post
                </Link>
            </article>
        </section>
    );
};

export const PostList = () => {
    const posts: Array<Post> = useAppSelector(selectAllPosts);
    const dispatch = useAppDispatch();
    const postStatus = useAppSelector(state => state.posts.status);
    const error = useAppSelector(state => state.posts.error);

    useEffect(() => {
        console.log('Post Status', postStatus);
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;

    if (postStatus === 'loading') {
        content = (
            <Box sx={{display: 'flex'}}>
                <CircularProgress />
            </Box>
        );
    } else if (postStatus === 'succeeded') {
        // Sort posts in reverse chronological order by datetime string
        const orderedPosts = posts
            .slice()
            .sort((a: Post, b: Post) => b.date.localeCompare(a.date));
        content = orderedPosts.map(post => (
            <PostExcerpt key={post.id} post={post} />
        ));
    } else if (postStatus === 'failed') {
        content = <div>{error}</div>;
    }
    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {content}
        </section>
    );
};

export default PostList;
