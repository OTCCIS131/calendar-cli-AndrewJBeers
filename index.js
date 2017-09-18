const Moment = require('moment')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(Moment)
const chalk = require('chalk')
const _ = require('lodash')

let now = moment()
console.log(now.year())
let year = now.range('year')
let month = now.range('months')
for(const month of year.by('months'))
    {
        console.log(_.pad(month.format('MMMM'), 25, '-'))
        console.log('S   M   T   W   TH  F   S   ')
        
        let days = Array.from(month.range('month').by('days'))
        startOfMonth = days[0].format('e')
        let paddedDays = _.map(days, day => 
            {
            let date = day.date()
            if (day.month()== 8 && day.date() == 10){
                date = chalk.red(date)
            }
            if (day.month() == 9 && day.date() == 12){
                date = chalk.blue(date)
            }
            return _.padEnd(date, 2, ' ')
        })
        for ( i = startOfMonth; i > 0; i-- ){
            paddedDays.unshift("  ")
        }
        paddedDays = _.chunk(paddedDays, 7)
        for (i = 0; i<paddedDays.length; i ++){
            console.log(paddedDays[i].join('  '))
        }
        console.log('\n')
    }