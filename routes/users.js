const express = require("express");
 
const router = express.Router(); // like main App but mini app for users

router.get("/", (req, res) => {
  res.send("Users Page");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "New User" });
});

router.post("/", (req, res) => {
    console.log(req.body.firstName)
  res.send("Create User");
});

router
  .route("/:id", (req, res) => {
  
    res.send(`User ID: ${req.params.id}`);
  })
  .put((req, res) => {
  
    res.send(`User ID: ${req.params.id}`);
  })
  .delete((req, res) => {
  
    res.send(`User ID: ${req.params.id}`);
  });
//const users = [{ name: "John" }, { name: "Jane" }, { name: "Jake" }];

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
// this method is more efficient than the above 2 methods
// router.param("/:id", (req, res, next, id) => {
//   req.user = users[id];
//   console.log(`User ID: ${id}`);
//   next();
// });

module.exports = router;
