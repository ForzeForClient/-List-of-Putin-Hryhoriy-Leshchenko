import "./MessagePage.scss"
import { useParams } from "react-router-dom"
import { getData } from "../../services/api"
import { useState } from "react"
import { useEffect } from "react"

const MessagePage = () => {
	const [letter, setLetter] = useState("")
	const { part, lang } = useParams()

	useEffect(() => {
		getData(`/messages/${part}.json`).then(data => {
			setLetter(data[lang])
		})
	}, [])


	return (
		<main>
			<section className="letter-page">
				<div className="container">
					{
						letter &&
						<div className="letter-page__wrapper">
							<img src={letter.image} alt="image" />
							<h2>{letter.title}</h2>
							{
								letter.subTitle &&
								<p className="subtitle" dangerouslySetInnerHTML={{ __html: letter.subTitle }} />
							}
							<p dangerouslySetInnerHTML={{ __html: letter.text }} />
						</div>
					}
				</div>
			</section>
		</main>
	)
}

export default MessagePage