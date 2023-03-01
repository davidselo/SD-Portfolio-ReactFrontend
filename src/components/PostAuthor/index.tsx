import React from 'react';
import {useAppSelector} from 'app/hooks';

interface Props {
    userId: number;
}

export const PostAuthor: React.FC<Props> = ({userId}: Props) => {
    const author = useAppSelector(state =>
        state.users.find(user => user.id === userId),
    );

    return <span>by {author ? author.name : 'Unknown author'}</span>;
};
