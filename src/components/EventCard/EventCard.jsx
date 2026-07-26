import ImageWithState from '../common/ImageWithState';
import './EventCard.css';

function EventCard({ event }) {
  return (
    <article className="event-card" tabIndex={0}>
      <div className="event-card__image-wrap">
        <ImageWithState src={event.image} alt={event.title} aspectRatio="4 / 3" />
        {event.free && <span className="event-card__free">Free</span>}
      </div>
      <h3 className="event-card__title">{event.title}</h3>
      <p className="event-card__meta">
        {event.date}
        {event.mode ? ` · ${event.mode}` : ''}
      </p>
      <p className="event-card__host">{event.host}</p>
    </article>
  );
}

export default EventCard;
