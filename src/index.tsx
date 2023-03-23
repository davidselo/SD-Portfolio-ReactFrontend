import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {ViewportProvider} from 'providers/Viewport';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
});
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: ['Raleway'].join(','),
    },
});
theme = responsiveFontSizes(theme);

const app = document.getElementById('root');

if (app) {
    // 1. Set up the browser history with the updated location
    // (minus the # sign)
    const path = (/#!(\/.*)$/.exec(location.hash) || [])[1];
    if (path) {
        history.replace(path);
    }

    // 2. Render our app
    ReactDOM.render(
        <React.StrictMode>
            <ApolloProvider client={client}>
                <ViewportProvider>
                    <ThemeProvider theme={theme}>
                        <App />
                    </ThemeProvider>
                </ViewportProvider>
            </ApolloProvider>
        </React.StrictMode>,
        app,
    );
}
