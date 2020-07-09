let express = require ("express");
let app = express();
let bodyParser = require("body-parser");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

let todo = [];
app.get("/",(req,res)=>{
    res.render("todo.ejs",{todo :todo});
});
app.post("/todo",(req,res)=>{
    let list = req.body.newlist;
    todo.push(list);
    console.log("Item added to list!!");
    res.redirect("/");
});
app.listen(3000,()=>{
    console.log("Server listening on port: 3000...");
});