export default function returnDayOfWeek(date) {
  let daysOfWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  let monthsOfYear = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec'
  ];

  let formattedDate = date + "T00:00:00";
  let day = new Date(formattedDate);
  return daysOfWeek[day.getDay()] + " " + monthsOfYear[day.getMonth()];

}
