
'use client'

import React, { useState, useEffect } from 'react';
import styles from './Flexbox.module.css';

const localHostUri = "http://localhost:8080/";

export default function FlexBox()
{
     const [loading, setLoading] = useState("Loading...");
     const [jobs, setJobs] = useState([]);
   
   
     const getJobs = async () => {
       try {
        console.log(`${localHostUri}`);
         const response = await fetch(`${localHostUri}jobs`);
         const jsonData = await response.json();
         console.log(jsonData);
         setJobs(jsonData);
         setLoading('Loading Completed!');
       } catch (err) {
         console.error(err.message);
       }
     }
   
     useEffect(() => {
       getJobs();

     },[]);

     return (
        <div>
          <div className={styles.container}>
            {jobs.map((job, i) => {
              return (
                <div 
                key={`item ${i}`}
                className={styles.item}
                >
                  {job.name}
                </div>
              );
            })}
          </div>
          </div>
      );

}