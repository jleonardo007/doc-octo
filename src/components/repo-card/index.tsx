import FavRepoButton from "components/fav-repo-button";
import { Repo } from "types/github-user";
import "./styles.css";

type RepoCardProps = {
  repo: Repo;
};

export default function RepoCard({ repo }: RepoCardProps) {
  return (
    <article className="repo" title={repo.name}>
      <div className="repo-info">
        <h2>
          <a href={`${repo.url}`} target="_blank" rel="noreferrer" className="repo-link">
            {repo.name}
          </a>
        </h2>
        <p title={repo.description}>{repo.description ? repo.description : "No description"}</p>
      </div>
      <div className="fav-button-container">
        <FavRepoButton repo={repo} />
      </div>
    </article>
  );
}
