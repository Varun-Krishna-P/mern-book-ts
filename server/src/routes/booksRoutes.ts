import express from 'express'

import { createBook, getAllBooks, getBook, updateBook } from '../controllers/booksController'


const router = express.Router();


router.post("", createBook);
router.get("", getAllBooks);
router.get("/:id", getBook);
router.put("/:id", updateBook);

export default router;