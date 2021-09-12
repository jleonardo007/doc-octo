import { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import { User } from "types/github-user";
import { searchRepo } from "handlers/search-bar";

const ALL_REPOSITORIES = gql`
  query AllRepositories($username: String!) {
    user(login: $username) {
      login
      name
      createdAt
      avatarUrl
      bio
      repositories(first: 60) {
        nodes {
          name
          id
          description
          nameWithOwner
          url
        }
      }
    }
  }
`;

const initialState: User = {
  __typename: "",
  avatarUrl: "",
  bio: "",
  createdAt: "",
  login: "",
  name: "",
  repositories: { __typename: "", nodes: [] },
};

export default function useGithubUser(username: string) {
  const [user, setUser] = useState(initialState);
  const [repoSearch, setRepoSearch] = useState({
    query: "",
    repos: initialState.repositories.nodes,
  });
  const { loading, error, data } = useQuery(ALL_REPOSITORIES, {
    variables: { username: username },
  });

  useEffect(() => {
    if (data && !loading) setUser(data.user);
  }, [data, loading]);

  return {
    user,
    repoSearch,
    loading,
    errorMessage: error?.message,
    searchRepo: (e: string) => {
      searchRepo(e, user.repositories.nodes, setRepoSearch);
    },
  };
}
