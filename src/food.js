import imgRes from './images/bg-reservations.jpg';
import imgCake from './images/cake.jpg';
import imgBeef from './images/beef.jpg';
import imgChicken from './images/chicken.jpg';
import imgAvocado from './images/avocado.jpg';
import addPopupReservation from "./popup";

let myMenu = [
    {
        name:"Chet's Baked Cake",
        description:"I've never been in love (with cake) before, now all at once it's you, it's you forever more.",
        img:imgCake,
    },
    {
        name:"Cowboy Bebop Beef Pork",
        description:"One, two, three, let's jam! Or eat, i don't care.",
        img:imgBeef,
    },
    {
        name:"Avocado Madness",
        description:"Just one huge unpeeled avocado. Trendy!",
        img:imgAvocado,
    },
    {
        name:"Chicken Corea",
        description:"Groovy and tasty in a way we thought impossible before. Also, kokoroko!",
        img:imgChicken,
    },
];


const addFood = () =>{      
    
    const content = document.getElementById("selected");

        const food = document.createElement("div");
        food.classList.add("food");
        content.appendChild(food);

            const reservations = document.createElement("div");
            reservations.classList.add("reservations");
            food.appendChild(reservations);
            
            /*
                const imgContainer = document.createElement("span");
                imgContainer.classList.add("img-cont");
                reservations.appendChild(imgContainer);

                    const myResImg = new Image();
                    myResImg.src = imgRes;
                    myResImg.alt =`Reservations Image`;
                    myResImg.height= "100";
                    imgContainer.appendChild(myResImg);*/
                    /*
                    const img = document.createElement("img");
                    img.src = "images/bg-reservations.jpg";
                    img.alt =`Reservations Image`;
                    img.height= "20vh";
                    imgContainer.appendChild(img);
                    */
                const wordsContainer = document.createElement("div");
                wordsContainer.classList.add("words");
                reservations.appendChild(wordsContainer);

                    const res = document.createElement("h3");
                    res.textContent = "Get your dinner reservations";
                    wordsContainer.appendChild(res);

                    const getRes = document.createElement("button");
                    getRes.classList.add("title");
                    getRes.textContent = "Here";
                    getRes.addEventListener("click", ()=>{
                        addPopupReservation();
                    });
                    wordsContainer.appendChild(getRes);
            
            const menu = document.createElement("div");
            menu.classList.add("menu");
            food.appendChild(menu);
            
                const card = document.createElement("div");
                card.classList.add('card');
                menu.appendChild(card);

                const menuTitle = document.createElement("p");
                menuTitle.classList.add("menu-title");
                menuTitle.textContent = "The Chef's Specials";
                card.appendChild(menuTitle);

            myMenu.forEach(dish => {

                const card = document.createElement("div");
                card.classList.add('card');
                menu.appendChild(card);
                
                    const imgContainer = document.createElement("span");
                    imgContainer.classList.add("img-cont");
                    card.appendChild(imgContainer);
                        
                        const img = new Image();
                        
                        
                        //const img = document.createElement("img");
                        img.src = dish.img;
                        img.alt =`${dish.name} Image`;
                        img.height= "100" ;
                        imgContainer.appendChild(img);
            
                    const wordsContainer = document.createElement("div");
                    wordsContainer.classList.add("words");
                    card.appendChild(wordsContainer);
            
                        const name = document.createElement("p");
                        name.classList.add("name");
                        name.textContent = dish.name;
                        wordsContainer.appendChild(name);
                
                        const desc = document.createElement("p");
                        desc.classList.add("description");
                        desc.textContent = dish.description;
                        wordsContainer.appendChild(desc);       
            });  
    
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
