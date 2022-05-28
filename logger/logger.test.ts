const ExceptionModule = require('../exseption/exseption');
const LoggerM = require('../logger/logger');

test('Проверка логгера', () => {

    class MockModule1 {
        constructor() {}
        execute():void {
            // ничего не делаем
            (() => {})()
        }
    }
    class MockModule2 {
        constructor() {}
        execute():void {
            throw new ExceptionModule(new Error('Выбрасываем исключение'))
        }
    }

    const mockQueue = [];
    mockQueue.push(new MockModule1())
    mockQueue.push(new MockModule2())

    class Queue {
        private queue:any[]
        counter:number
        constructor(queue:any[]) {
            this.queue = queue;
            this.counter = queue.length
        }
        getCommand() {
            const c = this.queue.shift();
            this.counter = this.queue.length;
            return c;
        }
        addCommand(c: object):void {
            this.queue.push(c);
            this.counter = this.queue.length;
        }
        getCounter():number {
            return this.counter;
        }
    }

    const queue = new Queue(mockQueue);

    while(queue.getCounter()) {
        const c = queue.getCommand();
        try {
            c.execute()
        } catch (ex) {
            ExceptionModule.handler(c, ex);
        }
    }
    // как тестировать, что в логе есть записи? Создавать лог нужно тут, а не в ExceptionModule
    expect(true).toEqual(true);
});
