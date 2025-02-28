import React from 'react';
import Job from './_globals/interfaces';
import styles from './page.module.css';
import { grey } from '@mui/material/colors';

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
      <div className={styles.content}>
        <ol className={styles.breadcrumb}>
            <li>
                <a href='/' className={styles.redirect}>MapleStory</a>
                </li>
            <li className={styles.divider}>/</li>
            <li>
            <a href='/jobs' className={styles.redirect}>Jobs</a>
            </li>
            <li className={styles.divider}>/</li>
            <li className={styles.currentPage}>{job.display_name}</li>
        </ol>
        <div className={styles.title}>
            <div>
                <div style={{fontSize: 48}}>{job.display_name} </div>
                <div>{job.description}</div>
            </div>
            <div
            className={styles.icon} 
            style={{backgroundImage: `url(${job.thumbnail_url})`}}>
            </div>
        </div>
      </div>
    );
  }