import "./hero.scss"
import { Link } from "react-router-dom"

const Hero = () => {

	return (
		<section className="hero">
			<div className="container">
				<div className="hero__wrapper row">
					<h1>Hryhoriy Leshchenko
					</h1>
					<span>Writer</span>
					<p>The book tells the story of Russian fascists - well-known figures in Russia's culture, media, education and church. The fascists support Putin, the theft of Crimea, and Russia's war against Ukraine. Fascist propagandists turn Russians into animals and drive them to war in Ukraine, where they commit war crimes.
						<br /> Famous fascists commit crimes and violate the rules of morality: they kill, drive to suicide, rape, molest minors, protect murderers and fraudsters, beat people, steal, forge documents, lie, cheat, abandon children...
						<br /> The author offers fascists to become human, but...
						<br /> The book is based on open sources on the Internet.</p>
					<Link className="link btn" to="/anotation">Read more</Link>
				</div>
			</div>
		</section >
	)
}

export default Hero