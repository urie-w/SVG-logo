const inquirer = require('inquirer');
const {join} = require("path");
const {writeFile} = require("fs/promises");
const {createDocument} = require("./lib/document");
const outputPath = 'logo.svg';


class CLI{
    constructor() {
        this.logo = '';
        this.textColor = '';
        this.shapeColor = '';
        this.shape = '';
    }
    run() {
        return inquirer.prompt([
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
            }
        ])

        .then(({logo, textColor}) => {
            this.logo = logo;
            this.textColor = textColor;
            return this.addAShape();
        })
        .then(()=> {
            console.log('Logo:', this.logo);
            console.log('Text color:', this.textColor);
            console.log('Shape:', this.shape);
            console.log('Shape Color:', this.shapeColor);

            const svgContent = createDocument(this.shape, this.shapeColor, this.logo, this.textColor);
            const outputPath = join(__dirname, 'output', 'logo.svg');
            return writeFile(outputPath, svgContent);
            
                // join(__dirname, '..', 'examples', 'logo.svg'),
            //    svgContent
            // );
        })
        .then(() => {
            console.log('Generated logo.svg');
        })
        .catch((err) => {
            console.log(err);
            console.log('Oops. Something went wrong.');
        });
    }

        addAShape() {
            return inquirer.prompt([
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose a shape:',
                    choices: ['circle', 'triangle', 'square']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter a color for the shape:',
                }
            ])
            .then(({shape, shapeColor}) => {
                this.shape = shape;
                this.shapeColor = shapeColor;
            });
        }
}

module.exports = CLI;