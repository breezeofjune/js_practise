// Write your code here.
const week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wenzday',
  'Thursday',
  'Friday',
  'Saturday'
]
let d = new Date()
let hour = d.toLocaleString('en-US', { hour: 'numeric', hour12: true })
let minute = d.getMinutes()
let second = d.getSeconds()
console.log(week[d.getDay()])
console.log(`${hour}:${minute}:${second}`)
