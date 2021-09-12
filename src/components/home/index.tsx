import { ReactNode } from "react";
import ReposList from "components/repos-list";
import { Repo } from "types/github-user";
import "./styles.css";

type HomeProps = {
  username: string;
  query: string;
  repositories: Repo[];
  repos: Repo[];
  NavBar: ReactNode;
};

export default function Home({ username, query, repositories, repos, NavBar }: HomeProps) {
  return (
    <>
      {NavBar}
      <main className="home">
        <h1 className="welcome-title">Hello {username}</h1>
        <h2 className="label">Your repos</h2>
        {query && repos.length > 0 ? (
          <ReposList repos={repos} />
        ) : query && repos.length === 0 ? (
          <div className="no-results-container">
            <h2 className="no-results-label">No results for "{query}"</h2>
          </div>
        ) : (
          <ReposList repos={repositories} />
        )}
      </main>
    </>
  );
}
