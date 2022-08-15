import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import './styles.scss';

// @todo: to get this data from Keystone. Define types too.
const navigationLinks = [
    {name: 'About', href: '/about'},
    {name: 'Projects', href: '/projects'},
    {name: 'Resume', href: '/resume'},
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme) => ({
    link: {
        marginRight: 20,
    },
    avatar: {
        marginRight: 'auto',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 0,
        height: 30,
    },
}));

const Header: React.FC = () => {
    const styles = useStyles();
    return (
        <AppBar position="sticky" color="default">
            <Container maxWidth="md">
                <ToolBar disableGutters>
                    <Avatar className={styles.avatar}>DS</Avatar>
                    <div className="header--menu-items">
                        {navigationLinks.map((item) => (
                            // eslint-disable-next-line react/jsx-key
                            <Link
                                className={styles.link}
                                color="textPrimary"
                                variant="button"
                                component="button"
                                underline="none">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </ToolBar>
            </Container>
        </AppBar>
    );
};

export default Header;
