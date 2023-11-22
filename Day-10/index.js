// generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
      color += hex[Math.floor(Math.random()*16)];
    }
    return color;
  }
  let intervalId;
  const startChangeInColor = function(){
    if(!intervalId){
      intervalId = setInterval(changeBgColor,100);
    }
  
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor();
    } 
  };
  
  
  const stopChangeInColor = function(){
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector("#start").addEventListener('click', startChangeInColor);
  
  document.querySelector("#stop").addEventListener('click', stopChangeInColor);