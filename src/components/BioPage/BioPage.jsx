import "./BioPage.scss"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getData, getHtml } from "../../services/api"

const BioPage = () => {
	const [bio, setBio] = useState(null)
	const { lang } = useParams()

	useEffect(() => {
		getData("/biography/setup-bio.json").then(data => {
			getHtml(data[lang].path).then(html => {
				setBio(html)
			})
		})
	}, [])

	return (
		<main>
			{
				bio ?
					<section className="bio">
						<div className="container">
							<div className="bio__wrapper" dangerouslySetInnerHTML={{ __html: bio }} />
						</div>
					</section> : <div>Loading...</div>
			}
		</main>
	)
}

export default BioPage