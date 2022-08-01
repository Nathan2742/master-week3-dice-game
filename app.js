

var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
    }
}

function printNumber(number) {
    var score = document.getElementById('score');
    score.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
};