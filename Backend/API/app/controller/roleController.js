const Role = require("../model/role");


exports.getRole = (req, res) => {
    res.json(Role.find());
}

exports.postRole = (req, res) => {
    try {
        const role = new Role(req.body);
        role.save();
        res.send(role);
    } catch (err) {
        res.send(err.message);
    }
}

exports.deleteRole = (req, res) => {
    Role.deleteById(req.params.id);
    res.send("Deleted");
}