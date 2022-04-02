class Rotate {
    private m: RotatebleAdapter;
    constructor(m: RotatebleAdapter) {
        this.m = m;
    }
    public execute():void {
        this.m.setDirection(
            (Object.values(this.m.getDirection())[0] + Object.values(this.m.getAngularVelocity())[0]) % Object.values(this.m.getDirectionsNumber())[0]
        );
    }
}

module.exports = Rotate;
