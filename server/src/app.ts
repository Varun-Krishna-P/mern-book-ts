import express from 'express'
import initDbConnection from './config/db.ts'

initDbConnection();

const app = express();

app.use(express.json());



export default app;