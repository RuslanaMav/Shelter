//BURGER MENU

const popup = document.querySelector(".popup");
const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list").cloneNode(1);
const body = document.querySelector(".body")
const links = Array.from(navList);
let count = 0;

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

menuIcon.addEventListener("click", openPopup);

function openPopup() {
    if (count === 0) {
        count = 1;
        popup.classList.toggle("open");
        navList.classList.toggle("open");
        menuIcon.classList.toggle("open");
        popup.appendChild(navList);
        body.style.overflow = "hidden";
        navList.classList.remove("close");
        body.classList.toggle("open");
    }

    else {
        closeOnClick();
    }

    document.addEventListener('click', (e) => {
        const menu = e.composedPath().includes(menuIcon);
        if (!menu) closeOnClick();
    })
}

function closeOnClick() {
    count = 0;
    navList.classList.toggle("close");
    popup.classList.remove("open");
    navList.classList.remove("open");
    menuIcon.classList.remove("open");
    document.querySelector(".body").style.overflow = "visible";
    body.classList.remove("open");
}





const pets = [
    {
        "name": "Katrine",
        "img": "img/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Jennifer",
        "img": "img/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "img/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "img/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "img/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "img/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
        "name": "Scarlett",
        "img": "img/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },


    {
        "name": "Freddie",
        "img": "img/pets-katrine-2.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    }

]


//Pagination 
const cards = document.querySelectorAll(".card");
const name = document.querySelectorAll(".name");
const img = document.querySelectorAll(".img-pets");
let petsArray = pets;
let numberPage = 1;
let maxPage;

for (let i = 0; i < 5; i++) {
    let array = [];
    let count = 0;
    while (count != 8) {
        let a = Math.floor(Math.random() * (8 - 0) + 0);
        if (array.indexOf(a) === -1) {
            array.push(a);
            count++;
        }
    }
    array.forEach(item => petsArray.push(pets[item]));
}


console.log(petsArray)
const petsNext = document.querySelector("#right-1");
petsNext.addEventListener("click", nextPage);
const petsPrev = document.querySelector("#left-1");
petsPrev.addEventListener("click", prevPage);
const petsLast = document.querySelector("#right-2");
petsLast.addEventListener("click", lastPage);
const petsOne = document.querySelector("#left-2");
petsOne.addEventListener("click", onePage);


function lastPage() {
    if (document.documentElement.clientWidth >= 1280) 
        numberPage = 6;
    else if (768 <= document.documentElement.clientWidth && document.documentElement.clientWidth < 1280) 
        numberPage = 8;
    else 
        numberPage = 16;
    document.querySelector(".button-1").textContent = numberPage;
    createCards();
    petsLast.classList.add("disabled");
    petsLast.style.color = "#CDCDCD";
    petsNext.classList.add("disabled");
    petsNext.style.color = "#CDCDCD";
    petsOne.classList.remove("disabled");
    petsOne.style.color = "#292929";
    petsPrev.classList.remove("disabled");
    petsPrev.style.color = "#292929";
}

function onePage() {
    numberPage = 1;
    document.querySelector(".button-1").textContent = numberPage;
    createCards();
    petsLast.classList.remove("disabled");
    petsLast.style.color = "#292929";
    petsNext.classList.remove("disabled");
    petsNext.style.color = "#292929";
    petsOne.classList.add("disabled");
    petsOne.style.color = "#CDCDCD";
    petsPrev.classList.add("disabled");
    petsPrev.style.color = "#CDCDCD";

}


function nextPage() {
    if (document.documentElement.clientWidth >= 1280) {
        maxPage = 6;
        if (numberPage < 6) {
            numberPage++;
            document.querySelector(".button-1").textContent = numberPage;
            casePage();
        }
    }
    else if (768 <= document.documentElement.clientWidth && document.documentElement.clientWidth < 1280) {
        maxPage = 8;
        if (numberPage < 8) {
            numberPage++;
            document.querySelector(".button-1").textContent = numberPage;
            casePage();
        }
    }
    else {
        maxPage = 16;
        if (numberPage < 16) {
            numberPage++;
            document.querySelector(".button-1").textContent = numberPage;
            casePage();
        }
    }

    if (numberPage === maxPage) {
        petsLast.classList.add("disabled");
        petsLast.style.color = "#CDCDCD";
        petsNext.classList.add("disabled");
        petsNext.style.color = "#CDCDCD";
        petsOne.classList.remove("disabled");
        petsOne.style.color = "#292929";
        petsPrev.classList.remove("disabled");
        petsPrev.style.color = "#292929";
    }

    if (numberPage < maxPage) {
        petsLast.classList.remove("disabled");
        petsLast.style.color = "#292929";
        petsNext.classList.remove("disabled");
        petsNext.style.color = "#292929";
        petsOne.classList.remove("disabled");
        petsOne.style.color = "#292929";
        petsPrev.classList.remove("disabled");
        petsPrev.style.color = "#292929";
    }

}

function prevPage() {
    if (numberPage > 1) {
        numberPage--;
        document.querySelector(".button-1").textContent = numberPage;
        casePage();
    }

    if (numberPage === 1) {
        petsOne.classList.add("disabled");
        petsOne.style.color = "#CDCDCD";
        petsLast.classList.remove("disabled");
        petsLast.style.color = "#292929";
        petsNext.classList.remove("disabled");
        petsNext.style.color = "#292929";
        petsPrev.classList.add("disabled");
        petsPrev.style.color = "#CDCDCD";
    }

    if (numberPage > 1) {
        petsLast.classList.remove("disabled");
        petsLast.style.color = "#292929";
        petsNext.classList.remove("disabled");
        petsNext.style.color = "#292929";
        petsOne.classList.remove("disabled");
        petsOne.style.color = "#292929";
        petsPrev.classList.remove("disabled");
        petsPrev.style.color = "#292929";
    }


}

let petsCard =  petsArray.slice(0,8);

function casePage() {
    if (document.documentElement.clientWidth >= 1280) {
        changePets(petsArray.slice(numberPage * 8 - 8, numberPage * 8), 8);
        petsCard = petsArray.slice(numberPage * 8 - 8, numberPage * 8);
    }
    else if (768 <= document.documentElement.clientWidth && document.documentElement.clientWidth < 1280) {
        changePets(petsArray.slice(numberPage * 6 - 6, numberPage * 6), 6)
        petsCard = petsArray.slice(numberPage * 6 - 6, numberPage * 6)
    }
    else {
        changePets(petsArray.slice(numberPage * 3 - 3, numberPage * 3), 3)
        petsCard = petsArray.slice(numberPage * 3 - 3, numberPage * 3)
    }

}


function changePets(a, b) {
    for (let i = 0; i < b; i++) {
        name[i].textContent = a[i].name;
        img[i].src = a[i].img;
    }
}

function createCards() {
    if (document.documentElement.clientWidth >= 1280) {
        changePets(petsArray.slice(numberPage * 8 - 8, numberPage * 8), 8);
        petsCard = petsArray.slice(numberPage * 8 - 8, numberPage * 8);
    }
    else if (768 <= document.documentElement.clientWidth && document.documentElement.clientWidth < 1280) {
        changePets(petsArray.slice(numberPage * 6 - 6, numberPage * 6), 6);
        petsCard = petsArray.slice(numberPage * 6 - 6, numberPage * 6)
    }
    else {
        changePets(petsArray.slice(numberPage * 3 - 3, numberPage * 3), 3);
        petsCard = petsArray.slice(numberPage * 3 - 3, numberPage * 3)
    }
}


//Карточки
const petsInfo = document.querySelector(".pets-info");
const buttonCloseInfo = document.querySelector(".buttonClose");
let img1 = document.createElement("IMG");
img1.style.borderRadius = "9px 0px 0px 9px";
buttonCloseInfo.addEventListener('click', closeInfo);

function closeInfo() {
  petsInfo.classList.remove("open");
  buttonCloseInfo.style.right = "-1000%";
  petsInfo.style.left = "-1000%";
  body.style.overflow = "visible";
  document.querySelector(".petsname").textContent = "";
  document.querySelector(".type").textContent = "";
  document.querySelector(".description").textContent = "";
  document.querySelector(".age").textContent = "";
  document.querySelector(".inoculations").textContent = "";
  document.querySelector(".diseases").textContent = "";
  document.querySelector(".parasites").textContent = "";

  body.classList.remove("open");

  if (document.documentElement.clientWidth >= 768) {
    img1.src = "";
  }
}



for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function () {
   
  
   if (document.documentElement.clientWidth >= 1280) {
      petsInfo.style.top = (document.documentElement.clientHeight - 500) / 2 + "px";
      petsInfo.style.left = (document.documentElement.clientWidth - 900) / 2 + "px";
      buttonCloseInfo.style.right = petsInfo.getBoundingClientRect().left  - 43 + "px";
      img1.style.width = "500px";
      img1.style.height = "500px";
      img1.src = petsCard[i].img;
      document.querySelector(".img-info").appendChild(img1);
    }

  else if (768 <= document.documentElement.clientWidth && document.documentElement.clientWidth < 1280) {
      petsInfo.style.top = (document.documentElement.clientHeight - 350) / 2 + "px";
      petsInfo.style.left = (document.documentElement.clientWidth - 630) / 2 + "px";

      buttonCloseInfo.style.right = petsInfo.getBoundingClientRect().left  - 43 + "px";

      img1.style.width = "350px";
      img1.style.height = "350px";
      img1.src = petsCard[i].img;
      document.querySelector(".img-info").appendChild(img1);
    }
    else {
      petsInfo.style.top = (document.documentElement.clientHeight - 341) / 2 + "px";
      petsInfo.style.left = (document.documentElement.clientWidth - 240) / 2 + "px";
      buttonCloseInfo.style.right = petsInfo.getBoundingClientRect().left  - 30 + "px";
    }
    buttonCloseInfo.style.top = petsInfo.getBoundingClientRect().top  - 52 + "px";


    petsInfo.classList.add("open");
    body.style.overflow = "hidden";
    body.classList.add("open");

    document.querySelector(".petsname").textContent = petsCard[i].name;
    document.querySelector(".type").textContent = petsCard[i].type + " - " + petsCard[i].breed;
    document.querySelector(".description").textContent = petsCard[i].description;
    document.querySelector(".age").textContent = "Age: " + petsCard[i].age;
    document.querySelector(".inoculations").textContent = "Inoculations: " + petsCard[i].inoculations;
    document.querySelector(".diseases").textContent = "Diseases: " + petsCard[i].diseases;
    document.querySelector(".parasites").textContent = "Parasites: " + petsCard[i].parasites;

   document.addEventListener('click', (e) => {
      const p = e.composedPath().includes(petsInfo);
      const c = e.composedPath().includes(document.querySelector(".slider"));
      if (!p && !c) closeInfo();
    })

  })
}

