const container = document.querySelector('#container')

const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

// creats multiple divs and assigns them a class. -- NEED TO ADD STYLES AND NAME THE CLASS TOO!
function divMake(numOf){
  
  for (let i = 0; i < numOf; i++){
    
    let div = document.createElement('div');
      content.appendChild(div);
      div.classList.add(`square${i}`);
      x = `square${i}`;
      div.style.flex = "1 0 auto";
      div.style.background = "black";
      div.style.display = "flex";
      div.style.flexDirection = "row";
  }
  

    
}


//function classCreate(numOf){ 
  //for (let i =0; i < numOf; i++){
    
   // divMake(`square${i}`, numOf);
    
    //}
  
//}

  

const testNum = 6;
divMake(testNum)

//square.style.width = `${960 / gridAmount}px`;
//square.style.height = `${500 / gridAmount}px`;

