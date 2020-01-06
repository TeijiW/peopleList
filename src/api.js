import axios from "axios"

const url = "https://randomuser.me/api/?results=10&exc=login, id&noinfo"

function api() {
	const get = () => {
		return axios
			.get(url)
			.then(response => response.data.results)
			.catch(error => console.log(error))
	}
	return { get }
}

module.exports = api
