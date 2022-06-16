const LoggerModule = require('../logger/logger');
const RepeaterModule = require('../repeater/repeater');
const RepeaterModule2 = require('../repeater2/repeater2');
import { Subject } from 'rxjs';

interface ExceptionHandler {
    handle(c: object, error: Error): void;
}

class Exception implements ExceptionHandler {
    constructor(private queue: Subject<Command>) {}

    public handle(command: Command, error: Error):void {
        const key = this.getKeyForStrategy(error, command);
        this.strategis[key](error, command, this.queue);
    }

    private getKeyForStrategy(error: Error, с: Command): string {
        return error.constructor.name + с.constructor.name;
    }

    private get strategis(): Record<
        string,
        (error: Error, command: Command, queue: Subject<Command>) => void
        > {
        return {
            ['ErrorMove']: (e, _, q$) => q$.next(new LoggerModule(e)),
            ['ErrorRotate']: (e, _, q$) => q$.next(new RepeaterModule(_, q$, e)),
            ['ErrorRepeater']: (e, _, q$) => q$.next(new LoggerModule(e)),
            ['ErrorRotate2']: (e, _, q$) => q$.next(new RepeaterModule2(_, q$, e)),
            ['ErrorRepeater2']: (e, _, q$) => q$.next(new RepeaterModule(_, q$, e)),
        };
    }
}

module.exports = Exception;
