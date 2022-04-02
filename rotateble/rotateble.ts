interface RotatebleInterface {
    getDirection(): object;
    getAngularVelocity(): object;
    getDirectionsNumber(): object;
    setDirection(newV:number):void;
}

class RotatebleAdapter implements RotatebleInterface {
    constructor(obj: UObject) {
        this.obj = obj;
    }
    obj: UObject

    getDirection(): object {
        return this.obj.getProperty('direction');
    }

    getAngularVelocity(): object {
        return this.obj.getProperty('angularVelocity');
    }

    getDirectionsNumber(): object {
        return this.obj.getProperty('directionsNumber');
    }

    setDirection(newV: number): void {
        this.obj.setProperty('direction', {'direction': newV});
    }
}

module.exports = RotatebleAdapter;

