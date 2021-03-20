
require('dotenv').config({ path: '.env' }); 

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My Routes
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")
const paymentRoute = require('./routes/stripePayment')

//db connection 

mongoose.connect(process.env.DATABASE, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex:true
})
.then(()=>{
    console.log("database connected")
});

//middleware

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes)
app.use('/api',paymentRoute)

const port = 8000;

app.listen(port,()=>{
console.log(`app is running at port ${port}`);
})

app.get("/",(req,res)=>{
    res.send('hello')
})
//^^ not needed
