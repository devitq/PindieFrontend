export const isResponseOk = (response) => {
	console.log(response)
	return !(response instanceof Error)
}

export const getData = async (url) => {
	const response = await fetch(url)
	const data = await response.json()
	return data
}

export const normalizeDataObject = (obj) => {
	return {
		...obj,
		category: obj.categories,
		users: obj.users_permissions_users,
	}
}

export const normalizeData = (data) => {
	return data.map((item) => {
		return normalizeDataObject(item)
	})
}

export const getNormalizedGamesDataByCategory = async (url, category) => {
	const data = await getData(`${url}?categories.name=${category}`)
	return isResponseOk(data) ? normalizeData(data) : data
}

export const getNormalizedGameDataById = async (url, id) => {
	const data = await getData(`${url}/${id}`)
	return isResponseOk(data) ? normalizeDataObject(data) : data
}
