const LoggerModule = require('../logger/logger');

class Exception {
    private readonly error: Error;
    constructor(err: Error) {
        this.error = err;
    }
    public getError():Error {
        return this.error;
    }
    static handler(c:object, ex: Exception):void {
        // пока дефолтное сделал
        const logger = new LoggerModule(ex);
        // как поставить в очередь, если доступа к очереди тут нет?
        logger.execute();
    }
}

module.exports = Exception;
