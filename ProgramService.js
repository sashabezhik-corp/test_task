const { fetchService } = require('./FetchService')
const { statisticService } = require('./StatisticService')

class ProgramService {
    async main(url, startDate, endDate) {
        try {
            const statistics = await fetchService.fetchByUrl(url)    

            const result = statisticService.processStatistics(statistics, startDate, endDate)
            console.log(result)
        } catch (err) {
            console.log(err.message)
        }
    }
}

module.exports = {
    programService: new ProgramService()
}