import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Repo } from "types/github-user";
import { checkIfRepoAlreadySaved, saveFavoriteRepo, deleteFavoriteRepo } from "utils/local-storage";
import "./styles.css";

type FavRepoButtonProps = {
  repo: Repo;
};

export default function FavRepoButton({ repo }: FavRepoButtonProps) {
  const [toggleButton, setToggleButton] = useState(() => checkIfRepoAlreadySaved(repo.id));
  const buttonColor = toggleButton ? "red" : "#eee";

  useEffect(() => {
    if (toggleButton && !checkIfRepoAlreadySaved(repo.id)) saveFavoriteRepo(repo);
    else if (!toggleButton && checkIfRepoAlreadySaved(repo.id)) deleteFavoriteRepo(repo.id);
  });

  function handleToggleButton() {
    setToggleButton(!toggleButton);
  }

  return (
    <button
      onClick={handleToggleButton}
      style={{ color: buttonColor }}
      className="fav-button"
      title="Fav this repo"
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
}
