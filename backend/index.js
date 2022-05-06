import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import router from './router.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)




// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/Curd_db', {
    useNewUrlParser: true,

}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});


app.get("/", (req, res) => {
    res.send('hello')
})

app.listen(5000, () => {
    console.log("port runing ing 5000");
})