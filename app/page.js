"use client"

import Preloader from "@/app/components/Preloader/Preloader"
import Banner from "@/app/components/Banner/Banner"
import Promo from "@/app/components/Promo/Promo"
import CardsList from "@/app/components/CardsList/CardsList"

import { endpoints } from "@/app/api/config"
import { useGetDataByCategory } from "@/app/api/api-hooks"

export default function Home() {
	const popularGames = useGetDataByCategory(endpoints.games, "popular")
	const newGames = useGetDataByCategory(endpoints.games, "new")

	return (
		<main>
			<Banner />
			{popularGames ? (
				<CardsList
					data={popularGames}
					id="popular"
					title="Популярные"
				/>
			) : (
				<Preloader />
			)}
			{newGames ? (
				<CardsList data={newGames} id="new" title="Новинки" />
			) : (
				<Preloader />
			)}
			<Promo />
		</main>
	)
}
