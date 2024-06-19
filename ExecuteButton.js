import React from 'react';
import axios from 'axios';

const ExecuteButton = () => {
  const handleClick = async () => {
    try {
      const response = await axios.post('https://localhost:7023/api/Execute');
      console.log(response.data); // Log the response data
      alert('Request sent successfully'); // Show a success message
    } catch (error) {
      console.error('Error sending request:', error); // Log any errors
      alert('Failed to send request'); // Show an error message
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Execute C# Code</button>
    </div>
  );
};

export default ExecuteButton;
