const imagesArray = [
    {
        title: "Marvel's Spiderman",
        description: "Marvel's Spider-Man è un videogioco d'avventura dinamica sviluppato da Insomniac Games distribuito da Sony Interactive Entertainment per PlayStation 4, PlayStation 5 e Microsoft Windows.",
        image: "01.webp",
    },
    {
        title: "Ratchet and Clank",
        description: "Ratchet & Clank è una serie di videogiochi platform-adventure sviluppati da Insomniac Games e pubblicati da Sony Computer Entertainment.",
        image: "02.webp",
    },
    {
        title: "Fortnite",
        description: "Fortnite è un videogioco sparatutto in terza persona del 2017, sviluppato da People Can Fly e pubblicato da Epic Games per console e PC.",
        image: "03.webp",
    },
    {
        title: "Stray",
        description: "Stray è un videogioco di tipo avventura dinamica del 2022 sviluppato da BlueTwelve Studio e pubblicato dall'Annapurna Interactive per PlayStation 4, PlayStation 5 e Microsoft Windows.",
        image: "04.webp",
    },
    {
        title: "Marvel's Avengers",
        description: "Marvel's Avengers è un videogioco action-adventure sviluppato dalla Crystal Dynamics e Eidos Montréal, e pubblicato dalla Square Enix.",
        image: "05.webp",
    }
]


let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i].image}">
        <div class="caption">
            <h2>${imagesArray[i].title}</h2>
            <p>${imagesArray[i].description}</p>
        </div>
    </div>`;
}

const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;



const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');


const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');



const prev = document.querySelector('.prev');
const next = document.querySelector('.next');



next.addEventListener('click', function(){
    slideNext();
});

prev.addEventListener('click', function(){
    slidePrev(); 
})



//FUNZIONI

function slideNext(){
    if(itemActive < items.length - 1){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        itemActive++;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    } else {
        
    }
}

function slidePrev(){
    if(itemActive > 0){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        itemActive--;

        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    } else {
        
    }
}