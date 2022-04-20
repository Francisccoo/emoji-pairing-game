// Array de emojis
const emojis = [0x1F600, 0x1F600, 0x1F604, 0x1F604, 0x1F34A, 0x1F34A, 0x1F344, 0x1F344,  0x1F37F, 0x1F37F, 0x1F363, 0x1F363, 
                0x1F370, 0x1F370, 0x1F355, 0x1F355, 0x1F354, 0x1F354, 0x1F35F, 0x1F35F, 0x1F6C0, 0x1F6C0, 0x1F48E, 0x1F48E, 
                0x1F5FA, 0x1F5FA, 0x23F0, 0x23F0, 0x1F579, 0x1F579,
                0x1F431, 0x1F431, 0x1F42A, 0x1F42A, 0x1F439, 0x1F439, 0x1F424, 0x1F424];

// Array para almacenar las dos figuras descubiertas para compararlas
let arrayResults = [];

const cards = document.getElementsByClassName("cards");

const figure = document.getElementsByTagName('span');

const timer = document.getElementById('timer');

const tagMoves = document.getElementById('moves');

let counterClicks = 0;

let moves = 0;

// Ordenación aleatoria de los emojis
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // Mientras queden elementos que reorganizar...
    while (currentIndex != 0) {
  
      // Coge un elemento restante
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // E intercambialo con el elemento actual
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

shuffle(emojis);

// Asignamos los emojis a cada carta
for(let i = 0 ; i < figure.length ; i++) {

    figure[i].innerHTML = String.fromCodePoint(emojis[i]);
  
}

// Añadimos a cada carta un ID e interacción con click de ratón
for(let i = 0; i < cards.length; i++) {
    cards[i].setAttribute('id', 'div' + i);
    cards[i].addEventListener("click", flipCard);
}


// Función que levanta la carta y muestra la figura/emoji
function flipCard() { //REDEFINIR FUNCION

    console.log('You clicked: ' + this.id);

    this.classList.add('flip-vertical-right', 'front', 'noClick');
    this.classList.remove('back');
    this.querySelector('div[id^="div"] > span').classList.toggle('dispNone');

    var result = this.querySelector('div[id^="div"] > span').innerHTML;

    arrayResults.push(result);

    counterClicks++;

    if(counterClicks == 1) {
        timeCount();
    }

    if(arrayResults.length > 1) {

        checkPairing();
        movesCount();

    }  
}



// Comprovar si las dos cartas levantadas tienen la misma figura
function checkPairing() {


    if(arrayResults[0] === arrayResults[1]) {

        console.log('Has encontrado pareja!');

        for(let i = 0; i < figure.length; i++) {
            if(!figure[i].classList.contains('dispNone')) {
                cards[i].classList.add('checked');
            }
        }     
    }
    else {

        console.log('No has encontrado pareja...');

        setTimeout(foldCards, 2000);      
    } 
    arrayResults = [];
}

function foldCards() {
    for(let i = 0; i < figure.length; i++) {
        if(!figure[i].classList.contains('dispNone') && !cards[i].classList.contains('checked')) {
                cards[i].classList.remove('flip-vertical-right', 'front', 'noClick');
                cards[i].classList.add('back');
                figure[i].classList.toggle('dispNone');  
        }
    }     
}

function movesCount() {
   
    moves++;

    tagMoves.innerHTML = moves;
}

// Gestiona el tiempo y los movimientos
function timeCount() {

    var sec = 0;

    var time = setInterval(function() {

        sec++;

        timer.innerHTML = sec;

    }, 1000);
}