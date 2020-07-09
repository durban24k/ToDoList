let express = require ("express");
let app = express();
let bodyParser = require("body-parser");

app.set("view engine","ejs");

let toDO=[
    "Wash the dishes",
    "clean the house"
]
app.get("/",(req,res)=>{
    res.render("todo.ejs");
});
app.post("/todo",(req,res)=>{

});
app.get("*",(req,res)=>{
    res.send("<h1>ERROR 404: PAGE NOT FOUND</h1>")
});
app.listen(3000,()=>{
    console.log("Server listening on port: 3000...");
});