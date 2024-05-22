// app/components/CardsListSection/CardsList.jsx

"use client";

import Link from "next/link";

import Card from "@/app/components/Card/Card";

import Styles from "@/app/components/CardsListSection/CardsListSection.module.css";

export const CardsList = (props) => {
  return (
    <ul className={Styles["cards-list"]}>
      {props.data.map((gameData, index) => (
        <li key={index} className={Styles["cards-list__item"]}>
          <Link
            href={`/games/${gameData.id}`}
            className={Styles["card-list__link"]}
          >
            <Card gameData={gameData} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CardsList;
