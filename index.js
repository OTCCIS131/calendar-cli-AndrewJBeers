const Moment = require('moment')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(Moment)
const chalk = require('chalk')
const _ = require('lodash')

// let year = moment().range('year');


//let now = moment()
// let month = now.range('month')

// _.forEach(Array.from(year.by('months')), month => {
//     console.log(_.pad(month.format('MMM'), 26, " "))
//     console.log('S   M   T   W   TH  F   S   ')

//     let monthRange = month.range('month')
//     let firstDay = monthRange.start.day()
//     console.log(firstDay)

// })



let now = moment()
console.log(now.year())
let year = now.range('year')
for(const month of year.by('months'))
    {
        console.log(_.pad(month.format('MMMM'), 25, '-'))
         console.log('S   M   T   W   TH  F   S   ')
 
    let days = Array.from(month.range('month').by('days'))
    
    let paddedDays = _.map(days, day => {
        let date = day.date()
        if (day.month()== 9 && day.date() == 10){
            date = chalk.red(date)
        }
        return _.padEnd(date, 2, ' ')
    })
    console.log(paddedDays)
    
    //     console.log(days)
    // _.chain(days)
        
    //     .map(day => {
    //         console.log('here')
    //         console.log(day)
    //     })
    }



