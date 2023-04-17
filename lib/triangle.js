const Shape = require("./shapes")

class Square extends Shape {
    render() {
        return`<polygon points="0,200 100,0 200,200" fill="${this.color}" <text x ="33" y="175 font-size="60px" fill="${this.textColor}"/>`
    }
}

module.exports = Square;


{/* <svg width="300" height="200">
    <polygon points="0,200 100,0 200,200" fill="pink" />
    <text x="33" y="175" font-size="60px" fill="white">CTM</text>
</svg> */}
