const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let width;
let height;

// set the number of canvas pixels, scaled for screen resolution
let pxScale = window.devicePixelRatio;

// use img from DOM
const image = document.getElementById('beach');
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
    let path = new Path2D("M50.964466094067 1.4669914110089a5 5 0 0 1 7.0710678118655 0l49.497474683058 49.497474683058a5 5 0 0 1 0 7.0710678118655l-49.497474683058 49.497474683058a5 5 0 0 1 -7.0710678118655 0l-49.497474683058 -49.497474683058a5 5 0 0 1 0 -7.0710678118655");
        
    context.save();
        
    //scale and move it to the side
    context.scale(4, 4);
    context.translate(60, 15);
       
    context.fillStyle = 'hsla(' + color + ', 100%, 50%, 0.3)';
        
    if (color >= 360) {
        color = 0;
    }
    color += 0.2;

    // pixel compositing
    context.globalCompositeOperation = 'lighter';
          
       
    context.fill(path);
          
    context.restore();
          
    requestAnimationFrame(draw);
};

// when the whole page has loaded, including all dependent resources
window.addEventListener('load', setup);