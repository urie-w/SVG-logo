const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('../Library/shapes.js');

class Shape {
    constructor(color) {
        this.color = "";
        this.text = "";
        this.textColor = "";
    }

    setColor(color) {
        this.color = color;
    }

    setText(text, textColor) {
        this.text = text;   
        this.textColor = textColor;
    }
    renderText() {
        if (this.text && this.textColor) {
            return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
        }
        return "";
        }
    }

    class Circle extends Shape {
        render() {
            return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
        }
    }

    // Ask user questions
inquirer.prompt(questions).then(answers => {
let shape;

console.log(answers);

//Choose shape based on user input
console.log(answers.shape);
if (answers.shape === 'Circle') {
} else if (answers.shape === 'Square') {
    shape = 'Square';
} else if (answers.shape === 'Triangle') {
    shape = 'Triangle';
}

// Set color of shape
shape.setColor(answers.shape_color);

const svgContent = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shape.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.text_color}">${answers.text}</text>
</svg>`;

if (!fs.existsSync('output'))   {
    fs.mkdirSync('output');
}

//Writes the SVG to output folder
fs.writeFileSync('output/logo.svg', svgContent);

//output success
console.log('Successfully Generated!');
})