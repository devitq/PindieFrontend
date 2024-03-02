"use client"

import { useEffect, useState } from "react"

import Preloader from "@/app/components/Preloader/Preloader"
import GameNotFound from "@/app/components/GameNotFound/GameNotFound"

import Styles from "@/app/games/[id]/Game.module.css"

import { endpoints } from "@/app/api/config"
import { getNormalizedGameDataById } from "@/app/api/api-utils"

export default function GamePage(props) {
	const [preloaderVisible, setPreloaderVisible] = useState(true)
	const [game, setGame] = useState(null)

	useEffect(() => {
		async function fetchData() {
			const game = await getNormalizedGameDataById(
				endpoints.games,
				props.params.id
			)
			setPreloaderVisible(false)
			game.error ? setGame(null) : setGame(game)
		}
		fetchData()
	}, [])

	return (
		<main className="main">
			{game ? (
				<>
					<section className={Styles["game"]}>
						<iframe
							className={Styles["game__iframe"]}
							src={game.link}
						></iframe>
					</section>
					<section className={Styles["about"]}>
						<h2 className={Styles["about__title"]}>{game.title}</h2>
						<div className={Styles["about__content"]}>
							<p className={Styles["about__description"]}>
								{game.description}
							</p>
							<div className={Styles["about__author"]}>
								<p>
									Автор:{" "}
									<span className={Styles["about__accent"]}>
										{game.developer}
									</span>
								</p>
							</div>
						</div>
						<div className={Styles["about__vote"]}>
							<p className={Styles["about__vote-amount"]}>
								За игру уже проголосовали:{" "}
								<span className={Styles["about__accent"]}>
									{game.users.length}
								</span>
							</p>
							<button
								className={`button ${Styles["about__vote-button"]}`}
							>
								Голосовать
							</button>
						</div>
					</section>
				</>
			) : preloaderVisible ? (
				<Preloader />
			) : (
				<GameNotFound />
			)}
		</main>
	)
}
