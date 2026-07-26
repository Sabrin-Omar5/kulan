import { useState } from 'react';
import { SkeletonBox } from './Skeleton';
import './ImageWithState.css';

/**
 * Wraps an <img> with a real loading skeleton (shown until the browser
 * actually finishes fetching/decoding the image) and a graceful empty
 * state if the image fails to load.
 */
function ImageWithState({ src, alt, className = '', aspectRatio, rounded = true }) {
  const [status, setStatus] = useState('loading'); // loading | loaded | error

  return (
    <div
      className={`image-state ${rounded ? 'image-state--rounded' : ''} ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {status === 'loading' && <SkeletonBox className="image-state__skeleton" />}

      {status === 'error' && (
        <div className="image-state__empty" role="img" aria-label={alt || 'Image unavailable'}>
          <span className="image-state__empty-icon" aria-hidden="true">
            🖼️
          </span>
          <span className="image-state__empty-text">Image unavailable</span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="image-state__img"
        style={{ opacity: status === 'loaded' ? 1 : 0 }}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />
    </div>
  );
}

export default ImageWithState;
