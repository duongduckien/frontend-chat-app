
class Storage {

    constructor() {
        console.log('Constructor');
    }

    setItem(key: string, value: any) {
        return localStorage.setItem(key, value);
    }

    getItem(key: string) {
        return localStorage.getItem(key);
    }

    clear() {
        return localStorage.clear();
    }

}

const storage = new Storage();
export default storage;