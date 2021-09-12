import { ReactNode } from "react";
import { User } from "types/github-user";
import "./styles.css";

type ProfileProps = {
  NavBar: ReactNode;
  user: User;
  logOut: () => void;
};

export default function Profile({ NavBar, user, logOut }: ProfileProps) {
  return (
    <>
      {NavBar}
      <section className="profile">
        <h1 className="profile-label">{user.name} Github info</h1>
        <div className="user-info">
          <div className="avatar-container">
            <img loading="lazy" src={user.avatarUrl} alt="User avatar" className="avatar" />
          </div>
          <div className="info-container">
            <span>{user.login}</span>
          </div>
          <div className="info-container">
            <span>{user.bio ? user.bio : "No Bio"}</span>
          </div>
          <div className="info-container">
            <span>Joined Github at {new Date(user.createdAt).getFullYear()}</span>
          </div>
          <div className="info-container">
            <span>Total repos {user.repositories.nodes.length}</span>
          </div>
          <div className="info-container">
            <button className="logout-button" onClick={logOut}>
              Logout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
