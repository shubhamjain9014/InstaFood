const express=require("express"); 
const port=5000;
const mongoDB=require("./db");
const cors=require("cors");
mongoDB();

const app=express();

app.get("/",(req,res) =>{
    res.send("Hello World");
});

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use("/api",require("./Routes/CreateUser"));
app.use("/api",require("./Routes/DisplayData"));
app.use("/api",require("./Routes/OrderData"));

app.listen(port,() =>{
    console.log("Server is running on port 5000... ");
});