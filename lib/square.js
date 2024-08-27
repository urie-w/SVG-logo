const Shape = require('./shapes.js');

class square extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>`;
    }
}

module.exports = square;