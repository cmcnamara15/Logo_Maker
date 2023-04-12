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

    setColor(newColor) {
        this.color = newColor
    }
}

class Circle extends Shape {
    render() {
        return`<circle cx="100" cy="100" r="100" fill="${this.color}"`
    }
}

class Text { 
    constructor(content, color) {
        this.content = content;
        this.color = color
    }
}

const newShape = new Circle ("blue");
newShape.setColor("yellow");
const newText = new Text ("ABC", "red");
const newSVG = new SVG(newText, newShape);
console.log(newShape.render())