import "./blog.scss"

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const Blog = ({ blog }) => {
	const { blogId } = useParams();

	const [currBlog, setCurrBlog] = useState(null)

	useEffect(() => {
		setCurrBlog(blog.find(el => el.id == blogId))
	}, [blog])

	return (
		<section className="blog">
			<div className="container">
				<img src={currBlog && currBlog.img} alt="" />
				<h2>{currBlog && currBlog.title}</h2>
				<p>{currBlog && currBlog.text}</p>
			</div>
		</section >
	)
}

export default Blog