import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';

const HelloComponent: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...');
  const [number, setNumber] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = () => {
      ApiService.fetchMessage()
        .then((data) => setMessage(data.message))
        .catch((error) => console.error('Error fetching message:', error));
      
      ApiService.fetchNumber()
        .then((data) => setNumber(data.number))
        .catch((error) => console.error('Error fetching number:', error));
    };

    fetchData();
    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={containerStyle}>
      <h1>Hello from ODLUX!</h1>
      <p>Message: {message}</p>
      <p>Random Number: {number !== null ? number : 'Loading...'}</p>
    </div>
  );
};

export default HelloComponent;

const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#ADD8E6',
    fontSize: '1.5rem',
  };