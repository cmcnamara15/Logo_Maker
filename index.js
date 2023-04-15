const inquirer = ("inquirer");
const Text = require("./lib/text")
const Circle = require("./lib/circle")

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
.then(answer => {
    const newText = new Text(answers.text, answers.color);
    const newShape = new Circle()
})