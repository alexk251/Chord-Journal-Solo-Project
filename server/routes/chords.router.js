import {useSelector} from 'react-redux';

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.post('/', (req, res) => {

    const queryText = `INSERT INTO "chord" (progression_id, root_note, chord_number, chord_quality, octave)
      VALUES ($1, $2, $3, $4, $5)`;
    for (let i = 0; i < req.body.length; i++) {
        pool.query(queryText, [req.body[i].progression_id, req.body[i].root_note, req.body[i].chord_number, req.body[i].chord_quality, req.body[i].octave])
            .catch((err) => {
                console.log(`Chord ${req.body[i].chord_number} ServerSide Post failed: `, err);
                res.sendStatus(500);
            });
    }
    res.sendStatus(201)

});

router.get('/', (req, res) => {
    console.log('req.user.id', req.user.id);
    const chords = useSelector((store => store.chordsReducer))

  
    const queryText = `SELECT * FROM "chord" WHERE user_id = $1 AND progression_id = $2`;
  
    pool.query(queryText, [req.user.id, chords[0].progression_id])
    .then((results) => res.send(results.rows))
      .catch((error) => {
        console.log('Error making get/SELECT for your chords:', error);
        res.sendStatus(500);
      });
  });

module.exports = router;