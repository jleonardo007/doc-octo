import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

type NavBarProps = {
  SearchBar?: ReactNode;
};

export default function NavBar({ SearchBar }: NavBarProps) {
  return (
    <nav className="nav-bar">
      <ul className="links">
        <li className="link">
          <Link to="/">
            Home <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
        <li className="link">
          <Link to="/favorite-repos">
            Repos
            <FontAwesomeIcon icon={faHeart} />
          </Link>
        </li>
        <li className="link">
          <Link to="/profile">
            Profile
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </li>
      </ul>
      {SearchBar}
    </nav>
  );
}
