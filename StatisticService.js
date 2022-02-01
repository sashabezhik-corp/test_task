const { dateService } = require('./DateService')

class StatisticService {
    processStatistics(statistics, startDate, endDate) {

        return statistics.reduce((acc, siteInfo) => {
            const { websiteId, date, chats, missedChats } = siteInfo

            const websiteIdExists = acc.find(el => el.websiteId === websiteId)
    
            if (!websiteIdExists) {
                acc.push({ 
                    websiteId, 
                    chats: 0,
                    missedChats: 0
                })
            }

            if (startDate && endDate) {
                const isDateInRange = dateService.isDateInRange(new Date(date), { startDate, endDate })
                if (!isDateInRange) return acc
            }

            const website = acc.find(el => el.websiteId === websiteId)

            website.chats += chats
            website.missedChats += missedChats 

            return acc
        }, [])

    }
}

module.exports = {
    statisticService: new StatisticService()
}