import CardsList from "@/app/components/CardsList/CardsList"

import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils"
import endpoints from "@/app/api/config"

export default async function PixelGames() {
	const pixelGames = await getNormalizedGamesDataByCategory(
		endpoints.games,
		"pixel"
	)

	return (
		<main>
			<CardsList data={pixelGames} id="pixel-games" title="Пиксельные" />
		</main>
	)
}
