import CardsList from "@/app/components/CardsList/CardsList"

import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils"
import endpoints from "@/app/api/config"

export default async function New() {
	const newGames = await getNormalizedGamesDataByCategory(
		endpoints.games,
		"new"
	)

	return (
		<main>
			<CardsList data={newGames} id="new" title="Новинки" />
		</main>
	)
}
