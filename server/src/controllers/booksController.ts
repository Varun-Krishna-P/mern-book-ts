import type { Request, Response } from 'express'

import Book from '../models/book.ts';

export const getAllBooks = async (req: Request, res: Response): Promise<void> => {
    try{
        const books = await Book.find({}).lean()
        res.status(200).json(books);
    }catch(err) {
        res.status(500).json({message: 'Error listing books', error: err})
    }
}

export const getBook = async (req: Request, res: Response): Promise<void> => {
    try{
        const book = await Book.findOne({_id: req.params.id })
        if(!book){
            res.status(404).json({message: "Error fetching book", error: "book not found"})
        }else{
            res.status(200).json(book)
        }
    }catch(error) {
        res.status(500).json({message: "Error fetching book", error: error});
    }
}

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

export const updateBook = async (req: Request, res: Response): Promise<void> => {
    try{
        // const { title, author, description, edition, instock, publicationDate, publisher } = req.body;
        const book = await Book.updateOne({_id: req.params.id}, req.body)
        if(book){
            console.table({matchedCount: book.matchedCount, modifiedCount: book.modifiedCount, acknoledged: book.acknowledged, upsertedId: book.upsertedId, upsertedCount: book.upsertedCount})
            res.status(200).json(book)
        }else {
            res.status(400).json({message: "book not found!"})
        }
        
    }catch(err) {
        res.status(500).json({message: "error updating book", error: err})
    }
}