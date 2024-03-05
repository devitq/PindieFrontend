"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

import AuthForm from "@/app/components/AuthForm/AuthForm"
import Overlay from "@/app/components/Overlay/Overlay"
import Popup from "@/app/components/Popup/Popup"

import endpoints from "@/app/api/config"
import { getMe, getJWT, removeJWT, isResponseOk } from "@/app/api/api-utils"

import Styles from "@/app/components/Header/Header.module.css"

export const Header = (props) => {
	const pathname = usePathname()

	const [popupIsOpened, setPopupIsOpened] = useState(false)
	const [isAuthorized, setIsAuthorized] = useState(false)

	const openPopup = () => {
		setPopupIsOpened(true)
	}

	const closePopup = () => {
		setPopupIsOpened(false)
	}

	const handleLogout = () => {
		removeJWT()
		setIsAuthorized(false)
	}

	useEffect(() => {
		const jwt = getJWT()

		if (jwt) {
			getMe(endpoints.me, jwt).then((userData) => {
				if (isResponseOk(userData)) {
					setIsAuthorized(true)
				} else {
					setIsAuthorized(false)
					removeJWT()
				}
			})
		}
	}, [])

	return (
		<header className={Styles["header"]}>
			{pathname === "/" ? (
				<div className={Styles["logo"]}>
					<img
						src="/images/logo.svg"
						alt="Логотип Pindie"
						className={Styles["logo__image"]}
					/>
				</div>
			) : (
				<Link href="/" className={Styles["logo"]}>
					<img
						src="/images/logo.svg"
						alt="Логотип Pindie"
						className={Styles["logo__image"]}
					/>
				</Link>
			)}
			<nav className={Styles["menu"]}>
				<ul className={Styles["menu__list"]}>
					<li className={Styles["menu__item"]}>
						<Link
							href="/new"
							className={`${Styles["menu__link"]} ${
								pathname === "/new"
									? Styles["menu__link_active"]
									: ""
							}`}
						>
							Новинки
						</Link>
					</li>
					<li className={Styles["menu__item"]}>
						<Link
							href="/popular"
							className={`${Styles["menu__link"]} ${
								pathname === "/popular"
									? Styles["menu__link_active"]
									: ""
							}`}
						>
							Популярные
						</Link>
					</li>
					<li className={Styles["menu__item"]}>
						<Link
							href="/shooters"
							className={`${Styles["menu__link"]} ${
								pathname === "/shooters"
									? Styles["menu__link_active"]
									: ""
							}`}
						>
							Шутеры
						</Link>
					</li>
					<li className={Styles["menu__item"]}>
						<Link
							href="/runners"
							className={`${Styles["menu__link"]} ${
								pathname === "/runners"
									? Styles["menu__link_active"]
									: ""
							}`}
						>
							Ранеры
						</Link>
					</li>
					<li className={Styles["menu__item"]}>
						<Link
							href="/pixel-games"
							className={`${Styles["menu__link"]} ${
								pathname === "/pixel-games"
									? Styles["menu__link_active"]
									: ""
							}`}
						>
							Пиксельные
						</Link>
					</li>
					<li className={Styles["menu__item"]}>
						<Link
							href="/tds"
							className={`${Styles["menu__link"]} ${
								pathname === "/tds"
									? Styles["menu__link_active"]
									: ""
							}`}
						>
							TDS
						</Link>
					</li>
				</ul>
				<div className={Styles["auth"]}>
					{isAuthorized ? (
						<button
							className={Styles["auth__button"]}
							onClick={handleLogout}
						>
							Выйти
						</button>
					) : (
						<button
							className={Styles["auth__button"]}
							onClick={openPopup}
						>
							Войти
						</button>
					)}
				</div>
			</nav>
			<Overlay isOpened={popupIsOpened} closePopup={closePopup} />
			<Popup isOpened={popupIsOpened} closePopup={closePopup}>
				<AuthForm closePopup={closePopup} setAuth={setIsAuthorized} />
			</Popup>
		</header>
	)
}

export default Header
