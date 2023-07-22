let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let chance = "X";
let isgameover = false;
// function to change chance
const changeTurn = () => {
    return chance === "X" ? "0" : "X";
}

// function to check winner
const checkWin = () => {
    let boxtest = document.getElementsByClassName("boxtest");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtest[e[0]].innerText === boxtest[e[1]].innerText) && (boxtest[e[2]].innerText === boxtest[e[1]].innerText) && (boxtest[e[0]].innerText !== "")) {
            document.querySelector('.info3').innerText = boxtest[e[2]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "196px";
            // document.getElementsByTagName('span').style.backgroundColor = 'red';
            music.play();
        }
    })
}

//Main Logic Of Game Starts
let boxes = document.getElementsByClassName("info");
Array.from(boxes).forEach(element => {
    let boxtest = element.querySelector('.boxtest');
    element.addEventListener('click', () => {
        if (boxtest.innerText === '') {
            boxtest.innerText = chance;
            chance = changeTurn();
            gameOver.play();//adds music 
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info3")[0].innerText = "Turn for " + chance;
            }
        }
    })

})


//Restert The Game || Written by my Own Logic
reset.addEventListener('click', (e) => {
    console.log(e.target);
    // let boxtest = document.getElementsByClassName("boxtest");
    // boxtest.innerText="";
    let boxes = document.getElementsByClassName("info");
    Array.from(boxes).forEach(element => {
        element.querySelector('.boxtest').innerText = " ";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
        music.pause();
        chance="X";
        isgameover=false;
        document.getElementsByClassName("info3")[0].innerText = "Turn for " + chance;

    })

})