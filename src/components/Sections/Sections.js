import React, {
	 useRef,
	 useState
} from 'react';
import { Category } from '../Category/Category';
import { ImCircleLeft, ImCircleRight } from "react-icons/im";
import './Sections.css';

export const Sections = () => {
	const [ showScroll, setShowScroll ] = useState(0);
	const category = useRef(null);

	const scrollLeft = () => {
		category.current.scrollLeft -= 220;
		let scrollPosition = showScroll - 220;
		setShowScroll(scrollPosition)
	}
	const scrollRight = () => {
		category.current.scrollLeft += 220;
		let scrollPosition = showScroll + 220;
		setShowScroll(scrollPosition)
	}
	return (
		<div className="scroll">
			<i onClick={scrollLeft} className="scrollLeft">
				{showScroll > 0 && <ImCircleLeft />}
			</i>
			<div className="scroll-box"></div>
			<div className="Sections-container" ref={category}>
				<Category category="Todo" />
				<Category category="Mixes" />
				<Category category="Música" />
				<Category category="Podcast" />
				<Category category="Videojuegos" />
				<Category category="The Weeknd" />
				<Category category="En directo" />
				<Category category="Personajes" />
				<Category category="Álbumes" />
				<Category category="R&B" />
				<Category category="Bossa Nova" />
				<Category category="Música" />
				<Category category="Podcast" />
				<Category category="Videojuegos" />
				<Category category="En directo" />
				<Category category="Personajes" />
				<Category category="Álbumes" />
				<Category category="R&B" />
				<Category category="Bossa Nova" />
				<Category category="Mixes" />
				<Category category="Música" />
				<Category category="Podcast" />
				<Category category="Videojuegos" />
				<Category category="The Weeknd" />
			</div>
			<div className="scroll-box scroll-box-left"></div>
			<i onClick={scrollRight}>
				<ImCircleRight />
			</i>
		</div>
	)
}