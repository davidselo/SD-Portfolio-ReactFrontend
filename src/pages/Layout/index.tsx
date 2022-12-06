import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import Header from 'components/Header';
import HomeBanner from 'components/HomeBanner';

const Layout: React.FC = () => {
    const {pathname} = useLocation();

    return (
        <>
            {pathname == '/' && <HomeBanner />}
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;
