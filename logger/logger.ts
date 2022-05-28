class Logger {
    private ex: Exception;
    logger: any[];
    private static instance: Logger;
    constructor(ex: Exception) {
        this.ex = ex;
        this.logger = [];
    }
    static getInstance(ex: Exception):Logger {
        if (!this.instance) {
            this.instance = new Logger(ex);
        }

        return this.instance;
    }
    public execute():void {
       this.logger.push(this.ex.getError());
    }
    public getLog():any[] {
        return this.logger;
    }
}

module.exports = Logger;
