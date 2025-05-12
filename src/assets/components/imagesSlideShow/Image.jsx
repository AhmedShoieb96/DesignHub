import React, { useState, useEffect } from 'react';
import './imageSlider.css';

export default function Image({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Reset loaded state when src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setLoaded(true); // Mark as loaded to remove loading state
  };

  const classes = `image ${className} ${loaded ? 'loaded' : ''} ${error ? 'error' : ''}`.trim();

  return (
    <div className="image-container">
      {!loaded && (
        <div className="image-placeholder">
          <div className="image-loading-spinner"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={classes}
      />
    </div>
  );
}