import "./MessageHome.scss"
import { getData } from "../../services/api"
import { useEffect, useState } from "react"
import BioCard from "../BioCard/BioCard"

const MessageHome = () => {
	const [msgList, setMsgList] = useState([])
	const [msgToPreview, setMsgToPreview] = useState([])

	useEffect(() => {
		getData("/messages/setup-messages.json").then(data => {
			setMsgList(Object.entries(data))
			setMsgToPreview(Object.entries(data).slice(0, 5))
		})
	}, [])

	const showMore = () => {
		setMsgToPreview(msgList)
	}

	return (
		<section className="msg-home" id="letters">
			<div className="container">
				<h2> How the idea for the book "Putin's List" was born:</h2>
				<p className="subtitle">
					KYIV CITY AUTHORITIES! <br />
					DO NOT TAKE AWAY HOUSING FROM UKRAINIAN REFUGEES!<br />
					DO NOT COPY RUSSIAN OFFICIALS!
				</p>
				<h2>Як народився задум книги «Список Путіна»:</h2>
				<p className="subtitle">
					КИЇВСЬКІ ЧИНОВНИКИ! ПРОШУ, НЕ КОПІЮЙТЕ РАШИСТІВ! <br />
					КОЛИ НЕ ТЕРПИТЬСЯ ВОЮВАТИ, ВОЮЙТЕ з ОКУПАНТАМИ, а НЕ З УКРАЇНСЬКИМИ БІЖЕНЦЯМИ та ПЕНСІОНЕРАМИ – БЕЗЗУБИМ ДІДОМ і БАБУСЕЮ-ІНВАЛІДОМ з ЦІПКОМ!
				</p>
				<div className="msg-home__wrapper">
					{
						msgToPreview ? msgToPreview.map(([key, data]) => <BioCard key={key + "-bio"} bio={data} pathLang={key} path={"message"} />) : "<h2>Loading...</h2>"
					}
				</div>
				{
					msgToPreview.length < 6 && <p className="show-more" onClick={showMore}>Letters in other languages (20 languages)</p>
				}
			</div>
		</section>
	)
}


export default MessageHome

