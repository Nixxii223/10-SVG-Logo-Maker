import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hex):',
  },
  {
    type: 'input',
    name: 'shape',
    message: 'Choose shape (triangle, square, circle):',
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hex):',
  },
])
.then(async userInput => {
  // Continue with the rest of your code
  await generateLogo(userInput);
  console.log('Generated logo.svg');
})
.catch(error => {
  console.error('Error:', error);
});

async function generateLogo(userInput) {
    const svgContent = createSVG(userInput);
  
    // Save the SVG to a file
    try {
        await writeFile('logo.svg', svgContent);
        console.log('SVG saved to logo.svg');
      } catch (error) {
        console.error('Error saving SVG:', error);
      }
  }

function createSVG(userInput) {
    const { shape, textColor, text, shapeColor } = userInput;

  switch (shape.toLowerCase()) {
    case 'triangle':
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,0 0,200 300,200" fill="${shapeColor}" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
                  ${text}
                </text>
              </svg>`;
    case 'square':
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="${shapeColor}" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
                  ${text}
                </text>
              </svg>`;
    case 'circle':
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="100" fill="${shapeColor}" />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">
                  ${text}
                </text>
              </svg>`;
    default:
      throw new Error(`Invalid shape: ${shape}`);
  }
}

  




  //GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered