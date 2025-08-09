import express from 'express'

import { createBook, getAllBooks, getBook } from '../controllers/booksController'


const router = express.Router();


router.post("", createBook);
router.get("", getAllBooks);
router.get("/:id", getBook);

export default router;