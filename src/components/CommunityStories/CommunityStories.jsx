import ImageWithState from '../common/ImageWithState';
import EmptyState from '../common/EmptyState';
import { communityStoriesData } from '../../data/siteData';
import './CommunityStories.css';

function CommunityStories() {
  const { stories } = communityStoriesData;

  return (
    <section className="section community-stories" id="community-stories">
      <div className="container">
        <div className="community-stories__head">
          <h2 className="community-stories__title">{communityStoriesData.title}</h2>
          <p className="community-stories__subtext">{communityStoriesData.subtext}</p>
        </div>

        {stories.length > 0 ? (
          <div className="community-stories__grid">
            {stories.map((story) => (
              <article className="community-stories__card" key={story.id} tabIndex={0}>
                <div className="community-stories__image-wrap">
                  <ImageWithState src={story.image} alt={story.title} rounded={false} />
                </div>
                <h3 className="community-stories__story-title">{story.title}</h3>
                <p className="community-stories__story-text">{story.text}</p>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState
            icon="💬"
            title="No stories yet"
            message="Community stories will show up here as members share them."
          />
        )}
      </div>
    </section>
  );
}

export default CommunityStories;
