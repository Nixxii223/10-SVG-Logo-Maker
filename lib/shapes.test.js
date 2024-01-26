//imports Triangle, Circle, and Square objects from shapes.js
const { Triangle, Circle, Square } = require('../lib/shapes.js')

//sets the test parameters 
describe('Shape Classes', () => {
  test('Triangle should render correctly', () => {
      const triangle = new Triangle('blue');
      const svg = triangle.render();
      expect(svg).toContain('<polygon points="50,0 0,100 100,100" fill="blue" />');
  });

  test('Circle should render correctly', () => {
      const circle = new Circle('red');
      const svg = circle.render();
      expect(svg).toContain('<circle cx="50" cy="50" r="50" fill="red" />');
  });

  test('Square should render correctly', () => {
      const square = new Square('green');
      const svg = square.render();
      expect(svg).toContain('<rect width="100%" height="100%" fill="green" />');
  });
});


