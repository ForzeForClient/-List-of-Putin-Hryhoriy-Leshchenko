import "./MessageHome.scss"
import { getData } from "../../services/api"
import { useEffect, useState } from "react"
import BioCard from "../BioCard/BioCard"

const MessageHome = ({ texts, part }) => {
	const [msgList, setMsgList] = useState([])
	const [msgToPreview, setMsgToPreview] = useState([])

	const { titleUa, titleEn, subTitleUa, subTitleEn } = texts

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
				<h2>{titleEn}</h2>
				<p className="subtitle" dangerouslySetInnerHTML={{ __html: subTitleEn }} />
				<h2>{titleUa}</h2>
				<p className="subtitle" dangerouslySetInnerHTML={{ __html: subTitleUa }} />
				<div className="msg-home__wrapper">
					{
						msgToPreview ? msgToPreview.map(([key, data]) => <BioCard key={key + "-bio"} bio={data} pathLang={key} path={"message/" + part} />) : "<h2>Loading...</h2>"
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

