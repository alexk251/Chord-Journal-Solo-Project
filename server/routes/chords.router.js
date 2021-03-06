const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

// add setup chords
router.post('/setup',rejectUnauthenticated, (req, res) => {
    console.log(req.body)

    const queryText = `INSERT INTO "chord" (progression_id, root_note, chord_number, chord_quality, octave)
      VALUES ($1, $2, $3, $4, $5)`;

        pool.query(queryText, [req.body.progression_id, req.body.root_note, req.body.chord_number, req.body.chord_quality, req.body.octave])
        .then((results) => {
            console.log(`Chord Added`, results)
        })  
        .catch((err) => {
                console.log(`Chord ${req.body.chord_number} ServerSide Post failed: `, err);
                res.sendStatus(500);
            });
    
    res.sendStatus(201)

});
// add single chord
router.post('/',rejectUnauthenticated, (req, res) => {

    const queryText = `INSERT INTO "chord" (progression_id, root_note, chord_number, chord_quality, octave)
      VALUES ($1, $2, $3, $4, $5)`;
    
        pool.query(queryText, [req.body.progression_id, req.body.root_note, req.body.chord_number, req.body.chord_quality, req.body.octave])
        .then((results) => {
            console.log(`Chord Added`, results)
            res.sendStatus(201)
        })
            .catch((err) => {
                console.log(`Chord ${req.body.chord_number} ServerSide Post failed: `, err);
                res.sendStatus(500);
            });

});

// get all chords from selected progression
router.get('/',rejectUnauthenticated, (req, res) => {
    console.log('req.user.id', req.user.id);
    console.log(req.query.progression_id)


    const queryText = `SELECT * FROM "chord" WHERE progression_id = $1 ORDER BY chord_number ASC `;

    pool.query(queryText, [req.query.progression_id])
        .then((results) => res.send(results.rows))
        .catch((error) => {
            console.log('Error making get/SELECT for your chords:', error);
            res.sendStatus(500);
        });
});

// delete selected chord
router.delete('/:id',rejectUnauthenticated, (req, res) => {
    console.log()
    const queryText = `DELETE FROM "chord" WHERE id = $1`;

    pool.query(queryText, [req.params.id])
        .then((results) => res.status(200).send(`Chord deleted with id: ${req.params.id}`))
        .catch((error) => {
            console.log('Error making get/SELECT for your chords:', error);
            res.sendStatus(500);
        });

});

// update selected chord
router.put('/:id',rejectUnauthenticated, (req, res) => {
    const chordDetails = req.body;
    const queryText = `UPDATE "chord" SET "root_note"=$1, "chord_quality"=$2, "octave"=$3 WHERE "id"=$4;`;
    pool.query(queryText, [chordDetails.note , chordDetails.quality , chordDetails.octave ,req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((err) => {
            console.log('Error completing UPDATE Chord query', err);
            res.sendStatus(500);
        });
});

            module.exports = router;