//lodash loading (necesary)
import _ from "lodash";
//css loading
import './style.css';
//image loading
//import Icon from './icon.png';
import bgHome from './images/bg-home.jpg';
import logo from "./images/logo.jpg";
//module loading
//import printMe from './print.js';
import addHome from "./home";
import addFood from "./food";
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
console.log("The Maestruli sends his regards.");
function wipeSelectedTab(){
    const selected = document.getElementById("selected");
    while (selected.firstChild) {
        selected.removeChild(selected.firstChild);
    }
    
}


//Module Slides
const content = document.createElement("div");
content.setAttribute("id", "content");
document.body.appendChild(content);

const tabs = document.createElement("div");
tabs.classList.add("header");
content.appendChild(tabs);

    const home = document.createElement("button");
    home.textContent = "Home";
    home.classList.add("tab");
    home.addEventListener("click", ()=>{
        if (tab != "home"){
            wipeSelectedTab();
            tab = "home";
            addHome();
        }
    });
    tabs.appendChild(home);

    const dance = document.createElement("button");
    dance.textContent = "Dance & Bop";
    dance.classList.add("tab");
    dance.addEventListener("click", ()=>{
        if (tab != "dance"){
            wipeSelectedTab();
            tab = "dance";
            addDance();
        }
    });
    tabs.appendChild(dance);

    const food = document.createElement("button");
    food.textContent = "Cuisine";
    food.classList.add("tab");
    food.addEventListener("click", ()=>{
        if (tab != "food"){
            wipeSelectedTab();
            tab = "food";
            addFood();
        }
    });
    tabs.appendChild(food);

const selectedTab = document.createElement("div");
selectedTab.setAttribute("id", "selected");
content.appendChild(selectedTab);

//Initialization
let tab = "home";
addHome();