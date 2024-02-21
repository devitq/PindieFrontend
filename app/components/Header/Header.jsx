"use client"

import { useState } from "react"

import { AuthForm } from "../AuthForm/AuthForm"
import { Overlay } from "../Overlay/Overlay"
import { Popup } from "../Popup/Popup"

import Styles from "./Header.module.css"

export const Header = () => {
	const [popupIsOpened, setPopupIsOpened] = useState(false)

	const openPopup = () => {
		setPopupIsOpened(true)
	}

	const closePopup = () => {
		setPopupIsOpened(false)
	}

	return (
		<header className={Styles["header"]}>
			<a href="/" className={Styles["logo"]}>
				<img
					src="/images/logo.svg"
					alt="Логотип Pindie"
					className={Styles["logo__image"]}
				/>
			</a>
			<nav className={Styles["menu"]}>
				<ul className={Styles["menu__list"]}>
					<li className={Styles["menu__item"]}>
						<a href="" className={Styles["menu__link"]}>
							Новинки
						</a>
					</li>
					<li className={Styles["menu__item"]}>
						<a href="" className={Styles["menu__link"]}>
							Популярные
						</a>
					</li>
					<li className={Styles["menu__item"]}>
						<a href="" className={Styles["menu__link"]}>
							Шутеры
						</a>
					</li>
					<li className={Styles["menu__item"]}>
						<a href="" className={Styles["menu__link"]}>
							Ранеры
						</a>
					</li>
					<li className={Styles["menu__item"]}>
						<a href="" className={Styles["menu__link"]}>
							Пиксельные
						</a>
					</li>
					<li className={Styles["menu__item"]}>
						<a href="" className={Styles["menu__link"]}>
							TDS
						</a>
					</li>
				</ul>
				<div className={Styles["auth"]}>
					<button
						className={Styles["auth__button"]}
						onClick={openPopup}
					>
						Войти
					</button>
				</div>
			</nav>
			<Overlay isOpened={popupIsOpened} closePopup={closePopup} />
			<Popup isOpened={popupIsOpened} closePopup={closePopup}>
				<AuthForm />
			</Popup>
		</header>
	)
}
