// app/components/GameNotFound/GameNotFound.jsx

import NotFoundImage from "@/app/components/GameNotFound/NotFoundImage";

import Styles from "@/app/components/GameNotFound/GameNotFound.module.css";

export const GameNotFound = () => {
  return (
    <div className={Styles["not-found"]}>
      <NotFoundImage />
      <h2 className={Styles["not-found__text"]}>Такой игры не существует :(</h2>
    </div>
  );
};

export default GameNotFound;
