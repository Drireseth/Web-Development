document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src" , "images/dice6.png");
document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src" , "images/dice6.png");

let randomNumber1 = Math.floor(Math.random() * 6 + 1);

document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src" , "images/dice" + randomNumber1 + ".png");

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src" , "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if(randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}