class Rotate {
    private m: RotatebleInterface;
    constructor(m: RotatebleInterface) {
        this.m = m;
    }
    public execute():void {
        this.m.setDirection(
            (this.m.getDirection() + this.m.getAngularVelocity()) % this.m.getDirectionsNumber()
        );
    }
}

module.exports = Rotate;
