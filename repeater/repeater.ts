import {Subject} from "rxjs";

class Repeater implements Command {
    command: Command;
    queue: Subject<Command>;
    repeat = 0;
    error: Error;
    constructor(command: Command, queue: Subject<Command>, e:Error) {
        this.command = command;
        this.queue = queue;
        this.error = e;
    }
    public execute():void {
        if(!this.command.repeat) {
            this.command.repeat = 1;
            this.queue.next(this.command)
        } else {
            throw new Error(this.error.message)
        }
    }

}

module.exports = Repeater;
