// app/components/Loading.js
'use client'; // This is a client-side component

import './Loading.css'
import { useEffect, useState } from 'react';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading timeout (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-container">
      <h1 className='loading-text'>Loading...</h1>
    </div>
  );
};

export default Loading;
