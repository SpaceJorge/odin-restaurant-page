import imgRes from './images/bg-reservations.jpg';
import imgDance from './images/dance.jpg';
//Photo by <a href="https://unsplash.com/@ardianlumi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ardian Lumi</a> on <a href="https://unsplash.com/s/photos/jazz-dance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import imgEmpty from './images/band-empty.jpg';
//Photo by <a href="https://unsplash.com/@john_matychuk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">John Matychuk</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import imgPast from './images/band-past.jpg';
//Photo by <a href="https://unsplash.com/@honeypoppet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sandie Clarke</a> on <a href="https://unsplash.com/s/photos/jazz-band?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import imgStreet from './images/band-street.jpg';
//Photo by <a href="https://unsplash.com/@robsonhmorgan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Robson Hatsukami Morgan</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import addPopupReservation from "./popup";
let myEvents = [
    {
        name:"Le Bom Borombom's Worst Kept Secret",
        date:"Saturday's 8pm",
        description:"A true 50's jazz night out, a mirage from the past to dance your problems away.",
        img:imgDance,
    },
    {
        name:"This Street's Quartet",
        date:"Sunday's 8pm",
        description:"Crowd favourite latin-jazz space nonesense band will make you fly, you don't wanna miss it!",
        img:imgStreet,
    },
    {
        name:"This Week's Musical Guest",
        date:"Friday's 8pm",
        description:"New band every week, cherry picked by us.",
        img:imgEmpty,
    },
    {
        name:"Into the Jazzyverse - A Live Podcast & Breakfast",
        date:"Sunday's 9am",
        description:"Charles Jazzman live podcast show, is live from LBB! With special guests, and the best records.",
        img:imgPast,
    },
];


const addDance = () =>{      
    
    const content = document.getElementById("selected");

        const dance = document.createElement("div");
        dance.classList.add("dance");
        content.appendChild(dance);

            const eventContainer = document.createElement("div");
            eventContainer.classList.add("event-cont");
            dance.appendChild(eventContainer);
            
                const card = document.createElement("div");
                card.classList.add('card');
                eventContainer.appendChild(card);

                const eventTitle = document.createElement("p");
                eventTitle.classList.add("title");
                eventTitle.textContent = "The Board";
                card.appendChild(eventTitle);

                myEvents.forEach(ev => {

                const card = document.createElement("div");
                card.classList.add('card');
                card.style.backgroundImage = "url(" + ev.img + ")";
                eventContainer.appendChild(card);
            
                    const wordsContainer = document.createElement("div");
                    wordsContainer.classList.add("words");
                    card.appendChild(wordsContainer);
            
                        const name = document.createElement("p");
                        name.classList.add("name");
                        name.textContent = ev.name;
                        wordsContainer.appendChild(name);
                
                        const date = document.createElement("p");
                        date.classList.add("date");
                        date.textContent = ev.date;
                        wordsContainer.appendChild(date);

                        const desc = document.createElement("p");
                        desc.classList.add("description");
                        desc.textContent = ev.description;
                        wordsContainer.appendChild(desc);
                        
                    const getTicket = document.createElement("button");
                    getTicket.classList.add("ticket");
                    getTicket.textContent = "Get Tickets!";
                    getTicket.addEventListener("click", ()=>{
                        addPopupReservation();
                    });
                    card.appendChild(getTicket);
            });  
    
};

export default addDance;