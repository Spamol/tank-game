const VectorObj = require('../vector/vector');

class Move {
    private m: MovableAdapter;
    constructor(m: MovableAdapter) {
        this.m = m;
    }
    public execute():void {
        this.m.setPosition(VectorObj.sum(
            Object.values(this.m.getPosition())[0],
            Object.values(this.m.getVelocity())[0]
        ))
    }
}

module.exports = Move;
