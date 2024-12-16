import "./BioCard.scss"

import { Link } from "react-router-dom"

const BioCard = ({ bio, pathLang, path }) => {

	console.log(bio, pathLang)

	return (
		<div className="bio-card">
			<img src={bio.image} alt={bio.title} />
			<h3 dangerouslySetInnerHTML={{ __html: bio.title }} />
			<Link to={`/${path}/${pathLang}`} className="btn">{bio.btn}</Link>
		</div>
	)
}

export default BioCard