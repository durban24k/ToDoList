let express = require ("express");
let app = express();

app.get("/",(req,res)=>{
    res.send("<h1>This is a ToDoList App</h1>");
});

app.listen(3000,()=>{
    console.log("Server listening on port: 3000...");
});