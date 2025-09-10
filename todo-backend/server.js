const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://<username>:<password>@tododb.rkf9pbs.mongodb.net/?retryWrites=true&w=majority&appName=ToDoDB")
        console.log("MongoDB connected");

    } catch (error) {
        console.error("MongoDB connection failed", error);
    }

}

 

app.get('/', (req, res)=>{
       res.status(200).json({message:"Hello from magical express server"})
});


connectDB();
const PORT = 3001;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})
