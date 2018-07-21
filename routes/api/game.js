const poker = require("../../lib/node-poker");
const express = require("express");
const router = express.Router();

// @route   GET api/game/newtable
// @desc    Register user
// @access  Public
router.get("/newtable", (req, res) => {
  const table = new poker.Table(50, 100, 4, 10, 100, 1000);

  res.json(table);
});

module.exports = router;
