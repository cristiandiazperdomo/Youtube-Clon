import React, {
	 useRef,
	 useState
} from 'react';
import { Categorie } from '../Categorie/Categorie';
import { ImCircleLeft, ImCircleRight } from "react-icons/im";
import './Categories.css';

export const Categories = () => {
	const [ showScroll, setShowScroll ] = useState(0);
	const categories = useRef(null);

	const scrollLeft = () => {
		categories.current.scrollLeft -= 220;
		setShowScroll(categories.current.scrollLeft)
	}
	const scrollRight = () => {
		categories.current.scrollLeft += 220;
		setShowScroll(categories.current.scrollLeft)
		console.log(showScroll)
	}
	return (
		<div className="scroll">
			<i onClick={scrollLeft} className="scrollLeft">
				{showScroll > 0 && <ImCircleLeft />}
			</i>
			<div className="Categories-container" ref={categories}>
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