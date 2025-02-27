
'use client'

import React, { useState, useEffect } from 'react';
import styles from './JobsFlexbox.module.css';
import { useRouter } from 'next/navigation';
import Job from './_globals/interfaces';

const localHostUri = process.env.NEXT_PUBLIC_LOCALHOSTURL;

export default function JobsFlexBox()
{
     const [loading, setLoading] = useState("Loading...");
     const [jobs, setJobs] = useState<Job[]>([]);
     const router = useRouter();

     const getJobs = async () => {
       try {
        console.log(`${localHostUri}`);
         const response = await fetch(`${localHostUri}jobs`);
         const jsonData = await response.json();
         console.log(jsonData);
         setJobs(jsonData as Job[]);
         setLoading('Loading Completed!');
       } catch (err) {
        console.log({ error: err instanceof Error ? err.message : "Failed to do something exceptional" });
       }
     }
   
     useEffect(() => {
       getJobs();

     },[]);

     const handleClick = (job: Job) => {
      router.push(`/jobs/${job.name}`);
     }

     return (
        <div>
          <div className={styles.container}>
            {jobs.map((job: Job, i) => {
              return (
                <div 
                key={`item ${i}`}
                className={styles.item}
                onClick={() => handleClick(job)}
                >
                  <div
                  className={styles.icon}
                  style={{backgroundImage: `url(${job.thumbnail_url})`, width: 250, height: 250, marginLeft: -40, color: 'white'}}
                  >
                  </div>
                </div>
              );
            })}
          </div>
          </div>
      );

}