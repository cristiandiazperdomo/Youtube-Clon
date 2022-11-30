import React from 'react';
import {
		 MdOutlineSubscriptions,
		 MdOutlineVideoLibrary
		} from "react-icons/md";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import './CellMenu.css';

export const CellMenu = () => {
	return (
		<div className="CellMenu-container">
			<div className="CellMenu-container-items items">
				<ul>
					<li className="CellMenu-li">
						<i>
							<GiHouse/>
						</i>
						Inicio
					</li>
					<li className="CellMenu-li">
						<i>
							<FaRegCaretSquareRight/>
						</i>
						Shorts
					</li>
					<li className="CellMenu-li">
						<i>
							<MdOutlineSubscriptions/>
						</i>
						Suscripciones
					</li>
					<li className="CellMenu-li">
						<i>
							<MdOutlineVideoLibrary/>
						</i>
						Biblioteca
					</li>
				</ul>
			</div>
		</div>
	)
}