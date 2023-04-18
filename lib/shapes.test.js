// Pulling the files needed to test
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

// Test circle logic using jest
describe('circle', () => {
    test('Should generate code that produces a circle', () => {
        const shape = new Circle();
        shape.setColor('pink');
        expect(shape.render()).toEqual(
            '<circle cx="100" cy="100" r="100" fill="pink"/>'
        );
    })
});

// Test triangle logic 
describe('triangle', () => {
    test('Should generate code that produces a triangle', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            `<polygon points="0,200 100,0 200,200" fill="blue" <text x ="33" y="175" font-size="60px" fill="undefined"/>`
        );
    })
});

// Test square logic 
describe('square', () => {
    test('Should generate code that produces a square', () => {
        const shape = new Square();
        shape.setColor('pink');
        expect(shape.render()).toEqual(
            `<rect x="0" y ="0" width="200" height="200" fill="pink" />`
        );
    })
})