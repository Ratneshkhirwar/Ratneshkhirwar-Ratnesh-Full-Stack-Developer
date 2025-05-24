let currentcount = 1
let brick = ['<div class="brick"></div>']
function add() {
    if (currentcount < 15 ) {
        currentcount++
        brick.push('<div class="brick"></div>');
        document.getElementById("right-container").innerHTML = brick
    }

        document.getElementById("count").innerHTML = currentcount
        document.getElementById("count").style.color = "lightgreen"
}
function removeBrick() {
    if (currentcount <= 15 && currentcount >= 1) {
        currentcount--
        brick.pop('<div class="brick"></div>');
        document.getElementById("right-container").innerHTML = brick
    }
        document.getElementById("count").innerHTML = currentcount
        document.getElementById("count").style.color = "#ff5353"
    
}