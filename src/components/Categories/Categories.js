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
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
				<Categorie categorie="Música" />
			</div>
			<i onClick={scrollRight}>
				<ImCircleRight />
			</i>	
		</div>
	)
}