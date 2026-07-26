// Central content source for the Kulan homepage.
// All copy and image references used by the components live here.

export const navLinks = {
  language: 'English',
  login: 'Log in',
  signup: 'Sign up',
};

export const searchData = {
  placeholder: 'Search events...',
  location: 'Minneapolis, MN',
};

export const heroData = {
  headline: [
    { text: 'The ' },
    { emoji: '🧑\u200d🤝\u200d🧑', text: ' people platform.' },
  ],
  headlineLine2: [{ text: 'Where ' }, { emoji: '🔆', text: ' interests' }],
  headlineLine3: [{ text: 'become ' }, { emoji: '💞', text: ' friendships.' }],
  subtext:
    'Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of people who share it on Kulan. Events are happening every day—sign up to join the fun.',
  cta: 'Join Kulan',
  images: {
    topLeft: {
      src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80',
      badge: 'NEW YOU',
    },
    bottomLeft: {
      src: 'https://images.unsplash.com/photo-1508997449629-303059a039c0?w=400&q=80',
      badge: 'DANCE CLASS',
      badgeIcon: '🎵',
    },
    topRight: {
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
      badge: 'SPINNING CLUB',
    },
    bottomRight: {
      src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&q=80',
      badge: 'EVERY THURSDAY',
    },
  },
};

export const nearbyEventsData = {
  title: 'Events near Minneapolis, MN',
  seeAll: 'See all events',
  events: [
    {
      id: 'ne-1',
      free: true,
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
      title: 'Break the Bubble @ Broken Clock Brewing Cooperative',
      date: 'Sun, Jul 26 · 5:00 PM CDT',
      host: 'by Make New Friends! · Break the Bubble ...',
    },
    {
      id: 'ne-2',
      free: false,
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80',
      title: 'PURE PRESENCE: Eye Gazing for Connection & Self-Observation',
      date: 'Thu, Jul 23 · 6:00 PM CDT',
      host: 'by Tribe of One Love',
    },
    {
      id: 'ne-3',
      free: true,
      image:
        'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=400&q=80',
      title: 'Break the Bubble @ Sociable Cider Werks',
      date: 'Wed, Aug 5 · 5:00 PM CDT',
      host: 'by Make New Friends! · Break the Bubble ...',
    },
    {
      id: 'ne-4',
      free: false,
      image:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80',
      title: 'THE DEEP END: Conversations Below the Surface',
      date: 'Mon, Aug 3 · 5:00 PM CDT',
      host: 'by The Deep End',
    },
    {
      id: 'ne-5',
      free: true,
      image:
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&q=80',
      title: 'THE GREAT MINGLE: Come Curious. Who Will You Be?',
      date: 'Mon, Aug 17 · 5:30 PM CDT',
      host: 'by Tribe of One Love',
    },
    {
      id: 'ne-6',
      free: true,
      image:
        'https://images.unsplash.com/photo-1559526642-c3025e8d7d1c?w=400&q=80',
      title: 'July AAPI Happy Hour',
      date: 'Thu, Jul 23 · 6:00 PM CDT',
      host: 'by Twin Cities Asian-American Community',
    },
    {
      id: 'ne-7',
      free: false,
      image:
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80',
      title: 'The Return of the Dangerous Man',
      date: 'Thu, Jul 23 · 6:00 PM CDT',
      host: 'by The Monthly Pint Club',
    },
    {
      id: 'ne-8',
      free: false,
      image:
        'https://images.unsplash.com/photo-1504387103978-e4ee71416c38?w=400&q=80',
      title: 'International Friends Social',
      date: 'Sat, Aug 1 · 4:00 PM CDT',
      host: 'by International Friends and Polyglots Mpls',
    },
  ],
};

export const onlineEventsData = {
  title: 'Upcoming online events',
  seeAll: 'See all events',
  events: [
    {
      id: 'oe-1',
      free: true,
      image:
        'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&q=80',
      title: 'JavaScriptMN Monthly Event: Open Floor Show/Tell and...',
      date: 'Wed, Jul 29 · 6:00 PM CDT',
      mode: 'Online',
      host: 'by JavaScript MN',
    },
    {
      id: 'oe-2',
      free: true,
      image:
        'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80',
      title: 'Updates for CAMPING. AND Newbie/First Timer/Seasoned...',
      date: 'Wed, Jul 22 · 9:30 AM CDT',
      mode: 'Online',
      host: 'by "MORE TO EXPLORE" Journeys/Ad ...',
    },
    {
      id: 'oe-3',
      free: true,
      image:
        'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&q=80',
      title: 'LinkedIn Tips for Job Seekers: Advice from a Tech Recruiter',
      date: 'Sat, Aug 15 · 10:00 AM CDT',
      mode: 'Online',
      host: 'by Recruiter POV: LinkedIn & Resume Tips ...',
    },
  ],
  floatingLabel: 'Meet new people',
};

