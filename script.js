/*  
- Der tages højde for forskellige datatyper - number og string.
- Der vises eksempler på hvordan det kan være nødvendigt at pakke kode ind i funkioner, for at køre den samme kode flere gange



FREMGANGSMÅDE:

- Få overblik over hvilke variabler vi skal bruge:
    Knapper fra HTML'en
    Sekunder & millisekunder
    Output div'er Fra HTML'en
    Interval oprettes uden data

- Få overblik over hvilke funktioner vi skal bruge: 
    startTimer 
    updateOutput
    start
    stop
    reset 



- Hvad skal de forskellige funktioner gøre?
    
startTimer:
  Sørger for at der tælles op
  Funktionen køres 100 gange i sekundet i 'start' funktionen
  Hver gang denne funktion kører: 
    Milliseconds plusses med 1
    Kører updateOutput funktionen

updateOutput:
  Sørger for at millisekunderne rundes op til sekunder, når der tælles op
    - Hvis 'milliseconds' er større end 9: vi plusser 'seconds' med 1, og nulstiller 'milliseconds'  
  For at der udskrives to decimaler, selvom tallene er under 10, så smider vi '0' ind manuelt

start:
  Kører 'startTimer' funktionen - Sørger for at funktionen køres 100 gange i sekundet
    - Derved tælles der op i millisekunder

stop:
  Stopper 'start' funktionen i at køre 'startTimer' på repeat

reset:
  Stopper 'start' funktionen i at køre 'startTimer' på repeat
  Nulstiller 'milliseconds' & 'seconds'
  Kører 'updateOutput' funktionen, for at tallene opdateres, og det kan ses at variablerne er nulstillet
*/

/* Variabler defineres */
let btnStart = document.querySelector("#button-start");
let btnStop = document.querySelector("#button-stop");
let btnReset = document.querySelector("#button-reset");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let outputMinutes = document.querySelector("#minutes");
let outputSeconds = document.querySelector("#seconds");
let outputMilliSeconds = document.querySelector("#milliseconds");
let running = false;

let btns = document.querySelectorAll(".btn");

setInterval(startTimer, 10);

function startTimer() {
  if (running == true) {
    milliseconds += 1;
    updateOutput();
  }
}

function updateOutput() {
  if (milliseconds == 100) {
    seconds += 1;
    milliseconds = 0;
  }

  if (seconds == 60) {
    seconds = 0;
    minutes += 1;
  }

  outputMilliSeconds.innerHTML = milliseconds;
  outputSeconds.innerHTML = seconds;
  outputMinutes.innerHTML = minutes;
}

function start() {
  running = true;
  document.querySelector("body").style.backgroundColor = "green";
  btns.forEach((btn) => {
    // do whatever
    btn.style.background = "green";
  });
}

function stop() {
  running = false;
  document.querySelector("body").style.backgroundColor = "red";
  btns.forEach((btn) => {
    // do whatever
    btn.style.background = "red";
  });
}

function reset() {
  running = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateOutput();
  document.querySelector("body").style.backgroundColor = "orange";
  btns.forEach((btn) => {
    // do whatever
    btn.style.background = "orange";
  });
}

btnStart.addEventListener("click", start);

btnStop.addEventListener("click", stop);

btnReset.addEventListener("click", reset);
