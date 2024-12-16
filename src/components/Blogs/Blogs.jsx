import "./blogs.scss"
import { Link } from "react-router-dom"

const Blogs = ({ blog }) => {

	return (
		<section className="blogs">
			<div className="container">
				<h2>Мій блог</h2>
				<div className="row">
					{
						blog.length > 0 ? blog.map(el => {
							return (
								<div className="blogs__item row" key={el.id}>
									<img src={el.img} alt="" />
									<div className="blogs__item-info">
										<h3>{el.title}</h3>
										<p>{el.text.length > 400 ? el.text.substring(0, 400) + "..." : el.text}</p>
										<Link to={`/blogs/${el.id}`} className="link btn">Читати</Link>
									</div>
								</div>
							)
						}) : "Постів поки немає"
					}
				</div>
			</div>
		</section>
	)
}

export default Blogs