# Build Prompt: CAP Hero Section Prototype

Build a working prototype of the hero section for **Creative Art Partners**, a fine-art advisory firm. The signature moment is a scroll-driven transition where a featured artwork animates from the hero into a picture frame in the interior photo below.

---

## Layout

**Top bar (full width, white background):**
- Wordmark "Creative Art Partners" — top-left, two lines, small, heavy sans-serif
- Nav links centered: About Us, Divisions, Case Studies, Insights, Careers, Contact
- "Get Started" button top-right — black pill, white text

**Hero (white background, ~100vh):**
- Headline centered: **"Over 10,000 Artworks at your finger tips"** — very large, heavy sans-serif (Inter Display, Söhne, or similar), tight line-height, two lines
- Featured artwork (PNG placeholder) centered below the headline, ~480px wide

**Interior section (directly below hero):**
- Full-width photograph of a loft-style living room with an empty picture frame on the back wall (use any suitable Unsplash interior — gallery wall, blue velvet sofa preferred to match reference). The frame should be clearly visible and roughly centered.

---

## Scroll Behavior

As the user scrolls from the hero into the interior section:

1. Pin the viewport for ~100vh of scroll distance.
2. The featured artwork translates down and scales up, tracking scroll progress (0 → 1).
3. At progress = 1, the artwork lands precisely inside the empty frame in the interior photo.
4. Unpin and resume normal scroll.

Animation must be **scrubbed** (tied directly to scroll position), not time-based.

---

## Stack

- HTML / CSS / vanilla JS (single file is fine for the prototype)
- **GSAP + ScrollTrigger** for the scroll-linked timeline
- **Lenis** for smooth scroll (integrate via the standard ScrollTrigger ticker pattern)
- No WebGL, no Three.js, no Canvas — this is 2D DOM animation

---

## Key Implementation Notes

- Place a **hidden placeholder div** absolutely positioned over the frame's location in the interior photo. Read its `getBoundingClientRect()` to compute the artwork's target position and size — this keeps the landing accurate across viewport widths.
- Recompute target rect on resize.
- The animated artwork should be a **fixed-position layer** above both sections during the pinned scroll, then hand off to a static version sitting inside the frame at the end.
- Honor `prefers-reduced-motion: reduce` — render the final state statically (artwork already in the frame, no pinning, no animation).

---

## Assets

- Artwork: use any abstract painting placeholder (green/white composition preferred, square format)
- Interior: any Unsplash loft-interior image with a visible empty wall frame

---

## Deliverable

A single working HTML file demonstrating the scroll choreography end-to-end. Polish the typography and spacing — this is a fine-art brand, so the aesthetic must read as considered and editorial, not generic.
