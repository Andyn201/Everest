const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const {MongoURI} = require('./config/config');
const app = express();

app.listen(3000);


//   Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//   Static Files
app.use(express.static(path.join(__dirname, 'public/build')));

//   npm run build
/*
     app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
  });
}
*/


//   Routes

const routes = require('./routes/routes');
app.use('/', routes);


//   Connect to DB
mongoose.connect(MongoURI, { useNewUrlParser: true } , () => {
    console.log('connected');
});


