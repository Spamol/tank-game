import { Subject } from 'rxjs';
const ExceptionModule = require('./exseption');
const LoggerM = require('../logger/logger');

test('Проверка команды логгер', () => {

    class Rotate implements Command{
        constructor() {}
        repeat = 0;
        execute():void {
            // ничего не делаем
            (() => {})()
        }
    }
    class Move implements Command {
        constructor() {}
        repeat = 0;
        execute():void {
            throw new Error('Выбрасываем исключение')
        }
    }

    const subject = new Subject<Command>();
    const logSpy = jest.spyOn(console, 'log');

    subject.subscribe({
        next: (c) => {
            try {
                c.execute()
            } catch (e) {
                const exception = new ExceptionModule(subject);
                exception.handle(c, e);
            }
        },
    });

    subject.next(new Rotate());
    subject.next(new Move());

    expect(logSpy).toHaveBeenCalledWith(new Error('Выбрасываем исключение'));
});

test('Проверка команды репитер и реализация логики 1 раз повторяем и записываем в лог', () => {

    class Rotate implements Command{
        repeat:number;
        constructor() {
            this.repeat = 0;
        }
        execute():void {
            throw new Error('Выбрасываем исключение репитер')
        }
    }
    class Move implements Command {
        repeat: number;
        constructor() {
            this.repeat = 0;
        }
        execute():void {
            (() => {})()
        }
    }

    const subject = new Subject<Command>();
    const exception = new ExceptionModule(subject);
    const logSpy = jest.spyOn(console, 'log');

    subject.subscribe({
        next: (c) => {
            try {
                c.execute()
            } catch (e) {
                exception.handle(c, e);
            }
        },
    });

    subject.next(new Rotate());
    subject.next(new Move());

    expect(logSpy).toHaveBeenCalledWith(new Error('Выбрасываем исключение репитер'));
});

test('Реализация логики 2 раз повторяем и записываем в лог', () => {

    class Rotate2 implements Command{
        repeat:number;
        constructor() {
            this.repeat = 0;
        }
        execute():void {
            throw new Error('Выбрасываем исключение репитер2')
        }
    }
    class Move2 implements Command {
        repeat: number;
        constructor() {
            this.repeat = 0;
        }
        execute():void {
            (() => {})()
        }
    }

    const subject = new Subject<Command>();
    const exception = new ExceptionModule(subject);
    const logSpy = jest.spyOn(console, 'log');

    subject.subscribe({
        next: (c) => {
            try {
                c.execute()
            } catch (e) {
                exception.handle(c, e);
            }
        },
    });

    subject.next(new Rotate2());
    subject.next(new Move2());

    expect(logSpy).toHaveBeenCalledWith(new Error('Выбрасываем исключение репитер2'));
});
