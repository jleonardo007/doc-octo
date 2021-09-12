import RepoCard from "components/repo-card";
import { Repo } from "types/github-user";
import "./styles.css";

type ReposListProps = {
  repos: Repo[];
};

export default function ReposList({ repos }: ReposListProps) {
  return (
    <div className="repos-container">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
