import Header from "../Header/Header";
import Home from "../Home/Home";
import Letters from "../Letters/Letters";
import Letter from "../Letter/Letter";
import Blogs from "../Blogs/Blogs";
import Blog from "../Blog/Blog";
import Book from "../Book/Book";
import Contacts from "../Contacts/Contacts";
import AdditionalBlock from "../AdditionalBlock/AdditionalBlock";
import Footer from "../Footer/Footer";
import BioPage from "../BioPage/BioPage";
import Anotation from "../Anotation/Anotation";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import { getInfo } from "../../services/api"

const App = () => {
	const [books, setBooks] = useState([])
	const [blog, setBlog] = useState([])
	const [message, setMessage] = useState([])

	useEffect(() => {
		setBooks(getInfo("books"))
		setBlog(getInfo("blog"))
		setMessage(getInfo("message"))
	}, [])

	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home books={books} />} />
					<Route path="/book/:bookId" element={<Book books={books} />} />
					<Route path="/letters" element={<Letters message={message} />} />
					<Route path="/letters/:letterId" element={<Letter message={message} />} />
					<Route path="/blogs" element={<Blogs blog={blog} />} />
					<Route path="/blogs/:blogId" element={<Blog blog={blog} />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/biography/:lang" element={<BioPage />} />
					<Route path="/anotation" element={<Anotation />} />
				</Routes>
				<AdditionalBlock info={{ blog, books }} />
			</main>
			<Footer />
		</>
	);
}

export default App;
