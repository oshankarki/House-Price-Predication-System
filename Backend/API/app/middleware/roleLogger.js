roleLogger = (req, res, next) => {
    console.log("Log:Role Created");
    next();
}
module.exports = roleLogger;