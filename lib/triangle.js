const Shape = require('./shapes.js');

class triangle extends Shape {
    constructor (color) {
        super(color);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = triangle;