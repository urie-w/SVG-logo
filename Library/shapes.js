import * as fs from 'fs';
import * as fs from 'fs';
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
        this.textColor = "textColor";
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

//Created shape thats selected
switch (answers.shape) {
    case "Circle":
        shape = new Circle();
        break;
    case "Triangle":
        shape = new Triangle();
        break;
    case "Square":
        shape = new Square();
        break;
}

// Set color of shape
shape.setColor(answers.shape_color);

const svgContent = `
<svg version="1.1" width="300" height="200" xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX">
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