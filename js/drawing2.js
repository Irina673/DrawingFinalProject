const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let width;
let height;

// set the number of canvas pixels, scaled for screen resolution
let pxScale = window.devicePixelRatio;

// use img from DOM
const image = document.getElementById('orangetree');
    
let color = 0;
      
function setup() {
    // fixed canvas size
    width = canvas.width;
    height = canvas.height;

    // set the CSS display size
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    canvas.width = width * pxScale;
    canvas.height = height * pxScale;

    // normalize the coordinate system
    context.scale(pxScale, pxScale);

    draw();
}

function draw() {
    //clear the canvas
    context.clearRect(0, 0, width, height);
          
    // drawing an bitmap image (x, y, width, height)
    context.drawImage(image, 0, 0, 900, 600);
          
    // drawing an SVG path
    let path = new Path2D("M77.598300562505 5.2781915818187a100 100 0 0 1 61.803398874989 0l4.7705572656712 1.5500480176236a100 100 0 0 1 50 36.327126400268l2.9483665354626 4.0580783943329a100 100 0 0 1 19.098300562505 58.778525229247l0 5.0160607534187a100 100 0 0 1 -19.098300562505 58.778525229247l-2.9483665354626 4.0580783943329a100 100 0 0 1 -50 36.327126400268l-4.7705572656712 1.5500480176236a100 100 0 0 1 -61.803398874989 0l-4.7705572656712 -1.5500480176236a100 100 0 0 1 -50 -36.327126400268l-2.9483665354626 -4.0580783943329a100 100 0 0 1 -19.098300562505 -58.778525229247l0 -5.0160607534187a100 100 0 0 1 19.098300562505 -58.778525229247l2.9483665354626 -4.0580783943329a100 100 0 0 1 50 -36.327126400268");
        
    context.save();
          
       
    //scale and move it to the side
    context.scale(2.5, 2.5);
    context.translate(80, 10);
          
    context.fillStyle = 'hsla(' + color + ', 100%, 50%, 0.4)';
        
    if (color >= 360) {
        color = 0;
    }
    color += 0.25;

    // pixel compositing
    context.globalCompositeOperation = 'multiply';
          
    context.fill(path);
          
    context.restore();

    requestAnimationFrame(draw);

};

// when the whole page has loaded, including all dependent resources
window.addEventListener('load', setup);