export const membershipCtaData = {
  title: 'Join Kulan',
  subtext:
    'People use Kulan to meet new people, learn new things, find support, get out of their comfort zones, and pursue their passions, together. Membership is free.',
  cta: 'Sign up for free',
};

export const categoriesData = {
  title: 'Explore top categories',
  categories: [
    { id: 'travel', label: 'Travel and Outdoor', icon: '🧭', accent: 'var(--color-cat-travel)' },
    { id: 'social', label: 'Social Activities', icon: '🎉', accent: 'var(--color-cat-social)' },
    { id: 'hobbies', label: 'Hobbies and Passions', icon: '🎨', accent: 'var(--color-cat-hobbies)' },
    { id: 'sports', label: 'Sports and Fitness', icon: '⚽', accent: 'var(--color-cat-sports)' },
    { id: 'health', label: 'Health and Wellbeing', icon: '🧘', accent: 'var(--color-cat-health)' },
  ],
};

export const popularCitiesData = {
  title: 'Popular cities on Kulan',
  tag: "WE'RE EVERYWHERE",
  subtext:
    'Looking for fun things to do near you? See what Kulan organizers are planning in cities around the country.',
  cities: [
    {
      name: 'New York',
      image:
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80',
    },
    {
      name: 'San Francisco',
      image:
        'https://images.unsplash.com/photo-1521464302861-ce943915d1c3?w=400&q=80',
    },
    {
      name: 'Chicago',
      image:
        'https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=400&q=80',
    },
    {
      name: 'Nashville',
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=400&q=80',
    },
    {
      name: 'Miami',
      image:
        'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=400&q=80',
    },
  ],
};

export const howItWorksData = {
  title: 'How Kulan works',
  floatingLabel: 'FRIENDS. BUT MAKE IT EASY',
  steps: [
    {
      id: 'discover',
      icon: '🔍',
      title: 'Discover events and groups',
      text: 'See who\u2019s hosting local events for all the things you love',
      link: 'Start exploring',
    },
    {
      id: 'find',
      icon: '💜',
      title: 'Find your people',
      text: 'Connect over shared interests, and enjoy meaningful experiences.',
    },
    {
      id: 'start',
      icon: '✨',
      title: 'Start a group to host events',
      text: 'Create your own Kulan group, and draw from a community of millions',
      link: 'Start group',
    },
  ],
};

export const communityStoriesData = {
  title: 'Friendships are made on Kulan',
  subtext:
    'Since 2002, members have used Kulan to make new friends, meet like-minded people, spend time on hobbies, and connect with locals over shared interests.',
  stories: [
    {
      id: 'story-1',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80',
      title: 'I used Kulan to make friends at brunch',
      text: 'New Jersey-based writer Brianna Stryker wanted to meet new friends in her hometown, how she used Kulan to make connections by joining a Girls Night Out group.',
    },
    {
      id: 'story-2',
      image:
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
      title: 'How to turn casual connections into close friendships',
      text: 'It\u2019s proven that close friendships are harder to make as an adult. But don\u2019t sweat it: here\u2019s what you can do to simplify the process.',
    },
    {
      id: 'story-3',
      image:
        'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&q=80',
      title: 'Do you have the "right" number of friends?',
      text: 'Studies from around the world have tried to help people answer this question. Learn about the three tiers of friendship and how to fulfill them.',
    },
  ],
};

export const footerData = {
  tagline: 'The people platform',
  cta: 'Create your own Kulan group.',
  ctaLink: 'Get Started \u2192',
  columns: [
    {
      title: 'Your account',
      links: ['Sign up', 'Log in', 'Help'],
    },
    {
      title: 'Discover',
      links: [
        'Groups',
        'Events',
        'Topics',
        'Cities',
        'Online events',
        'Local guides',
        'Make friends',
      ],
    },
    {
      title: 'Kulan',
      links: ['About', 'Blog', 'Kulan Pro', 'Careers', 'Apps', 'Podcast'],
    },
  ],
  social: ['facebook', 'x', 'youtube', 'instagram', 'tiktok'],
  apps: [
    { label: 'Get it on', sublabel: 'Google Play' },
    { label: 'Download on the', sublabel: 'App Store' },
  ],
  legal: {
    copyright: '\u00A9 2026 Bending Spoons US Inc.',
    links: [
      'Terms of service',
      'Privacy policy',
      'Your privacy choices',
      'Cookie policy',
      'License attribution',
      'Help',
    ],
    credit: 'Made with \u2764 by BENDING SPOONS',
  },
};
