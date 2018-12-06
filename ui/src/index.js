import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { ApolloClient, ApolloLink } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { onError } from "apollo-link-error";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  link: ApolloLink.from([errorLink])
});

console.log(process.env.REACT_APP_GRAPHQL_URI);

const Main = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
