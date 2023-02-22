const uuid = require('uuid').v4;
module.exports = class User {
    static list = [{
        id: uuid(),
        name: "hari",
        age: 20
    }];

    constructor({ name, age }) {
        if (name == undefined || age == undefined)
            throw new Error("Invalid details");

        let len = User.list.length;
        let id = uuid();

        if (len != 0)
            id = User.list[len - 1].id + 1

        this.id = id
        this.name = name;
        this.age = age;
    }

    save() {
        User.list.push(this);
    }

    static find() {
        return User.list;
    }

    static findById(id) {
        let ur = User.list.find(u => u.id == id);
        return ur;
    }

    static deleteById(id) {
        User.list = User.list.filter(u => u.id != id);
    }
}