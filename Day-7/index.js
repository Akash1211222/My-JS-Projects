const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height ==='' || height <0 || isNaN(height)){
    results.innerHTML = `please provide valid height ${height}`;
  }
  else if(weight =='' || weight <0 || isNaN(weight)){
    results.innerHTML = `please provide valid weight ${weight}`;
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    if(bmi <18.6){
      results.innerHTML = `you are Under Weight <span>${bmi}</span>`;
    }else if(bmi >18.6 && bmi <24.9){
      results.innerHTML = `you are Normal Rang <span>${bmi}</span>`;
    }else{
      results.innerHTML = `you are Overweight <span>${bmi}</span>`;
    }
  }




})