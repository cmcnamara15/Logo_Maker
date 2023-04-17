// const Circle = require("./circle");

class Shape {
    constructor(color) {
        this.color = color;
    } 

    setColor(newColor) {
        this.color = newColor
    }
}

module.exports = Shape;





// const newShape = new Circle ("blue");
// newShape.setColor("yellow");
// const newText = new Text ("ABC", "red");
// const newSVG = new SVG(newText, newShape);
// console.log(newShape.render())

// console.log(newSVG.create())

    // render() {
    // if(answers.shape === 'Circle' ) return `${Circle}`
    // }


// class Text { 
//     constructor(content, color) {
//         this.content = content;
//         this.color = color;
//     }

//     setColor(newColor) {
//         this.color = newColor
//     }

//     render() {
//         return ` <text x="85" y="100" fill="${this.color}">${this.content}</text>`
//     }
// } 