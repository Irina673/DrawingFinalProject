const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let width;
let height;

// set the number of canvas pixels, scaled for screen resolution
let pxScale = window.devicePixelRatio;

// use img from DOM
const image = document.getElementById('waterfall');
    
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
    let path = new Path2D("M73.5 1.3867513459482a10 10 0 0 1 10 0l59.282032302755 34.226497308104a10 10 0 0 1 5 8.6602540378444l0 68.452994616207a10 10 0 0 1 -5 8.6602540378444l-59.282032302755 34.226497308104a10 10 0 0 1 -10 0l-59.282032302755 -34.226497308104a10 10 0 0 1 -5 -8.6602540378444l1.0902233405161e-13 -68.452994616207a10 10 0 0 1 5 -8.6602540378444");
        
    context.save();
          
    context.scale(3.5, 3.5);
    context.translate(50, 5);
        
    context.fillStyle = 'hsla(' + color + ', 100%, 50%, 0.3)';
        
    if (color >= 360) {
        color = 0;
    }
    color += 0.25;

    // pixel compositing
    context.globalCompositeOperation = 'lighter';
          
    context.fill(path);
          
    context.restore();

    requestAnimationFrame(draw);

};

// when the whole page has loaded, including all dependent resources
window.addEventListener('load', setup);
    