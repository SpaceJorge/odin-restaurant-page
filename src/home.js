/*example code
export default function printMe() {
    console.log('I get called from print.js!');
}
*/
function addHome(){
      
    
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    document.body.appendChild(content);

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
                hThree.textContent = "Auteür Cuisine";
                title.appendChild(hThree);
            
            const btns = document.createElement("div");
            btns.classList.add("btns");
            home.appendChild(btns);

                const reservations = document.createElement("button");
                reservations.textContent = "Reservations";
                reservations.classList.add("reservations");
                btns.appendChild(reservations);

                const menu = document.createElement("button");
                menu.textContent = "Menu";
                menu.classList.add("menu");
                btns.appendChild(menu);

                const experience = document.createElement("button");
                experience.textContent = "Experience";
                experience.classList.add("experience");
                btns.appendChild(experience);
    return content
};

export default addHome();

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
            <div class="btns">
                <button id="reservations">Reservations</button>
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
