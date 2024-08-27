const { Circle, Triangle, Square } = require('../lib/shapes');

// A simply test to render a green circle
test('Circle render', () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});


//A simple test for triangle thats red
test('Triangle render', () => {
    const shape = new Triangle();
    shape.setColor("red");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
});

// A simple test for a blue square
test('Square render', () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
});