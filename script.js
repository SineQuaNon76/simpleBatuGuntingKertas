let scoreUser = 0;
let scoreCom = 0;
let playerSelection;
let computerSelection;

const btnBatu = document.getElementById('btnBatu');
const btnGunting = document.getElementById('btnGunting');
const btnKertas = document.getElementById('btnKertas');
const teks = document.getElementById('teks');
const win = document.getElementById('win');
const disable= document.querySelectorAll('button')

function computerLogic() {
    let array = ["batu", "kertas", "gunting"];
    let item = array[Math.floor(Math.random() * array.length)];
    return item;
}


function mainkan(playerSelection, computerSelection){
    let result = ""

    if(playerSelection === computerSelection){
        result = "Seri"
    }else{

        //if player ngepick batu
        if(playerSelection === "batu"){
            computerSelection === "kertas" ?  result = `Kamu Kalah Batu kalah lawan Kertas <br> Player Score : ${scoreUser} <br> Computer Score : ${++scoreCom}  <br>`
            : result = `Kamu Menang Batu menang lawan Gunting <br> Player Score : ${++scoreUser} <br> Computer Score : ${scoreCom} <br>`


            //if player pick kertas
        }else if(playerSelection === "kertas"){
            computerSelection === "gunting" ? result = `Kamu Kalah Kertas kalah lawan Gunting <br> Player Score : ${scoreUser} <br> Computer Score : ${++scoreCom} <br> `
            : result = `Kamu Menang Batu menang lawan Gunting <br> Player Score : ${++scoreUser} <br> Computer Score : ${scoreCom} <br>`

            //if player pick gunting
        }else if(playerSelection === "gunting"){
            computerSelection === "kertas" ? result = `Kamu Menang Gunting menang lawan Kertas <br> Player Score : ${++scoreUser} <br> Computer Score : ${scoreCom} <br>`
            : result = `Kamu Kalah Gunting kalah lawan Batu <br> Player Score : ${scoreUser} <br> Computer Score : ${++scoreCom} <br>`
        }
    }

    document.getElementById('teks').innerHTML = result
    return result;
}


function disableButton(){
    disable.forEach(e => {
        e.disabled = true
    })
}

btnBatu.addEventListener('click', () => handleChoice("batu"));
btnKertas.addEventListener('click', () => handleChoice("kertas"));
btnGunting.addEventListener('click', () => handleChoice("gunting"));

function gameOver(){
    if(scoreUser === 5 || scoreCom === 5){
        disableButton()
        if(scoreUser > scoreCom){
            win.innerHTML = `Kamu Menang <br> Refresh browser and Play Again`
        }else{
            win.innerHTML = "Kamu Kalah <br> Refresh browser and Play Again"
        }
    }
}


function handleChoice(playerSelection){
    computerSelection = computerLogic()
    mainkan(playerSelection, computerSelection)
    gameOver()
}



