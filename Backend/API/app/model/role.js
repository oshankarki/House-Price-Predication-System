const uuid = require('uuid').v4;

module.exports = class Role {
    static list = [{
        id: uuid(),
        name: "Admin",
    }];

    constructor({ name }) {
        if (name == undefined)
            throw new Error("Invalid details");

        let len = Role.list.length;
        let id = uuid();

        if (len != 0)
            id = Role.list[len - 1].id + 1

        this.id = id
        this.name = name;
    }

    save() {
        Role.list.push(this);
    }

    static find() {
        return Role.list;
    }

    static findById(id) {
        let ur = Role.list.find(u => u.id == id);
        return ur;
    }

    static deleteById(id) {
        Role.list = Role.list.filter(u => u.id != id);
    }
}