const express  = require("express")
require("dotenv").config();
const cors = require('cors');


require("./db/conn");
const app = express();
const PORT = process.env.PORT
app.use(cors({
    origin: '*'
}));


app.use(express.json());

app.get("/",(req, res) => {
    res.json("api work fine")
    console.log("api work fine")
})
const middleware =(req, res, next) =>{
    console.log('middleware working fine !');
    next();
}

app.use(middleware,require('./Route/userRoute'));
app.use(middleware,require ('./Route/addsRoute'))

app.listen(PORT || 4000, () => {
    console.log("server started")
})