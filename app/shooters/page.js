import CardsList from "@/app/components/CardsList/CardsList"

import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils"
import endpoints from "@/app/api/config"

export default async function Shooters() {
	const shooterGames = await getNormalizedGamesDataByCategory(
		endpoints.games,
		"shooter"
	)

	return (
		<main>
			<CardsList data={shooterGames} id="shooters" title="Шутеры" />
		</main>
	)
}
