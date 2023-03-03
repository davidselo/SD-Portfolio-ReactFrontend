import React, {useEffect} from 'react';
import {
    Box,
    Card,
    CardContent,
    TextareaAutosize,
    Typography,
} from '@mui/material';
import {
    selectAllPosts,
    fetchPosts,
    selectPostIds,
    selectPostById,
} from 'features/posts/postsSlice';
import {RootState} from 'app/store';
import {useAppSelector} from 'app/hooks';
import {Link} from 'react-router-dom';
import {ReactionButtons} from 'components/ReactionButtons';
import {useAppDispatch} from 'app/hooks';
import CircularProgress from '@mui/material/CircularProgress';
import {PostAuthor} from 'components/PostAuthor';
import {EntityId} from '@reduxjs/toolkit';

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
    postId: EntityId;
}

let PostExcerpt: React.FC<Props> = ({postId}: Props): JSX.Element => {
    const post: unknown = useAppSelector(state =>
        selectPostById(state, postId),
    );

    return (
        <>
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
        </>
    );
};

export const PostList: React.FC = () => {
    const dispatch = useAppDispatch();
    const orderedPostIds = useAppSelector(selectPostIds);
    const postStatus = useAppSelector(state => state.posts.status);
    const error = useAppSelector(state => state.posts.error);

    useEffect(() => {
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
        content = orderedPostIds.map((postId: EntityId) => (
            <PostExcerpt key={postId} postId={postId} />
        ));
    } else if (postStatus === 'failed') {
        content = <div>{error}</div>;
    }
    return (
        <>
            <section className="posts-list">
                <h2>Posts</h2>
                {content}
            </section>
        </>
    );
};

PostExcerpt = React.memo(PostExcerpt);

export default PostList;
