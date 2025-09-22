let score_homeEl = document.getElementById("score-home")
let score_guestEl = document.getElementById("score-guest")

let count_home = 0 
let count_guest = 0

function incrementByOneHome() {
    count_home += 1
    score_homeEl.textContent = count_home
}

function incrementByTWoHome() {
    count_home += 2
    score_homeEl.textContent = count_home
}

function incrementByThreeHome() {
    count_home += 3
    score_homeEl.textContent = count_home
}

function incrementByOneguest() {
    count_guest += 1
    score_guestEl.textContent = count_guest
}

function incrementByTWoguset() {
    count_guest += 2
    score_guestEl.textContent = count_guest
}

function incrementByThreeguest() {
    count_guest += 3
    score_guestEl.textContent = count_guest
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function newGame() {
    count_home = 0 
    count_guest = 0
    score_homeEl.textContent = count_home
    score_guestEl.textContent = count_guest
}