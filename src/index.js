import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import testImg from "./images/test.svg";

const getDate = () => {
  let uDate = document.getElementById("date-input").value.split("-");
  let newUDate = `${uDate[1]} ${uDate[2]} ${uDate[0]}`;
  let cd = new Date(newUDate);
  return cd.getDay();
};

const handleDate = (event) => {
  event.preventDefault();
  console.log(getDate());
};

document.querySelector("form").addEventListener("submit", handleDate);
const myIcon = new Image();
myIcon.src = testImg;

document.getElementById("test-img").appendChild(myIcon);
// document.getElementById("test-img").setAttribute("src", testImg);