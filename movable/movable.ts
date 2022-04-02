interface MovableInterface {
    getPosition():object;
    getVelocity():object;
    setPosition(newV: Vector): void;
}

class MovableAdapter implements MovableInterface {
    constructor(obj: UObject) {
        this.obj = obj;
    }
    obj: UObject

    getPosition(): object {
        return this.obj.getProperty('position');
    }

    getVelocity(): object {
        return this.obj.getProperty('velocity');
    }

    setPosition(newV: Vector): void {
        this.obj.setProperty('position', {'position': newV});
    }
}

module.exports = MovableAdapter;

