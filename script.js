const container = document.querySelector('#container')
let color = "white";

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
  function Coloring(){
    this.style.background = color;
}
}
//determines which div mouse is on and changes it's color
  const colorChange = Array.from(document.querySelectorAll('.divColor'));
  colorChange.forEach(colorChange => colorChange.addEventListener('mouseover', Coloring));
}

document.getElementById("reset").onclick = function(){
  window.location.reload();
}
document.getElementById("color-red").onclick = function(){
   color = "red";
}
document.getElementById("color-blue").onclick = function(){
  color = "blue";
}
document.getElementById("color-purple").onclick = function(){
  color = "purple";
}
document.getElementById("color-pink").onclick = function(){
  color = "pink";
}
document.getElementById("color-yellow").onclick = function(){
  color = "yellow";
}


  //prompts user for grid size number
function GridNum(){
  const num = prompt("enter a number between 2 and 100 to form a grid -- 10 = 10x10 grid")
  if(isNaN(num)){
    GridNum();}
  else if(num < 2 || num > 100){
    GridNum();
}
  else{
    return divMake(num);
  }
}
GridNum();




