import { logo } from "../../services/image";
import "./header.scss"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [active, setActive] = useState(false)

	useEffect(() => {
		if (active) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}
	}, [active])

	return (
		<header>
			<div className="container">
				<div className="row">
					<div className="logo">

						<span className="lower-ukr"></span>

						<Link className="link" onClick={() => setActive(false)} to="/">
							Hryhoriy Leshchenko <br />
							<span>
								writer
							</span>
						</Link>
					</div>
					<nav className={`row ${active && "active"}`}>
						<Link className="link" onClick={() => setActive(false)} to="/">MAIN</Link>
						<Link className="link" onClick={() => setActive(false)} to="/#bio">MY BIOGRAPHY</Link>
						<Link className="link" onClick={() => setActive(false)} to="/#letters">MY LETTERS</Link>
						<Link className="link" onClick={() => setActive(false)} to="/books">BOOKS «PUTIN'S LIST»</Link>
						<Link className="link" onClick={() => setActive(false)} to="/contacts">CONTACTS</Link>
					</nav>
					<div onClick={() => setActive(prev => !prev)} className={`burger row ${active && "active"}`}>
						<figure></figure>
						<figure></figure>
						<figure></figure>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

