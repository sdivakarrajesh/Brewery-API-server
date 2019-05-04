const fs = require('fs');
const path = require('path');
const { promisify } = require('util')

const readdir = promisify(fs.readdir);

const publicPath = path.join(__dirname, '../../public');

async function getDrinks(drinks, limit) {

    if (limit == 0) limit = Number.MAX_VALUE
    var jsonObj = []

    for (let i = 0; i < drinks.length; i++) {

        drink = drinks[i]
        items = await readdir(path.join(publicPath + "/" + drink))

        for (let i = 0; jsonObj.length < limit && i < items.length; i++) {

            var filename = items[i].substr(0, items[i].lastIndexOf('.')) || items[i];
            var urlPath = path.join(drink + "/" + items[i]);
            item = {}
            item["name"] = filename
            item["url"] = urlPath
            jsonObj.push(item)
            console.log("adding ", items[i])
        }
    }
    return jsonObj
}

module.exports = { getDrinks };