class Test {
    static list = [];
    constructor(obj) {
        this.obj = obj;
    }
    save() {
        Test.list.push(this.obj);
    }
    static find() {
        return Test.list;
    }
    static delete(id) {
        Test.list = Test.list.filter(u => u.id != id);
    }
}

const ram = new Test({ id: 1, name: "Ram", age: 20 });
ram.save();
const hari = new Test({ id: 2, name: "Hari", age: 20 });
hari.save();
Test.delete(1);
console.log(Test.find());