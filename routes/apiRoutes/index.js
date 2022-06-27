const router = require('express').Router();
const noteRoutes = require('./notesR');

router.use(noteRoutes);


module.exports = router;