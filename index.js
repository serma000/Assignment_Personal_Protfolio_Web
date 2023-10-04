const express = require("express");
const path = require("path")
const app = express();

// Serve static files from the 'node_modules' directory
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(express.static(path.join(__dirname,'public')))

app.set("view engine","ejs");

app.get("/",(req,res)=>{

    res.render("pages/home");
});

app.get("/aboutEJS", (req, res)=> {
    res.render("pages/about", {   
});
});

// Define a route to serve the PDF file
app.get('/pdf', (req, res) => {
    const pdfFilePath = path.join(__dirname, 'public', 'resume.pdf');
    res.sendFile(pdfFilePath);
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

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});