const colors = ['bat', 'ball', 'wicket'];

let randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);

document.querySelector('#may').innerText = 'Choose one button to start the game';

document.getElementById('ballButton').onclick = function() {
    if (randomColor === 'ball') {
        document.querySelector('#may').innerText = 'THE GAME IS DRAW';
        alert("YOU CHOOSE BALL BUT COMPUTER CHOOSE BALL")
    } else if (randomColor === 'wicket') {
        document.querySelector('#may').innerText = 'YOU WON THE GAME';
        alert("YOU CHOOSE BALL BUT COMPUTER CHOOSE WICKET")
    } else {
        document.querySelector('#may').innerText = 'YOU LOSE THE GAME';
        alert("YOU CHOOSE BALL BUT COMPUTER CHOOSE BAT")
    }
    setTimeout(function() {
        location.reload();  }, 1000); 
};

document.getElementById('batButton').onclick = function() {
    if (randomColor === 'ball') {
        document.querySelector('#may').innerText = 'YOU WON THE GAME';
        alert("YOU CHOOSE BAT BUT COMPUTER CHOOSE BALL")
    } else if (randomColor === 'wicket') {
        document.querySelector('#may').innerText = 'YOU LOSE THE GAME';
        alert("YOU CHOOSE BAT BUT COMPUTER CHOOSE WICKET")
    } else {
        document.querySelector('#may').innerText = 'THE GAME IS DRAW';
        alert("YOU CHOOSE BAT BUT COMPUTER CHOOSE BAT")
    }
    setTimeout(function() {
        location.reload(); 
    }, 1000); 
};

document.getElementById('wicketButton').onclick = function() {
    if (randomColor === 'ball') {
        document.querySelector('#may').innerText = 'YOU LOSE THE GAME';
        alert("YOU CHOOSE WICKET BUT COMPUTER CHOOSE BALL")
    } else if (randomColor === 'wicket') {
        document.querySelector('#may').innerText = 'THE GAME IS DRAW';
        alert("YOU CHOOSE WICKET BUT COMPUTER CHOOSE WICKET")
    } else {
        document.querySelector('#may').innerText = 'YOU WON THE GAME';
        alert("YOU CHOOSE WICKET BUT COMPUTER CHOOSE BAT")
    }
    setTimeout(function() {
        location.reload(); 
    }, 1000); 
};



