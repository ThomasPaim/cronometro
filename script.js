//chamando os elementos HTML
const mintosSpan = document.querySelector('#minutos')
const seconsSpan = document.querySelector('#segundos')
const milisecondsSapn = document.querySelector('#milisegundos')
const startBtn = document.getElementById('comecar')
const pausarBtn = document.getElementById('pausar')
const zerarBtn = document.getElementById('zerar')
const continuarBtn = document.getElementById('continuar')

//variaveis do cronometro

let interval;
let minutes = 0
let seconds = 0
let miliseconds = 0
let isPaused = false

//eventos para cada botão

startBtn.addEventListener('click', comecarTime)
pausarBtn.addEventListener('click', pauseTime)
zerarBtn.addEventListener('click', zerarTime)
continuarBtn.addEventListener('click',continuarTime )


//começar cronometro

function comecarTime(){

    interval = setInterval(() =>{

        if(!isPaused){

            miliseconds+= 10

            if(miliseconds === 1000){
                seconds++;
                miliseconds = 0
            }

            if(seconds === 60){
                minutes++;
                seconds = 0
            }
  
         }else{
           startBtn.style.display = 'none'
           continuarBtn.style.display = 'inline' 
         }
         
         mintosSpan.textContent = arrumarTime(minutes)
         seconsSpan.textContent = arrumarTime(seconds)
         milisecondsSapn.textContent = arrumarTime(miliseconds);

    }, 10)

   function arrumarTime(time){
    return time < 10? `0${time}` : time;
   };

}

//botão de pausar

function pauseTime(){
    isPaused = true
}

//botão de zerar

function zerarTime(){
   clearInterval(interval)
   seconds = 0;
   minutes = 0;
   miliseconds = 0;
   mintosSpan.textContent = 0
   seconsSpan.textContent = 0
   milisecondsSapn.textContent = 0
}

//função de continuar

function continuarTime(){
    isPaused = false;
    startBtn.style.display = 'inline'; 
    continuarBtn.style.display = 'none';
}