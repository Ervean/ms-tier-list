import express from "express";
import cors from 'cors';
import pool from "./db.js";

const app = express();
const PORT = 8080;

//middleware
app.use(cors());
app.use(express.json());

//routes

//Get all Jobs
app.get("/jobs", async(req, res) => {
    try{
        const allJobs = await pool.query("SELECT * FROM jobs");
        res.json(allJobs.rows);
    } catch(err){
        console.error(err.message);
    }
});

//Get a job
app.get("/jobs/:id", async(req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const job = await pool.query(`SELECT * FROM jobs WHERE id = ${id}`);
        if(job.rowCount >= 1) {
            res.json(job.rows[0]);
        } else {
            res = null;
        }
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/api/home", (req, res) => {
    res.json({ message:  "Hello World!" });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});