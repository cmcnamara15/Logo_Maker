class Text { 
    constructor(content, color) {
        this.content = content;
        this.color = color
    }
    render() {
        return ` <text x="35" y="115" font-size="60px" fill="${this.color}">${this.content}</text>`
    }
} 

module.exports = Text;