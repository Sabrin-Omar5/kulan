import ImageWithState from '../common/ImageWithState';
import { membershipCtaData } from '../../data/siteData';
import './MembershipCTA.css';

function MembershipCTA() {
  return (
    <section className="section membership-cta" id="join">
      <div className="container">
        <div className="membership-cta__card">
          <span className="membership-cta__deco membership-cta__deco--1" aria-hidden="true" />
          <span className="membership-cta__deco membership-cta__deco--2" aria-hidden="true" />

          <div className="membership-cta__avatar membership-cta__avatar--1" aria-hidden="true">
            <ImageWithState
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
              alt=""
              rounded={false}
            />
          </div>
          <div className="membership-cta__avatar membership-cta__avatar--2" aria-hidden="true">
            <ImageWithState
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&q=80"
              alt=""
              rounded={false}
            />
          </div>
          <div className="membership-cta__avatar membership-cta__avatar--3" aria-hidden="true">
            <ImageWithState
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&q=80"
              alt=""
              rounded={false}
            />
          </div>
          <span className="membership-cta__icon membership-cta__icon--globe" aria-hidden="true">
            🌐
          </span>
          <span className="membership-cta__icon membership-cta__icon--music" aria-hidden="true">
            🎵
          </span>
          <span className="membership-cta__icon membership-cta__icon--sparkle" aria-hidden="true">
            ✨
          </span>

          <div className="membership-cta__content">
            <h2 className="membership-cta__title">{membershipCtaData.title}</h2>
            <p className="membership-cta__subtext">{membershipCtaData.subtext}</p>
            <button
              className="membership-cta__button"
              type="button"
              title="Sign-up isn't available in this preview"
            >
              {membershipCtaData.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembershipCTA;
