import React from 'react';
import {useAppSelector} from 'app/hooks';
import {selectUserById} from 'features/users/usersSlice';
import {EntityId} from '@reduxjs/toolkit';

interface Props {
    userId: EntityId;
}

export const PostAuthor: React.FC<Props> = ({userId}: Props) => {
    const author = useAppSelector(state => selectUserById(state, userId));

    return <span>by {author ? author.name : 'Unknown author'}</span>;
};
