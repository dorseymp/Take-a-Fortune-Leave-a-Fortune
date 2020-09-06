const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

require('dotenv').config()

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true 
});

const router = require('./routes/fortune');

app.use('/', router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); 
    });
}

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
})