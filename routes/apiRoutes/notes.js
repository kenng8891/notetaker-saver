const router = require('express').Router();
const { notes } = require('../../Develop/db/db.json')
const { v4: uuidv4 } = require('uuid');
const { createNote, editNote, deleteNote, findById } = require('../../lib/notes');


router.get('/notes', (req, res) => {
    console.log(notes)
    res.json(notes)
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result)
    } else {
        res.sendStatus(404);
    }
})




module.exports = router