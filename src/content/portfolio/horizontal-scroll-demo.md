---
title: 'Horizontal Scroll Gallery'
description: 'A demonstration of horizontal scrolling with GSAP ScrollTrigger'
pubDate: 'Jan 15 2024'
heroImage: '../../assets/Location6.webp'
galleryHeadline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
galleryImages:
  - '../../assets/Location1.webp'
  - '../../assets/Location2.webp'
  - '../../assets/Location3.webp'
  - '../../assets/Location4.webp'
  - '../../assets/Location5.webp'
sideImage: '../../assets/Location7.webp'
sideText: 'Lorem ipsum dolor'
sideLink: 'https://astro.build'
---

This is a demonstration of horizontal scrolling galleries using GSAP ScrollTrigger. The effect creates an immersive experience where content scrolls horizontally while the user scrolls vertically.

## Features

- Smooth horizontal scrolling triggered by vertical scroll
- Pinned section that stays in view during the scroll
- Responsive design that adapts to different screen sizes
- Dark mode support with automatic color adjustments

## Technical Implementation

The horizontal scroll effect is built using:

- **GSAP** - GreenSock Animation Platform for smooth animations
- **ScrollTrigger** - GSAP plugin for scroll-based animations
- **Astro** - Static site generator with component islands
- **Tailwind CSS** - Utility-first CSS framework

The animation pins the section to the viewport and translates the content horizontally as the user scrolls down. The scroll distance is calculated based on the total width of the content minus the viewport width.
