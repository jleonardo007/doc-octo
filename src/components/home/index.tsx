import { ReactNode } from "react";
import ReposList from "components/repos-list";
import { Repo } from "types/github-user";
import "./styles.css";

type HomeProps = {
  username: string;
  error: string | undefined;
  loading: boolean;
  query: string;
  repositories: Repo[];
  repos: Repo[];
  NavBar: ReactNode;
};

export default function Home({
  username,
  error,
  loading,
  query,
  repositories,
  repos,
  NavBar,
}: HomeProps) {
  if (loading)
    return (
      <>
        {NavBar}
        <main className="home">
          <h1 className="welcome-title">Loading...</h1>
        </main>
      </>
    );

  if (error)
    return (
      <>
        {NavBar}
        <main className="home">
          <h1 className="label">{error}</h1>
          <p className="join">
            Create an account{" "}
            <a
              className="join-link"
              href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
              target="_blank"
              rel="noreferrer"
            >
              Here!
            </a>
          </p>
        </main>
      </>
    );

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
