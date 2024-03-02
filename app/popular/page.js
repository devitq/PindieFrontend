import CardsList from "@/app/components/CardsList/CardsList"

import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils"
import { endpoints } from "@/app/api/config"

export default async function Popular() {
	const popularGames = await getNormalizedGamesDataByCategory(
		endpoints.games,
		"popular"
	)

	return (
		<main>
			<CardsList data={popularGames} id="popular" title="Популярные" />
		</main>
	)
}
