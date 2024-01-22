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

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

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

module.exports = {
    Triangle,
    Circle,
    Square
};


