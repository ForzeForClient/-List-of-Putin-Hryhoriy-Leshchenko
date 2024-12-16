import "./download-books.scss"

const DownloadBooks = ({ books }) => {
	return (
		<div className="additional__loader additional__part">
			<h2 className="additional__part-title">Завантажити книжки</h2>
			<div className="additional__part-content">
				<ul>
					{books.length > 0 && books.map((el) => <li key={el.id}><a href={el.link} target="blank" className="link">{el.title}</a></li>)}
				</ul>
			</div>
		</div>
	)
}

export default DownloadBooks