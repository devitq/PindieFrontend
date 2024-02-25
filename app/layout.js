import Header from "@/app/components/Header/Header"
import Footer from "@/app/components/Footer/Footer"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "@/app/globals.css"

export const metadata = {
	title: "Pindie",
	description: "Портал инди-игр от студентов Яндекс Практикума",
}

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				<Header />
				{children}
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
