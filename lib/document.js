const circle = require('./circle.js');
const triangle = require('./triangle.js');
const square = require('./square.js');

function createDocument(logo, textColor, shape, shapeColor) {
    let shapeObject;

    switch(shape.toLowerCase()) {
        case 'circle':
            shapeObject = new circle(shapeColor).render();
            break;
        case 'triangle':
            shapeObject = new triangle(shapeColor).render();
            break;
        case 'square':
            shapeObject = new square(shapeColor).render();
            break;
        default:
            console.log('Invalid shape');
            return;
    }
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeObject}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}"> ${logo}</text>
        </svg>`;
}

module.exports = { createDocument };