var pool = require('../../models/model.product');

getProduct = (req, res) => {
    pool.connect((err, client, done)=>{
        if(err){
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * FROM products ORDER BY id ASC', (err,result)=>{
            done();

            if(err){
                res.end();
            }
            res.json({status: 200, messages: "Lay san pham thanh cong", data: result.rows});
            // console.log(result.rows[0].product)
        })
    });
    
};

module.exports = {
    getProduct
};