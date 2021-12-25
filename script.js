let johnScore1 = prompt("John\'s Team Score-1");
let johnScore2 = prompt("John\'s Team Score-2");
let johnScore3 = prompt("John\'s Team Score-3");
let mikeScore1 = prompt("Mike\'s Team Score-1");
let mikeScore2 = prompt("Mike\'s Team Score-2");
let mikeScore3 = prompt("Mike\'s Team Score-3");
let johnScoreAvarege = ((parseInt(johnScore1) + parseInt(johnScore2) + parseInt(johnScore3))/3);
let mikeScoreAvarege = ((parseInt(mikeScore1) + parseInt(mikeScore2) + parseInt(mikeScore3))/3);

if (johnScoreAvarege > mikeScoreAvarege) {
    alert(`John\'s team won with ${Math.round(johnScoreAvarege)} points.`)
} else if (johnScoreAvarege < mikeScoreAvarege) {
    alert(`Mike\'s team won with ${Math.round(mikeScoreAvarege)} points.`)
} else {
    alert(`Two teamst tied with ${Math.round(johnScoreAvarege)} .`)
}