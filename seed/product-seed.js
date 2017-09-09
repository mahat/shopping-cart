var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Street_Fighter_Logo.png',
        title: 'Street Fighter',
        description: 'Awesome Combat Game !!!',
        price: 42
    }),

    new Product({
        imagePath: 'https://www.callofduty.com//content/dam/atvi/callofduty/wwii/home/wwii-fb-eyes-logo-pic.jpg',
        title: 'Call of Duty, WWII',
        description: 'WWII Based FPS !!!',
        price: 10
    }),

    new Product({
        imagePath: 'http://pcmedia.ign.com/pc/image/object/854/854367/686237boxart_160w.jpg',
        title: 'Diablo II, Lord of Destruction',
        description: 'Great RPG Game !!!',
        price: 30
    }),

    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/56/Age_of_Empires_II_-_The_Age_of_Kings_Coverart.png',
        title: 'Age of Empires II, The Age of Kings',
        description: 'Best Action RTS Game !!!',
        price: 32
    }),
];

var done = 0;
for (var i = 0;i < products.length;i++) {
    products[i].save(function (err, result) {
        if (err != undefined) {
            console.log("problem during saving product item!");
        }

        // end of saving all data
        done ++;
        if (done === products.length) {
            exit();
        }

    });
}

function exit() {
    mongoose.disconnect();
}