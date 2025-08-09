import type { Request, Response } from 'express'

import Book from '../models/book.ts';


export const createBook = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, author, description, edition, instock, publicationDate, publisher } = req.body;

        const newBook = new Book({ title, author, description, edition, instock, publicationDate, publisher });
        await newBook.save();
        res.status(201).json(newBook);
    }catch(error) {
        res.status(501).json({ message: 'Error Creating book', error: error})
    }
}