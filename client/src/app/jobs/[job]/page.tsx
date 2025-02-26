import React from 'react';


export default async function JobDetails({
    params,
}: {
    params: Promise<{ job: string}>;
}) {
    const jobParam = (await params).job;
    
    fetch(`http://localhost:8080/jobs/?name=${jobParam}`)
    .then(function(response){ return response.json(); })
    .then(function(data) {
        const job = data;
        console.log(job);
    });

    return (
        <div>
            <h1>{jobParam}</h1>
        </div>
    )
}