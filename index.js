const Moment = require('moment')
const MomentRange = require('moment-range')
const moment = MomentRange.extendMoment(Moment)
const chalk = require('chalk')
const _ = require('lodash')

let year = moment().range('year');


//let now = moment()
//let month = now.range('month')

_.forEach(Array.from(year.by('months')), month => {
    console.log(_.pad(month.format('MMM'), 26, " "))
    console.log('S   M   T   W   TH  F   S   ')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day()
    console.log(firstDay)

})








