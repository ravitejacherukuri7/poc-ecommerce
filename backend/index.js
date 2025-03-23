const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth/auth");
const cors = require("cors");
const adminRouter = require("./routes/Admin/admin");
const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);

 mongoose.connect("").then(()=>{
    console.log("connectd To Database 🎀");
 }).catch((e)=>{
console.log(e);
 });


app.listen(PORT , (req,res)=>{
    console.log(`Server is Running at port ⚡ ${PORT}`);
})
