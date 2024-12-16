import info from "../data/info.json"

function getInfo(param) {
	switch (param) {
		case "books":
			return info.books
		case "message":
			return info.message
		case "blog":
			return info.blog
	}
}

async function getLetter(url) {
	try {
		let res = await fetch(url)
		let data = res.text()
		return data
	} catch (error) {
		return error
	}
}

async function getData(url) {
	try {
		let res = await fetch(url)
		let data = res.json()
		return data
	} catch (error) {
		return error
	}
}

async function getHtml(path) {
	const response = await fetch(path);
	if (!response.ok) {
		throw new Error("Failed to fetch HTML");
	}
	return await response.text();
};


export { getInfo, getLetter, getData, getHtml }