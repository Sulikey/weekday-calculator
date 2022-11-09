import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './js/date.js';
import sunday from "./images/sunday.png";
import monday from "./images/monday.jpeg";
import tuesday from "./images/tuesday.jpeg";
import wednesday from "./images/wednesday.png";
import thursday from "./images/thursday.jpeg";
import friday from "./images/friday.jpeg";
import saturday from "./images/saturday.png";

const dayImage = (day) => {
  switch (day) {
  case "sunday":
    return sunday;
  case "monday":
    return monday;
  case "tuesday":
    return tuesday;
  case "wednesday":
    return wednesday;
  case "thursday":
    return thursday;
  case "friday":
    return friday;
  case "saturday":
    return saturday;
  }
};

const getDate = () => {
  let uDate = document.getElementById("date-input").value.split("-");
  let newUDate = `${uDate[1]} ${uDate[2]} ${uDate[0]}`;
  let cd = new Date(newUDate);
  return cd.getName();
};

const handleDate = (event) => {
  event.preventDefault();
  document.getElementById("day-img").setAttribute("src", dayImage(getDate()));
  document.getElementById("day-img").classList.remove("invisible");
};

document.querySelector("form").addEventListener("submit", handleDate);
