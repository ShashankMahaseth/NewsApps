import React, { useState, useEffect } from 'react';
import { fetchNews } from './services/newsApi';
import CountrySelector from './components/CountrySelector';
import NewsCard from './components/NewsCard';
import Header from './components/Header';
import { Newspaper } from 'lucide-react';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('us');
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNews(selectedCountry);
        if (data.status === 'success') {
          // Filter out articles with no image or "PAID PLANS" content if needed
          // For now, filtering mainly removing duplicates or empty titles if any
          const validNews = data.results.filter(item => item.title && item.image_url);
          setNews(validNews);
        } else {
          setError('Failed to fetch news.');
        }
      } catch (err) {
        setError('An error occurred while fetching news.');
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, [selectedCountry]);

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <CountrySelector
          selectedCountry={selectedCountry}
          onSelectCountry={setSelectedCountry}
        />

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading-container">
            <Newspaper className="spinner-icon" size={48} />
            <p>Fetching latest headlines...</p>
          </div>
        ) : (
          <div className="news-grid">
            {news.length > 0 ? (
              news.map((item) => (
                <NewsCard key={item.article_id || Math.random()} article={item} />
              ))
            ) : (
              !error && <div className="no-results">No news found for this country.</div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
