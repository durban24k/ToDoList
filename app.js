let express = require ("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");

// Mongoose connection
mongoose.set('useUnifiedTopology',true);
mongoose.set('useNewUrlParser',true);
mongoose.connect("mongodb://localhost/todo");

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));

//mongoose Schema
let todoSchema = new mongoose.Schema({
    name: String
});

let Todo = mongoose.model("list",todoSchema);

// let todo = [];
app.get("/",(req,res)=>{
    Todo.find({},(err,list)=>{
        if(err){
            console.log(err);
        }else{
            res.render("todo.ejs",{list:list});
        }
    });
});

app.post("/todo",(req,res)=>{
    let newlist = new Todo({
        name: req.body.list
    });
    Todo.create(newlist,(err,Todo)=>{
        if(err){
            console.log(err);
        }else{
            console.log("inserted item: "+newlist);
        }
    });
    console.log("Item added to list!!");
    res.redirect("/");
});

app.listen(3000,()=>{
    console.log("Server listening on port: 3000...");
});