var flipOne = false;
var flipTwo = false;

let emojis = [0x1F600, 0x1F600, 0x1F604, 0x1F604, 0x1F34A, 0x1F34A, 0x1F344, 0x1F344,  0x1F37F, 0x1F37F, 0x1F363, 0x1F363, 
                0x1F370, 0x1F370, 0x1F355, 0x1F355, 0x1F354, 0x1F354, 0x1F35F, 0x1F35F, 0x1F6C0, 0x1F6C0, 0x1F48E, 0x1F48E, 
                0x1F5FA, 0x1F5FA, 0x23F0, 0x23F0, 0x1F579, 0x1F579,
                0x1F431, 0x1F431, 0x1F42A, 0x1F42A, 0x1F439, 0x1F439, 0x1F424, 0x1F424];


const card = document.getElementsByTagName('div');

const cards = document.getElementsByClassName("cards");

const figure = document.getElementsByTagName('span');

const displayFig = document.querySelector('span');

for(let i = 0 ; i < figure.length ; i++) {

    figure[i].innerHTML = String.fromCodePoint(emojis[i]);;
  
}

for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard);
}

var flipCard = function() { //REDEFINIR FUNCION
    card.classList.add('flip-vertical-right');
    card.classList.remove('back');
    card.classList.add('front');
    displayFig.classList.toggle('dispNone');

    flipOne = true;

    if(flipOne && flipTwo) { //REVISAR
        checkPairing();
    }
}

function checkPairing() {

        if(emojis[0] == emojis[1]) {
            console.log('¡Has encontrado pareja!');
        }
        else {
            console.log('No has encontrado pareja...');
        }
}



