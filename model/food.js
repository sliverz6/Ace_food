const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'foods.json');

const getFoodsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (!err) {
            cb(JSON.parse(fileContent));
        } else {
            cb([]);
        }
    });
};

module.exports = class Food {
    constructor(title, imageUrl, price, description, score) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
        this.score = score;
    }

    save() {
        getFoodsFromFile(foods => {
            foods.push(this);
            fs.writeFile(p, JSON.stringify(foods), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getFoodsFromFile(cb);
    }
}