import React from 'react';
import { MdSearch, 
		MdKeyboardVoice, 
		} from "react-icons/md";
import { ImCircleLeft, ImCircleRight } from "react-icons/im";
import { AiOutlineArrowLeft } from "react-icons/ai";
import './Search.css';
export const Search = () => {
	
	const hideSearch = () => document.querySelector('.mobile-search').style.marginTop = "-116px"; //hide search mobile version
	
	return (
		<div className="center mobile-search">
			<div className="btn-leave-search-menu" onClick={hideSearch}> 
				<AiOutlineArrowLeft />
			</div>
			<div className="big-center-input">
				<input type="text" placeholder="Buscar" />
			</div>
			<div className="search-icon-container" >
				<button className="icono-container-search search" id="search">
					<MdSearch className="icono icono-search icono-compartir"/>
				</button>
			</div>
			<div className="icon-voice-container-total">
				<div className="icono-container icono-voice-container">
					<MdKeyboardVoice className="icono icono-voice icono-compartir"/>
				</div>
			</div>
		</div>
	)
}