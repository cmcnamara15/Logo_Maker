const Shape = require("./shapes")

class Square extends Shape {
    render() {
        return`<polygon points="0,200 100,0 200,200" fill="${this.color}" />`
    }
}

module.exports = Square;