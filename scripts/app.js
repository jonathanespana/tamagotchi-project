console.log("=== Connected! ===")

// game start stats: age, boredom, hunger, tired

let age = 0;
let boredomLv = 1;
let hungerLv = 1;
let tiredLv = 1;

// query game stats:  name, age, boredom, hunger, tired
const $nameEl = $("#name");
const $ageEl = $("#age");
const $boredEl = $("#bored");
const $hungerEl = $("#hunger");
const $tiredEl = $("#tired");

// set game start stats

$ageEl.text(`Age: ${age}`);
$boredEl.text(`Boredom: ${boredomLv}`);
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
 - updated stats
*/

$playBtn.on("click", function (event) {
  if(boredomLv > 2)
    boredomLv -= 2;
    hungerLv += 1;
    tiredLv += 1;
    $boredEl.text(`Boredom: ${boredomLv}`);
    $hungerEl.text(`Hunger: ${hungerLv}`);
    $tiredEl.text(`Tired: ${tiredLv}`);
    console.log("clicked play")
});