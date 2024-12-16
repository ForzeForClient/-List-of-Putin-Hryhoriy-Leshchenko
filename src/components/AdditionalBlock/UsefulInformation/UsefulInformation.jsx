import "./useful-information.scss"

import { Link } from "react-router-dom"

const UsefulInformation = ({ blog }) => {

	return (
		<div className="additional__inf additional__part">
			<h2 className="additional__part-title">Корисна інформація</h2>
			<div className="additional__part-content">
				<ul>
					{blog.length > 0 && blog.map((el) => <li key={el.id}><Link to={`/blogs/${el.id}`} className="link">{el.title}</Link></li>)}
					<li><Link to="/blogs" className="link">Блог</Link></li>
					<li><Link to="/contacts" className="link">Контакти</Link></li>
					<li><Link to="/letters" className="link">Мої листи</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default UsefulInformation