import React from 'react';
import Job from './_globals/interfaces';

const localHostUrl = process.env.NEXT_PUBLIC_LOCALHOSTURL;


export default async function Page( {
    params,
}: {
    params: Promise <{job: string}>
})  {
    const jobParam = (await params).job;
    const data = await fetch(`${localHostUrl}jobs/?name=${jobParam}`);
    const jobs = await (data.json()) as Job[];
    if(jobs.length === 0) {
        return <div>Not Found</div>;
    }
    const job = jobs[0];
    return (
      <div>
        <div>{job.display_name} </div>
        <div>{job.description}</div>
      </div>
    );
  }