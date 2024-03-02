import CardsList from "@/app/components/CardsList/CardsList"

import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils"
import { endpoints } from "@/app/api/config"

export default async function TDS() {
	const tdsGames = await getNormalizedGamesDataByCategory(
		endpoints.games,
		"TDS"
	)

	return (
		<main>
			<CardsList data={tdsGames} id="TDS" title="TDS" />
		</main>
	)
}
