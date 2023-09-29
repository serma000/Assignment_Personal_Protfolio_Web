const express = require("express");
const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{

    res.render("pages/home");
});
app.get("/aboutEJS", (req, res)=> {
    res.render("pages/about", {

    title: "About EJS",
    details: [
            "EJS is a simple templating language that lets you generate",
            "EJS is  compatible with express for back-end use as"
    ],
    
    
});
});

app.listen(5000), ()=>{console.log("app is running in 3000")};
