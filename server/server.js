const express = require('express')
const PORT = process.env.PORT || 5000
const http = require('http')
const path = require('path')


const { getDrinks } = require('./utils/getDrinks');

const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
app.use(express.static(publicPath));

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

app.get('/', function (req, res) {
    console.log(req.params);
    res.sendFile(publicPath + '/index.html');
});

app.get('/api', function (req, res) {
    res.redirect('/')
});




app.get('/api/search', function (req, res) {



    drink = req.query.drink
    if (drink == "" || drink == null || drink == {}) res.send("invalid drink type")
    limit = req.query.limit
    if (limit == null) limit = 10;
    drinks = [];
    if (Array.isArray(drink)) {
        drinkTypes = drink.length
        for (let i = 0; i < drinkTypes; i++) {
            drinks.push(drink[i])
        }
    }
    else {
        drinks.push(drink)
    }
    getDrinks(drinks, limit).then(jsonObj => {
        console.log("sending away");
        console.log(jsonObj);
        res.send(jsonObj);
    })

})




