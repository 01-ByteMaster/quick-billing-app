
import express from "express" ;
import dotenv from "dotenv" ;
import https from "https" ;
import billRoutes from './routes/bills.js';

dotenv.config({
    path : './.env'
})

const app = express();
app.use(express.json());
app.use('/api/bills', billRoutes);

const PORT = process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("QuickBill backend is up and running !!")
})

