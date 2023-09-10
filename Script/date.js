//Variable to store the current time
let now;

//Functions:

//Function addZero returns a string with an edded 0 to the begining of it if the number passed in the function call is < 10
const addZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};

//Function displayTime displays time immediately and rerenders the clock every second (set interval)
const displayTime = () => {
  now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const clock = document.getElementById("time");
  clock.innerHTML = `${hour} : ${addZero(minutes)}`;
};

//Function getDate returns and object with dayOfMonth, dayName and month name so the date will be displayed as text and not as number
const getDate = () => {
  let obj;
  now = new Date();
  const day = now.getDay();
  const month = now.getMonth();
  const dayOfMonth = now.getDate();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayName = dayNames[day];
  const monthName = monthNames[month];
  obj = {
    dayOfMonth,
    dayName,
    monthName,
  };
  return obj;
};

//Function renderDate updates the html of the date to current date. It takes an object with date information (returned from getDate function) as an argument.
const renderDate = (obj) => {
  const dateElement = document.querySelector("#date");
  const day = document.querySelector("#day-of-weak");
  dateElement.innerHTML = `${obj.dayName}, ${obj.dayOfMonth} ${obj.monthName}`;
  day.innerHTML = obj.dayName;
};

export { displayTime };
export { getDate };
export { renderDate };
