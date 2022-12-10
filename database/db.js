import mongoose from "mongoose";


const Connection = async(username, password) =>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.b1gze84.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{useNewUrlParser: true});
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log("Error occured ",error);
    }
}

export default Connection;