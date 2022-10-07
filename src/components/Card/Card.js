import React from 'react';
import { GetImageBank } from '../../callApi/getImageBank';
//console.log(asd)

export const Card = () => {
	const {callApi, asd} = GetImageBank();
	callApi()
	return (
		<div>
			<header>
				<img src="" alt="presentation" />
			</header>
			<footer>
				<div className="left-side">
					h
				</div>
				<div className="right-side">

				</div>
			</footer>
		</div>	
	)
}