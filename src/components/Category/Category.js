import React from 'react';
import './Category.css';

export const Category = ({ category }) => {
	return (
		<div className="Category-container">
			<p>{category}</p>
		</div>
	)
}