"use client"

import Preloader from "@/app/components/Preloader/Preloader"
import CardsList from "@/app/components/CardsList/CardsList"

import { useGetDataByCategory } from "@/app/api/api-hooks"
import endpoints from "@/app/api/config"

export default function Runners() {
	const runnerGames = useGetDataByCategory(endpoints.games, "runner")

	return (
		<main>
			{runnerGames ? (
				<CardsList data={runnerGames} id="runners" title="Ранеры" />
			) : (
				<Preloader />
			)}
		</main>
	)
}
