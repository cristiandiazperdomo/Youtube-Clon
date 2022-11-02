import { React } from 'react';
import { Card } from '../Card/Card';

import './Video.css';

export const Video = () => {

	//const navigationContainer = useRef(null);

	/*const videoContainerSize = () => {
		console.log(navigationContainer.current.style.marginLeft)
		if (navigationContainer.current.style.marginLeft == "76px") {
			return navigationContainer.current.style.marginLeft = "240px";
		}
		console.log(navigationContainer.current.style.marginLeft)
		return navigationContainer.current.style.marginLeft = "76px";
	}*/

	return (
		<div className="Video-container">
			<div className="button-expand">
			</div>
				<div className="Videos">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
		</div>
	)
}