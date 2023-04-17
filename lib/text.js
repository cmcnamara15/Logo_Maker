class Text { 
    constructor(content, color) {
        this.content = content;
        this.color = color
    }
    render() {
        return ` <text x="85" y="100" style font-size ="large" fill="${this.color}">${this.content}</text>`
    }
} 

module.exports = Text;