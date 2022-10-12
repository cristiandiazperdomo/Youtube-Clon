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
		 MdOutlineVideogameAsset} from "react-icons/md";
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
				<ul>
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
						<i><AiOutlineLike/></i>
						<a href="#">
							Mostrar más
						</a>	
					</li>
				</ul>
				<h3>SUSCRIPCIONES</h3>
				<ul className="susciption-panel">
					<li>
						<img src={require('../../img/nasa.jpg')} alt="nasa" />						
						<a href="#">
							NASA
						</a>	
					</li>
					<li>
						<img src={require('../../img/platzi.jpg')} alt="platzi" />
						<a href="#">
							Platzi
						</a>	
					</li>
					<li>
						<img src={require('../../img/ysy.jpg')} alt="ysy" />
						<a href="#">
							YSY A
						</a>	
					</li>
					<li>
						<img src={require('../../img/the wild project.jpg')} alt="platzi" />
						<a href="#">
							The Wild Project
						</a>	
					</li>
					<li>
						<img src={require('../../img/jaime altozano.jpg')} alt="jaime altozano" />
						<a href="#">
							Jaime Altozano
						</a>	
					</li>
				</ul>
				<h3>EXPLORAR</h3>
				<ul className="explore-panel">
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
						<i><FaRegCaretSquareRight/></i>
						<a href="#">
							Deportes
						</a>	
					</li>
				</ul>
				<h3>MÁS DE YOUTUBE</h3>
				<ul className="susciption-panel">
					<li>
						<img src={require('../../img/nasa.jpg')} alt="nasa" />						
						<a href="#">
							NASA
						</a>	
					</li>
					<li>
						<img src={require('../../img/platzi.jpg')} alt="platzi" />
						<a href="#">
							Platzi
						</a>	
					</li>
					<li>
						<img src={require('../../img/ysy.jpg')} alt="ysy" />
						<a href="#">
							YSY A
						</a>	
					</li>
					<li>
						<img src={require('../../img/the wild project.jpg')} alt="platzi" />
						<a href="#">
							The Wild Project
						</a>	
					</li>
					<li>
						<img src={require('../../img/jaime altozano.jpg')} alt="jaime altozano" />
						<a href="#">
							Jaime Altozano
						</a>	
					</li>
				</ul>
				<ul className="susciption-panel">
					<li>
						<i><MdOutlineEmojiFlags/></i>
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
						<i><MdOutlineEmojiFlags/></i>
						<a href="#">
							Enviar sugerencia
						</a>	
					</li>
				</ul>
				<ul>
					<li>Información</li>
					<li>Prensa</li>
					<li>Derechos de autor</li>
					<li>Contactar Creadores</li>
					<li>Publicidad</li>
					<li>Desarrolladores</li>
				</ul>
				<ul>
					<li>Términos</li>
					<li>Privacidad</li>
					<li>Politica y seguridad</li>
					<li>Cómo funciona YouTube</li>
					<li>Probar funciones nuevas</li>
				</ul>
			</div>		
		</div>
	)
}