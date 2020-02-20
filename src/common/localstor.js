export default class LocStore {
    static set(name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    }
    static get(name) {
        let item = localStorage.getItem(name);
        if(!item) {
            return item
        }else{
            item = JSON.parse(item);
            return item
        }
    }
    static checkStore(name) {
        let value = this.get(name);
        if(value) {
            return value
        }else{
            return this.set(name, [])
        }
    }
}
