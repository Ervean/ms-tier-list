"use client"

import React, { useEffect, useState } from 'react';
import Sidebar from './_components/Sidebar';
import dotenv from "dotenv";
dotenv.config();

const localHostUri = process.env.NEXT_PUBLIC_LOCALHOSTURL;

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
      console.log({ error: err instanceof Error ? err.message : "Failed to do something exceptional" });
    }
  }

  useEffect(() => {
    getJobs();
  },[]);

  return (
    <div>
      page
      </div>
  );
}