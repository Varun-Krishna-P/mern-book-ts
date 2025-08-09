import express from 'express'

import { createBook } from '../controllers/booksController'


const router = express.Router();


router.post("", createBook);

export default router;