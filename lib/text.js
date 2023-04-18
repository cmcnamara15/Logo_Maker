class Text { 
    constructor(content, color, shape) {
        this.content = content;
        this.color = color;
        this.shape = shape;
    }
    render() {
        if(this.shape === "Triangle"){
            return `<text x="35" y="175" font-size="60px" fill="${this.color}">${this.content}</text>`
        }else {
            return `<text x="35" y="115" font-size="60px" fill="${this.color}">${this.content}</text>`
        }
    }   
}
module.exports = Text;