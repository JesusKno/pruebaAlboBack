import mongoose from "mongoose";

mongoose.Promise = global.Promise;


const db = mongoose.connect( 'mongodb://localhost:27017/task').then(() => console.log('Connected Successfully')).catch(err=> {  console.log(err), process.exit})


export default db