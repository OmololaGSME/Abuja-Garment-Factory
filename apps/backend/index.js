const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const route = require('./routes/router')
require('./config/database')

dotenv.config({ path: '.env' })

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// use routes
app.use('/', route);

const port = 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
