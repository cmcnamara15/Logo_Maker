class SVG {
    constructor(text, shape) {
        this.text = text;
        this.shape = shape;
    }
}

class Shape {
    constructor(color) {
        this.color = color;
    } 
}

class Test {
    constructor(content, color) {
        this.content = content;
        this.color = color
    }
}

const newShape = new Shape ("blue");
const newText = new Text ("ABC", "red");
const newSVG = new SVG(newText, newShape);
