import express from 'express';
import { getNotes,createNote,deleteNote,updateNote,getNotesbyId } from '../controller/notesController.js';

const router = express.Router();

router.get('/',getNotes)
router.get('/:id',getNotesbyId)

router.post('/',createNote)

router.put('/:id',updateNote)

router.delete('/:id',deleteNote)

export default router;