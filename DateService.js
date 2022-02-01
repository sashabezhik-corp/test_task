class DateService {
    isDateInRange(date, { startDate, endDate }) {  
        return date >= startDate && date <= endDate
    }
}

module.exports = {
    dateService: new DateService()
}