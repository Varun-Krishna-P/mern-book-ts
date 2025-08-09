import mongoose, { Document, Schema} from 'mongoose'

interface IBook extends Document {
    title: string;
    author: string;
    description: string;
    edition: string;
    instock: boolean;
    publicationDate: string;
    publisher: string;
}

const BookSchema: Schema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    edition: { type: String},
    instock: {type: Boolean},
    publicationDate: { type: String},
    publisher: {type: String}

},{
    timestamps: true
})


const Book  = mongoose.model<IBook>('Book', BookSchema)

export default Book;