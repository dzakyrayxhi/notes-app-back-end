import express from 'express';
import {
  createNote,
  deleteNotebyId,
  editNotebyId,
  getNotes,
  getNotebyId,
} from './controller.js';

const router = express.Router();
router.post('/notes', createNote);
router.get('/notes', getNotes);
router.get('/notes/:id', getNotebyId);
router.put('/notes/:id', editNotebyId);
router.put('/notes/:id', editNotebyId);
router.delete('/notes/:id', deleteNotebyId);
export default router;