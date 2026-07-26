import './ComingSoonLink.css';

/**
 * Used instead of a dead href="#" for links whose destination page
 * isn't part of this build (e.g. footer pages like "Careers" or "Blog").
 * It stays focusable and shows a clear hover/focus state, but is honest
 * that it doesn't navigate anywhere yet, rather than silently doing nothing.
 */
function ComingSoonLink({ children, className = '', ...props }) {
  return (
    <a
      href="#"
      className={`coming-soon-link ${className}`}
      aria-disabled="true"
      title="Coming soon"
      onClick={(event) => event.preventDefault()}
      {...props}
    >
      {children}
    </a>
  );
}

export default ComingSoonLink;
