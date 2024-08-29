const { Circle, Triangle, Square } = require('../lib/shapes');
const { Shape } = require('../lib/shapes');


describe ('Shape', () => {
    it('should set color for the shape', () => { 
        const shape = new Shape();
        shape.setColor('red');
        expect(shape.color).toEqual('red');
    });
});

describe('Square', () => {
    it('should render a red square', () => {
        const shape = new Square();
        shape.setColor("red");
        const expectedSvg = '<rect x="90" y="40" width="120" height="120" fill="red" />';
        expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />');
    });
});

describe('Circle', () => {
    it('should render a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="blue" />';
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});

describe('Triangle', () => {
    it('should render a green triangle', () => {
        const shape = new Triangle();
        shape.setColor("green");
        const expectedSvg = '<polygon points="150, 18 244, 182 56, 182" fill="green" />';
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    });
});