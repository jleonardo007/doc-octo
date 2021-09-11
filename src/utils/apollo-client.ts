import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = new HttpLink({ uri: "https://api.github.com/graphql" });

const setAuthorizationLink = setContext((request, previousContext) => ({
  headers: {
    ...previousContext.headers,
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
}));

export const client = new ApolloClient({
  link: setAuthorizationLink.concat(link),
  cache: new InMemoryCache(),
});
