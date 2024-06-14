const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Sarvin and</h1></h2> Sayeh</h2>");
});

app.post('/api/products', (req,res) =>{
    console.log(req.body)
    res.send(req.body)
})


mongoose
  .connect(
  
  )

  .then(() => {
    console.log("Connected to the Database");
    app.listen(3000, () => {
      console.log("sayeh is cool");
    });
  })
  .catch(() => {
    console.log("data wrong");
  });
