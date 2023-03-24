import React, {useState} from 'react';
import Link from '@mui/material/Link';
import {Link as RouterLink} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import {SwipeableDrawer} from '@mui/material';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
// import './styles.scss';
import Box from '@mui/material/Box';
import {NavigationLinks} from 'contracts/NavigationLinks';

import avatarImg from 'assets/avatar/face.png';

// @todo: to get this data from Keystone
const navigationLinks: NavigationLinks = [
    {name: 'home', href: '/'},
    {name: 'cv', href: '/cv'},
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    /* istanbul ignore next */
    return (
        <>
            <AppBar position="sticky" color="default">
                <ToolBar>
                    <Grid container justifyContent="center">
                        <Grid item xl lg md sm={0} xs={0} />
                        <Grid item xl={6} lg={6} md={4} sm={9} xs={9}>
                            <Avatar src={avatarImg} />
                        </Grid>
                        <Grid item xl={4} lg={5} md={6} xs={2} textAlign="end">
                            <Box
                                component="div"
                                sx={{
                                    display: {
                                        xl: 'block',
                                        lg: 'block',
                                        md: 'block',
                                        xs: 'none',
                                    },
                                    paddingTop: '7.25',
                                }}
                            >
                                <Box
                                    className="header--menu-items"
                                    component="div"
                                >
                                    {navigationLinks.map(item => (
                                        // eslint-disable-next-line react/jsx-key

                                        <Link
                                            color="textPrimary"
                                            component={RouterLink}
                                            variant="button"
                                            underline="none"
                                            key={item.name}
                                            href={item.href}
                                            to={item.href}
                                            sx={{marginRight: '20px'}}
                                            onClick={() =>
                                                window.scrollTo(0, 0)
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl lg={0} md sm xs textAlign="end">
                            <Box
                                component="div"
                                sx={{
                                    display: {
                                        xl: 'none',
                                        lg: 'none',
                                        md: 'none',
                                        xs: 'block',
                                    },
                                }}
                            >
                                <Box
                                    className="header--burger-menu"
                                    sx={{paddingTop: '8'}}
                                    data-testid="header--burger-menu"
                                >
                                    <MenuIcon
                                        onClick={() => setOpen(true)}
                                        data-testid="header--burger-menu-icon"
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </ToolBar>

                <SwipeableDrawer
                    open={open}
                    anchor="right"
                    onOpen={() => setOpen(true)}
                    onClose={() => setOpen(false)}
                    data-testid="header--swipeable-drawer"
                >
                    <Box>
                        <ChevronRightIcon
                            onClick={() => setOpen(false)}
                            data-testid="header--chevron-icon"
                        />
                    </Box>
                    <Divider />
                    {/* @todo: Create a function/helper to retrieve the links. DRY */}
                    <List>
                        {navigationLinks.map(item => (
                            // eslint-disable-next-line react/jsx-key
                            <ListItem key={item.name}>
                                <Link
                                    color="textPrimary"
                                    component={RouterLink}
                                    variant="button"
                                    underline="none"
                                    key={item?.name}
                                    href={item.href}
                                    to={item.href}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    {item?.name}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
            </AppBar>
        </>
    );
};

export default Header;
