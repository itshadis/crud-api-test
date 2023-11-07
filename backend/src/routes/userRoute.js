const express = require("express");
const { setDataUser, getDataUser, getOneUser, delDataUser } = require("../controllers/userController");

const router = express.Router();

router.get("/all", getDataUser);
router.get("/:id", getOneUser);
router.post("/create", setDataUser);
router.delete("/delete/:id", delDataUser);

module.exports = router;