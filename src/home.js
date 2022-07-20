import addPopupReservation from "./popup";

const addHome = () =>{      
    
    const content = document.getElementById("selected");

        const home = document.createElement("div");
        home.classList.add("home");
        content.appendChild(home);

            const title = document.createElement("div");
            title.classList.add("title");
            home.appendChild(title);
            
                const hOne = document.createElement("h1");
                hOne.textContent = "Le Bom Borombom";
                title.appendChild(hOne);

                const hThree = document.createElement("h3");
                hThree.textContent = "Beats and Dishes";
                title.appendChild(hThree);
            
            const info = document.createElement("div");
            info.classList.add("info");
            home.appendChild(info);

                const pOne = document.createElement("p");
                pOne.textContent = "Open 24hs since 1968.";
                info.appendChild(pOne);

                const pTwo = document.createElement("p");
                pTwo.textContent = "58 Street, Manhattan, USA";
                info.appendChild(pTwo);

                const copyOne = document.createElement("button");
                copyOne.textContent = "Get Dinner Reservations";
                copyOne.classList.add("copy");
                copyOne.addEventListener("click", ()=>{
                    addPopupReservation();
                });
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

export default addHome;

/*
Design Reminder
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Page</title>
    <!-- <link rel="stylesheet" href="../src/style.css"> -->
    <script src="./print.bundle.js"></script>
</head>
<body>
    <div id="content">
        <div class="home">
            <div class="title">
                <h1>Le Bom Borombom</h1>
                <h3>Auteür Cuisine</h3>
            </div>
            <div class="info">
                <button id="copy">copy</button>
                <button id="menu">Menu</button>
                <button id="experience">Experience</button>
            </div>
        </div>

    </div>
    <!-- <script src="./main.js"></script> -->
    <script src="./index.bundle.js"></script>
</body>
</html>
*/
