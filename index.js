const express = require("express");
const app = express();

// Serve static files from the 'node_modules' directory
app.use('/node_modules', express.static(__dirname + '/node_modules'));


app.set("view engine","ejs");

app.get("/",(req,res)=>{

    res.render("pages/home");
});

app.get("/aboutEJS", (req, res)=> {
    res.render("pages/about", {   
});
});
app.get("/contactEJS", (req, res)=> {
    res.render("pages/contact", {   
});
});
app.get("/projectEJS", (req, res)=> {
    res.render("pages/project", {   
});
});
app.get("/serviceEJS", (req, res)=> {
    res.render("pages/serivce", {   
});
});

app.listen(5000), ()=>{console.log("app is running in 3000")};
