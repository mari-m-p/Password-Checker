const express = require("express");
const router = express.Router();
const { savePassword } = require("../controllers/password");

router.route("/").post(savePassword);

module.exports = router;
