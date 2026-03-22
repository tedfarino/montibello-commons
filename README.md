# Montibello Commons

> A free community resource for Montibello neighbors to find and share home service provider recommendations — built in public.

**Status:** 🏗️ Under construction — follow along as I ship this live.

---

## The Problem

Every week in the Montibello Facebook group, neighbors ask:
- *"Does anyone have a good plumber?"*
- *"Looking for a reliable HVAC company"*
- *"Need a painter, any recommendations?"*

And every time, the same 20 neighbors chime in with suggestions — until the thread scrolls away and the next neighbor asks the same thing.

**Montibello Commons** is the fix: a clean, searchable directory of neighbor-vetted service providers. No more digging through 6-month-old threads.

---

## The Data

Before writing a single line of code, I scraped the Montibello Facebook group and found **37 verified leads** across 13 categories:

| Category | Providers | Neighbors Asking |
|----------|-----------|-----------------|
| HVAC | 2 | 6 |
| Pest Control | 0 | 4 |
| Appliance Repair | 0 | 9 |
| Plumbing | 1 | 5 |
| Painting | 1 | 3 |
| Handyman | 1 | 2 |
| Landscaping | 3 | 3 |
| Cleaning | 2 | 1 |
| Electrician | 0 | 5 |
| Babysitters | 2 | 3 |
| Pet Sitters | 3 | 4 |
| Pressure Washing | 3 | 2 |
| ...and more | | |

This data is the foundation. Every provider in the directory will have:
- Name & contact info
- Who recommended them
- How many neighbors have used them
- Engagement signal (reactions, comments)

---

## The Build

**Stack:**
- [Zo Space](https://zocomputer.com) — React + Hono API routes
- [Tailwind CSS 4](https://tailwindcss.com) — Styling
- [shadcn/ui](https://ui.shadcn.com) — Components

**No backend, no database (for now)** — JSON file + local state. Ship fast, iterate faster.

---

## Roadmap

### Phase 1: Ship the Directory (Now)
- [x] Extract leads from Facebook group
- [ ] Build homepage with category grid
- [ ] Build searchable provider directory
- [ ] Build "Add Recommendation" form
- [ ] Deploy + test on mobile

### Phase 2: Launch
- [ ] Post to Montibello Facebook Group
- [ ] Seed with 3-5 active neighbors
- [ ] "Stop asking the group. Find trusted neighbors instead."

### Phase 3: Grow
- [ ] Track which categories get most searches
- [ ] Follow up with neighbors who submitted requests
- [ ] Reach out to high-engagement providers about featured listings

### Phase 4: Monetize
- [ ] Featured listings ($20/month)
- [ ] Lead fees ($5-$25 per lead)
- [ ] Neighborhood deals

---

## Building in Public

I'm building this out in the open. Want to follow along?

- 🐦 [Follow me on X](https://x.com/tedfarino)
- 📺 Watch the repo for commits

**Questions, ideas, feedback?** Open an issue or slide into my DMs.

---

*Made with ❤️ by a Montibello neighbor, for Montibello neighbors.*
