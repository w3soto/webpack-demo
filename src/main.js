
import "./main.scss";

import img from "./assets/igracek.jpg";


const title = "Hello World";

const someObj = {
    "h": "Hello"
};

const someSpreadObj = {
    ...someObj
};

console.log(title);

document.querySelector("h1").innerText = title;


document.querySelector("#dynamicImg").src = img;
