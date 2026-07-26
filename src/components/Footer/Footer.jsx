import ComingSoonLink from '../common/ComingSoonLink';
import { footerData } from '../../data/siteData';
import './Footer.css';

const socialIcons = {
  facebook: '📘',
  x: '✕',
  youtube: '▶️',
  instagram: '📷',
  tiktok: '🎵',
};

// Footer link labels that map to a real section on this single-page build.
// Anything not listed here has no destination in this build's scope, so it
// renders as an honest "coming soon" link instead of a silent dead href.
const inPageDestinations = {
  'Sign up': '#join',
  Groups: '#categories',
  Events: '#nearby-events',
  Cities: '#popular-cities',
  'Online events': '#online-events',
  'Make friends': '#community-stories',
};

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a href="#top" className="footer__logo">
            <span className="footer__logo-icon">k</span>
            <span>
              kulan. <span className="footer__logo-highlight">The people</span> platform
            </span>
          </a>
          <a href="#join" className="footer__cta">
            {footerData.cta} <span className="footer__cta-link">{footerData.ctaLink}</span>
          </a>
        </div>

        <hr className="footer__divider" />

        <div className="footer__columns">
          {footerData.columns.map((column) => (
            <div className="footer__column" key={column.title}>
              <h4 className="footer__column-title">{column.title}</h4>
              <ul className="footer__link-list">
                {column.links.map((link) => {
                  const destination = inPageDestinations[link];
                  return (
                    <li key={link}>
                      {destination ? (
                        <a href={destination}>{link}</a>
                      ) : (
                        <ComingSoonLink>{link}</ComingSoonLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="footer__column">
            <h4 className="footer__column-title">Follow us</h4>
            <div className="footer__social">
              {footerData.social.map((platform) => (
                <ComingSoonLink
                  key={platform}
                  className="footer__social-icon"
                  aria-label={`Kulan on ${platform}`}
                >
                  {socialIcons[platform]}
                </ComingSoonLink>
              ))}
            </div>

            <h4 className="footer__column-title footer__column-title--app">Get the app</h4>
            <div className="footer__apps">
              {footerData.apps.map((app) => (
                <ComingSoonLink className="footer__app-btn" key={app.sublabel}>
                  <span className="footer__app-icon" aria-hidden="true">
                    {app.sublabel === 'Google Play' ? '▶' : '🍎'}
                  </span>
                  <span>
                    <span className="footer__app-label">{app.label}</span>
                    <span className="footer__app-sublabel">{app.sublabel}</span>
                  </span>
                </ComingSoonLink>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <p>{footerData.legal.copyright}</p>
          <ul className="footer__legal-links">
            {footerData.legal.links.map((link) => (
              <li key={link}>
                <ComingSoonLink>{link}</ComingSoonLink>
              </li>
            ))}
          </ul>
        </div>
        <p className="footer__credit">{footerData.legal.credit}</p>
      </div>
    </footer>
  );
}

export default Footer;
