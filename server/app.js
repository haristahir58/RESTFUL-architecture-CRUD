const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env'});
require('./db/conn');

const Products = require('./products/model/productSchema');
const Distributors = require('./distributor/model/distributorSchema');
app.use(express.json());
//Linking Router files to make route easy
app.use(require('./products/router/productRoutes'));
app.use(require('./distributor/router/distributorRoutes'))


const PORT = process.env.PORT;

const DB = process.env.DATABASE;


//Middleware
const middleware = (req,res,next)=>{
    console.log(`Hello My Middleware`);
    next();
}





// mongoose.connect(DB).then(()=>{
//     console.log(`Connection Successfull`);
// }).catch((err) => console.log(`no connection`));


app.get('/products',(req,res)=>{
    res.send(`Products`);
})
app.get('/distributors',(req,res)=>{
    res.send(`Distributors`);
})

app.listen(5000, () => {
    console.log(`Server is running at Port No ${PORT}`);
  });