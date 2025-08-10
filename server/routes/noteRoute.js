const express = require('express');

const { getAllNotes, getNoteById, createNote, updateNote, deleteNote } = require('../controllers/noteController');

const router = express.Router();

router.route('/notes').get(getAllNotes);
router.route('/notes').post(createNote);
router.route('/notes/:id').get(getNoteById);
router.route('/notes/:id').put(updateNote);
router.route('/notes/:id').delete(deleteNote);

module.exports = router;