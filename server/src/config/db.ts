import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const MONGO_URI: string = process.env.MONGO_URI || ""

const initDbConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true

        }).then(() => {
            console.log('connected to mongodb')
        }).catch(err => {
            console.error(`databaseError: ${err}`)
        }); 
    } catch(error){
        console.error(`error occured: ${error}`)
        process.exit(1)
    }
};

export default initDbConnection;

