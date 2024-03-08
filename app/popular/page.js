"use client"

import Preloader from "@/app/components/Preloader/Preloader"
import CardsList from "@/app/components/CardsList/CardsList"

import { useGetDataByCategory } from "@/app/api/api-hooks"
import endpoints from "@/app/api/config"

export default function Popular() {
	const popularGames = useGetDataByCategory(endpoints.games, "popular")

	return (
		<main>
			{popularGames ? (
				<CardsList
					data={popularGames}
					id="popular"
					title="Популярные"
				/>
			) : (
				<Preloader />
			)}
		</main>
	)
}
