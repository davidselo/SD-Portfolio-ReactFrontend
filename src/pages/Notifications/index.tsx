import React from 'react';
import {useAppDispatch} from 'app/hooks';

import {fetchNotifications} from 'features/notification/NotificationsSlice';
import {NotificationsList} from 'components/NotificationsList';

export const NotificationsPage = () => {
    const dispatch = useAppDispatch();

    const fetchNewNotifications = () => {
        dispatch(fetchNotifications());
    };

    return (
        <>
            <NotificationsList />
            <button className="button" onClick={fetchNewNotifications}>
                Refresh Notifications
            </button>
        </>
    );
};
