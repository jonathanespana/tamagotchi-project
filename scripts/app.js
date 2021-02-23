console.log("=== Connected! ===")

// game start stats: age, boredom, hunger, tired

let age = 0;
let boredomLv = 0;
let hungerLv = 0;
let tiredLv = 0;

// query game stats:  name, age, boredom, hunger, tired
const $nameEl = $("#name");
const $ageEl = $("#age");
const $boredomEl = $("#boredom");
const $hungerEl = $("#hunger");
const $tiredEl = $("#tired");

// set game start stats

$ageEl.text(`Age: ${age}`);
$boredomEl.text(`Boredom: ${boredomLv}`);
$hungerEl.text(`Hunger: ${hungerLv}`);
$tiredEl.text(`Tired: ${tiredLv}`);

// query game buttons

const $playBtn = $("#play");
const $feedBtn = $("#feed");
const $restBtn = $("#rest");

/* === Play ===
 - target play button with event listener on click
 - boredom decrement by 2
 - hunger increment by 1
 - tired increment by 1
 - update stats
*/

$playBtn.on("click", function (event){
  if(boredomLv >= 2){
    boredomLv -= 2;
    hungerLv += 1;
    tiredLv += 1;
    $boredomEl.text(`Boredom: ${boredomLv}`);
    $hungerEl.text(`Hunger: ${hungerLv}`);
    $tiredEl.text(`Tired: ${tiredLv}`);
  }
    console.log("clicked play")
});

/* === Feed ===
 - target feed button with onclick event listener
 - hunger decrement by 2
 - tired increment by 1
 - update stats
*/

$feedBtn.on("click", function (event){
  if(hungerLv >= 2){
    hungerLv -= 2;
    tiredLv += 1;
    $hungerEl.text(`Hunger: ${hungerLv}`);
    $tiredEl.text(`Tired: ${tiredLv}`);
  }
    console.log("clicked feed")
});

/* === Rest === 
 - target rest button with onclick event listener
 - tired decrement by 3
 - hunger increment by 1
 - update stats
*/

$restBtn.on("click", function (event){
  if(tiredLv >= 3){
    tiredLv -= 3;
    hungerLv += 1;
    $hungerEl.text(`Hunger: ${hungerLv}`);
    $tiredEl.text(`Tired: ${tiredLv}`);
  }
  console.log("clicked rest")
});

/* === Game clock === */

let time = 0;

const setTimer = function setTimer(){
  const timer = setInterval(function (){
    time++;
    console.log("running", time)
    aging();
    if (age === 15){
      clearInterval(timer);
    }
    boring();
    if (boredomLv >= 10){
      clearInterval(timer);
    }

  }, 1000);
}

/* === Aging === */

const aging = function aging(){
  if (time % 60 === 0){
    age++;
    $ageEl.text(`Age: ${age}`);
  }
}

/* === boring === */
const boring = function boring(){
  if (time % 5 === 0){
    boredomLv++;
    $boredomEl.text(`Boredom: ${boredomLv}`);
  }
}


/* === Start Modal === */

const setName = function setName(){
  const $getName = $("input").val();
  $nameEl.text(`Name: ${$getName}`);
  console.log($getName);
};

$("#btn__submit").on("click", function (event){
  setName();
  $(".start__modal").css("display", "none");
  setTimer();
});