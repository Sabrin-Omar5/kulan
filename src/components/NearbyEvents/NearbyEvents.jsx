import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import EventCard from '../EventCard/EventCard';
import EmptyState from '../common/EmptyState';
import QueryErrorBoundary from '../common/QueryErrorBoundary';
import { SkeletonBox, SkeletonText } from '../common/Skeleton';
import { nearbyEventsData } from '../../data/siteData';
import './NearbyEvents.css';

function NearbyEventsList() {
  const events = useQuery(api.events.list)?.filter((event) => !event.isOnline);

  if (events === undefined) {
    return (
      <div className="nearby-events__grid" aria-busy="true" aria-live="polite">
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="event-card" key={i} aria-hidden="true">
            <div className="event-card__image-wrap">
              <SkeletonBox />
            </div>
            <SkeletonText width="90%" className="event-card__title" />
            <SkeletonText width="60%" className="event-card__meta" />
          </div>
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <EmptyState
        icon="🗓️"
        title="No events near you yet"
        message="Check back soon, or widen your search to see more of what's happening around Minneapolis."
      />
    );
  }

  return (
    <div className="nearby-events__grid">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

function NearbyEvents() {
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

        <QueryErrorBoundary
          fallback={
            <EmptyState
              icon="⚠️"
              title="Couldn't load events"
              message="Something went wrong fetching nearby events. Please try refreshing the page."
            />
          }
        >
          <NearbyEventsList />
        </QueryErrorBoundary>
      </div>
    </section>
  );
}

export default NearbyEvents;
