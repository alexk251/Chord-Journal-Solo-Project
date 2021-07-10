const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET progression details
 */
router.get('/',rejectUnauthenticated, (req, res) => {
  console.log('req.user.id', req.user.id);

  const queryText = `SELECT * FROM "progression" WHERE user_id = $1`

  pool.query(queryText, [req.user.id])
  .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for your chord progressions:', error);
      res.sendStatus(500);
    });
});


// get highest progression id
router.get('/highest',rejectUnauthenticated, (req, res) => {

  const queryText = `SELECT * FROM "progression" ORDER BY "id" DESC LIMIT 1`

  pool.query(queryText)
  .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for your highest chord progression id:', error);
      res.sendStatus(500);
    });
});

/**
 * POST setup progression details
 */
router.post('/',rejectUnauthenticated, (req, res) => {

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

// delete selected progression
router.delete('/:id',rejectUnauthenticated, (req, res) => {
  console.log(req.params.id)
  const queryText = `DELETE FROM "chord" WHERE progression_id = $1`;
  const queryText2 = `DELETE FROM "progression" WHERE id = $1`;

  pool.query(queryText, [req.params.id])
      .then(
        pool.query(queryText2, [req.params.id])
      .then((results) => res.status(200).send(`progression and chords deleted with id: ${req.params.id}`)))
      .catch((error) => {
          console.log('Error making get/SELECT for your progression:', error);
          res.sendStatus(500);
      })
});

module.exports = router;
