const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomize = document.querySelector('#randomize');


function initializeInputs()
{
    const col1 = '#ff0000';
    const col2 = '#ffff00';
    body.style.background = `linear-gradient(to right,${col1},${col2})`;
    color1.value = col1;
    color2.value = col2;
    css.textContent = body.style.background; 

}
initializeInputs();

color1.addEventListener('input',colorChange);
color2.addEventListener('input',colorChange);
randomize.addEventListener('click',randomColor);
function colorChange(){
    body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
    css.textContent = body.style.background;
}




function randomColor()
{
    let col1 = [rand(),rand(),rand()];
    let col2 = [rand(),rand(),rand()];    
    let hex1 = convertToHex(col1);
    let hex2 = convertToHex(col2); 
    body.style.background = `linear-gradient(to right, ${hex1},${hex2})`;
    color1.value = hex1;
    color2.value = hex2;
    css.textContent = body.style.background;
}
function convertToHex(numbers){
    
    let hex = numbers.map(num=>{
        let converted = num.toString(16);
        if(converted.length < 2)
        {
            converted += converted;
        }
        return converted;
    }); 
    return `#${hex.join('')}`;
}
function rand()
{
    return Math.floor(Math.random()*255);
}