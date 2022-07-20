import imgRes from './images/bg-reservations.jpg';
import imgCake from './images/cake.jpg';
import imgBeef from './images/beef.jpg';
import imgChicken from './images/chicken.jpg';
import imgAvocado from './images/avocado.jpg';

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
            
                const imgContainer = document.createElement("span");
                imgContainer.classList.add("img-cont");
                reservations.appendChild(imgContainer);

                    const myResImg = new Image();
                    myResImg.src = imgRes;
                    myResImg.alt =`Reservations Image`;
                    myResImg.height= "100";
                    imgContainer.appendChild(myResImg);
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

function addPopupReservation(){
    const bg = document.getElementById("content");
    
    const popup = document.createElement("div");
    popup.classList.add('popup');
    bg.appendChild(popup);

        const formTitle = document.createElement("h3");
        formTitle.classList.add("formTitle");
        formTitle.textContent = "Leave your info and get a reply shortly!";
        popup.appendChild(formTitle);

        const buttonCancel = document.createElement("button");
        buttonCancel.classList.add("button");
        buttonCancel.id="cancel";
        buttonCancel.type = "button";
        buttonCancel.textContent = "X";
        popup.appendChild(buttonCancel);
        buttonCancel.addEventListener("click", () =>{
            bg.removeChild(popup);
        });

        const formContainer = document.createElement("form");
        formContainer.classList.add("form");
        formContainer.action = "food.js";
        formContainer.method = "post";
        popup.appendChild(formContainer);

        const divBlockOne = document.createElement("div");
        divBlockOne.classList.add("block");
        formContainer.appendChild(divBlockOne);

            const labelName = document.createElement("label");
            labelName.htmlFor = "name";
            labelName.textContent = "Full Name";
            divBlockOne.appendChild(labelName);

            const inputName = document.createElement("input");
            inputName.classList.add("input")
            inputName.id = "name";
            inputName.name = "name";
            inputName.type="text";
            //inputTitle.value="";
            inputName.placeholder="Sir Paul McCartney";
            divBlockOne.appendChild(inputName);

    const divBlockTwo = document.createElement("div");
    divBlockTwo.classList.add("block");
    formContainer.appendChild(divBlockTwo);

        const labelPhone = document.createElement("label");
        labelPhone.htmlFor = "phone";
        labelPhone.textContent = "Phone Number";
        divBlockTwo.appendChild(labelPhone);

        const inputPhone = document.createElement("input");
        inputPhone.classList.add("input")
        inputPhone.id = "phone";
        inputPhone.name = "phone";
        inputPhone.type="tel";
        //inputAuthor.value="";
        inputPhone.placeholder="1234-5678";
        divBlockTwo.appendChild(inputPhone);

    const divBlockThree = document.createElement("div");
    divBlockThree.classList.add("block");
    formContainer.appendChild(divBlockThree);

        const labelMail = document.createElement("label");
        labelMail.htmlFor = "mail";
        labelMail.textContent = "Mail";
        divBlockThree.appendChild(labelMail);

        const inputMail = document.createElement("input");
        inputMail.classList.add("input")
        inputMail.id = "mail";
        inputMail.name = "mail";
        inputMail.type="email";
        //inputPages.value="";
        inputMail.placeholder="paulthebeatle@yahoo.com";
        divBlockThree.appendChild(inputMail);

    const divBlockFour = document.createElement("div");
    divBlockFour.classList.add("block");
    formContainer.appendChild(divBlockFour);

        const pGroup = document.createElement("p");
        pGroup.htmlFor = "group";
        pGroup.textContent = "Group Size:"
        divBlockFour.appendChild(pGroup);

        const labelTwo = document.createElement("label");
        labelTwo.htmlFor = "group";
        labelTwo.textContent = "2";
        divBlockFour.appendChild(labelTwo);

        const radioTwo = document.createElement("input");
        radioTwo.classList.add("input")
        radioTwo.id = "two";
        radioTwo.name = "group";
        radioTwo.type="radio";
        radioTwo.value="2";
        radioTwo.checked=true;
        divBlockFour.appendChild(radioTwo);

        const labelFour = document.createElement("label");
        labelFour.htmlFor = "group";
        labelFour.textContent = "4";
        divBlockFour.appendChild(labelFour);

        const radioFour = document.createElement("input");
        radioFour.classList.add("input")
        /*radioFour.id = "four";*/
        radioFour.name = "group";
        radioFour.type="radio";
        radioFour.value="4";
        divBlockFour.appendChild(radioFour);

    const divBlockFive = document.createElement("div");
    divBlockFive.classList.add("block");
    formContainer.appendChild(divBlockFive);

        const labelDate = document.createElement("label");
        labelDate.htmlFor = "date";
        labelDate.textContent = "Pick a date:";
        divBlockFive.appendChild(labelDate);

        const inputDate = document.createElement("input");
        inputDate.classList.add("input")
        inputDate.id = "date";
        inputDate.name = "date";
        inputDate.type="date";
        //inputImage.value="";
        let date = new Date().toLocaleDateString();
        inputDate.min= date;
        divBlockFive.appendChild(inputDate);

    const divBlockSix = document.createElement("div");
    divBlockSix.classList.add("block");
    formContainer.appendChild(divBlockSix);

        const labelTime = document.createElement("label");
        labelTime.htmlFor = "time";
        labelTime.textContent = "Time:";
        divBlockSix.appendChild(labelTime);

        const selectTime = document.createElement("select");
        selectTime.classList.add("input")
        selectTime.id = "time";
        selectTime.name = "time";
        selectTime.placeholder="Select Turn";
        divBlockSix.appendChild(selectTime);

            const optionA = document.createElement("option");
            optionA.classList.add("option");
            optionA.value= 1;
            optionA.textContent = "Turn 1: 20:00";
            selectTime.appendChild(optionA);

            const optionB = document.createElement("option");
            optionB.classList.add("option");
            optionB.value= 2;
            optionB.textContent = "Turn 2: 22:00";
            selectTime.appendChild(optionB);



    const divBlockSeven = document.createElement("div");
    divBlockSeven.classList.add("block");
    formContainer.appendChild(divBlockSeven);

        const buttonSubmit = document.createElement("button");
        buttonSubmit.classList.add("button");
        buttonSubmit.type = "button"; //For real back end should be "submit"
        buttonSubmit.textContent = "Submit Reservation";
        divBlockSeven.appendChild(buttonSubmit);
        buttonSubmit.addEventListener("click", () =>{
            
            const newName = document.getElementById("name").value;
            const newPhone = document.getElementById("phone").value;
            const newMail = document.getElementById("mail").value;
            const newGroupSize = document.getElementById("two").checked?("2"):("4") ; //if it is checked then its true its 2.
            const newDate = document.getElementById("date").value;
            const newTurn = document.getElementById("time").value;
            
            if ( (newName == "") || (newPhone == "") || (newMail == "") || (newDate == "") || (newTurn == "") ) {
                alert("We need all fields completed to take a reservation!");
                
            }else{
                
                let newClient = new Reservation;
                newClient.name = newName;
                newClient.phone = newPhone;
                newClient.mail = newMail;
                newClient.groupSize = newGroupSize;
                newClient.date = newDate;
                newClient.turn = newTurn;
                addReservation(newClient);
                console.table(clientReservations);

                bg.removeChild(popup);
            }
            
        });
}

function Reservation(name, phone, mail, groupSize, date, turn){
    this.name = name;
    this.phone = phone;
    this.mail = mail;
    this.groupSize = groupSize;
    this.date = date;
    this.turn = turn;

}

function addReservation(client){
    //do stuff here..
    clientReservations.push(client);
}

let clientReservations = [
    {
        name:"John Placeholder",
        phone: "74747474",
        mail: "john@placeholder.com",
        groupSize: "2",
        date: "22/22/2022",
        turn: "1"
    },
]


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
