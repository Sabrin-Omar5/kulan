import ImageWithState from '../common/ImageWithState';
import ComingSoonLink from '../common/ComingSoonLink';
import EmptyState from '../common/EmptyState';
import { popularCitiesData } from '../../data/siteData';
import './PopularCities.css';

function PopularCities() {
  const { cities } = popularCitiesData;

  return (
    <section className="section popular-cities" id="popular-cities">
      <div className="container">
        <div className="section-head popular-cities__head">
          <div>
            <h2 className="section-title">{popularCitiesData.title}</h2>
            <p className="popular-cities__subtext">{popularCitiesData.subtext}</p>
          </div>
          <span className="popular-cities__tag">
            <span aria-hidden="true">📍</span> {popularCitiesData.tag}
          </span>
        </div>

        {cities.length > 0 ? (
          <div className="popular-cities__grid">
            {cities.map((city) => (
              <ComingSoonLink className="popular-cities__card" key={city.name}>
                <div className="popular-cities__image-wrap">
                  <ImageWithState src={city.image} alt={city.name} rounded={false} />
                </div>
                <h3 className="popular-cities__name">{city.name}</h3>
              </ComingSoonLink>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="🌆"
            title="No cities to show yet"
            message="We're always adding new cities — check back soon."
          />
        )}
      </div>
    </section>
  );
}

export default PopularCities;
