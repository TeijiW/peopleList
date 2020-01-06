import axios from "axios"

const url = "https://randomuser.me/api/?results=10&exc=login, id&noinfo"

function api() {
	const get = async () => {
		// return axios
		// 	.get(url)
		// 	.then(response => response.data.results)
		// 	.catch(error => console.log(error))
		try {
			const response = await axios.get(url)
			const { results } = response.data
			return results
		} catch (error) {
			return error
		}
	}
	return { get }
}

module.exports = api
