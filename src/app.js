const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config({path:'./.env'})
app.set('port', process.env.PORT || 3003);
const mongo = require('./db/mongo');
const bodyParser = require("body-parser");
const indexRoutes = require('./routes/index.routes');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));


app.use(require('./routes/index.routes'))
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log("Servidor en puerto: ", app.get('port'));
});