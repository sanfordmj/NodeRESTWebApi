
//load the modules needed for devlopment
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); 

//Configure default port if one is not defined
const port = process.env.port || process.env.PORT || 5000 

const app = express();

//configure app
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/localhost/ }));
app.options('*', cors());

app.listen(port, () => {
    console.log('Server up');
})