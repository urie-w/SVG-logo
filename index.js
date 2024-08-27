const inquirer = require("inquirer");
const {join} = require("path");
const {writeFile} = require("fs/promises");
const {createDocument} = require("./newdoc.js");

class cli{
    constructor() {
        this.logo = '';
        this.textcolor = '';
        this.shapecolor = '';
        this.text = '';
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
                name: 'textcolor',
                message: 'Enter a color for the text:',
            }
        ])

        .then(({logo, textcolor}) => {
            this.logo = logo;
            this.textcolor = textcolor;
            return this.addAShape();
        })
        .then(()=> {
            return writeFile(
                join(__dirname, '..', 'examples', 'logo.svg'),
                createDocument(this.logo, this.textcolor, this.shapecolor)
            );
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
                    name: 'shapecolor',
                    message: 'Enter a color for the shape:',
                }
            ])
            .then(({shape, shapecolor}) => {
                this.shapecolor = shapecolor;
                this.shape = shape;
            });
        }
}

module.exports = cli;