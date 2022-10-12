import React from 'react';
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

export const Navigation = () => {
	return (
		<div className="Navigation-container">
			<div className="Navigation-options">
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
							Ver más tarde
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
							Mostrar más
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
							Mostrar 199 más
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
				<h3>MÁS DE YOUTUBE</h3>
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
							Configuración
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
					<li>Información</li>
					<li>Prensa</li>
					<li>Derechos de autor</li>
					<li>Contactar Creadores</li>
					<li>Publicidad</li>
					<li>Desarrolladores</li>
				</ul>
				<ul  className="condiciones">
					<li>Términos</li>
					<li>Privacidad</li>
					<li>Politica y seguridad</li>
					<li>Cómo funciona YouTube</li>
					<li>Probar funciones nuevas</li>
				</ul>
				<h4>
					Fines Educativos 2022
				</h4>
			</div>		
		</div>
	)
}