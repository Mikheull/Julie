const express = require("express");
const app = express();
const server = require('http').createServer(app);
//const io = require('socket.io')(server);
const session = require('express-session');
const bodyParser = require("body-parser");

// Config
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: "N€$=vD6€HxP6vgvU33h2LZ96!;3Q4tm>mRµ",
    saveUninitialized: true,
    resave: true
}))
app.use((req, res, next) => {
    next();
});



// Router
const routes = require('./routes/routes');
app.use('/', routes);



app.listen(3000, () => {
  console.log(`Listening to requests on http://localhost:3000`);
});