const container = document.querySelector('#container')

const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

// creats multiple divs and assigns them a class.
function divMake(numOf){
  
  for (let i = 0; i < numOf; i++){
    let div = document.createElement('div');
      content.appendChild(div);
      let divSelect = `square${i}`
      div.classList.add(divSelect);
      div.style.display = "flex" ;
      div.style.flex = "1 0 auto";
      div.style.flexDirection = "row";

    for (let j = 0; j < numOf; j++){                // creates n divs to make grid of equal squares.
      let divInDiv = document.createElement('div');
      div.appendChild(divInDiv);
      divInDiv.classList.add('divColor')
      divInDiv.style.background = "black";
      divInDiv.style.flex = "1 0 auto";
      
    }
  function changeColor(){
    
    this.style.background = "blue";
  }
  }

  const colorChange = Array.from(document.querySelectorAll('.divColor'));
  colorChange.forEach(colorChange => colorChange.addEventListener('mouseover', changeColor));
  



  

  
  }

  
  

    



  
  






  

const testNum = 16;
divMake(testNum)



