# Example Roofing Co. — sample website

A five-page example website for a small roofing contractor. **Example Roofing Co. is a fictional business.** The phone number (555 range), email (example.com), address, reviews, team names and stats are all placeholders. Photos are free stock images from [Unsplash](https://unsplash.com), credited below.

It's plain HTML, CSS and a little JavaScript: no build step, no framework, no dependencies. It works on phones, tablets and desktops.

## Pages

| Page | What's on it |
| --- | --- |
| `index.html` | Hero with tap-to-call, services overview, service area, quote form, how-it-works steps, reviews |
| `services.html` | Replacement, repair, storm and hail damage, inspections, gutters, FAQ |
| `about.html` | Company story, why choose us, team |
| `gallery.html` | Recent projects with filters |
| `contact.html` | Phone, email, hours, map, quote form |

Every page also has a sticky "Call now / Free quote" bar on phones, local-business structured data for search, and a banner marking it as a sample.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish with GitHub Pages

1. In this repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Pick the **main** branch and the **/ (root)** folder, then **Save**.
4. After a minute or two the site is live at `https://<your-username>.github.io/roofing-website-example/`.

## Turning it into a real client site

- Replace the name, phone (`tel:` links too), email, address and hours in every page.
- Swap the stock photos for the client's own job photos (credits below).
- Replace the sample reviews with real ones, and remove the yellow "Sample website" banner.
- Remove `<meta name="robots" content="noindex">` from each page's `<head>` so search engines can index it.
- Hook up the quote form: point each `<form>`'s `action` at a form service such as Formspree or Netlify Forms and remove the demo handler in `assets/main.js`.
- Update the colors in the `:root` block at the top of `assets/style.css` to match the client's brand.

## Photo credits

All photos are used under the [Unsplash License](https://unsplash.com/license), which allows free commercial and non-commercial use without permission. Credit isn't required, but it's given here. The images load directly from Unsplash's image CDN (`images.unsplash.com`), so nothing is stored in this repo.

| Photo | Photographer |
| --- | --- |
| A roofer standing on a house roof | [Zohair Mirza](https://unsplash.com/photos/a-man-standing-on-the-roof-of-a-house--1l0iZaM8ms) |
| Two roofers working on a house roof | [Immo Wegmann](https://unsplash.com/photos/two-men-working-on-the-roof-of-a-house-sKiCvM6sPtU) |
| A roofer carrying a bundle of shingles across a roof | [Zohair Mirza](https://unsplash.com/photos/person-carrying-shingles-on-roof-4XMHsy4Rvi8) |
| A roofer working on a roof | [Christer Lässman](https://unsplash.com/photos/a-man-on-a-roof-working-on-a-roof-G2J41LRaKkE) |
| Close-up of wet, damaged roof tiles | [Juan Pablo](https://unsplash.com/photos/close-up-of-dark-wet-roof-tiles-with-some-damage-GvWSX1lO9I4) |
| A gray two-story house | [todd kent](https://unsplash.com/photos/gray-wooden-house-178j8tJrNlc) |
| A house roof and gutter system | [Miles Smith](https://unsplash.com/photos/a-house-roof-and-gutter-system-against-a-grey-sky-kq3l2WLNp8Y) |
| A roofer removing old shingles | [Zohair Mirza](https://unsplash.com/photos/person-removing-shingles-from-roof-GXITWKvgm-k) |
| A shingle roof with a few missing shingles | [Ian Talmacs](https://unsplash.com/photos/a-roof-with-a-few-shingles-11InLLnEsZw) |
| A roof with a tree close behind it | [Simon Hurry](https://unsplash.com/photos/a-close-up-of-a-roof-with-a-tree-in-the-background-9psDp8qre2k) |
| Hands fastening metal roofing | [Sergio Martins](https://unsplash.com/photos/hands-using-a-tool-to-fasten-metal-roofing-E07VvBCSSNE) |
| A black and white bungalow | [Zachary Keimig](https://unsplash.com/photos/black-and-white-bungalow-house-Wzub0VR4OHU) |
| Grey metal roof with white siding and a dormer window | [Meg](https://unsplash.com/photos/grey-metal-roof-white-siding-and-a-dormer-window-YldJ2NIz1Yo) |

## Files

```
index.html  services.html  about.html  gallery.html  contact.html
assets/style.css   shared styles (colors are variables at the top)
assets/main.js     mobile menu, gallery filters, demo form handler
assets/favicon.svg
```
