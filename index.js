const express = require("express");
const app = express();
app.use(express.urlencoded({
    extended: true
}))
app.set("view engine", "ejs"); // set the view engine to ejs
app.use(express.static("public")); // set the public folder as static
// server name - method - route - callback function
app.get("/",logger, (req, res) => {

});


const userRouter = require("./routes/users");
app.use('/users', userRouter)

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.listen(3000, () => console.log("Server is running on Port 3000"));
