import { Banner } from "./components/Banner/Banner"
import { Promo } from "./components/Promo/Promo"
import { PopularCardsList } from "./components/CardsList/PopularCardsList"
import { NewCardsList } from "./components/CardsList/NewCardsList"

export default function Home() {
	return (
		<main>
			<Banner />
			<PopularCardsList />
			<NewCardsList />
			<Promo />
		</main>
	)
}
