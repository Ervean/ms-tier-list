import express, { query } from "express";
import cors from 'cors';
import supabase from "./db.js";

const app = express();
const PORT = 8080;

//middleware
app.use(cors());
app.use(express.json());

//routes
//

//Get all Jobs
app.get("/jobs", async(req, res) => {
    try{
        console.log("Trying to get jobs");
        let jobs = await supabase.from('jobs').select('*');
        jobs.data.sort((a,b) => a.name.localeCompare(b.name));
        res.status(200).json(jobs.data);
    } catch(err){
        console.error(err.message);
    }
});

//Get a job
app.get("/jobs/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const job = await supabase.from('jobs').select('*').eq('id', id);
        if(job.data.length >= 1) {
            res.status(200).json(job.data[0]);
        } else {
            res = null;
        }
    } catch (err) {
        console.error(err.message);
    }
});

/*
//update description
app.put("/jobs/description/:id", async (req, res) => { // disabled due to not needing and not working
    try {
        const { id } = req.params;
        console.log("trying to update description for " + id);
        const { description } = req.body;
        const updateJobDescription = await supabase.from('jobs').update({description: {description}}).eq('id', id).select('*');
        res.json(`Job id: ${id} description was updated to ${description}`);
    } catch (err) {
        console.error(err.message);
    }
});
*/
/*
//delete a job
app.delete("/jobs/:id", async(req, res) => {
    try {
        const { id } = req.params;
        console.log("Deleting is not available for now"); // this is an example
     //   const deleteJob = await supabase.query("DELETE FROM jobs WHERE id = $1", [ id ]);
    } catch (error) {
        console.log(error.err);
    }
});
*/

app.get("/api/home", (req, res) => {
    res.json({ message:  "Hello World!" });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});