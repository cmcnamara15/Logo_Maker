const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

describe('circle', () => {
    it('Should generate code that produces a circle', () => {
        const userChoice = Circle;
        const circle = new Circle();
        expect('<circle cx="100" cy="100" r="100" fill="${this.color}"/>')
    })
});