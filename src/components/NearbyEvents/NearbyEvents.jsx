import EventCard from '../EventCard/EventCard';
import EmptyState from '../common/EmptyState';
import { nearbyEventsData } from '../../data/siteData';
import './NearbyEvents.css';

function NearbyEvents() {
  const { events } = nearbyEventsData;

  return (
    <section className="section nearby-events" id="nearby-events">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">
            {nearbyEventsData.title} <span className="nearby-events__edit">✎</span>
          </h2>
          <a className="section-link" href="#nearby-events">
            {nearbyEventsData.seeAll}
          </a>
        </div>

        {events.length > 0 ? (
          <div className="nearby-events__grid">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="🗓️"
            title="No events near you yet"
            message="Check back soon, or widen your search to see more of what's happening around Minneapolis."
          />
        )}
      </div>
    </section>
  );
}

export default NearbyEvents;
