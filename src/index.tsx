import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {ViewportProvider} from 'providers/Viewport';
import {BrowserRouter} from 'react-router-dom';
import {Provider as ReactReduxProvider} from 'react-redux';
import {store} from 'app/store';
import {worker} from 'api/server.js';
// import {increment} from 'utils/redux/actionCreators';
// import {selectCounterValue} from 'utils/redux/actionSelector';

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
// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
    // Start our mock API server
    await worker.start({onUnhandledRequest: 'bypass'});
    ReactDOM.render(
        <React.StrictMode>
            <ApolloProvider client={client}>
                <ReactReduxProvider store={store}>
                    <ViewportProvider>
                        <ThemeProvider theme={theme}>
                            <BrowserRouter>
                                <App />
                            </BrowserRouter>
                        </ThemeProvider>
                    </ViewportProvider>
                </ReactReduxProvider>
            </ApolloProvider>
        </React.StrictMode>,
        document.getElementById('root'),
    );
}

start();
