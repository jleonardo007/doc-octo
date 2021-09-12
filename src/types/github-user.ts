import { Dispatch, SetStateAction } from "react";

export type Repo = {
  __typename: string;
  description: string | undefined;
  id: string;
  name: string;
  nameWithOwner: string;
  url: string;
};

export type User = {
  __typename: string;
  avatarUrl: string;
  bio: string;
  createdAt: string;
  login: string;
  name: string;
  repositories: {
    __typename: string;
    nodes: Repo[];
  };
};

export type RepoSearch = {
  query: string;
  repos: Repo[];
};

export type SetRepoSearch = Dispatch<SetStateAction<RepoSearch>>;
