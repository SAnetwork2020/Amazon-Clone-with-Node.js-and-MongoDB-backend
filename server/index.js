//IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

//IMPORT FROM OTHER FILES
const authRouter = require("./routes/auth");
// const productRouter = require("./routes/product");
// const userRouter = require("./routes/user");

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://admin:admin@cluster0.tvajd1b.mongodb.net/?retryWrites=true&w=majority";

//Middleware
app.use(express.json());
app.use(authRouter);

//Connections
mongoose.connect(DB).then(() =>{
    console.log("Connection Successful");
}).catch((e) => {
    console.log(e);
});

app.listen(PORT,"0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
}); 