// var pg = require('pg');
// var config = {
//     user: 'postgres',
//     database: 'express-demo',
//     password: '123123',
//     host: 'localhost',
//     port: 5432,
//     max: 10,
//     idleTimeoutMillis: 30000
// };

// var pool = new pg.Pool(config);

// module.exports = pool;


const Sequelize = require('sequelize');
const db = require('../config/database');

module.exports = db.define('product', {
    product: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.STRING
    },
},
{timestamps: false})
 