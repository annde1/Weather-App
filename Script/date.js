let now;

const addZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
};
const displayTime = () => {
  now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const clock = document.getElementById("time");
  clock.innerHTML = `${hour} : ${addZero(minutes)}`;
};

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
  console.log(obj);
  return obj;
};

const updateDate = (obj) => {
  const dateElement = document.querySelector("#date");
  const day = document.querySelector("#day-of-weak");
  console.log(day);
  dateElement.innerHTML = `${obj.dayName}, ${obj.dayOfMonth} ${obj.monthName}`;
  day.innerHTML = obj.dayName;
};
getDate();
export { displayTime };
export { getDate };
export { updateDate };
