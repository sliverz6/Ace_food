const Food = require('../model/food');

exports.getFoods = (req, res, next) => {
    Food.fetchAll(foods => {
        res.render('list', {
            pageTitle: 'Food List',
            path: '/list',
            foods: foods
        });
    });
};

exports.getAddFood = (req, res, next) => {
    res.render('add-food', {
        pageTitle: 'Add Food',
        path: '/add-food'
    });
};

exports.postAddFood = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const score = req.body.score;
    const food = new Food(title, imageUrl, price, description, score);
    food.save();

    res.redirect('/list');
};

exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Ace Food List',
        path: '/'
    });
};