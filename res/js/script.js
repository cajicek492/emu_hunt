const scoreCounter = document.getElementById("scoreCounter");
const magazine = document.getElementById("magazine");
const magazineReload = new Audio("./res/audio/1911.mp3");
const startAudio = new Audio("./res/audio/mariolesgo.mp3");
const emu = document.getElementById("emu");
const start = document.getElementById("start");


let numberOfBullets = 7;
let score = 0;
start.onclick = () => {


  start.style.display="none";
  setTimeout(() => {
    startAudio.play();
    emu.style.left = "150px";
  },1000);





document.addEventListener("click", bulletMinus);

document.addEventListener("keydown", function (event) {
  if (event.key === "r" || event.key === "R") {
    reload();
  }
});

emu.onclick = () => {
  if(numberOfBullets > 0){
    score+=50;
  } else {
    score+=0;
  }
  scoreCounter.innerText = "Score: " + score;
}

function bulletMinus() {
  if (numberOfBullets >= 1) {
    numberOfBullets-=1;
    magazine.innerText = numberOfBullets;
    console.log("shot fired");
  }
}
function reload() {
  if(numberOfBullets == 7){

  } else {
    magazineReload.play();
    setTimeout(()=>{
        numberOfBullets = 7
    magazine.innerText = numberOfBullets;
    },1500)
  }
}


}
