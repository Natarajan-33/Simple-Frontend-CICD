import { useState, useEffect } from 'react';

export default function App() {
  const [quote, setQuote] = useState(
    'Click "Get Quote" to fetch a random quote!'
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Get environment variables
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  const APP_TITLE = import.meta.env.VITE_APP_TITLE || 'Random Quote Generator';

  // Set document title dynamically
  useEffect(() => {
    document.title = APP_TITLE;
  }, [APP_TITLE]);

  async function fetchQuote() {
    setLoading(true);
    setError('');

    try {
      // Call the API using environment variable
      const fullUrl = `${API_URL}/quote`;
      const res = await fetch(fullUrl);
      if (!res.ok) throw new Error('Failed to fetch quote.');
      const data = await res.json();
      setQuote(data.quote);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>{APP_TITLE}</h1>

        <button
          className="quote-button"
          onClick={fetchQuote}
          disabled={loading}
        >
          {loading ? 'Loading…' : 'Get Quote'}
        </button>

        {error && <div className="error">{error}</div>}

        {!error && (
          <div className="quote-display">
            <blockquote>{quote}</blockquote>
          </div>
        )}
      </div>
    </div>
  );
}
