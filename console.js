const exp = require('constants');
const express = require('express');
const app = express();

// Para que eu não precise ficar enviando res.html, res.file e o código termine confuso, eu uso uma ferramenta do app.use
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const router = require('./routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));


app.use(router);


app.listen(3000);