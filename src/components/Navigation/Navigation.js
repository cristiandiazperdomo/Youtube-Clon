import { React } from 'react';
import './Navigation.css';
import { MdOutlineVideoLibrary,
		 MdOutlineSubscriptions, 
		 MdOutlineWatchLater,
		 MdOutlineHistory,
		 MdGamepad,
		 MdOutlineEmojiFlags,
		 MdHelpOutline,
		 MdLightbulbOutline,
		 MdOutlineVideogameAsset,
		 MdOutlineSettings,
		 MdOutlineEmojiEvents,
		 MdOutlineExpandMore,
		 MdOutlineFeedback } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiHistory } from "react-icons/bi";
//import { CiClock2, CiYoutube } from "react-icons/ci";
import { FiCompass } from "react-icons/fi";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
//import { SlArrowDown } from "react-icons/sl"; 
import { BsList } from "react-icons/bs";

export const Navigation = ({ videoContainer }) => {

	const barVisibility = () => {	//show small sidebar or larger sidebar
		const navigationBar = document.querySelector('.Navigation-background');	
		if (navigationBar.style.left = 0 + "px") {
			navigationBar.style.width = 0 + "px";
			navigationBar.style.left = -240 + "px";
		}
		navigationBar.style.left = -240 + "px";
	}

	const videoContainerSize = () => { //make the video container smaller or larger
		let cards = document.querySelectorAll('.card-container');
		if (window.innerWidth < 1140 && window.innerWidth > 874) {
			document.querySelector('.Videos').style.gridTemplateColumns = "repeat(3, calc(33.3% - 16px))";
			return document.querySelector('.Video-container').style.marginLeft = "76px";
		} else if (window.innerWidth < 874) {
			return document.querySelector('.Videos').style.gridTemplateColumns = "repeat(2, calc(50% - 16px))";
		}
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.width = "100%";
			cards[i].style.height = "280px";
		}

		return document.querySelector('.Video-container').style.marginLeft = "76px";
	}

	const showItAndMakeItSmallerOrLarger = () => {
		barVisibility();
		videoContainerSize();
	}

	return (
		<div className="Navigation-background">
			<div className="Navigation-container">
				<div className="Navigation-options">
				<div className="left-side navigation-left-side">
					<div className="left-side-division navigation-left-side-division">
							<BsList onClick={showItAndMakeItSmallerOrLarger}className="icono icono-compartir" />
					</div>
					<div className="logo-name navigation-logo-name">
						<img src={require('../../img/youtube-logo.png')} alt="youtube_logo" />
						<h1 className="title">YouTube</h1>
						<p className="country">UY</p>
					</div>
				</div>
					<ul className="Navigation-main">
						<li>
							<i><GiHouse/></i>
							<a href="#">
								Inicio
							</a>	
						</li>
						<li>
							<i><FiCompass/></i>
							<a href="#">
								Explorar
							</a>	
						</li>
						<li>
							<i><FaRegCaretSquareRight/></i>
							<a href="#">
								Shorts
							</a>	
						</li>

						<li>
							<i><MdOutlineSubscriptions/></i>
							<a href="#">
								Suscripciones
							</a>	
						</li>
					</ul>
					<ul>
						<li>
							<i><MdOutlineVideoLibrary/></i>
							<a href="#">
								Biblioteca
							</a>	
						</li>
						<li>
							<i><MdOutlineHistory/></i>
							<a href="#">
								Historial
							</a>	
						</li>
						<li>
							<i><FaRegCaretSquareRight/></i>
							<a href="#">
								Mis videos
							</a>	
						</li>
						<li>
							<i><MdOutlineWatchLater/></i>
							<a href="#">
								Ver m??s tarde
							</a>	
						</li>
						<li>
							<i><AiOutlineLike/></i>
							<a href="#">
								Videos que me gustan
							</a>	
						</li>
						<li>
							<i><MdOutlineExpandMore/></i>
							<a href="#">
								Mostrar m??s
							</a>	
						</li>
					</ul>
					<ul className="susciption-panel">
						<h3>SUSCRIPCIONES</h3>
						<li>
							<picture>
								<img src={require('../../img/nasa.jpg')} alt="nasa" />						
							</picture>
							<a href="#">
								NASA
							</a>	
						</li>
						<li>
							<picture>
								<img src={require('../../img/platzi.jpg')} alt="platzi" />
							</picture>
							<a href="#">
								Platzi
							</a>	
						</li>
						<li>
							<picture>
								<img src={require('../../img/ysy.jpg')} alt="ysy" />
							</picture>
							<a href="#">
								YSY A
							</a>	
						</li>
						<li>
							<picture>
								<img src={require('../../img/the wild project.jpg')} alt="platzi" />
							</picture>
							<a href="#">
								The Wild Project
							</a>	
						</li>
						<li>
							<picture>
								<img src={require('../../img/jaime altozano.jpg')} alt="jaime altozano" />
							</picture>
							<a href="#">
								Jaime Altozano
							</a>
						</li>
						<li>
							<i><MdOutlineExpandMore/></i>
							<a href="#">
								Mostrar 199 m??s
							</a>	
						</li>	
					</ul>
					<ul className="explore-panel">
					<h3>EXPLORAR</h3>
						<li>
							<i><MdOutlineVideogameAsset/></i>
							<a href="#">
								Videojuegos
							</a>	
						</li>
						<li>
							<i><MdLightbulbOutline/></i>
							<a href="#">
								Aprendizaje
							</a>	
						</li>
						<li>
							<i><MdOutlineEmojiEvents/></i>
							<a href="#">
								Deportes
							</a>	
						</li>
					</ul>
					<ul className="youtube-panel">
					<h3>M??S DE YOUTUBE</h3>
						<li>
							<img src={require('../../img/youtube-logo.png')} alt="youtube logo" />						
							<a href="#">
								Youtube Premium
							</a>	
						</li>
						<li>
							<img src="https://cdn.pixabay.com/photo/2021/05/22/10/22/youtube-6273167_1280.png" alt="YouTube Studio" />
							<a href="#">
								Creator Studio
							</a>
						</li>
						<li className="youtube-music">
							<img src="https://mspoweruser.com/wp-content/uploads/2022/05/Youtube-Music-Logo.png" alt="ysy" />
							<a href="#">
								Youtube Music
							</a>	
						</li>
						<li>
							<img src={require("../../img/youtube-kids.png")} alt="platzi" />
							<a href="#">
								Youtube Kids
							</a>	
						</li>
						<li>
							<img src={require("../../img/youtube-tv.png")} alt="platzi" />
							<a href="#">
								Youtube TV
							</a>	
						</li>
					</ul>
					<ul className="tools">
						<li>
							<i><MdOutlineSettings/></i>
							<a href="#">
								Configuraci??n
							</a>	
						</li>
						<li>
							<i><MdOutlineEmojiFlags/></i>
							<a href="#">
								Historial de denuncias
							</a>	
						</li>
						<li>
							<i><MdHelpOutline/></i>
							<a href="#">
								Ayuda
							</a>	
						</li>
						<li>				
							<i><MdOutlineFeedback/></i>
							<a href="#">
								Enviar sugerencia
							</a>	
						</li>
					</ul>
					<ul className="informacion">
						<li>Informaci??n</li>
						<li>Prensa</li>
						<li>Derechos de autor</li>
						<li>Contactar Creadores</li>
						<li>Publicidad</li>
						<li>Desarrolladores</li>
					</ul>
					<ul  className="condiciones">
						<li>T??rminos</li>
						<li>Privacidad</li>
						<li>Politica y seguridad</li>
						<li>C??mo funciona YouTube</li>
						<li>Probar funciones nuevas</li>
					</ul>
					<h4>
						Fines Educativos 2022
					</h4>
				</div>		
			</div>
		</div>
	)
}