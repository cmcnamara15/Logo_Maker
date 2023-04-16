const inquirer = require('inquirer');
const Text = require('./lib/text');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Shape = require('./lib/shapes.js')
const SVG = require('./lib/svg');

const fs = require("fs")


const questions = [
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
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color",
    }
]


function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
        if(answers.text.length > 3){
            console.log("Text length must be no greater than three.");
            init();
        } else {
        const newText = new Text(answers.text, answers.textColor);
        // const newShape = new Shape(answers.shape, answers.color);
        var newShape;
        if(answers.shape === "Circle"){
            newShape = new Circle(answers.shapeColor);
        }
        const newSVG = new SVG(newText, newShape);

        fs.writeFile("./examples/logo.svg", newSVG.create(), () => {
            console.log("Generated Logo.SVG!");
        })
        }
    }) 
}

init();