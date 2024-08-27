class Shape {
    constructor(color) {
        this.color = "";
        this.text = "";
        this.textColor = "";
    }

    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error('render method must be implemented');
    }
}

module.exports = Shape;