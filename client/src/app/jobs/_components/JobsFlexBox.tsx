
'use client'

import React, { useState, useEffect } from 'react';
import styles from './JobsFlexbox.module.css';
import { useRouter } from 'next/navigation';

const localHostUri = "http://localhost:8080/";

export default function JobsFlexBox()
{
     const [loading, setLoading] = useState("Loading...");
     const [jobs, setJobs] = useState([]);
     const router = useRouter();

     const getJobs = async () => {
       try {
        console.log(`${localHostUri}`);
         const response = await fetch(`${localHostUri}jobs`);
         const jsonData = await response.json();
         console.log(jsonData);
         setJobs(jsonData);
         setLoading('Loading Completed!');
       } catch (err) {
        console.log({ error: err instanceof Error ? err.message : "Failed to do something exceptional" });
       }
     }
   
     useEffect(() => {
       getJobs();

     },[]);

     const handleClick = (job: any) => {
      router.push(`/jobs/${job.name}`);
     }

     return (
        <div>
          <div className={styles.container}>
            {jobs.map((job: any, i) => {
              return (
                <div 
                key={`item ${i}`}
                className={styles.item}
                onClick={() => handleClick(job)}
                >
                  {job.display_name}
                </div>
              );
            })}
          </div>
          </div>
      );

}