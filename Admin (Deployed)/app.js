const express = require('express');
const path = require('path');
const hbs = require('hbs');
const web = require('./routes/web');

const app = express();

hbs.registerPartials("./views/partials");

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("./public"));
app.use('/', web);




app.listen(process.env.PORT || 3000, () => {
	console.log('serving on port 3000');
});