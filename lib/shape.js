class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Not implemented');
    }
}

module.exports = Shape;