import "./BioHome.scss"
import BioCard from "../BioCard/BioCard"
import { getData } from "../../services/api"
import { useEffect, useState } from "react"

const BioHome = () => {

	const [bioList, setBioList] = useState([])
	const [bioToPreview, setBioTopreview] = useState([])

	useEffect(() => {
		getData("/biography/setup-bio.json").then(data => {
			setBioList(Object.entries(data))
			setBioTopreview(Object.entries(data).slice(0, 5))
		})
	}, [])

	const showMore = () => {
		setBioTopreview(bioList)
	}

	return (
		<section className="bio-home" id="bio">
			<div className="container">
				<h2>My biography</h2>
				<div className="bio-home__wrapper">
					{
						bioToPreview ? bioToPreview.map(([key, data]) => <BioCard key={key + "-bio"} bio={data} pathLang={key} path={"biography"} />) : "<h2>Loading...</h2>"
					}
				</div>
				{
					bioToPreview.length < 6 && <p className="show-more" onClick={showMore}>Biography in other languages (20 languages)</p>
				}
			</div>
		</section>
	)
}

export default BioHome