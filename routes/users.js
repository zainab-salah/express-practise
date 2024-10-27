const express = require("express");

const router = express.Router(); // like main App but mini app for users

router.get("/", (req, res) => {
  res.send("Users Page");
});

router.get("/new", (req, res) => {
  res.send("New User Page");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router.route("/:id",(req,res)=>{
    req.params.id;
    res.send(`User ID: ${req.params.id}`);
}).put((req,res)=>{
    req.params.id;
    res.send(`User ID: ${req.params.id}`);
}).delete((req,res)=>{
    req.params.id;
    res.send(`User ID: ${req.params.id}`);
});

// router.get("/:id", (req, res) => {
//   req.params.id;
//   res.send(`User ID: ${req.params.id}`);
// });
// router.put("/:id", (req, res) => {
//   req.params.id;
//   res.send(`User ID: ${req.params.id}`);
// });
// router.delete("/:id", (req, res) => {
//   req.params.id;
//   res.send(`User ID: ${req.params.id}`);
// });

module.exports = router;
