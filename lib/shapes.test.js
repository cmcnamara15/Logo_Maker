const Shapes = require('./shapes.js');
const Circle = require('./circle.js');
// const Triangle = require('./lib/triangle.js');
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