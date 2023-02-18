const express = require("express");
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require("../modules/pool.js");
// POST Route
router.post("/", (req, res) => {});

// PUT Route
router.put("/like/:id", (req, res) => {
  const sqlText = `UPDATE gallery SET likes = $1 WHERE id = $2`;

  // get current number of likes from client
  const sqlParams = [req.body.currentLikes + 1, req.params.id];

  pool
    .query(sqlText, sqlParams)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log("Error executing SQL query:", sqlText, ":", err);
    });
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
      console.log("Error executing SQL query:", sqlText, ":", err);
      res.sendStatus(500);
    });
});
// END GET Route

module.exports = router;
