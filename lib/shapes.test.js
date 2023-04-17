const Shapes = require('./shapes.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
// const Square = require('./lib/square.js');

describe('circle', () => {
    test('Should generate code that produces a circle', () => {
        const shape = new Circle();
        shape.setColor('pink');
        expect(shape.render()).toEqual(
            '<circle cx="100" cy="100" r="100" fill="pink"/>'
        );
    })
});

describe('triangle', () => {
    test('Should generate conde that produces a triangle', () => {
        const shape = new Triangle();
        shape.setColor('pink');
        expect(shape.render()).toEqual(
            `<polygon points="0,200 100,0 200,200" fill="pink" />`
        );
    })
})