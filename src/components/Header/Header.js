import React from 'react';
import './Header.css';
import {
		MdSearch, 
		MdKeyboardVoice, 
		MdAccountCircle,
		MdNotificationsNone,
		MdOutlineVideoCall,
		} from "react-icons/md";
import { BsList } from "react-icons/bs";
export const Header = () => {

	const barVisibilityd = () => {
	const inputEl = document.querySelector('.Navigation-background')
	console.log(inputEl.style.left)
		if (inputEl.style.left === -240 + "px") {
			 	inputEl.style.left = 0 + "px";
			return inputEl.style.backgroundColor = "transparent";
		}
		inputEl.style.left = -240 + "px";
	}

	return (
		<header className="main-header">
			<div className="left-side">
				<div className="left-side-division">
					<button onClick={barVisibilityd}>
						<BsList className="icono icono-compartir" />
					</button>
				</div>
				<div className="logo-name">
					<img src={require('../../img/youtube-logo.png')} alt="youtube_logo" />
					<h1 className="title">YouTube</h1>
					<p className="country">UY</p>
				</div>
			</div>
			<div className="center">
				<div className="center-input">
					<input type="text" placeholder="Buscar"/>
				</div>
				<div className="icono-container-search search">
					<MdSearch className="icono icono-search icono-compartir"/>
				</div>
				<div className="icono-container icono-voice-container">
					<MdKeyboardVoice className="icono icono-voice icono-compartir"/>
				</div>
			</div>				
			<div className="right-side">
				<div className="icono-container">
					<MdOutlineVideoCall className="icono icono-video icono-compartir"/>
				</div>
				<div className="icono-container">
					<MdNotificationsNone className="icono icono-notification icono-compartir"/>
				</div>
				<div className="icono-container">
					<MdAccountCircle className="icono icono-account"/>
				</div>
			</div>
		</header>
	)
}