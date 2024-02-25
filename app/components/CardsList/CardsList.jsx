import Link from "next/link"

import Card from "@/app/components/Card/Card"

import Styles from "@/app/components/CardsList/CardsList.module.css"

export const CardsList = (props) => {
	return (
		<section className={Styles["list-section"]}>
			<h2 className={Styles["list-section__title"]} id={props.id}>
				{props.title}
			</h2>
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
		</section>
	)
}

export default CardsList
