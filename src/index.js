//lodash loading (necesary)
import _ from "lodash";
//css loading
import './style.css';
//image loading
//import Icon from './icon.png';
import bgHome from './images/bg-home.jpg';
import logo from "./images/logo.jpg"
//module loading
//import printMe from './print.js';
import addHome from "./home.js";

/*
function component() {
    const element = document.createElement('div');
 
    element.classList.add('hello');
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}
 
document.body.appendChild(component());
*/
console.log("The Maestruli sends his regards.")

//addHome
document.body.appendChild(addHome);