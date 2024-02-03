import Card from "./Card"

import Styles from "./CardsList.module.css"

export const PopularCardsList = () => {
	const gamesData = [
		{
			id: 1,
			coverUrl:
				"https://code.s3.yandex.net/teens/pindie-games/cristal-keeper/cover.png",
			title: "Crystal Kepper",
			description:
				"Управляй боевым дроном, чтобы любой ценой защитить кристалл от враждебных космо-слизней.",
			author: "Lonely Baobab",
			votes: 20,
		},
		{
			id: 2,
			coverUrl:
				"https://code.s3.yandex.net/teens/pindie-games/dangeons-n-caves-prologue/cover.png",
			title: "Dangeons'n'Caves. Prologue",
			description:
				"Безымянный герой исследует пещеры и подземелья, чтобы найти больше информации о себе.",
			author: "F-Style",
			votes: 10,
		},
		{
			id: 3,
			coverUrl:
				"https://code.s3.yandex.net/teens/pindie-games/defence-of-crystal/cover.png",
			title: "Defence of Crystal",
			description:
				"Защищай магический кристалл от монстров и уничтожай кладбища, чтобы спасти Землю, которую поглотил мрак.",
			author: "MastWe",
			votes: 20,
		},
	]
	return (
		<section className={Styles["list-section"]}>
			<h2 className={Styles["list-section__title"]} id="popular">
				Популярное
			</h2>
			<ul className={Styles["cards-list"]}>
				{gamesData.map((gameData, index) => (
					<Card key={index} gameData={gameData} />
				))}
			</ul>
		</section>
	)
}
