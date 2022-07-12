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
                hThree.textContent = "Dance, Rock & Cuisine";
                title.appendChild(hThree);
            
            const info = document.createElement("div");
            info.classList.add("info");
            home.appendChild(info);

                const copyOne = document.createElement("button");
                copyOne.textContent = "A place to bop.";
                copyOne.classList.add("copy");
                info.appendChild(copyOne);

                const copyTwo = document.createElement("button");
                copyTwo.textContent = "A place to dance.";
                copyTwo.classList.add("copy");
                info.appendChild(copyTwo);

                const copyThree = document.createElement("button");
                copyThree.textContent = "A place to eat.";
                copyThree.classList.add("copy");
                info.appendChild(copyThree);

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
