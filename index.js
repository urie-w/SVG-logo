const {Shape, Triangle, Circle, Square} = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'logo',
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

inquirer.prompt(questions).then((answers) => {
    const {text, textColor, shape, shapeColor} = answers;
    let shapeObject = new Shape();
    let svgContent = '';

    switch (shape) {
        case 'Circle':
            const circle = new Circle();
            circle.setColor(shapeColor);
            svgContent = circle.render();
            break;
            case 'Triangle':
            const triangle = new Triangle();
            triangle.setColor(shapeColor);
            svgContent = triangle.render();
            break;
            case 'Square':
                const square = new Square();
                square.setColor(shapeColor);
                svgContent = square.render();
                break;
    }
  
    let x = 150, y = 120;
    if(shape === 'Triangle') {
        y = 130;
    } else if(shape === 'Square') {
        y = 145;
    }

    const svgLogo = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${svgContent}
        <text x="${x}" y="${y}" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', svgLogo);
    console.log('Generated logo.svg');
});

// class CLI{
//     constructor() {
//         this.logo = '';
//         this.textColor = '';
//         this.shapeColor = '';
//         this.shape = '';
//     }
//     run() {
//         return inquirer.prompt([
//             {
//                 type: 'input',
//                 name: 'logo',
//                 message: 'Enter 3 characters or less:',
//                 validate: (input) => input.length <= 3 || 'Text must be 3 characters or less'
//             }, 
//             {
//                 type: 'input',
//                 name: 'textColor',
//                 message: 'Enter a color for the text:',
//             }
//         ])

//         .then(({logo, textColor}) => {
//             this.logo = logo;
//             this.textColor = textColor;
//             return this.addAShape();
//         })
//         .then(()=> {
//             console.log('Logo:', this.logo);
//             console.log('Text color:', this.textColor);
//             console.log('Shape:', this.shape);
//             console.log('Shape Color:', this.shapeColor);

//             const svgContent = createDocument(this.shape, this.shapeColor, this.logo, this.textColor);
//             const outputPath = join(__dirname, 'output', 'logo.svg');
//             return writeFile(outputPath, svgContent);
            
//                 // join(__dirname, '..', 'examples', 'logo.svg'),
//             //    svgContent
//             // );
//         })
//         .then(() => {
//             console.log('Generated logo.svg');
//         })
//         .catch((err) => {
//             console.log(err);
//             console.log('Oops. Something went wrong.');
//         });
//     }

//         addAShape() {
//             return inquirer.prompt([
//                 {
//                     type: 'list',
//                     name: 'shape',
//                     message: 'Choose a shape:',
//                     choices: ['circle', 'triangle', 'square']
//                 },
//                 {
//                     type: 'input',
//                     name: 'shapeColor',
//                     message: 'Enter a color for the shape:',
//                 }
//             ])
//             .then(({shape, shapeColor}) => {
//                 this.shape = shape;
//                 this.shapeColor = shapeColor;
//             });
//         }
// }

// module.exports = CLI;