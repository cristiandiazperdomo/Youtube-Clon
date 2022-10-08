import React from 'react';
import './Header.css';
import { MdTableRows,
		MdSearch, 
		MdOutlineKeyboardVoice, 
		MdAccountCircle,
		MdNotificationsNone,
		MdOutlineVideoCall,
		} from "react-icons/md";

export const Header = () => {
	return (
		<header className="main-header">
			<div className="left-side">
				<div className="left-side-division">
					<MdTableRows className="icono icono-compartir"/>
				</div>
				<div className="logo-name">
					<img src={require('../../img/youtube-logo.png')} alt="youtube_logo" />
					<h1 className="title">YouTube</h1>
					<p className="country">UY</p>
				</div>
			</div>
			<div className="center">
				<input type="text" placeholder="Buscar"/>
				<MdSearch className="icono icono-search icono-compartir"/>
				<MdOutlineKeyboardVoice className="icono icono-voice icono-compartir"/>
			</div>				
			<div className="right-side">
				<MdOutlineVideoCall className="icono icono-video icono-compartir"/>
				<MdNotificationsNone className="icono icono-notification icono-compartir"/>
				<MdAccountCircle className="icono icono-account"/>
			</div>
		</header>
	)
}