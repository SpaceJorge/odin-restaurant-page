import imgRes from './images/bg-reservations.jpg';
import imgCake from './images/cake.jpg';
import imgBeef from './images/beef.jpg';
import imgChicken from './images/chicken.jpg';
import imgAvocado from './images/avocado.jpg';

let myCards = [
    {
        name:"Jorgelina's Trombone Quartet",
        /*date:"Sunday's 8pm"*/
        description:"Crowd favourite latin-jazz space nonesense band will make you feel like flying, you don't wanna miss it!",
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


const addDance = () =>{      
    
    const content = document.getElementById("selected");

        const dance = document.createElement("div");
        dance.classList.add("dance");
        content.appendChild(dance);
            /*
            const reservations = document.createElement("div");
            reservations.classList.add("reservations");
            dance.appendChild(reservations);
            
            
                const imgContainer = document.createElement("span");
                imgContainer.classList.add("img-cont");
                reservations.appendChild(imgContainer);

                    const myResImg = new Image();
                    myResImg.src = imgRes;
                    myResImg.alt =`Reservations Image`;
                    myResImg.height= "100";
                    imgContainer.appendChild(myResImg);
                    
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
            */
            const eventContainer = document.createElement("div");
            eventContainer.classList.add("menu");
            dance.appendChild(eventContainer);
            
                const card = document.createElement("div");
                card.classList.add('card');
                eventContainer.appendChild(card);

                const eventTitle = document.createElement("p");
                eventTitle.classList.add("title");
                eventTitle.textContent = "This Season's Events";
                card.appendChild(eventTitle);

                myCards.forEach(dish => {

                const card = document.createElement("div");
                card.classList.add('card');
                eventContainer.appendChild(card);
                
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

export default addDance;