let scoreUser = 0;
let scoreCom = 0;
let playerSelection;
let computerSelection;

const btnBatu = document.getElementById('btnBatu');
const btnGunting = document.getElementById('btnGunting');
const btnKertas = document.getElementById('btnKertas');
const teks = document.getElementById('teks');
const win = document.getElementById('win');
const scoUser = document.getElementById('scoUser');
const scoCom = document.getElementById('scoCom');
const disable= document.querySelectorAll('.tombol button');
const btnRef = document.getElementById('resetButton');

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
            if(computerSelection === "kertas"){
                result = "Kamu Kalah Batu kalah lawan Kertas"
                ++scoreCom
            }else{
                result = "Kamu Menang Batu menang lawan Gunting"
                ++scoreUser
            }


            //if player pick kertas
        }else if(playerSelection === "kertas"){
            if(computerSelection === "gunting"){
                result = "Kamu Kalah Kertas kalah lawan Gunting"
                ++scoreCom
            }else{
                result = "Kamu Menang Batu menang lawan Gunting"
                ++scoreUser
            }


            //if player pick gunting
        }else if(playerSelection === "gunting"){
            if(computerSelection === "kertas"){
                result = "Kamu Menang Gunting menang lawan Kertas"
                ++scoreUser
            }else{
                result = "Kamu Kalah Gunting kalah lawan Batu"
                ++scoreCom
            }
        }
    }

    document.getElementById('teks').innerHTML = result
    scoCom.textContent = `Score Computer : ${scoreCom}`
    scoUser.textContent = `Score User : ${scoreUser}`
    return result;

}




function disableButton(){
    disable.forEach(e => {
        e.disabled = true
    })
}

function resetGame(){
    btnRef.addEventListener('click', () =>{
        window.location.reload();
    })
}



btnBatu.addEventListener('click', () => handleChoice("batu"));
btnKertas.addEventListener('click', () => handleChoice("kertas"));
btnGunting.addEventListener('click', () => handleChoice("gunting"));

function gameOver(){
    if(scoreUser === 5 || scoreCom === 5){
        disableButton()
        resetGame()
        if(scoreUser > scoreCom){
            win.innerHTML = `Kamu Menang `
        }else{
            win.innerHTML = "Kamu Kalah "
        }
    }
}


function handleChoice(playerSelection){
    computerSelection = computerLogic()
    mainkan(playerSelection, computerSelection)
    gameOver()
}



