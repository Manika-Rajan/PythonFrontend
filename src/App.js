import React, { useState } from 'react';

function App() {
  const [lambdaResponse, setLambdaResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://6kbevewanc.execute-api.ap-south-1.amazonaws.com/dev/rupa-res', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setLambdaResponse(data.body || 'No response message');
    } catch (error) {
      console.error('Error:', error);
      setError('Error communicating with Lambda function');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {lambdaResponse && <p>Lambda Response: {lambdaResponse}</p>}
        <button onClick={handleSubmit} disabled={isLoading}>Submit</button>
      </header>
    </div>
  );
}

export default App;
