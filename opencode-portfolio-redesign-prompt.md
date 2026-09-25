# PROMPT FOR OPENCODE — Portfolio Redesign & Content Overhaul

Paste everything below this line into opencode.

---

You are refactoring an existing hand-built React + Vite portfolio (`myportfolio/`) for **Abdelfetah Safiddine (Fettah Safi)**, a Backend/Full-Stack Developer. I've already had the codebase documented in `project.md` at the project root — read it fully before touching anything, it is your ground truth for the current structure, design system, bugs, and file paths.

This is a full **design + content overhaul**. Do not do a partial patch — rebuild the visual language and information architecture to senior-frontend-engineer quality while keeping the existing stack (React 18 + Vite, CSS Modules, no router, no Tailwind — unless you judge that introducing a router is necessary for the new IA below, in which case use `react-router-dom` and say so).

## 0. Ground rules

- Keep it a single Vite/React app. No framework migration (no Next.js).
- Keep CSS Modules as the styling approach — but implement a real design token system (CSS custom properties) instead of the current broken/dead vars (`---btn-color` typo, unused `--project-card-bg`, etc.). Fix every bug listed in `project.md` §8 as part of this work, don't just build on top of them.
- Remove dead weight: unused deps (`emailjs`, `emailjs-com`, `@mui/icons-material` if still unused), unused images (`fitlift.png`, `fresh-burger.png`, `viberr.png`, `hipsster.png`, `linkedin.png`, `watch.png`, `public/vite.svg`), commented-out dead code, the orphaned `M2-CV.pdf`.
- Fix all the typos/bugs called out in `project.md` (`styles.discription` → `description`, `h2 h3 p` selector, `sumbit` typo, broken `@media (width >= 1400x)`, mismatched `alt` text, inverted light/dark icon naming, `href="_"` placeholder links, hardcoded footer year, `console.log` left in `Form.jsx`).
- Preserve the working parts worth keeping: the light/dark theme system (`ThemeContext`), the EmailJS contact flow (`@emailjs/browser` only — drop the redundant EmailJS packages), the general CSS Modules organization.
- Real content only — no lorem ipsum, no placeholder links. Everything below is the actual, correct content to use.

## 1. Design elevation — target senior frontend level

Current state (per `project.md`): no design tokens beyond a few broken CSS vars, two ad-hoc breakpoints, no motion/animation library, no accessibility affordances, inconsistent shadows/radii, no navigation, single unbroken scroll of 5 thin sections. Elevate this to a portfolio that reads as built by a senior engineer with strong product/design taste. Concretely:

