"use client"

import Preloader from "@/app/components/Preloader/Preloader"
import CardsList from "@/app/components/CardsList/CardsList"

import { useGetDataByCategory } from "@/app/api/api-hooks"
import endpoints from "@/app/api/config"

export default function Shooters() {
	const shooterGames = useGetDataByCategory(endpoints.games, "shooter")

	return (
		<main>
			{shooterGames ? (
				<CardsList data={shooterGames} id="shooters" title="Шутеры" />
			) : (
				<Preloader />
			)}
		</main>
	)
}
