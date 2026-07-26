import { howItWorksData } from '../../data/siteData';
import './HowItWorks.css';

function HowItWorks() {
  const [step1, step2, step3] = howItWorksData.steps;

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <h2 className="how-it-works__title">{howItWorksData.title}</h2>

        <div className="how-it-works__layout">
          <article className="how-it-works__step how-it-works__step--1">
            <span className="how-it-works__icon" aria-hidden="true">
              {step1.icon}
            </span>
            <div>
              <h3 className="how-it-works__step-title">{step1.title}</h3>
              <p className="how-it-works__step-text">{step1.text}</p>
              {step1.link && (
                <a className="how-it-works__step-link" href="#nearby-events">
                  {step1.link}
                </a>
              )}
            </div>
          </article>

          <span className="how-it-works__connector how-it-works__connector--1" aria-hidden="true" />

          <article className="how-it-works__step how-it-works__step--2">
            <span className="how-it-works__icon" aria-hidden="true">
              {step2.icon}
            </span>
            <div>
              <h3 className="how-it-works__step-title">{step2.title}</h3>
              <p className="how-it-works__step-text">{step2.text}</p>
            </div>
          </article>

          <span className="how-it-works__connector how-it-works__connector--2" aria-hidden="true" />

          <article className="how-it-works__step how-it-works__step--3">
            <span className="how-it-works__icon" aria-hidden="true">
              {step3.icon}
            </span>
            <div>
              <h3 className="how-it-works__step-title">{step3.title}</h3>
              <p className="how-it-works__step-text">{step3.text}</p>
              {step3.link && (
                <a className="how-it-works__step-link" href="#join">
                  {step3.link}
                </a>
              )}
            </div>
          </article>

          <p className="how-it-works__floating">
            <span aria-hidden="true">🫂</span> {howItWorksData.floatingLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
