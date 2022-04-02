interface VectorInterface {
    coords: number[];
}

class Vector implements VectorInterface {
    static sum(x: Vector, y: Vector): Vector {
        const [xp, yp] = x.coords;
        const [xd, yd] = y.coords;
        return new Vector(xp + xd, yp + yd);
    }
    constructor(x: number, y: number) {
        this.coords = [x, y];
    }
    coords = []
}

module.exports = Vector;
