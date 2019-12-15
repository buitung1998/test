var Product = require('../models/model.product');

const paginationProduct = async (condition, offset, limit) => {
    const client = await Product.connect();
    const data = await client.query(`SELECT * FROM products ORDER BY id ASC limit ${limit} OFFSET ${offset}`);
    return data;
}




module.exports = {
    paginationProduct
}