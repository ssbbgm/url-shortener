require('dotenv').config();
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3000 || process.env.MONGODB_URL;
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
});
