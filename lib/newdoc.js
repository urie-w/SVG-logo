const circle = require('./lib/circle.js');
const triangle = require('./lib/triangle.js');
const square = require('./lib/square.js');

function createDoc(logo, textcolor, shape, shapecolor) {
    let shapeObject;

    switch(shape.toLowerCase()) {
        case 'circle':
            shapeObject = new circle(shapecolor).render();
            break;
        case 'triangle':
            shapeObject = new triangle(shapecolor).render();
            break;
        case 'square':
            shapeObject = new square(shapecolor).render();
            break;
        default:
            console.log('Invalid shape');
            return;
    }
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeObject}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}"> ${logo}</text>
        </svg>`;
}

module.exports = { createDoc };