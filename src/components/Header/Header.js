import React from 'react';
import './Header.css';
import { MdTableRows,
		MdSearch, 
		MdKeyboardVoice, 
		MdAccountCircle,
		MdNotificationsNone,
		MdOutlineVideoCall,
		} from "react-icons/md";
import { BsList } from "react-icons/bs";
import { Search } from '../Search/Search';

export const Header = () => {

	const showSearch = () => document.querySelector('.mobile-search').style.marginTop = "-60px"; //search mobile version

	const barVisibility = () => {
		const inputEl = document.querySelector('.Navigation-background')

		if (inputEl.style.left === -240 + "px") {
			inputEl.style.left = 0 + "px";
			return inputEl.style.backgroundColor = "transparent";
		}
		inputEl.style.left = -240 + "px";
	}
	const videoContainerSize = () => {
		document.querySelector('.Videos').style.gridTemplateColumns = "repeat(4, calc(25% - 16px))";
		let cards = document.querySelectorAll('.card-container');
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.width = "100%";
			cards[i].style.height = "253px";
		}
		if (window.innerWidth < 1024 && window.innerWidth > 874) {
			document.querySelector('.Videos').style.gridTemplateColumns = "repeat(3, calc(33,3% - 16px))";
			return document.querySelector('.Video-container').style.marginLeft = "240px";
		} else if (window.innerWidth < 874) {
			return document.querySelector('.Videos').style.gridTemplateColumns = "repeat(2, calc(50% - 16px))";
		}
		return document.querySelector('.Video-container').style.marginLeft = "240px";
	}
	const deplat = () => {
		barVisibility()
		videoContainerSize()
	}

	return (
		<>
			<Search /> 
			<header className="main-header">
				<div className="left-side">
					<div className="left-side navigation-left-side">
						<div className="left-side-division-total">
							<button className="left-side-division navigation-left-side-division">
									<BsList onClick={deplat} className="icono icono-compartir" />
							</button>
						</div>
						<div className="logo-name navigation-logo-name">
							<img src={require('../../img/youtube-logo.png')} alt="youtube_logo" />
							<h1 className="title">YouTube</h1>
							<p className="country">UY</p>
						</div>
					</div>
				</div>
				<div className="center">
					<div className="center-input-container">
						<div className="center-input">
							<input type="text" placeholder="Buscar"/>
						</div>
					</div>
					<div className="icono-container-search search" onClick={showSearch}>
						<MdSearch className="icono icono-search icono-compartir"/>
					</div>
					<button className="icono-container icono-voice-container">
						<MdKeyboardVoice className="icono icono-voice icono-compartir"/>
					</button>
				</div>				
				<div className="right-side">
					<button className="icono-container">
						<MdOutlineVideoCall className="icono icono-video icono-compartir"/>
					</button>
					<button className="icono-container">
						<MdNotificationsNone className="icono icono-notification icono-compartir"/>
					</button>
					<button className="icono-container">
						<MdAccountCircle className="icono icono-account"/>
					</button>
				</div>
			</header>
		</>
	)
}