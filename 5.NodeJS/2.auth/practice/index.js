const express = require('express');
const mongoose = require('mongoose');
const {MongoURI} = require('./config/secrets');
const auth = require('./middleware/auth');
const app = express();

//   Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//   Routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.get('/', auth, (req, res) => {
    res.send('Protected Route')
})

//   Db
mongoose.connect(MongoURI, { useNewUrlParser: true }, () => console.log('connected'));

//   Port

const PORT = process.env.PORT || 3000;
app.listen(PORT);