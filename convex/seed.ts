import { mutation } from './_generated/server';

// Mirrors src/data/siteData.js — categoriesData, nearbyEventsData, onlineEventsData.
// Convex functions can't import from src/, so the sample values are copied here.

const categories = [
  { name: 'Travel and Outdoor', slug: 'travel', icon: '🧭', accent: 'var(--color-cat-travel)' },
  { name: 'Social Activities', slug: 'social', icon: '🎉', accent: 'var(--color-cat-social)' },
  { name: 'Hobbies and Passions', slug: 'hobbies', icon: '🎨', accent: 'var(--color-cat-hobbies)' },
  { name: 'Sports and Fitness', slug: 'sports', icon: '⚽', accent: 'var(--color-cat-sports)' },
  { name: 'Health and Wellbeing', slug: 'health', icon: '🧘', accent: 'var(--color-cat-health)' },
];

const nearbyEvents = [
  { free: true, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', title: 'Break the Bubble @ Broken Clock Brewing Cooperative', date: 'Sun, Jul 26 · 5:00 PM CDT', host: 'Make New Friends! · Break the Bubble ...' },
  { free: false, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80', title: 'PURE PRESENCE: Eye Gazing for Connection & Self-Observation', date: 'Thu, Jul 23 · 6:00 PM CDT', host: 'Tribe of One Love' },
  { free: true, image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&q=80', title: 'Break the Bubble @ Sociable Cider Werks', date: 'Wed, Aug 5 · 5:00 PM CDT', host: 'Make New Friends! · Break the Bubble ...' },
  { free: false, image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80', title: 'THE DEEP END: Conversations Below the Surface', date: 'Mon, Aug 3 · 5:00 PM CDT', host: 'The Deep End' },
  { free: true, image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80', title: 'THE GREAT MINGLE: Come Curious. Who Will You Be?', date: 'Mon, Aug 17 · 5:30 PM CDT', host: 'Tribe of One Love' },
  { free: true, image: 'https://images.unsplash.com/photo-1559526642-c3025e8d7d1c?w=400&q=80', title: 'July AAPI Happy Hour', date: 'Thu, Jul 23 · 6:00 PM CDT', host: 'Twin Cities Asian-American Community' },
  { free: false, image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80', title: 'The Return of the Dangerous Man', date: 'Thu, Jul 23 · 6:00 PM CDT', host: 'The Monthly Pint Club' },
  { free: false, image: 'https://images.unsplash.com/photo-1504387103978-e4ee71416c38?w=400&q=80', title: 'International Friends Social', date: 'Sat, Aug 1 · 4:00 PM CDT', host: 'International Friends and Polyglots Mpls' },
];

const onlineEvents = [
  { free: true, image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&q=80', title: 'JavaScriptMN Monthly Event: Open Floor Show/Tell and...', date: 'Wed, Jul 29 · 6:00 PM CDT', host: 'JavaScript MN' },
  { free: true, image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80', title: 'Updates for CAMPING. AND Newbie/First Timer/Seasoned...', date: 'Wed, Jul 22 · 9:30 AM CDT', host: '"MORE TO EXPLORE" Journeys/Ad ...' },
  { free: true, image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&q=80', title: 'LinkedIn Tips for Job Seekers: Advice from a Tech Recruiter', date: 'Sat, Aug 15 · 10:00 AM CDT', host: 'Recruiter POV: LinkedIn & Resume Tips ...' },
];

export const seedEvents = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query('events').first();
    if (existing) {
      return { skipped: true, reason: 'events table is not empty' };
    }

    const now = Date.now();

    for (const category of categories) {
      await ctx.db.insert('categories', category);
    }

    const organizerIdByHost = new Map<string, Awaited<ReturnType<typeof ctx.db.insert<'users'>>>>();
    async function organizerIdFor(host: string) {
      const cached = organizerIdByHost.get(host);
      if (cached) return cached;
      const id = await ctx.db.insert('users', { name: host });
      organizerIdByHost.set(host, id);
      return id;
    }

    for (const event of nearbyEvents) {
      const organizerId = await organizerIdFor(event.host);
      await ctx.db.insert('events', {
        title: event.title,
        date: event.date,
        image: event.image,
        free: event.free,
        location: 'Minneapolis, MN',
        isOnline: false,
        organizerId,
        createdAt: now,
      });
    }

    for (const event of onlineEvents) {
      const organizerId = await organizerIdFor(event.host);
      await ctx.db.insert('events', {
        title: event.title,
        date: event.date,
        image: event.image,
        free: event.free,
        isOnline: true,
        organizerId,
        createdAt: now,
      });
    }

    return { skipped: false, inserted: nearbyEvents.length + onlineEvents.length };
  },
});
