import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <h1>Random Quote Generator</h1>
      <div className="quote-container">
        <p className="quote">{quote}</p>
        <button onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
