//creates a shape class for triangle, circle and square to inherit from 
class Shape {
    //color is taken as a parameter for the constructor
    constructor(color) {
        this.color = color;
    }
    //sets the color and then takes the color parameter 
    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Not implemented');
    }
}

//declares a triangle class and identifies that it will iherit from the shape class
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    //this render overrides the render in the parent shape class 
    render() {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,0 0,100 100,100" fill="${this.color}" />
            </svg>`;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill="${this.color}" />
            </svg>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="${this.color}" />
            </svg>`;
    }
}

//exports the Triangle, Circle, and Square objects to be used for the shapes.test.js
module.exports = {
    Triangle,
    Circle,
    Square
};


