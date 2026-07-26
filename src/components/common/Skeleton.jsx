import './Skeleton.css';

export function SkeletonBox({ className = '', style }) {
  return <span className={`skeleton skeleton-box ${className}`} style={style} aria-hidden="true" />;
}

export function SkeletonText({ width = '100%', className = '' }) {
  return (
    <span
      className={`skeleton skeleton-text ${className}`}
      style={{ width }}
      aria-hidden="true"
    />
  );
}
