import React from 'react';
import './Categorie.css'

export const Categorie = ({ categorie }) => {
	return (
		<div className="Categorie-container">
			<p>{categorie}</p>
		</div>
	)
}