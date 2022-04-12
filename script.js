

// Array de emojis
let emojis = [0x1F600, 0x1F600, 0x1F604, 0x1F604, 0x1F34A, 0x1F34A, 0x1F344, 0x1F344,  0x1F37F, 0x1F37F, 0x1F363, 0x1F363, 
                0x1F370, 0x1F370, 0x1F355, 0x1F355, 0x1F354, 0x1F354, 0x1F35F, 0x1F35F, 0x1F6C0, 0x1F6C0, 0x1F48E, 0x1F48E, 
                0x1F5FA, 0x1F5FA, 0x23F0, 0x23F0, 0x1F579, 0x1F579,
                0x1F431, 0x1F431, 0x1F42A, 0x1F42A, 0x1F439, 0x1F439, 0x1F424, 0x1F424];

const cards = document.getElementsByClassName("cards");

const figure = document.getElementsByTagName('span');

const timer = document.getElementById('timer');

const tagMoves = document.getElementById('moves');

var flippedC = 0;

var moves = 0;

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


    //timeCount();
    movesCount();

    flipCounts();

}


function flipCounts() {

    flippedC += 1;

    if(flippedC == 2) {
        checkPairing(figure);
    }
}



// Comprovar si las dos cartas levantados tienen la misma figura
function checkPairing(figure) {

    // var iterator = emojis.values();
    // var iterator_2 = emojis.values();

   

    // for(let i = 0; i < figure.length ; i++) {

    //     for(let j = 0; i < figure.length; j++) {

    //         if(!figure[i].classList.contains('dispNone') && !figure[j].classList.contains('dispNone')) {

    //             if(String.fromCodePoint(emojis[i]) == String.fromCodePoint(emojis[j])) {
    //                 console.log('Has encontrado pareja!');
    //                 break;
    //             }
        
    //             else {
    //                 console.log('No has encontrado pareja...');
    //                 break;
    //             }
    //         }
    //     }
        
    // }
    
    flippedC = 0;
}

function movesCount() {
   

    moves += 1;

    tagMoves.innerHTML = moves;
}

// Gestiona el tiempo y los movimientos
function timeCount() {

    var time = 0;

    for (var i = 0; i < Infinity; i++) {

        time += 1;

        timer.innerHTML = time;
    }
}