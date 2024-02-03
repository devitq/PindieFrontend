import Styles from "./CardsList.module.css"

const Card = ({ gameData }) => {
	return (
		<li className={Styles["cards-list__item"]}>
			<a
				/* href={`/game-id-${gameData.id}.html`} */
				href=""
				className={Styles["card-list__link"]}
			>
				<article className={Styles.card}>
					<img
						src={gameData.coverUrl}
						alt=""
						className={Styles.card__image}
					/>
					<div className={Styles["card__content-block"]}>
						<h3 className={Styles.card__title}>{gameData.title}</h3>
						<p className={Styles.card__description}>
							{gameData.description}
						</p>
						<div className={Styles["card__info-container"]}>
							<p className={Styles.card__author}>
								Автор:{" "}
								<span className={Styles.card__accent}>
									{gameData.author}
								</span>
							</p>
							<p className={Styles.card__votes}>
								Голосов на сайте:{" "}
								<span className={Styles.card__accent}>
									{gameData.votes}
								</span>
							</p>
						</div>
					</div>
				</article>
			</a>
		</li>
	)
}

export default Card
