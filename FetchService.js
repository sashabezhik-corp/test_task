const axios = require('axios')

class FetchService {
    async fetchByUrl(url) {
        try {
            const { data } = await axios.get(url)

            return data
        } catch (err) {
            throw new Error(`Error fetching url: ${url}`)
        }
    }
}

module.exports = {
    fetchService: new FetchService()
}