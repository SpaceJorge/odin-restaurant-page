/*example code
export default function printMe() {
    console.log('I get called from print.js!');
}
*/
const addFood = () =>{      
    
    const content = document.getElementById("selected");

        const food = document.createElement("div");
        food.classList.add("food");
        content.appendChild(food);

            const title = document.createElement("div");
            title.classList.add("title");
            food.appendChild(title);
            
                const hOne = document.createElement("h1");
                hOne.textContent = "Le Bom Borombom";
                title.appendChild(hOne);

                const hThree = document.createElement("h3");
                hThree.textContent = "Beats and Dishes";
                title.appendChild(hThree);
            
            const info = document.createElement("div");
            info.classList.add("info");
            food.appendChild(info);

                const pOne = document.createElement("p");
                pOne.textContent = "Open 24hs since 1968.";
                info.appendChild(pOne);

                const pTwo = document.createElement("p");
                pTwo.textContent = "58 Street, Manhattan, USA";
                info.appendChild(pTwo);

                const copyOne = document.createElement("button");
                copyOne.textContent = "Get Dinner Reservations";
                copyOne.classList.add("copy");
                info.appendChild(copyOne);

                const copyTwo = document.createElement("button");
                copyTwo.textContent = "Get Show Tickets";
                copyTwo.classList.add("copy");
                info.appendChild(copyTwo);

                const copyThree = document.createElement("button");
                copyThree.textContent = "Contact Us";
                copyThree.classList.add("copy");
                info.appendChild(copyThree);

    //return content
};

export default addFood;

/*
Design Reminder
<body>
    ...blabla
    <div id="selected">
        <div class="food">
            <div class="reservations">
                <div class="img-res"></div>
                <button>Reservations</button>
                //while ::hover to "Count Me In!"
            </div>
            <div class="menu">
                card format, take from library excercise structure!
            </div>
        </div>

    </div>

</body>
*/
