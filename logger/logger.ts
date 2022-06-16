class Logger implements Command {
    ex: Error;
    repeat = 0;
    constructor(ex: Error) {
        this.ex = ex;
    }
    public execute():void {
       console.log(this.ex);
    }
}

module.exports = Logger;
