"use client"

import React, { useEffect, useState } from 'react';
import Navbar from './(components)/navbar';
import Sidebar from './(components)/sidebar';

const localHostUri = "http://localhost:8080/";

export default function index() {

  const [loading, setLoading] = useState("Loading...");
  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    try {
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
      <Navbar />
      <Sidebar />
      <h1>{loading}</h1>
      <div>
        {jobs.map((job) => (
          <h1 key={job.name}>{job.name}</h1>
        ))}
      </div>
      </div>
  );
}