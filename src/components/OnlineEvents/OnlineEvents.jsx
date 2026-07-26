import EventCard from '../EventCard/EventCard';
import EmptyState from '../common/EmptyState';
import { onlineEventsData } from '../../data/siteData';
import './OnlineEvents.css';

function OnlineEvents() {
  const { events } = onlineEventsData;

  return (
    <section className="section online-events" id="online-events">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{onlineEventsData.title}</h2>
          <a className="section-link" href="#online-events">
            {onlineEventsData.seeAll}
          </a>
        </div>

        {events.length > 0 ? (
          <div className="online-events__grid">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon="💻"
            title="No online events scheduled"
            message="New virtual meetups are added every week — check back soon."
          />
        )}

        <p className="online-events__floating">
          ✨ <span>{onlineEventsData.floatingLabel}</span>
        </p>
      </div>
    </section>
  );
}

export default OnlineEvents;
