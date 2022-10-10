import React from 'react';
import './Card.css';
import { GetImageBank } from '../../callApi/getImageBank';

export const Card = () => {
	const {callApi, asd} = GetImageBank();
	callApi()
	return (
		<div className="card-container">
			<div className="card">
				<header>
					<img src={require("../../img/dall-e.png")} className="miniature" alt="presentation" />
				</header>
				<footer>
					<div className="card-left-side">
						<div>
							<a href="#">
								Cabaratendo en Uruguay
							</a>
						</div>
						<div className="perfil-container">
														
						</div>
						<div>
							<a href="#">Franco Escamilla</a>
							<a href="#">2707 visualizaciones .</a>
							<a href="#">hace 13 dias</a>
						</div>
					</div>
					<div className="card-right-side">

					</div>
				</footer>
			</div>
		</div>	
	)
}