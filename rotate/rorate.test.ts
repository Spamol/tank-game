const RotateModule = require('./rotate');

test('Для объекта, повернутого на угол 300гр, с угловой скоростью 70гр, поворот выполняется на угол 10гр от нулевого положения', () => {
    const mockObj = {
        direction: 300,
        angularVelocity: 70,
        directionsNumber: 360
    }
    const RotatebleAdapter = {
        getDirection: () => mockObj.direction,
        getAngularVelocity: () => mockObj.angularVelocity,
        getDirectionsNumber: () => mockObj.directionsNumber,
        setDirection: (newD:number) => mockObj.direction = newD
    }
    const rotate = new RotateModule(RotatebleAdapter);
    rotate.execute();
    expect(RotatebleAdapter.getDirection()).toEqual(10);
});

test('Для объекта, повернутого на угол 100гр, с угловой скоростью 0гр, поворот не выполняется', () => {
    const mockObj = {
        direction: 100,
        angularVelocity: 0,
        directionsNumber: 360
    }
    const RotatebleAdapter = {
        getDirection: () => mockObj.direction,
        getAngularVelocity: () => mockObj.angularVelocity,
        getDirectionsNumber: () => mockObj.directionsNumber,
        setDirection: (newD:number) => mockObj.direction = newD
    }
    const rotate = new RotateModule(RotatebleAdapter);
    rotate.execute();
    expect(RotatebleAdapter.getDirection()).toEqual(100);
});

test('Попытка сдвинуть объект, у которого невозможно прочитать значение угловой скорости, приводит к ошибке', () => {
    expect(() => {
        const mockObj = {
            direction: 100,
            angularVelocity: 0,
            directionsNumber: 360
        }
        const RotatebleAdapter = {
            getDirection: () => mockObj.direction,
            getAngularVelocity: () => {throw new Error()},
            getDirectionsNumber: () => mockObj.directionsNumber,
            setDirection: (newD:number) => mockObj.direction = newD
        }
        const rotate = new RotateModule(RotatebleAdapter);
        rotate.execute();
    }).toThrowError();

});
