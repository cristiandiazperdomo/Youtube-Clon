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
					<div className="miniature-container">
						<img src={require("../../img/dall-e.png")} className="miniature" alt="presentation" />
					</div>
					<div className="duration">
						<div>
							<h3>10:50</h3>
						</div>
					</div>
				</header>
				<footer>
					<div className="card-left-side">
						<div>
							<div className="perfil-container">
								<img src={require('../../img/perfil.png')} className="perfil" alt="perfil" />
							</div>
						</div>
						<div className="card-video-info">
							<div>
								<h3 href="#">
									LAST WEEK
								</h3>
							</div>
							<div>
								<a href="#">Franco Escamilla</a>
								<a href="#">2707 visualizaciones<span className="scope"></span></a>
								<a href="#">hace 13 dias</a>
							</div>
						</div>
					</div>
					<div className="card-right-side">

					</div>
				</footer>
			</div>
		</div>	
	)
}