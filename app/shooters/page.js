import CardsList from "@/app/components/CardsList/CardsList"

import { getGamesByCategory } from "@/app/data/data-utils"

export default function Popular() {
	const shooterGames = getGamesByCategory("shooter")

	return (
		<main>
			<CardsList data={shooterGames} id="shooters" title="Шутеры" />
		</main>
	)
}
