import CardsList from "@/app/components/CardsList/CardsList"

import { getGamesByCategory } from "@/app/data/data-utils"

export default function New() {
	const newGames = getGamesByCategory("new")

	return (
		<main>
			<CardsList data={newGames} id="new" title="Новинки" />
		</main>
	)
}
