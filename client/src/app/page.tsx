"use client"

import React, { useEffect, useState } from 'react';
import Navbar from './_components/Navbar';
import Sidebar from './_components/Sidebar';

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
      </div>
  );
}