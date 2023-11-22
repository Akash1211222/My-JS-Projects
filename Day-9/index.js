let randomNumber = parseInt(Math.random() * 100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess=[];

let numGuess =1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid Number')
  }else if(guess <1){
    alert('Please enter a Number More than 1')
  }else if(guess > 100){
    alert('Please enter a Number Less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess >=10){
      displayGuess(guess)
      displayMess(`Game Over. and the random no was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}


function checkGuess(guess){
  if(guess === randomNumber){
    displayMess(`You are lucky my Dear`)
    endGame()
  }else if(guess === 17){
      displayMess(`You are incorrect ${randomNumber} Times ....`)
  }
  else if(guess < randomNumber){
    displayMess(`You are incorrect the Number is low`)
  }else if(guess > randomNumber){
    displayMess(`You are incorrect the Number is high`)
  }
}

function displayGuess(guess){
   userInput.value = ''
   guessSlot.innerHTML += `${guess}.  `
   numGuess++;
   remaining.innerHTML = `${11 - numGuess}`
}

function displayMess(mesage){
  lowOrHi.innerHTML = `<h2>${mesage}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame"> START NEW GAME</h2>`
  startOver.appendChild(p)
  newGame()
  playGame = false;
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',(e)=>{
    randomNumber = parseInt(Math.random() * 100+1);
    prevGuess=[]
    numGuess =1
    guessSlot.innerHTML =''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })
}
