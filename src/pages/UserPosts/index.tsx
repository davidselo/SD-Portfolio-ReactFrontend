import React from 'react';
import {useAppSelector} from 'app/hooks';
import {Link, useParams} from 'react-router-dom';

import {selectPostsByUser, selectUserById} from 'features/users/usersSlice';
import {selectAllPosts} from 'features/posts/postsSlice';
import {RootState} from 'app/store';

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
    user: string;
    date: string;
    reactions: ReactionsInterface;
}

export const UserPosts: React.FC = () => {
    const params = useParams();
    const {userId} = params;

    const user = useAppSelector(state => selectUserById(state, userId));

    const postsForUser = useAppSelector((state: RootState) =>
        selectPostsByUser(state, userId),
    );

    const postTitles = postsForUser.map((post: Post) => (
        <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
    ));

    return (
        <section>
            <h2>{user.name}</h2>

            <ul>{postTitles}</ul>
        </section>
    );
};
