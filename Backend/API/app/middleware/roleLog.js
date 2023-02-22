roleLog = (req, res, next) => {
    console.log("Role Logged");
    next();
}
module.exports = roleLog;