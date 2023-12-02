
console.log(
  "104/110\n",
  "1. Реализация burger menu на обеих страницах: +26\n",
  "2. Реализация пагинации на странице Pets: +36\n",
  "3. Реализация слайдера-карусели на странице Main: +30 (не выполнен пункт: сохраняется только одно предыдущее состояние. частично выполнен - при изменении ширины экрана слайдер перестраивается и работает без перезагрузки страницы)\n ",
  "4. Реализация попап на обеих страницах: +12"
)

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



const petsInfo = document.querySelector(".pets-info");
const buttonCloseInfo = document.querySelector(".buttonClose");
let img = document.createElement("IMG");
img.style.borderRadius = "9px 0px 0px 9px";
buttonCloseInfo.addEventListener('click', closeInfo);

//Slider

const buttonSliderNext = document.querySelector(".button-arrow-2");
const buttonSliderPrev = document.querySelector(".button-arrow-1");

let arr = []; // общий массив
let arrNew = []; // новые значения 3-6
let arrPrev = []; //старые значения 0 - 3

let countCards;
const containerStart = document.querySelector('.carousel-wr');
const blockStart = containerStart.querySelectorAll('.slider-cards');
const petsStart = blockStart[1].querySelectorAll(".pCards");
const imgStart = blockStart[1].querySelectorAll(".imgCards");

let blockCurrent = blockStart[1];
let cards = blockCurrent.querySelectorAll(".card");


let c = 0;
arrPrev.push(pets[Math.floor(Math.random() * (pets.length - 0) + 0)]);
while (c != countCard() - 1) {
  let a = Math.floor(Math.random() * (pets.length - 0) + 0);
  if (arrPrev.indexOf(pets[a]) === -1) {
    arrPrev.push(pets[a]);
    c++;
  }
}

for (let i = 0; i < countCard(); i++) {
  petsStart[i].textContent = arrPrev[i].name;
  imgStart[i].src = arrPrev[i].img;
}


openInfoCards(arrPrev);

function countCard() {
  if (document.documentElement.clientWidth >= 1280) {
    countCards = 3;
  }
  else if (768 <= document.documentElement.clientWidth && document.documentElement.clientWidth < 1280) {
    countCards = 2;
  }
  else {
    countCards = 1;
  }
  return countCards;
}

buttonSliderNext.addEventListener("click", sliderNext);
buttonSliderPrev.addEventListener("click", sliderPrev);

function getRandom(allСycles) {
  let count = 0;
  arr = [];
  for (let i = 0; i < arrPrev.length; i++)
    arr[i] = arrPrev[i];
  while (count != allСycles) {
    let a = Math.floor(Math.random() * (pets.length - 0) + 0);
    if (arr.indexOf(pets[a]) === -1) {
      arr.push(pets[a]);
      arrNew.push(pets[a]);
      count++;
    }
  }


}



function sliderNext() {


  let container = document.querySelector('.carousel-wr');
  let block = container.querySelectorAll('.slider-cards');
  const petsName = block[2].querySelectorAll(".pCards");
  const imgCards = block[2].querySelectorAll(".imgCards");
  const petsNamePrev = block[1].querySelectorAll(".pCards");
  const imgCardsPrev = block[1].querySelectorAll(".imgCards");



  getRandom(countCard());

  for (let i = 0; i < countCard(); i++) {
    petsName[i].textContent = arrNew[i].name;
    imgCards[i].src = arrNew[i].img;
    petsNamePrev[i].textContent = arrPrev[i].name;
    imgCardsPrev[i].src = arrPrev[i].img;

  }
  for (let i = 0; i < arrNew.length; i++) {
    arrPrev[i] = arrNew[i];
  }

  blockCurrent = block[2];
  cards = blockCurrent.querySelectorAll(".card");
  openInfoCards(arrNew);

  arrNew = [];
  container.classList.remove("activeRight");
  container.classList.remove("activeLeft");
  window.setTimeout(function () {
    container.classList.add("activeLeft")
  }, 1);


}


