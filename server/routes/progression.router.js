const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

  const queryText = `INSERT INTO "progression" (progression_name, amount_of_chords, user_id, tempo, beat_per_measure, beat_value)
    VALUES ($1, $2, $3, $4, $5, $6)`;
  pool
    .query(queryText, [req.body.progression_name, req.body.amount_of_chords, req.body.user_id, req.body.tempo, req.body.beat_per_measure, req.body.beat_value])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Progression ServerSide Post failed: ', err);
      res.sendStatus(500);
    });

});

module.exports = router;
