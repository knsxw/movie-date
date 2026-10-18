# A Date With Destiny

A cinematic, mobile-friendly Avengers: Doomsday invitation built for a movie date. Plain HTML, CSS, and JavaScript: no dependencies, framework, API keys, or build required.

## Preview locally

From this folder:

```sh
cd /Users/sasori/Desktop/movie-date
npm run dev
```

Open http://localhost:5173. Alternatively, use `python3 -m http.server 5173`. Node is needed only for the optional npm shortcuts and JavaScript syntax check (`npm run check`); Python 3 runs the preview server.

## Deploy to Vercel

### Option 1: Vercel CLI

Install Node.js if needed, then run:

```sh
cd /Users/sasori/Desktop/movie-date
npx vercel
```

Sign in when prompted, create a new project, and use the current directory. Select **Other** if asked for a framework. No build command is needed; the output directory is **.** (the project root). `vercel.json` already defines these settings. Review the preview URL, then publish the production version:

```sh
npx vercel --prod
```

Share the resulting production URL with her. No environment variables are required.

### Option 2: GitHub + Vercel dashboard

1. Create an empty private GitHub repository. This folder already has a Git repository and initial commit.
2. Replace YOUR-USERNAME below with your GitHub username, and use your actual repository name:

```sh
git remote add origin https://github.com/YOUR-USERNAME/movie-date.git
git push -u origin main
```

3. In Vercel, choose **Add New → Project**, connect GitHub, and import the repository.
4. Select **Other** as the framework, keep the root directory at the repository root, leave the build command empty, and set the output directory to **.** if asked.
5. Deploy and share the production URL. Future pushes to `main` update the site automatically.

Official references: [Vercel deployments](https://vercel.com/docs/deployments), [build configuration](https://vercel.com/docs/builds/configure-a-build), [vercel.json](https://vercel.com/docs/project-configuration/vercel-json).

## What is included

- Locally bundled official Avengers artwork, emerald styling, drifting particles, and a metallic title.
- Accessible surprise dialog, native Escape handling, and keyboard focus management.
- A countdown to **17 December 2026, 16:30 Asia/Bangkok (UTC+7)**.
- A decorative invitation ticket using the supplied booking details: Mega Cineplex, Theatre 14, seats A12 and A13; English audio, Thai subtitles, laser projection.
- A romantic acceptance reveal with an optional calendar download. Acceptance is stored only in the visitor's browser and does **not** notify the sender or create an actual RSVP.
- Optional synthesized ambient sound, initially off; pauses when the page is hidden.
- Responsive layouts, reduced-motion support, and no-index hints.

## Personalize

- Edit the romantic message and headings in `index.html`.
- Colors, spacing, and responsive layouts are in `style.css`.
- Countdown timestamp and interaction behavior are in `app.js`.
- If the booking changes, update **all three** of `index.html`, the timestamp in `app.js`, and `assets/our-date.ics`.
- The calendar records the confirmed start time only; no unverified movie runtime is included. `09:30 UTC` equals `16:30 Bangkok`.
- Clear this site's browser storage to reset the acceptance reveal, or test in a fresh browser session.

## Ticket and artwork notes

The supplied ticket is the source of the date and venue details. Disney's official page lists the general release as December 18, 2026; this invitation intentionally preserves the **December 17** showing printed on the user's ticket. The website is an invitation, not a cinema admission ticket. Bring the original ticket to the cinema.

The original ticket image, QR code, booking number, buyer name, and price are not copied into the website or repository. No-index is a search-engine hint, not access control: anyone with a deployed public URL can view its date details. Google Fonts loads the typefaces externally, with local system-font fallbacks.

Official film research and visual reference: https://movies.disney.com/avengers-doomsday

Bundled hero source: https://lumiere-a.akamaihd.net/v1/images/pp_avengersdoomsday_marvel_banner_desktop_3c5198a2.jpeg?region=0%2C0%2C2048%2C878

Artwork and Avengers marks belong to Marvel Studios. This is a personal, unofficial fan invitation, not an official Marvel or cinema website. Ambient audio is synthesized by the page, not taken from a movie soundtrack.
