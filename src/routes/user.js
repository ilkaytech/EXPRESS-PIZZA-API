"use strict";
/* ----------------------
    NODEJS EXPRESS | PIZZA API
---------------------------------- */
const router = require("express").Router();
/* ---------------------------------------------------- */
// Routes/user:

const user = require("../controllers/user");
// URL: /users
router.route("/").get(user.list).post(user.create);

router
  .route("/:id")
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.delete);
/* ---------------------------------------------------- */
module.exports = router;
