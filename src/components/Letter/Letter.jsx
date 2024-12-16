import "./letter.scss"

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const Letter = ({ message }) => {
	const { letterId } = useParams();

	const [currLetter, setCurrLetter] = useState(null)

	useEffect(() => {
		setCurrLetter(message.find(el => el.id == letterId))
	}, [message])

	return (
		<section className="letter">
			<div className="container">
				<img src={currLetter && currLetter.img} alt="" />
				<h2>{currLetter && currLetter.title}</h2>
				{
					currLetter && currLetter.text && currLetter.text.length > 0 ? currLetter.text.map((el, index) => {
						let temp = ""
						console.log(el[0][0])
						for (let i = 0; i < el.length; i++) {
							if (el[i] === '\n') {
								temp += `<br/>`
							} else {
								temp += el[i]
							}
						}
						return (<p key={index} dangerouslySetInnerHTML={{ __html: temp }} />)
					}) : "Щось пішло не так, спробуйте пізніше!"
				}

			</div>
		</section >
	)
}

export default Letter