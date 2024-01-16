const Shape = require('../lib/shape.js');

test('Triangle class should render SVG with correct color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const expectedSVG = '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">'
                      + '  <polygon points="50,0 0,100 100,100" fill="blue" />'
                      + '</svg>';
    expect(triangle.render()).toEqual(expectedSVG);
});

test('Circle class should render SVG with correct color', () => {
    const circle = new Circle();
    circle.setColor('green');
    const expectedSVG = '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">'
                      + '  <circle cx="50" cy="50" r="50" fill="green" />'
                      + '</svg>';
    expect(circle.render()).toEqual(expectedSVG);
});

test('Square class should render SVG with correct color', () => {
    const square = new Square();
    square.setColor('yellow');
    const expectedSVG = '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">'
                      + '  <rect width="100%" height="100%" fill="yellow" />'
                      + '</svg>';
    expect(square.render()).toEqual(expectedSVG);
});



