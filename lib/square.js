// This is the file that extends the class shape and renders a square
const Shape = require("./shapes")

class Square extends Shape {
    render() {
        return`<rect x="0" y ="0" width="200" height="200" fill="${this.color}" />`
    }
}

module.exports = Square;