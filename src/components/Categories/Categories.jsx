import ComingSoonLink from '../common/ComingSoonLink';
import { categoriesData } from '../../data/siteData';
import './Categories.css';

function Categories() {
  return (
    <section className="section categories" id="categories">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{categoriesData.title}</h2>
        </div>

        <div className="categories__grid">
          {categoriesData.categories.map((category) => (
            <ComingSoonLink
              key={category.id}
              className="categories__card"
              style={{ '--accent': category.accent }}
            >
              <span className="categories__arrow" aria-hidden="true">
                ↗
              </span>
              <h3 className="categories__label">{category.label}</h3>
              <span className="categories__icon" aria-hidden="true">
                {category.icon}
              </span>
            </ComingSoonLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
