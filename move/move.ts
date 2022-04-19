const VectorObj = require('../vector/vector');

class Move {
    private m: MovableInterface;
    constructor(m: MovableInterface) {
        this.m = m;
    }
    public execute():void {
        this.m.setPosition(VectorObj.sum(
            this.m.getPosition(),
            this.m.getVelocity()
        ))
    }
}

module.exports = Move;
