import { query } from './_generated/server';

export const list = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db.query('events').order('desc').collect();

    return Promise.all(
      events.map(async (event) => {
        const organizer = await ctx.db.get(event.organizerId);
        return {
          id: event._id,
          title: event.title,
          description: event.description,
          date: event.date,
          location: event.location,
          isOnline: event.isOnline,
          mode: event.isOnline ? 'Online' : undefined,
          onlineUrl: event.onlineUrl,
          image: event.image,
          capacity: event.capacity,
          free: event.free ?? false,
          host: organizer ? organizer.name : 'Unknown organizer',
        };
      })
    );
  },
});
