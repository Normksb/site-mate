// window.dateFns = require('date-fns')
const datefns = date-fns()
// import startOfWeek from 'date-fns/startOfWeek';
// import endOfWeek from 'date-fns/endOfWeek';

const date = new Date();
const dateDisplay = [date.getDay(), date.getMonth(), date.getFullYear()];
function getDay() {
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const displayDay = weekday[date.getDay()]
    console.log(displayDay)
}
getDay()

const start = startOfWeek(date, {weekStartsOn: 1});
const end = endOfWeek(date, {weekStartsOn: 1});
console.log(start, end)