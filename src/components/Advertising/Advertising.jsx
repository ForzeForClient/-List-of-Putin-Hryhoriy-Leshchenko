import "./advertising.scss"
import { blogHomeImg } from "../../services/image"
import { Link } from "react-router-dom"

const Advertising = () => {

	return (
		<section className="advertising">
			<div className="container">
				<div className="row">
					<div className="advertising__part">
						<img src={blogHomeImg} alt="" />
					</div>

					<div className="advertising__part">
						<h2>Мій блог</h2>
						<p>Разом ми подолаємо корупцію та зробимо нашу країну кращою для прийдешніх поколінь.</p>
						<Link to="/blogs" className="link btn">Перейти на блог</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advertising