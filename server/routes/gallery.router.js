const express = require("express");
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require("../modules/pool.js");
// POST Route
router.post("/", (req, res) => {});

// PUT Route
router.put("/like/:id", (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  for (const galleryItem of galleryItems) {
    if (galleryItem.id == galleryId) {
      galleryItem.likes += 1;
    }
  }
  res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM gallery ORDER BY id`;

  pool
    .query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.log("Error executing SQL query:", sqlText);
      res.sendStatus(500);
    });
});
// END GET Route

module.exports = router;
