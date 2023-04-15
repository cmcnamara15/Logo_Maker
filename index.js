const inquirer = require('inquirer');
const Text = require('./lib/text');
const Circle = require('./lib/circle');
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
        type: "input",
        name: "shape",
        message: "Choose a shape"
    }
])
.then(answers => {
    const newText = new Text(answers.text, answers.color);
    const newShape = new Circle("brown");

    const newSVG = new SVG(newText, newShape);

    fs.writeFile("./examples/result.svg", newSVG.create(), () => {
        console.log("SVG created!")
    })
}) 