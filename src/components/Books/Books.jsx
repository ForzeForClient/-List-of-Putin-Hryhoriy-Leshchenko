import "./books.scss"

import { Link } from "react-router-dom"

const Books = ({ books }) => {
	return (
		<section className="books">
			<div className="container">
				<h2>Мої книги</h2>
				<div className="row">
					{books.length > 0 && books.map(book => {
						return (
							<div className="books__item" key={book.id}>
								<img src={book.img} alt={book.title} />
								<h3>{book.title}</h3>
								<Link to={`/book/${book.id}`} className="link btn">Читати</Link>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)

}

export default Books