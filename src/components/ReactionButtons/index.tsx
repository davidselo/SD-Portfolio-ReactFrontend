import React from 'react';
import {useAppDispatch} from 'app/hooks';
import {reactionAdded} from 'features/posts/postsSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
};
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

export const ReactionButtons: React.FC<Props> = ({post}: Props) => {
    const dispatch = useAppDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(
        ([name, emoji]) => {
            return (
                <button
                    key={name}
                    type="button"
                    className="muted-button reaction-button"
                    onClick={() =>
                        dispatch(
                            reactionAdded({postId: post.id, reaction: name}),
                        )
                    }
                >
                    {emoji} {post.reactions[name]}
                </button>
            );
        },
    );

    return <div>{reactionButtons}</div>;
};
