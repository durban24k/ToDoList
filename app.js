let express = require ("express");
let app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("todo.ejs");
});
app.get("*",(req,res)=>{
    res.send("<h1>ERROR 404: PAGE NOT FOUND</h1>")
});
app.listen(3000,()=>{
    console.log("Server listening on port: 3000...");
});