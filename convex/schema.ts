import { defineSchema, defineTable } from 'convex/server';
import { authTables } from '@convex-dev/auth/server';
import { v } from 'convex/values';

export default defineSchema({
  ...authTables,

  categories: defineTable({
    name: v.string(),
    slug: v.string(),
    icon: v.optional(v.string()),
    accent: v.optional(v.string()),
  }).index('by_slug', ['slug']),

  events: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    categoryId: v.optional(v.id('categories')),
    date: v.string(),
    location: v.optional(v.string()),
    isOnline: v.boolean(),
    onlineUrl: v.optional(v.string()),
    image: v.string(),
    capacity: v.optional(v.number()),
    free: v.optional(v.boolean()),
    organizerId: v.id('users'),
    createdAt: v.number(),
  })
    .index('by_organizer', ['organizerId'])
    .index('by_category', ['categoryId']),

  rsvps: defineTable({
    eventId: v.id('events'),
    userId: v.id('users'),
    status: v.string(),
    createdAt: v.number(),
  })
    .index('by_event', ['eventId'])
    .index('by_user', ['userId'])
    .index('by_event_and_user', ['eventId', 'userId']),
});
