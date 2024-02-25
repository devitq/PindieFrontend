import CardsList from "@/app/components/CardsList/CardsList"

import { getGamesByCategory } from "@/app/data/data-utils"

export default function Popular() {
	const tdsGames = getGamesByCategory("TDS")

	return (
		<main>
			<CardsList data={tdsGames} id="TDS" title="TDS" />
		</main>
	)
}
