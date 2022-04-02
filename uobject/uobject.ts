interface UObjectInterface {
    getProperty(key:string): object;
    setProperty(key:string, newValue:object): void;
}

class UObject implements UObjectInterface {
    constructor(obj: object) {
        Object.keys(obj).forEach(key => {
            this[key] = obj[key];
        })
    }
    getProperty(key:string) {
        if (!(key in this)) throw new Error("Запрошенного ключа в объекте не найдено");
        return {
            [key]: this[key]
        };
    }
    setProperty(key:string, newValue:object) {
        if (!(key in this)) throw new Error("Нельзя изменить не существующий ключ");
        this[key] = newValue[key];
    }
}

module.exports = UObject;

