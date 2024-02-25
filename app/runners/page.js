import CardsList from "@/app/components/CardsList/CardsList"

import { getGamesByCategory } from "@/app/data/data-utils"

export default function Popular() {
	const runnerGames = getGamesByCategory("runner")

	return (
		<main>
			<CardsList data={runnerGames} id="runners" title="Ранеры" />
		</main>
	)
}
