import { Repo, SetRepoSearch } from "types/github-user";

export function searchRepo(query: string, repositories: Repo[], setRepos: SetRepoSearch) {
  let results: Repo[] = [];

  if (query) results = repositories.filter((repo) => repo.name.includes(query));
  else results = [];

  setRepos((prevState) => {
    return {
      ...prevState,
      query,
      repos: results,
    };
  });
}
