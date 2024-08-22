const inquirer = require('inquirer');
const fs = require('fs');
const circle = require('./Library/shape.js');
const triangle = require('./Library/shape.js');
const square = require('./Library/shape.js');
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "black", "white", "gray", "brown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow",
    "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

const shapes = ["circle", "triangle", "square"];

let textInput = "";
const textInputLength = async (text) => {
    if (text.length > 3) {
        console.log("Text must be less than 3 characters");
        return false;
    } else {
        return true;
    }
}
const textPrompt = async () => {
    const res = await inquirer.prompt([{
        type: 'input',
        name: 'userInput',
        message: 'Enter up to three characters for the logo',
        validate: textInputLength
    }])

    return res.userInput;
}

const colorOptions = async (message) => {
    const res = await inquirer.prompt([{
        type: 'list',
        name: 'userColor',
        message: `enter ${message} color, or a hex value`,
        choices: colorsValues
    }])
    colorOptions = res.userColor;
    return colorOptions;
}
