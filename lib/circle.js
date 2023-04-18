// This is the file that extends the class shape and renders a circle
const Shape = require("./shapes")

class Circle extends Shape {
    render() {
        return`<circle cx="100" cy="100" r="100" fill="${this.color}"/>`
    }
}
module.exports = Circle;