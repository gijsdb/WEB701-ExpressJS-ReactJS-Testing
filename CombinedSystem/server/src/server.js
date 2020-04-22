const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models')
const config = require('./config/config')
const User = require('./models/User')

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

app.get('/', function (req, res) {
    res.json("Chur")
})

sequelize.sync()
    .then(() => {
        app.listen(config.port || 8091);
        console.log(`Server started on ${config.port}`)
    })