import "./book.scss"

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const Book = ({ books }) => {
	const { bookId } = useParams();

	const [currBook, setCurrBook] = useState(null)

	useEffect(() => {
		setCurrBook(books.find(el => el.id == bookId))
	}, [books])

	return (
		<section className="book">
			<div className="container">
				<h2></h2>
				<div className="row">
					{currBook && <>
						<img src={currBook.img} alt="" />
						<div className="book__info">
							<h3>{currBook.title}</h3>
							<p>{currBook.descr}</p>
							<a target="blank" href={currBook.link} className="link btn">Читати</a>
						</div>
					</>}
				</div>
			</div>
		</section>
	)
}

export default Book