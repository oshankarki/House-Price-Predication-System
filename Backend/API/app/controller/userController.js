const User = require("../model/User");


exports.getUser = (req, res) => {
    res.json(User.find());
}

exports.postUser = (req, res) => {
    try {
        const user = new User(req.body);
        user.save();
        res.send(user);
    } catch (err) {
        res.send(err.message);
    }
}

exports.deleteUser = (req, res) => {
    User.deleteById(req.params.id);
    res.send("Deleted");
}