import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {ViewportProvider} from 'providers/Viewport';

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
    document.getElementById('root'),
);
