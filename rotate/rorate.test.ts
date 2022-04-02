const RotateModule = require('./rotate');
const RotatebleModule = require('../rotateble/rotateble');
const UObjectModule2 = require('../uobject/uobject');

const spaceShip2 = new UObjectModule2({
    direction: 300,
    angularVelocity: 70,
    directionsNumber: 360
});

const rotatebleModule = new RotatebleModule(spaceShip2);
const rotateModule = new RotateModule(rotatebleModule);

const fatonBomb2 = new UObjectModule2({
    direction: 100,
    angularVelocity: 0,
    directionsNumber: 360
});

const rotatebleModule2 = new RotatebleModule(fatonBomb2);
const rotateModule2 = new RotateModule(rotatebleModule2);

const fatonBomb3 = new UObjectModule2({
    direction: 100,
    directionsNumber: 360
});

const rotatebleModule3 = new RotatebleModule(fatonBomb3);
const rotateModule3 = new RotateModule(rotatebleModule3);

test('Для объекта, повернутого на угол 300гр, с угловой скоростью 70гр, поворот выполняется на угол 10гр от нулевого положения', () => {
    rotateModule.execute();
    const spaceShipDirection = spaceShip2.getProperty('direction').direction;
    expect(spaceShipDirection).toEqual(10);
});

test('Для объекта, повернутого на угол 100гр, с угловой скоростью 0гр, поворот не выполняется', () => {
    rotateModule2.execute();
    const spaceShipDirection2 = fatonBomb2.getProperty('direction').direction;
    expect(spaceShipDirection2).toEqual(100);

});

test('Попытка сдвинуть объект, у которого невозможно прочитать значение угловой скорости, приводит к ошибке', () => {
    expect(() => {
        rotateModule3.execute();
    }).toThrowError();

});
