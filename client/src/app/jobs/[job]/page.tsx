'use client'

import React, { useState, useEffect } from 'react';
import { useParams, notFound  } from 'next/navigation';
import Job from './_globals/interfaces';

const localHostUri = process.env.NEXT_PUBLIC_LOCALHOSTURL;

export default function JobDetails() {
    const params = useParams<{job: any}>();
    const [jobName, setJobName] = useState<string>(params.job);
    const [jobDetails, setJobDetails] = useState<Job>();

    const getJob = async () => {
        try {
          const response = await fetch(`${localHostUri}jobs/?name=${jobName}`);
          const jsonData = await response.json();
          console.log(jsonData);
          if(jsonData) {
            console.log('we json data ');
            setJobDetails((jsonData as Job[])[0]);
            console.log(jobDetails);
          } else {
            return notFound;
          }
        } catch (err) {
            console.log({ error: err instanceof Error ? err.message : "Failed to do something exceptional" });
          return notFound;
        }
      }
    
    useEffect(() => {
        getJob();
    }, []);

    console.log(jobName);
    return (
        <div>
            <h1>{jobDetails ? jobDetails.display_name : ""}</h1>
        </div>
    )
}