module.exports = (req, res, next) => {
    console.log("Request Logger", req.url);
    res.end("403 Forbidden")
}