function sliderPrev() {
  let container = document.querySelector('.carousel-wr');
  let block = container.querySelectorAll('.slider-cards');

  const petsName = block[1].querySelectorAll(".pCards");
  const imgCards = block[1].querySelectorAll(".imgCards");
  const petsNamePrev = block[0].querySelectorAll(".pCards");
  const imgCardsPrev = block[0].querySelectorAll(".imgCards");


  getRandom(countCard());

  for (let i = 0; i < countCard(); i++) {
    petsName[i].textContent = arrPrev[i].name;
    imgCards[i].src = arrPrev[i].img;
    petsNamePrev[i].textContent = arrNew[i].name;
    imgCardsPrev[i].src = arrNew[i].img;
  }


  for (let i = 0; i < arrNew.length; i++) {
    arrPrev[i] = arrNew[i];
  }

  blockCurrent = block[0];
  cards = blockCurrent.querySelectorAll(".card");
  openInfoCards(arrNew);
  arrNew = [];
  container.classList.remove("activeRight");
  container.classList.remove("activeLeft");
  window.setTimeout(function () {
    container.classList.add("activeRight")
  }, 1);

}



//Карточки



function closeInfo() {
  petsInfo.classList.remove("open");
  petsInfo.style.left = "-1000%";
  buttonCloseInfo.style.right = "-1000%";
  body.style.overflow = "visible";
  document.querySelector(".name").textContent = "";
  document.querySelector(".type").textContent = "";
  document.querySelector(".description").textContent = "";
  document.querySelector(".age").textContent = "";
  document.querySelector(".inoculations").textContent = "";
  document.querySelector(".diseases").textContent = "";
  document.querySelector(".parasites").textContent = "";

  body.classList.remove("open");

  if (document.documentElement.clientWidth >= 768) {
    img.src = "";
  }
}



function openInfoCards(array) {
  for (let i = 0; i < array.length; i++) {
   
    cards[i].addEventListener('click', (e) => {
      petsInfo.classList.add("open");
      body.style.overflow = "hidden";
      body.classList.add("open");


      if (document.documentElement.clientWidth >= 1280) {
        petsInfo.style.top = (document.documentElement.clientHeight - 500) / 2 + "px";
        petsInfo.style.left = (document.documentElement.clientWidth - 900) / 2 + "px";
        buttonCloseInfo.style.right = 190 - 43 + "px";


        buttonCloseInfo.style.right = (document.documentElement.clientWidth - 900) / 2  - 43 + "px";
    
        img.style.width = "500px";
        img.style.height = "500px";
        img.src = array[i].img;
        document.querySelector(".img-info").appendChild(img);
      }

      else if (768 <= document.documentElement.clientWidth && document.documentElement.clientWidth < 1280) {
        petsInfo.style.top = (document.documentElement.clientHeight - 350) / 2 + "px";
        petsInfo.style.left = (document.documentElement.clientWidth - 630) / 2 + "px";
        buttonCloseInfo.style.right = petsInfo.getBoundingClientRect().left - 43 + "px";


        img.style.width = "350px";
        img.style.height = "350px";
        img.src = array[i].img;
        document.querySelector(".img-info").appendChild(img);
      }
      else {
        petsInfo.style.top = (document.documentElement.clientHeight - 341) / 2 + "px";
        petsInfo.style.left = (document.documentElement.clientWidth - 240) / 2 + "px";
        buttonCloseInfo.style.right = petsInfo.getBoundingClientRect().left - 30 + "px";
      }
      buttonCloseInfo.style.top = petsInfo.getBoundingClientRect().top - 52 + "px";

      document.querySelector(".name").textContent = array[i].name;
      document.querySelector(".type").textContent = array[i].type + " - " + array[i].breed;
      document.querySelector(".description").textContent = array[i].description;
      document.querySelector(".age").textContent = "Age: " + array[i].age;
      document.querySelector(".inoculations").textContent = "Inoculations: " + array[i].inoculations;
      document.querySelector(".diseases").textContent = "Diseases: " + array[i].diseases;
      document.querySelector(".parasites").textContent = "Parasites: " + array[i].parasites;

      document.addEventListener('click', (e) => {
        const p = e.composedPath().includes(petsInfo);
        const c = e.composedPath().includes(document.querySelector(".slider"));
        if (!p && !c) closeInfo();
      })
    })
  }
}