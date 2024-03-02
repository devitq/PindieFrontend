import CardsList from "@/app/components/CardsList/CardsList"

import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils"
import { endpoints } from "@/app/api/config"

export default async function Runners() {
	const runnerGames = await getNormalizedGamesDataByCategory(
		endpoints.games,
		"runner"
	)

	return (
		<main>
			<CardsList data={runnerGames} id="runners" title="Ранеры" />
		</main>
	)
}
