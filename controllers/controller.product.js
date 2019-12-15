// const {paginationProduct} = require('../treatment/treatment.products');
const Product = require('../models/model.product');


getProduct = async (req, res) => {

    // const page = req.query.page ? parseInt(req.query.page) : 1;
    // const limit = 10;
    // const offset = (page -1) * limit;
    // const condition = '';
    // const pagiation = await paginationProduct(condition, offset, limit);

    // if (pagiation) {
    //     return res.render('product', {
    //         products: pagiation
    //     });
    // } else {
    //     return res.end();
    // }
    let result = await Product.findAll({})
        res.render('product', {
            products: result
        })
};

getPostProduct = (req, res) => {
    res.render('product_post')
};

postProduct = async (req, res) => {
    let result = await Product.create({
        product: req.body.xnproduct,
        amount: req.body.xnamount,
})
    if(result) {
        res.redirect('/products')
    } else{
        res.end();
    }

    // Product.connect((err, client, done)=>{
    //     if(err){
    //         return console.error('error fetching client from pool', err);
    //     }
    //     var product = req.body.xnproduct;
    //     var amount = req.body.xnamount;
    //     client.query("INSERT INTO products(product, amount)VALUES('"+product+"', '"+amount+"')", (err,result)=>{
    //         done();

    //         if(err){
    //             res.end();
    //         }
    //           // console.log(result.rows[0].product)
    //         res.redirect('/products');
    //     })
    // });
};

getEditProduct = async (req, res) => {
    let id = req.params.id;
    let result = await Product.findOne({ where: { id }})
    res.render('product_edit', {
            result
    })
    // Product.connect((err, client, done)=>{
    //     if(err){
    //         return console.error('error fetching client from pool', err);
    //     }
    //     var id = req.params.id;
    //     client.query("SELECT * FROM products WHERE id='"+id+"' ", (err,result)=>{
    //         done();

    //         if(err){
    //             res.end();
    //         }
    //        res.render('product_edit', {pt:result.rows[0]});
    //     });
    // });
}

postEditProduct =  async (req, res)=>{
    var id = req.body.xnId;
        const result = await Product.update(
          { product: req.body.xnproduct, 
            amount: req.body.xnamount},
          { where: { id } }
        )
        res.redirect('../products');

    // Product.connect((err, client, done)=>{
    //     if(err){
    //         return console.error('error fetching client from pool', err);
    //     }
    //     var product = req.body.xnproduct;
    //     var amount = req.body.xnamount;
    //     var id = req.body.xnId;
    //     client.query("UPDATE products SET product='"+product+"', amount='"+amount+"' WHERE id='"+id+"' ", (err, result)=>{
    //         done();

    //         if(err) {
    //             res.end();
    //             return console.error('error runing query', err);
    //         }
    //         res.redirect('../products');
    //     })
    // });
}

deleteProduct =  async (req, res) =>{
    let id = req.params.id
    let result = await Product.destroy({ where: { id }})
    res.redirect('/products');
    // Product.connect((err, client, done)=>{
    //     if(err){
    //         return console.error('error fetching client from pool', err);
    //     }
    //     var id = req.params.id;
    //     client.query("DELETE FROM products WHERE id='"+id+"' ", (err,result)=>{
    //         done();

    //         if(err) {
    //             res.end();
    //             return console.error('error runing query', err);
    //         }
    //         res.redirect('../../products');
    //     })
    // });
}

module.exports = {
    getProduct,
    getPostProduct,
    postProduct,
    getEditProduct,
    postEditProduct,
    deleteProduct
};


