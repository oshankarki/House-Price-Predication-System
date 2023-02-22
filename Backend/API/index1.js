const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
// url encoded parser
// app.use(express.urlencoded({extended: true}));

const logger1 = require("./app/middleware/roleLogger");

const roleLog = require('./app/middleware/roleLog');
const logger = require('./app/middleware/logger');
app.post("/Register", (req, res) => {
    res.send("User Registered");
});
app.use(logger);


// app.get("/test", logger1, logger2, (req, res) => {
//     res.end("here 1");
// }, logger1);

app.get("/", (req, res) => {
    res.send("Welcome");
});
app.use('/user', require('./app/route/userRoute'));
app.use('/role', roleLog, require('./app/route/roleRoute'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});