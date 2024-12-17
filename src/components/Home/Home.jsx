import Hero from "../Hero/Hero";
import Books from "../Books/Books";
import Advertising from "../Advertising/Advertising";
import Photo from "../Photo/Photo";
import BioHome from "../BioHome/BioHome";
import MessageHome from "../MessageHome/MessageHome";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

const Home = ({ books }) => {
	const location = useLocation();

	const firstLetter = {
		titleUa: "Як народився задум книги «Список Путіна»:",
		titleEn: "How the idea for the book «Putin's List» was born:",
		subTitleUa: "КИЇВСЬКІ ЧИНОВНИКИ! ПРОШУ, НЕ КОПІЮЙТЕ РАШИСТІВ! <br />КОЛИ НЕ ТЕРПИТЬСЯ ВОЮВАТИ, ВОЮЙТЕ з ОКУПАНТАМИ, а НЕ З УКРАЇНСЬКИМИ БІЖЕНЦЯМИ та ПЕНСІОНЕРАМИ – БЕЗЗУБИМ ДІДОМ і БАБУСЕЮ-ІНВАЛІДОМ з ЦІПКОМ!",
		subTitleEn: "KYIV CITY AUTHORITIES! <br />DO NOT TAKE AWAY HOUSING FROM UKRAINIAN REFUGEES!<br />DO NOT COPY RUSSIAN OFFICIALS!"
	}

	const secondLetter = {
		titleUa: "Влада Києва мстить автору за книги про корупцію:",
		titleEn: "Kyiv authorities take revenge on author for books about corruption:",
		subTitleUa: "ВЛАДА КИЄВА МСТИТЬ ПИСЬМЕННИКУ  ЗА КНИГИ ПРО КОРУПЦІЮ.<br/>ПОМСТА ЗАМАСКОВАНА ПІД ВИСЕЛЕННЯ АВТОРА З КВАРТИРИ",
		subTitleEn: "KYIV AUTHORITIES TAKE REVENGE ON A WRITER FOR HIS BOOKS ABOUT CORRUPTION.<br/>REVENGE DISGUISED AS EVICTION OF THE AUTHOR FROM HIS APARTMENT"
	}

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
			<MessageHome texts={firstLetter} part={1} />
			<MessageHome texts={secondLetter} part={2} />
			<Books books={books} />
			<Advertising />
		</>
	)
}

export default Home