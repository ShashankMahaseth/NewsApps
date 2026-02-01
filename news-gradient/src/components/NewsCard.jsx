import React from 'react';
import { ExternalLink, Calendar, User } from 'lucide-react';

const NewsCard = ({ article }) => {
    if (!article) return null;

    const { title, description, link, image_url, source_id, pubDate, creator } = article;

    // Handlers for image errors
    const handleImageError = (e) => {
        e.target.style.display = 'none'; // distinct from placeholder - just hide if broken
    };

    return (
        <div className="news-card">
            <div className="news-image-container">
                {image_url ? (
                    <img
                        src={image_url}
                        alt={title}
                        className="news-image"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="news-image-placeholder">
                        <span>{source_id || 'News'}</span>
                    </div>
                )}
                <div className="news-overlay"></div>
            </div>

            <div className="news-content">
                <div className="news-meta">
                    <span className="news-source">{source_id}</span>
                    {pubDate && (
                        <span className="news-date">
                            <Calendar size={12} />
                            {new Date(pubDate).toLocaleDateString()}
                        </span>
                    )}
                </div>

                <h3 className="news-title">{title}</h3>

                <p className="news-description">
                    {description ? (description.length > 100 ? description.substring(0, 100) + '...' : description) : 'No description available.'}
                </p>

                <div className="news-footer">
                    {creator && (
                        <div className="news-creator">
                            <User size={12} />
                            <span>{creator[0]}</span>
                        </div>
                    )}
                    <a href={link} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                        Read More <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
