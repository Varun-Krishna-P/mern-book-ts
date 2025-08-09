import express from 'express'
import initDbConnection from './config/db.ts'
import bookRoutes from './routes/booksRoutes.ts'

initDbConnection();

const app = express();

app.use(express.json());

app.use("/api/books", bookRoutes)



export default app;