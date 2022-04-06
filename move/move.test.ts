const MoveModule = require('./move');
const VectorModule = require('../vector/vector');

test('Для объекта, находящегося в точке (12, 5) и движущегося со скоростью (-7, 3) движение меняет положение объекта на (5, 8)', () => {
    const mockObj = {
        position: new VectorModule(12, 5),
        velocity: new VectorModule(-7, 3)
    }
    const MovableAdapter = {
        getPosition: () => mockObj.position,
        getVelocity: () => mockObj.velocity,
        setPosition: (newV: Vector) => mockObj.position = newV
    }
    const move = new MoveModule(MovableAdapter);
    move.execute();
    expect(MovableAdapter.getPosition().getCoords()).toEqual([5, 8]);
});

test('Попытка сдвинуть объект, у которого невозможно прочитать положение в пространстве, приводит к ошибке', () => {
    expect(() => {
        const mockObj = {
            position: new VectorModule(12, 5),
            velocity: new VectorModule(-7, 3)
        }
        const MovableAdapter = {
            getPosition: () => {throw new Error()},
            getVelocity: () => mockObj.velocity,
            setPosition: (newV: Vector) => mockObj.position = newV
        }

        const move = new MoveModule(MovableAdapter);
        move.execute();
    }).toThrowError();
});

test('Попытка сдвинуть объект, у которого невозможно прочитать значение мгновенной скорости, приводит к ошибке', () => {
    expect(() => {
        const mockObj = {
            position: new VectorModule(12, 5),
            velocity: new VectorModule(-7, 3)
        }
        const MovableAdapter = {
            getPosition: () => mockObj.position,
            getVelocity: () => {throw new Error()},
            setPosition: (newV: Vector) => mockObj.position = newV
        }

        const move = new MoveModule(MovableAdapter);
        move.execute();
    }).toThrowError();

});
//
test('Попытка сдвинуть объект, у которого невозможно изменить положение в пространстве, приводит к ошибке', () => {
    expect(() => {
        const mockObj = {
            position: new VectorModule(12, 5),
            velocity: new VectorModule(-7, 3)
        }
        const MovableAdapter = {
            getPosition: () => mockObj.position,
            getVelocity: () => mockObj.velocity,
            setPosition: (newV: Vector) => {throw new Error()}
        }

        const move = new MoveModule(MovableAdapter);
        move.execute();
    }).toThrowError();

});
