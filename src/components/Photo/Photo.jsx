import "./photo.scss"
import { photoDvir } from "../../services/image"

const Photo = () => {

	return (
		<section className="photo">
			<div className="container">
				<img src={photoDvir} alt="Фото письменника" />
			</div>
		</section>
	)
}

export default Photo