import Banner from "@/app/components/Banner/Banner"
import Promo from "@/app/components/Promo/Promo"
import CardsList from "@/app/components/CardsList/CardsList"

import { endpoints } from "@/app/api/config"
import { getNormalizedGamesDataByCategory } from "@/app/api/api-utils"

export default async function Home() {
	const popularGames = await getNormalizedGamesDataByCategory(
		endpoints.games,
		"popular"
	)
	const newGames = await getNormalizedGamesDataByCategory(
		endpoints.games,
		"new"
	)

	return (
		<main>
			<Banner />
			<CardsList data={popularGames} id="popular" title="Популярные" />
			<CardsList data={newGames} id="new" title="Новинки" />
			<Promo />
		</main>
	)
}
