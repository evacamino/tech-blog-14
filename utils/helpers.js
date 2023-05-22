const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = [
 'January',
 'Feburuary',
 'March',
 'April',
 'May',
 'June',
 'July',
 'August',
 'September',
 'October',
 'November',
 'December',
];

module.exports = {
 format_date: (date) =>
  `${weekday[date.getDay()]}, 
  ${month[date.getMonth()]} ,
  ${date.getDate()} `,
};

