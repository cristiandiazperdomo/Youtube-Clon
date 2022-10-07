import React from 'react';
import './Header.css';
import { MdTableRows, 
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
					<MdTableRows className="icono"/>
				</div>
				<div className="logo-name">
					<img src={require('../../img/youtube-logo.png')} alt="youtube_logo" />
					<h1 className="title">Youtube</h1>
				</div>
			</div>
			<div className="center">
				<input type="text" />
				<MdOutlineKeyboardVoice className="icono"/>
			</div>				
			<div className="right-side">
				<MdOutlineVideoCall className="icono icono-video"/>
				<MdNotificationsNone className="icono icono-notification"/>
				<MdAccountCircle className="icono icono-account"/>
			</div>
		</header>
	)
}