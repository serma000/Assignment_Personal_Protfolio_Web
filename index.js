/*
  File name: index.js
  Student Name: Dikshya Sherma Limbu
  Student ID: 301273555
  Date: 2023-10-01 */

const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'node_modules' directory
app.use('/node_modules', express.static(__dirname + '/node_modules'));

//serve static file from the 'public' directory
app.use('/public',express.static(path.join(__dirname + '/public')));

/*set the view engine for Express application to "ejs. */
app.set("view engine","ejs");

// Define a route to serve the PDF file
app.get('/pdf', (req, res) => {
    const pdfFilePath = path.join(__dirname, 'public', 'resume.pdf');
    res.sendFile(pdfFilePath);
});

/*defines a route */
app.get("/",(req, res)=>{

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
    res.render("pages/service", {   
});
});

/* this code starts the Express server and makes it listen on port 5000. */
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});