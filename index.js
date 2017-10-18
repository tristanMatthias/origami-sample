const origami = require('origami-cms');
require('dotenv').config();

new origami({
    server: {
        secret: process.env.SERVER_SECRET,
        port: process.env.SERVER_PORT
    },
    store: {
        type: 'mongodb',
        username: process.env.STORE_USERNAME,
        host: process.env.STORE_HOST,
        port: process.env.STORE_PORT,
        password: process.env.STORE_PASSWORD,
        database: process.env.STORE_DATABASE
    }
});
