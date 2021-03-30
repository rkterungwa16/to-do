require("dotenv").config();

const express = require("express");
const app = express();

//set view engine to ejs
app.set("view engine", "ejs");

app.use(express.json());


const port = process.env.PORT;

//Middlewares
// app.use("/", ()=>{
//   next();
// });

//use res.render to load up an ejs view file

//index page
app.get("/",(req,res)=>{
  //res.send("Click to find your TO-DO list");
  const mascots =[];
  const tagline = "Click to add to your TO-DO list";
  res.render("pages/index",{
    mascots: mascots,
    //tagline: tagline,
  });
  
});

app.get("/api/to-do", (req, res) => {
  const mascots = [
    { id: 1, name: "DigitalOcean", description: 2012 },
    { id: 2, name: "Linux", description: 1996 },
    { id: 3, name: "Docker", description: 2013 },
  ];
  const tagline = "Click to add to your TO-DO list";


  res.render("pages/index", {
    mascots: mascots,
    //tagline: tagline,
  });
});

//Add to-do
app.post("/api/to-do",(req,res)=>{
  
  res.status(201).json({
    status: "success",
    data:[
      { id: 1, name: "DigitalOcean", description: 2012 }
    ],
  });
  
  res.render("pages/index",{
    
  });
});

//Delete to-do item
app.delete("/api/to-do/:id",(req,res)=>{
  
});

//Change to-do item
app.put("/api/to-do/:id",(req,res)=>{
  
});

//about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
