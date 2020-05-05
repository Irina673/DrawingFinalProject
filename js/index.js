const canvas1 = document.getElementById('c1');
const canvas2 = document.getElementById('c2');
const canvas3 = document.getElementById('c3');
            
const context1 = canvas1.getContext('2d');
const context2 = canvas2.getContext('2d');
const context3 = canvas3.getContext('2d');
            
let width;
let height;
            
// set the number of canvas pixels, scaled for screen resolution
let pxScale = window.devicePixelRatio;
            
// how many pixels the words should move per function call
let pixelShift = 5;
            
function setup() {
    // fixed canvas size
    width = canvas1.width;
    height = canvas1.height;
    width = canvas2.width;
    height = canvas2.height;
    width = canvas3.width;
    height = canvas3.height;
                
    // set the CSS display size
    canvas1.style.width = width + 'px';
    canvas1.style.height = height + 'px';
    canvas2.style.width = width + 'px';
    canvas2.style.height = height + 'px';
    canvas3.style.width = width + 'px';
    canvas3.style.height = height + 'px';
                
    canvas1.width = width * pxScale;
    canvas1.height = height * pxScale;
    canvas2.width = width * pxScale;
    canvas2.height = height * pxScale;
    canvas3.width = width * pxScale;
    canvas3.height = height * pxScale;

    // normalize the coordinate system
    context1.scale(pxScale, pxScale);
    context2.scale(pxScale, pxScale);
    context3.scale(pxScale, pxScale);

    draw();
}
            
function draw() {
                
    // drawing text in first canvas
    context1.font = "40px serif";
    context1.textBaseline = "middle";
    context1.textAlign = "center";
    context1.strokeStyle = 'black'; 
    context1.strokeText("water", width/6, height/6);
                
    // drawing text in second canvas
    context2.font = "40px serif";
    context2.textBaseline = "middle";
    context2.textAlign = "center";
    context2.strokeStyle = 'black'; 
    context2.strokeText("land", width/6, height/6);
                
    // drawing text in third canvas
    context3.font = "40px serif";
    context3.textBaseline = "middle";
    context3.textAlign = "center";
    context3.strokeStyle = 'black'; 
    context3.strokeText("air", width/6, height/6);
}

playaudio = () => document.getElementById("mymusic").play();

//when the whole page has loaded run setup and playaudio functions
window.addEventListener('load', setup);
window.addEventListener('load', playaudio);
                    
//javascript to change canvas colors on hover
watercolor = () => canvas1.style.backgroundColor = "lightblue";
landcolor = () => canvas2.style.backgroundColor = "gold";
aircolor = () => canvas3.style.backgroundColor = "snow";
            
regularcolor = () => event.currentTarget.style.background = "aliceblue";
            
// event listeners
canvas1.addEventListener('mouseover', watercolor);
canvas2.addEventListener('mouseover', landcolor);
canvas3.addEventListener('mouseover', aircolor);
            
canvas1.addEventListener('mouseout', regularcolor);
canvas2.addEventListener('mouseout', regularcolor);
canvas3.addEventListener('mouseout', regularcolor);
            
            
            