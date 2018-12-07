import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { ApolloClient } from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import CssBaseline from "@material-ui/core/CssBaseline";

const client = new ApolloClient({
  link: createHttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI }),
  cache: new InMemoryCache()
});

console.log(process.env.REACT_APP_GRAPHQL_URI);

const Main = () => (
  <ApolloProvider client={client}>
    <CssBaseline />
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
