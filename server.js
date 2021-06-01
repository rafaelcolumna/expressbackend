const express = require("express");
const cors = require("cors");

const projects = require ("./projects.json");
const about = require ("./about.json");

const app = express();

app.use(cors());

//testisg the app
app.get("/", (req, res) =>{
    res.send("hello world");
});

//route to retrieve projects 
app.get("/projects",(req,res) =>{
    //send project via JSON
    res.json(projects);
});

app.get("/about", (req, res)=>{
    res.json(about);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`listening ${PORT}`));



