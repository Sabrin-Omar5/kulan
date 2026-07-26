import ImageWithState from '../common/ImageWithState';
import { heroData } from '../../data/siteData';
import './Hero.css';

function Hero() {
  const { images } = heroData;

  return (
    <section className="hero" id="top">
      <div className="hero__inner container">
        <div className="hero__media hero__media--left">
          <div className="hero__photo hero__photo--top">
            <ImageWithState
              src={images.topLeft.src}
              alt="Friends high-fiving"
              aspectRatio="4 / 3"
              rounded={false}
            />
            <span className="hero__badge hero__badge--dark">
              {images.topLeft.badge}
            </span>
          </div>
          <div className="hero__photo hero__photo--bottom">
            <ImageWithState
              src={images.bottomLeft.src}
              alt="Dance class"
              aspectRatio="4 / 3"
              rounded={false}
            />
            <span className="hero__badge hero__badge--light">
              {images.bottomLeft.badgeIcon} {images.bottomLeft.badge}
            </span>
          </div>
          <span className="hero__blob hero__blob--purple" aria-hidden="true" />
        </div>

        <div className="hero__content">
          <h1 className="hero__headline">
            The <span className="hero__emoji">🧑‍🤝‍🧑</span> people platform.
            <br />
            Where <span className="hero__emoji">🔆</span> interests
            <br />
            become <span className="hero__emoji">💞</span> friendships.
          </h1>
          <p className="hero__subtext">{heroData.subtext}</p>
          <a className="hero__cta" href="#join">
            {heroData.cta}
          </a>
        </div>

        <div className="hero__media hero__media--right">
          <div className="hero__photo hero__photo--top">
            <ImageWithState
              src={images.topRight.src}
              alt="Spinning club"
              aspectRatio="4 / 3"
              rounded={false}
            />
            <span className="hero__badge hero__badge--light">
              {images.topRight.badge}
            </span>
          </div>
          <div className="hero__photo hero__photo--bottom">
            <ImageWithState
              src={images.bottomRight.src}
              alt="Family cooking together"
              aspectRatio="4 / 3"
              rounded={false}
            />
            <span className="hero__badge hero__badge--peach">
              {images.bottomRight.badge}
            </span>
          </div>
          <span className="hero__blob hero__blob--pink" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
