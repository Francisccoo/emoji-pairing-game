var flipOne = false;
var flipTwo = false;
    
const card = document.getElementById("card");
var figure = document.querySelector('span');

function flipCard() { //REDEFINIR FUNCION
    card.classList.add('flip-vertical-right');
    card.classList.remove('back');
    card.classList.add('front');
    figure.classList.toggle('dispNone');


    if(flipOne && flipTwo) { //REVISAR
        checkPairing();
    }
}

function checkPairing() {

    if(flipOne && flipTwo) {
        if(emojis[0] == emojis[1]) {
            console.log('¡Has encontrado pareja!');
        }
        else {
            console.log('No has encontrado pareja...');
        }
    }
}

// let emojis = [0x1F600, 0x1F604, 0x1F34A, 0x1F344, 0x1F37F, 0x1F363, 0x1F370, 0x1F355,
//     0x1F354, 0x1F35F, 0x1F6C0, 0x1F48E, 0x1F5FA, 0x23F0, 0x1F579, 0x1F4DA,
//     0x1F431, 0x1F42A, 0x1F439, 0x1F424];

// function fillCards(emojis) {

//     for(let i = 0; emojis.lentgh ; i++) {
//             cards.innerHTML = emojis[i];
//     }
// }

// fillCards(emojis);

//cards.innerText = String.fromCodePoint(0x1F354);