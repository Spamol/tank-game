interface VectorInterface {
    coords: number[];
    getCoords(): number[];
}

class Vector implements VectorInterface {
    static sum(x: Vector, y: Vector): Vector {
        const [xp, yp] = x.getCoords();
        const [xd, yd] = y.getCoords();
        return new Vector(xp + xd, yp + yd);
    }
    constructor(x: number, y: number) {
        this.coords = [x, y];
    }
    coords = []
    getCoords(): number[] {
        return this.coords
    }
}

module.exports = Vector;
