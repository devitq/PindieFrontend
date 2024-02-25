import CardsList from "@/app/components/CardsList/CardsList"

import { getGamesByCategory } from "@/app/data/data-utils"

export default function Popular() {
	const pixelGames = getGamesByCategory("pixel")

	return (
		<main>
			<CardsList data={pixelGames} id="pixel-games" title="Пиксельные" />
		</main>
	)
}
