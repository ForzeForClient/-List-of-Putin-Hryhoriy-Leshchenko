import "./contacts.scss"
import { mapImg } from "../../services/image"

const Contacts = () => {

	return (
		<section className="contacts">
			<div className="container">
				<div className="row">
					<div className="contacts__descr">
						<h2>Контакти</h2>
						<p>Адреса:</p>
						<a target="blank" href="https://www.google.com/maps/place/%D0%92%D0%BE%D0%B7%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D1%83%D0%B7%D0%B2%D1%96%D0%B7,+20,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4584125,30.506549,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce68118e8971:0xfc1ebf028503786!8m2!3d50.4584125!4d30.506549!16s%2Fg%2F11c21ndsp2?entry=ttu" className="link">Вознесенський узвіз, 20, кв.1, м.Київ, 04053</a>
						<p>Телефон:</p>
						<a href="tel:+380960445751" className="link">+38 096 044 57 51 (телефонувати через Viber, бо можу знаходитись за кордоном)</a>
						<p>E-mail:</p>
						<a href="mailto:grygoriyle@gmail.com" className="link">grygoriyle@gmail.com</a>
						<a href="mailto:leshchenkogrygorii@gmail.com" className="link">leshchenkogrygorii@gmail.com</a>
					</div>
					<div className="contacts__map">
						<a target="blank" href="https://www.google.com/maps/place/%D0%92%D0%BE%D0%B7%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D1%83%D0%B7%D0%B2%D1%96%D0%B7,+20,+%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4584125,30.506549,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce68118e8971:0xfc1ebf028503786!8m2!3d50.4584125!4d30.506549!16s%2Fg%2F11c21ndsp2?entry=ttu"><img src={mapImg} alt="map" /></a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contacts