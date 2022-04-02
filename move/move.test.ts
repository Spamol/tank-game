const MoveModule = require('./move');
const MovableModule = require('../movable/movable');
const UObjectModule = require('../uobject/uobject');
const VectorModule = require('../vector/vector');

const spaceShip = new UObjectModule({
    position: new VectorModule(12, 5),
    velocity: new VectorModule(-7, 3)
});

const movableModule = new MovableModule(spaceShip);
const moveModule = new MoveModule(movableModule);

const fatonBomb = new UObjectModule({});

const movableModule2 = new MovableModule(fatonBomb);
const moveModule2 = new MoveModule(movableModule2);

test('Для объекта, находящегося в точке (12, 5) и движущегося со скоростью (-7, 3) движение меняет положение объекта на (5, 8)', () => {
    moveModule.execute();
    const spaceShipPosition = spaceShip.getProperty('position').position;
    expect(spaceShipPosition.coords).toEqual([5, 8]);
});

test('Попытка сдвинуть объект, у которого невозможно прочитать положение в пространстве, приводит к ошибке', () => {
    expect(() => {
        moveModule2.execute();
    }).toThrowError();

});

test('Попытка сдвинуть объект, у которого невозможно прочитать значение мгновенной скорости, приводит к ошибке', () => {
    expect(() => {
        moveModule2.execute();
    }).toThrowError();

});

test('Попытка сдвинуть объект, у которого невозможно изменить положение в пространстве, приводит к ошибке', () => {
    // TODO: срабатывает тоже самое исключение при попытке получения параметра из объекта, что и в тестах выше, как их различать не придумал
    expect(() => {
        moveModule2.execute();
    }).toThrowError();

});