### 1.1 Design system (build this first, as tokens in a single source — e.g. `src/styles/tokens.css`)
- **Color**: Replace the broken var set with a real, intentional palette (base neutrals + one accent color used consistently for interactive elements, links, focus states). Define light and dark palettes with proper contrast (WCAG AA minimum for text). Pick a personality-appropriate accent — this is a backend/infra-leaning full-stack developer working on real production systems (payments, security, real-time infra), so lean toward a confident, technical, slightly understated aesthetic (think: dark slate/near-black + one crisp accent — blue, teal, or amber) rather than generic purple-gradient "AI startup" style. Avoid default MUI blue.
- **Typography**: Pick a deliberate type pairing (e.g. a technical/geometric sans for headings, a clean readable sans or mono accent for labels/code-adjacent bits — you already have Roboto Mono + Rubik loaded, decide if they're worth keeping or replace with something more refined, e.g. Inter/Geist/Space Grotesk + a mono for tags/labels). Establish a real modular type scale (not just 3 breakpoint jumps) and actually apply it correctly everywhere (fix the current selector bug so h2/h3/p actually receive their intended font).
- **Spacing**: Introduce an explicit spacing scale (4/8px base) as CSS vars, and use it consistently instead of ad hoc pixel values scattered per component.
- **Layout**: Move from "5 sections stacked with big gaps" to a proper structured single-page-app layout: sticky/minimal nav with in-page anchor links + active-section highlighting, a real hero, a real About/Summary section, a real Experience/timeline section, a real Skills section grouped by category, a real Projects section, Contact, Footer. Use CSS Grid where it earns its keep (project cards, skills grid) rather than everything being centered flex-column.
- **Elevation & radius**: Define a consistent shadow scale and radius scale (tokens), and stop using different, inconsistent shadow values per component.
- **Motion**: Add tasteful, restrained scroll-reveal / entrance animations (e.g. IntersectionObserver-driven fade/slide-in per section, or add `framer-motion` if you judge it worth the dependency) plus refined hover/focus micro-interactions on cards, buttons, and nav links. Respect `prefers-reduced-motion`.
- **Responsiveness**: Replace the two-breakpoint, some-rules-broken system with a properly tested fluid/responsive layout (mobile, tablet, desktop, large desktop), using `clamp()` for fluid type/spacing where appropriate instead of hard breakpoint jumps.
- **Accessibility**: Real focus-visible states, correct alt text everywhere, the theme toggle must be a real `<button aria-label="Toggle theme">` (not a bare clickable `<img>`), proper form labels (visually hidden if desired, but correctly associated per field — fix the Email/message fields currently mislabeled "Name"), color contrast fixed in both themes, semantic heading hierarchy (one real `<h1>`, no more competing lowercase section h1s).
- **Navigation**: Add a real nav bar/menu with links to each section (Home/About, Experience, Skills, Projects, Contact) and a visible, always-reachable Resume/CV download action (not buried only in the hero).

### 1.2 Information architecture — new sections
Restructure from the current 5 thin sections into:
1. **Nav** (sticky, minimal, theme toggle, resume button)
2. **Hero** — name, title, one-line value prop, primary CTAs (Download CV, Contact/Get in touch), socials
3. **About/Summary** — short bio pulled from the CV summary (see §2)
4. **Experience** — real timeline/cards from CV work history (see §2), most recent first
5. **Skills** — grouped by category (Frontend / Backend / Databases / Architecture & Infra / Security & Integrations), not one flat list of 10
6. **Projects** — real projects (from CV "Projects" section + the existing portfolio project images where still relevant — see §3 for what to keep/drop) with actual descriptions and tech tags, no dead `href="_"` links
7. **Contact** — keep the existing EmailJS form, just restyled/fixed
8. **Footer** — fix hardcoded year (use `new Date().getFullYear()`), keep it minimal

## 2. Correct experience & skills (source: attached CV, exact — do not invent or embellish beyond this)

**Name / Title:** Safiddine Abdelfetah — Full-Stack Developer
**Location:** Médéa, Algeria
**Contact:** +213 659 235 442 · fettahsafi.6@gmail.com

**Summary (adapt into hero/about copy, don't just paste verbatim):**
Full-Stack Developer with production experience across both backend and frontend, currently leading backend development for a multi-vertical travel commerce platform serving 10,000+ active users. Builds with React, Next.js, Node.js, NestJS, and React Native, backed by PostgreSQL, Prisma, and Redis. Comfortable across the full lifecycle — from UI to APIs to deployment.

**Skills (group exactly like this in the Skills section):**
- **Frontend:** React.js, Next.js, React Native, TypeScript, JavaScript, Redux, HTML, CSS
- **Backend:** Node.js, Express.js, NestJS, Golang, REST APIs, Socket.IO
- **Databases:** PostgreSQL, Prisma ORM, Supabase, MongoDB, Redis, SQL
- **Architecture & Infra:** Layered Architecture, API Aggregation, Idempotency, Docker, Docker Compose, PM2, Nginx, Ubuntu VPS, GitHub Actions CI/CD
- **Security & Integrations:** JWT, OAuth 2.0, HMAC, AES-256-GCM, bcrypt, Helmet, CORS, Rate Limiting, SATIM, AI Vision APIs, Firebase Admin, SendGrid, Google Maps API, Bull, Joi, Swagger/OpenAPI
- **Languages:** Arabic, French, English — professional proficiency or above (fine to add as a small separate line, not mixed into tech skills)

Completely remove the old hardcoded `skillsArr` (HTML/CSS/ReactJs/Nodejs/MongoDb/SQL/Redux/Tailwind CSS/Bootstrap/Express) — it's inaccurate/outdated versus the CV and lists things (Tailwind, Bootstrap) not actually reflected in the CV.

**Experience (build a real timeline/card list, most recent first):**

1. **Backend Developer — Fennec Booking** · Oct 2025 – Present
   - Designed, built, and operate the production backend for a multi-vertical travel platform serving 10,000+ active users across flights, hotels, transfers, packages, e-visa, eSIM, insurance, and ferries.
   - Architected a layered backend with unified booking and payment flows that normalize multiple third-party travel providers for web and mobile clients.
   - Integrated SATIM payments and built pricing, commission, reconciliation, wallet, and queued mobile top-up workflows.
   - Built scalable real-time customer support using Socket.IO, Redis Pub/Sub, PM2 clustering, presence tracking, and Postgres LISTEN/NOTIFY fallback.
   - Implemented Bull/Redis background jobs with retries, delayed processing, and crash/deployment recovery for transient operations.
   - Implemented production security: JWT/OAuth, HMAC request signing, AES-256-GCM encrypted handoffs, strict CORS, Helmet, rate limiting, and server-side price validation.
   - Integrated an AI-powered vision API for structured passport data extraction; deployed via Docker, PM2, Nginx, Ubuntu, and self-hosted GitHub Actions CI/CD.

2. **Freelance Full-Stack Developer — Self-Employed** · 2022 – 2023
   - Built fast, dynamic websites for independent clients using the MERN stack (MongoDB, Express.js, React.js, Node.js).
   - Delivered end-to-end projects including a book printing shop website, a library management website, and a clothing e-commerce site — covering UI, backend APIs, and database design.

3. **Backend Developer — Academic Project: Driver Mobile App** · 2021 – 2022
   - Built the backend and server/client logic (CRUD processes) for a mobile app helping drivers locate exact places, plus supporting front-end pages.
   - Used Node.js/Express for the server, MongoDB for data, and React Native for the mobile front-end, integrating Google Maps and other APIs for location accuracy.

**Projects (from CV, in addition to/replacing old portfolio cards — see §3):**
- **Algerian Offline Maps Application** — JavaScript mapping app for Algeria with location discovery and offline-oriented access to hotels and parking.
- **Travel Agency SaaS / ERP & CRM** — Designed SaaS architecture for Algerian travel agencies, including booking, CRM/ERP workflows, dashboards, and service integrations.

**Education:**
- Yahia Fares University of Médéa — Master 1/2, Systems Engineering and Web Technologies (2023–2025): advanced coursework in distributed systems, software architecture, and web technologies.
- Yahia Fares University of Médéa — Bachelor's Degree (Licence), Computer Systems (2023): core foundation in programming, databases, and computer systems.
(Add a short, optional Education section beneath Experience if there's room, or fold it into About — your call on IA, but don't drop it.)

**Social links (keep, verify still correct):**
- LinkedIn: `https://www.linkedin.com/in/fettah-safi-46582b263/`
- GitHub: `https://github.com/S-fetah`
- X/Twitter: `https://x.com/abdelfetah78`

## 3. Projects section — what to keep vs. replace

The current 4 project cards (`printerLibrary.png`/`Watchs.png`/`Library.png`/`Driver.png`) map to real freelance/academic work mentioned in the CV (book printing shop, library site, driver mobile app) — good, keep using these where the image asset is reasonable quality, but:
- Give each a real one-line description grounded in the CV bullet it corresponds to instead of the current joke copy ("watches guide", "free translated books!!").
- Fix the mismatched `alt` text on every card.
- Add tech tags per project (e.g. MERN stack for the freelance sites; Node.js/Express/MongoDB/React Native/Google Maps API for the driver app).
- Fix or remove the `href="_"` dead links — link out to a live URL/repo if one genuinely exists, otherwise don't render the link wrapper as clickable (don't fake a link to nowhere).
- The "Timeless Pick"/watches card doesn't correspond to anything in the CV — either drop it or, if it represents real freelance work not on the CV, keep it but give it honest copy (don't fabricate specifics you don't have; ask me if unsure).
- The `Library.png` asset is 9.4MB — re-compress/resize it (or ask me for a lighter replacement) as part of this work; don't ship it as-is.
- Add the two CV "Projects" entries (Algerian Offline Maps, Travel Agency SaaS/ERP/CRM) as additional cards even without images if none exist — use a clean text-only/icon card variant for those rather than skipping them.

## 4. CV download — fix the wrong file

The site currently links `src/assets/M2-CV.pdf` (an old/outdated resume) via `Hero.jsx`. This is wrong. The correct, current resume file is already in the project at:

```
src/assets/Fettah_Safi_CV_ATS_v3.pdf
```

- Update every CV/Resume download reference (currently only in `Hero.jsx`, but also add one in the new nav bar per §1.2) to import and link this file instead: `import CV from "../../assets/Fettah_Safi_CV_ATS_v3.pdf"`, rendered as `<a href={CV} download="Fettah_Safi_CV.pdf">Download CV</a>` (or similar clean download filename — not the raw `_v3` filename).
- Delete `src/assets/M2-CV.pdf` from the project once it's no longer referenced anywhere.
- Make sure the download button is styled as a clear primary/secondary action per the new design system (§1), and appears in both the Hero and the nav.

## 5. Deliverable / process

- Work through this as a real refactor: rebuild the design tokens first, then rebuild layout/IA, then swap in correct content, then fix the bug list, then clean up dead assets/deps.
- Keep commits or at least logical checkpoints if you're able to, so changes are reviewable.
- At the end, give me a summary of: what you changed, any content details you had to guess/invent (flag these explicitly so I can correct them — e.g. if you added descriptions for projects not fully specified above), and any new dependencies you introduced and why.
