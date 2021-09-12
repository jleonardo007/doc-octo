import { ReactNode } from "react";
import { Repo } from "types/github-user";
import ReposList from "components/repos-list";
import "./styles.css";

type FavoriteReposProps = {
  NavBar: ReactNode;
};

export default function FavoriteRepos({ NavBar }: FavoriteReposProps) {
  const favRepos: Repo[] = localStorage.favRepos ? JSON.parse(localStorage.favRepos) : [];

  return (
    <>
      {NavBar}
      <section className="fav-repos">
        <h1 className="fav-label">Your favorites repos</h1>
        {favRepos.length === 0 ? (
          <div className="no-fav-container">
            <h2 className="no-fav-label">No favorite repos yet</h2>
          </div>
        ) : (
          <ReposList repos={favRepos} />
        )}
      </section>
    </>
  );
}
