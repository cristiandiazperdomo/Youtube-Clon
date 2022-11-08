import React from 'react';
import { Categorie } from '../Categorie/Categorie';
import { ImCircleLeft, ImCircleRight } from "react-icons/im";
import './Categories.css';

export const Categories = () => {

	const scrollLeft = () => {
		const categories = document.querySelector(".Categories-container");
		categories.scrollLeft -= 220;
	}
	const scrollRight = () => {
		const categories = document.querySelector(".Categories-container");
		categories.scrollLeft += 220;
	}

	return (
		<div className="scroll">
			<i onClick={scrollLeft}>
				<ImCircleLeft />
			</i>
			<div className="Categories-container">
				<Categorie categorie="Todo" />
				<Categorie categorie="Mixes" />
				<Categorie categorie="Música" />
				<Categorie categorie="Podcast" />
				<Categorie categorie="Videojuegos" />
				<Categorie categorie="The Weeknd" />
				<Categorie categorie="En directo" />
				<Categorie categorie="Personajes" />
				<Categorie categorie="Álbumes" />
				<Categorie categorie="R&B" />
				<Categorie categorie="Bossa Nova" />
				<Categorie categorie="Música" />
				<Categorie categorie="Podcast" />
				<Categorie categorie="Videojuegos" />
				<Categorie categorie="En directo" />
				<Categorie categorie="Personajes" />
				<Categorie categorie="Álbumes" />
				<Categorie categorie="R&B" />
				<Categorie categorie="Bossa Nova" />
				<Categorie categorie="Mixes" />
				<Categorie categorie="Música" />
				<Categorie categorie="Podcast" />
				<Categorie categorie="Videojuegos" />
				<Categorie categorie="The Weeknd" />
			</div>
			<i onClick={scrollRight}>
				<ImCircleRight />
			</i>	
		</div>
	)
}