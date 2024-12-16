import Hero from "../Hero/Hero";
import Books from "../Books/Books";
import Advertising from "../Advertising/Advertising";
import Photo from "../Photo/Photo";
import BioHome from "../BioHome/BioHome";
import HowWasBorn from "../HowWasBorn/HowWasBorn";
import MessageHome from "../MessageHome/MessageHome";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

const Home = ({ books }) => {

	const location = useLocation();

	useEffect(() => {
		const handleScrollToBio = () => {
			if (location.hash === '#bio') {
				const bioElement = document.getElementById('bio');
				if (bioElement) {
					bioElement.scrollIntoView({ behavior: 'smooth' });
				}
			}

			if (location.hash === '#letters') {
				const bioElement = document.getElementById('letters');
				if (bioElement) {
					bioElement.scrollIntoView({ behavior: 'smooth' });
				}
			}
		};

		handleScrollToBio();
	}, [location]);

	return (
		<>
			<Hero />
			{/* <Photo /> */}
			<BioHome />
			<MessageHome />
			<Books books={books} />
			<Advertising />
		</>
	)
}

export default Home