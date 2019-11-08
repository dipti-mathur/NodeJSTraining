const express = require('express');
const morgan = require('morgan');
const { products } = require('./data');
const userRouter =  require('./routes/users');
const productsRouter =  require('./routes/products');
const homeRouter = require('./routes/home');

const app = express();

const log = (req, res, next) => {
  console.log(`Request received: Url: ${req.url}, Method: ${req.method}`);
  next();
};

app.use(log);
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine','pug');
app.set('views',`${__dirname}\\views`);
app.use('/api/users',userRouter);
app.use('/api/products',productsRouter);
app.use('/',homeRouter);

// app.use(express.urlencoded({ extended: true }));



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('ECOM Server started. Listening on port ' + port);
});