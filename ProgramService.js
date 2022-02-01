const { fetchService } = require('./FetchService')
const { statisticService } = require('./StatisticService')

class ProgramService {
    async main(startDate, endDate) {
        try {
            const statistics = await fetchService.fetchByUrl(
                'https://bitbucket.org/!api/2.0/snippets/tawkto/aA8zqE/4f62624a75da6d1b8dd7f70e53af8d36a1603910/files/webstats.json'
            )    

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