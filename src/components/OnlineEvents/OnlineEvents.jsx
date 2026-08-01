import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import EventCard from '../EventCard/EventCard';
import EmptyState from '../common/EmptyState';
import QueryErrorBoundary from '../common/QueryErrorBoundary';
import { SkeletonBox, SkeletonText } from '../common/Skeleton';
import { onlineEventsData } from '../../data/siteData';
import './OnlineEvents.css';

function OnlineEventsList() {
  const events = useQuery(api.events.list)?.filter((event) => event.isOnline);

  if (events === undefined) {
    return (
      <div className="online-events__grid" aria-busy="true" aria-live="polite">
        {Array.from({ length: 3 }).map((_, i) => (
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
        icon="💻"
        title="No online events scheduled"
        message="New virtual meetups are added every week — check back soon."
      />
    );
  }

  return (
    <div className="online-events__grid">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

function OnlineEvents() {
  return (
    <section className="section online-events" id="online-events">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{onlineEventsData.title}</h2>
          <a className="section-link" href="#online-events">
            {onlineEventsData.seeAll}
          </a>
        </div>

        <QueryErrorBoundary
          fallback={
            <EmptyState
              icon="⚠️"
              title="Couldn't load events"
              message="Something went wrong fetching online events. Please try refreshing the page."
            />
          }
        >
          <OnlineEventsList />
        </QueryErrorBoundary>

        <p className="online-events__floating">
          ✨ <span>{onlineEventsData.floatingLabel}</span>
        </p>
      </div>
    </section>
  );
}

export default OnlineEvents;
