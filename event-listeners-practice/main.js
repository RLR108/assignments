const square = document.getElementById('squarey');
square.addEventListener("mouseover", function mouseOver(event){
    const square = document.getElementById('squarey')
    square.style.backgroundColor = 'blue';
});

square.addEventListener("mouseout", function mouseOut(event){
    const square = document.getElementById('squarey')
    square.style.backgroundColor = 'black';
});

square.addEventListener("mousedown", function mouseDown(event){
    const square = document.getElementById('squarey')
    square.style.backgroundColor = 'red';
});

square.addEventListener("mouseup", function mouseUP(event){
    const square = document.getElementById('squarey')
    square.style.backgroundColor = 'yellow';
});
square.addEventListener("dblclick", function dblclick(event){
    const square = document.getElementById('squarey')
    square.style.backgroundColor = 'green';
});
square.addEventListener("dblclick", function dblclick(event){
    const square = document.getElementById('squarey')
    square.style.backgroundColor = 'green';
});

window.addEventListener('keydown', (Event) =>  {
    if(Event.key === 'r' )
     square.style.backgroundColor = 'red'
});
window.addEventListener('keydown', (Event) =>  {
    if(Event.key === 'b' )
     square.style.backgroundColor = 'blue'
});
window.addEventListener('keydown', (Event) =>  {
    if(Event.key === 'g' )
     square.style.backgroundColor = 'green'
});
window.addEventListener('keydown', (Event) =>  {
    if(Event.key === 'y' )
     square.style.backgroundColor = 'yellow'
});
window.addEventListener('keydown', (Event) =>  {
    if(Event.key === 'o' )
     square.style.backgroundColor = 'orange'
});

