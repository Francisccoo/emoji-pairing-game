var flipOne = false;
var flipTwo = false;

// Array de emojis
let emojis = [0x1F600, 0x1F600, 0x1F604, 0x1F604, 0x1F34A, 0x1F34A, 0x1F344, 0x1F344,  0x1F37F, 0x1F37F, 0x1F363, 0x1F363, 
                0x1F370, 0x1F370, 0x1F355, 0x1F355, 0x1F354, 0x1F354, 0x1F35F, 0x1F35F, 0x1F6C0, 0x1F6C0, 0x1F48E, 0x1F48E, 
                0x1F5FA, 0x1F5FA, 0x23F0, 0x23F0, 0x1F579, 0x1F579,
                0x1F431, 0x1F431, 0x1F42A, 0x1F42A, 0x1F439, 0x1F439, 0x1F424, 0x1F424];

const cards = document.getElementsByClassName("cards");

const figure = document.getElementsByTagName('span');

const timer = document.querySelector('div[id="timer"] > p');

//timer.addEventListener("onload", timeCount);

let flippedC;


// Ordenación aleatoria de los emojis
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

shuffle(emojis);

// Asignamos los emojis a cada carta
for(let i = 0 ; i < figure.length ; i++) {

    figure[i].innerHTML = String.fromCodePoint(emojis[i]);;
  
}

// Añadimos a cada carta un ID e interacción con click de ratón
for(let i = 0; i < cards.length; i++) {
    cards[i].setAttribute('id', 'div' + i);
    cards[i].addEventListener("click", flipCard);
}


// Función que levanta la carta y muestra la figura/emoji
function flipCard(flippedC) { //REDEFINIR FUNCION

    //flipOne = true;

    console.log('You clicked: ' + this.id);

    this.classList.add('flip-vertical-right', 'front');
    this.classList.remove('back');
    
    this.querySelector('div[id^="div"] > span').classList.toggle('dispNone');

    flippedC+1;

    if(flippedC == 2) {
        checkPairing();
    }

    return flippedC;

}

    // flipOne = true;

    // if(flipOne && flipTwo) { //REVISAR
    //     checkPairing();
    // }



// Comprovar si las dos cartas levantados tienen la misma figura
function checkPairing(figure) {

        if(figure[i] == figure[i]) {
            console.log('¡Has encontrado pareja!');
        }
        else {
            console.log('No has encontrado pareja...');
        }

        flippedC = 0;
}


function timeCount() {
    let time;

    while (time < 1000) {
        time++;
    }

    timer.innerHTML = time;
}