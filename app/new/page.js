"use client"

import Preloader from "@/app/components/Preloader/Preloader"
import CardsList from "@/app/components/CardsList/CardsList"

import { useGetDataByCategory } from "@/app/api/api-hooks"
import endpoints from "@/app/api/config"

export default function New() {
	const newGames = useGetDataByCategory(endpoints.games, "new")

	return (
		<main>
			{newGames ? (
				<CardsList data={newGames} id="new" title="Новинки" />
			) : (
				<Preloader />
			)}
		</main>
	)
}
