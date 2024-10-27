const express = require("express");
const app = express();
app.set("view engine", "ejs"); // set the view engine to ejs

// server name - method - route - callback function
app.get("/", (req, res) => {
  //res.download("hello.txt");
  // res.json({message: "Hello World"});
  res.render("index", { title: "Express" });
});


const userRouter = require("./routes/users");
app.use('/users', userRouter)
app.listen(3000, () => console.log("Server is running on Port 3000"));
