import CardsList from "@/app/components/CardsList/CardsList"

import { getGamesByCategory } from "@/app/data/data-utils"

export default function Popular() {
	const popularGames = getGamesByCategory("popular")

	return (
		<main>
			<CardsList data={popularGames} id="popular" title="Популярные" />
		</main>
	)
}
