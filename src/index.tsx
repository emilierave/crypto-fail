import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
        {/* pass the apollo client to a provider, so it can be accessed by any component */}
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);