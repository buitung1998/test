const express = require('express')
const app = express()
const port = 3000;
const routerProduct = require ('./routes/router.product');
const apiRouterProduct = require('./api/routes/router.product')

const db = require('./config/database')

db.authenticate()
  .then(() => {
    console.log('database Connection...');
  })
  .catch(err => {
    console.error('', err);
  });

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './views')

app.use('/products', routerProduct);

app.use('/api/products', apiRouterProduct);

app.listen(port, () => 
console.log(`Example app listening on port ${port}!`));