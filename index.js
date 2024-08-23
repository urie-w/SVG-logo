const inquirer = require('inquirer');
const fs = require('fs');
// const circle = require('./Library/shape.js');
// const triangle = require('./Library/shape.js');
// const square = require('./Library/shape.js');
// const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white", "gray", "brown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow",
//     "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

const {Circle, Triangle, Square} = require('./Library/shape.js');
const { input } = require('@inquirer/prompts');

//Defines the questions for the
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 characters or less:',
        validate: (input) <= 3 || 'Text must be 3 characters or less'
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


