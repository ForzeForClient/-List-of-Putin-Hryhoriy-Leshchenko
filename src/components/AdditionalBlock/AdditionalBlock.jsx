import "./additional-block.scss"

import UsefulInformation from "./UsefulInformation/UsefulInformation"
import DownloadBooks from "./DownloadBooks/DownloadBooks"
import MyBooks from "./MyBooks/MyBooks"

const AdditionalBlock = ({ info }) => {

	const { blog, books } = info

	return (
		<section className="additional">
			<div className="container">
				<div className="row">
					<UsefulInformation blog={blog} />
					<DownloadBooks books={books} />
					<MyBooks books={books} />
				</div>
			</div>
		</section>
	)
}

export default AdditionalBlock

