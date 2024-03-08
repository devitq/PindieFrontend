"use client"

import Preloader from "@/app/components/Preloader/Preloader"
import CardsList from "@/app/components/CardsList/CardsList"

import { useGetDataByCategory } from "@/app/api/api-hooks"
import endpoints from "@/app/api/config"

export default function PixelGames() {
	const pixelGames = useGetDataByCategory(endpoints.games, "pixel")

	return (
		<main>
			{pixelGames ? (
				<CardsList
					data={pixelGames}
					id="pixel-games"
					title="Пиксельные"
				/>
			) : (
				<Preloader />
			)}
		</main>
	)
}
