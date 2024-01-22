//imports inquirer to be used for the prompts
import inquirer from 'inquirer';
//imports the writeFile function from fs/promises to allow for using writeFile with promises
import { writeFile } from 'fs/promises';

//prompts the user for input on content of SVG logo
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
//asynchronous function awaiting the generateLogo function to console log whether the logo was successful or if an error was caught
.then(async userInput => {
  await generateLogo(userInput);
  console.log('Generated logo.svg');
})
.catch(error => {
  console.error('Error:', error);
});

//this function generates the SVG logo using the input from the user and saves the file or produces an error if the file is not saved
async function generateLogo(userInput) {
    const svgContent = createSVG(userInput);

    try {
        await writeFile('logo.svg', svgContent);
        console.log('SVG saved to logo.svg');
      } catch (error) {
        console.error('Error saving SVG:', error);
      }
  }

//returns the parameters for each shape   
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
