import mongoose from 'mongoose';
import { DB_URL, DB_NAME, PORT } from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log(`\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
  } catch (error) {
    console.error("ERROR IN CONNECTING DATABASE", error);
  }
}

export default connectDB;