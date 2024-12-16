import "./letters.scss"
import { Link } from "react-router-dom"

const Letters = ({ message }) => {

	return (
		<section className="letters">
			<div className="container">
				<h2>Мої листи</h2>
				<div className="row">
					{
						message.length > 0 ?
							message.map(el => {
								return (
									<div className="letters__item" key={el.id}>
										<img src={el.img} alt="image" />
										<h3>{el.title}</h3>
										<Link to={`/letters/${el.id}`} className="link btn">Читати</Link>
									</div>
								)
							}) : "Листів поки немає!"
					}
				</div>
			</div>
		</section >
	)
}

export default Letters