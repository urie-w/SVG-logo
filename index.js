const fs = require('fs');
const inquirer = require("inquirer");
const question = require('./lib/shapes');
const {Circle, Triangle, Square} = require('./lib/shapes');
// const circle = require('./Library/shape.js');
// const triangle = require('./Library/shape.js');
// const square = require('./Library/shape.js');
// const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white", "gray", "brown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow",
//     "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

class Svg{
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement || ''}${this.textElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

//Defines the questions for the
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters or less:',
        validate: (input) => input.length <= 3 || 'Text must be 3 characters or less'
    }, 
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape:',
    }
];

module.exports = questions;