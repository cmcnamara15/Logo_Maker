class SVG {
    // Properties
    constructor(text, shape) {
        this.text = text;
        this.shape = shape;
    }
    // Methods
    create() {
        return `
        <svg width="200" height="200">
            ${this.shape}
            ${this.text.render()}
        </svg>
        `
    }
}

module.exports = SVG;
