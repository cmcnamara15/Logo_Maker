// This is the SVG file that holds the code that creates the SVG based on the users input 

class SVG {
    // Properties
    constructor(text, shape) {
        this.text = text;
        this.shape = shape;
    }
    // Methods
    create() {
        console.log(this)
        return `
        <svg width="300" height="200">
            ${this.shape.render()}
            ${this.text.render()}
        </svg>
        `
    }
}

module.exports = SVG;
