import React from 'react';
import {
		 MdOutlineSubscriptions,
		 MdOutlineVideoLibrary
		} from "react-icons/md";
import { FaRegCaretSquareRight } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";

import './MiniNavigation.css';

export const MiniNavigation = () => {
	return (
		<div className="MiniNavigation-container">
			<div className="items">
				<ul>
					<li>
						<i>
							<GiHouse/>
						</i>
						Inicio
					</li>
					<li>
						<i>
							<FaRegCaretSquareRight/>
						</i>
						Shorts
					</li>
					<li>
						<i>
							<MdOutlineSubscriptions/>
						</i>
						Suscripciones
					</li>
					<li>
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