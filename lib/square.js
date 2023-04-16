const Shape = require("./shapes")

class Square extends Shape {
    render() {
        return`<rect width="200" height="200" style="fill:${this.color}" />`
    }
}

module.exports = Square;