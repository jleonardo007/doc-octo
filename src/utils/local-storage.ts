import { Repo } from "types/github-user";

export function saveFavoriteRepo(repo: Repo) {
  const favRepos = localStorage.favRepos && JSON.parse(localStorage.favRepos);

  if (favRepos) localStorage.setItem("favRepos", JSON.stringify([...favRepos, repo]));
  else localStorage.setItem("favRepos", JSON.stringify([repo]));
}

export function deleteFavoriteRepo(repoId: string) {
  const favRepos = localStorage.favRepos && JSON.parse(localStorage.favRepos);

  favRepos.forEach((repo: Repo, index: number, repos: Repo[]) => {
    if (repo.id === repoId) repos.splice(index, 1);
  });

  localStorage.setItem("favRepos", JSON.stringify(favRepos));
}

export function checkIfRepoAlreadySaved(repoId: string) {
  const favRepos = localStorage.favRepos && JSON.parse(localStorage.favRepos);

  if (!favRepos) return false;
  else return favRepos.some((repo: Repo) => repo.id === repoId);
}
