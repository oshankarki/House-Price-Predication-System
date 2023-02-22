const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000;
const dbConn = require('./app/config/db');
dbConn();
const cors = require('cors');

app.use(express.json());
app.use('/uploads', express.static('public/uploads'));

app.use(fileUpload());
app.use(cors());

const userRoutes = require('./app/routes/route.user');






app.use('/api/v1', authRoutes);
app.use('/api/v1/user', userRoutes);





const verifyJWT = require('./app/middlewares/verifyJWT');
// app.use(verifyJWT);

app.get('/api/v1/test', (req, res) => {
    res.send('Hello World!' + req.user);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});