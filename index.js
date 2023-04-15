const inquirer = require('inquirer');
const Text = require('./lib/text');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Shape = require('./lib/shapes.js')
const SVG = require('./lib/svg');

const fs = require("fs")

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter text",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter text color",
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like?",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color",
    }
])
.then(answers => {
    const newText = new Text(answers.text, answers.color);
    const newShape = new Shape(answers.shape, answers.color);

    const newSVG = new SVG(newText, newShape);

    fs.writeFile("./examples/result.svg", newSVG.create(), () => {
        console.log("SVG created!")
    })
}) 