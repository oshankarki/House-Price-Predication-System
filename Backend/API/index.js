const express = require('express');
const app = express();
const PORT = 3000;
const User = require("./model/User");
// const parser = require('body-parser');
app.use(express.json());
//url encoded parser
//app.use(express.urlencoded()); //from form 


app.get('/', (req, res) => {
    res.send("Welcome!");
});

app.get('/user', (req, res) => {
    res.send(User.find());
});

app.post('/user', (req, res) => {
    try {
        const user = new User(req.body)
        console.log(req.body);
        user.save();
        res.end(user);
    } catch (e) {
        res.send(e.message);
    }
});


// app.delete('/user', (req, res) => {
//     users = users.filter(u => u.id != req.query.id);
//     res.send("Deleted!");
// });

app.delete('/user/:id', (req, res) => {
    User.deleteById(req.params.id);
    res.send("Deleted!");
});

//all represent all the request method
app.all('*', (req, res) => {
    res.end("404 not found");
})
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});