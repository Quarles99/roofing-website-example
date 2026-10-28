# Example Roofing Co. — sample website

A five-page example website for a small roofing contractor. **Example Roofing Co. is a fictional business.** The phone number (555 range), email (example.com), address, reviews, team names and stats are all placeholders, and the "photos" are hand-drawn SVG illustrations, so there is nothing copyrighted in the repo.

It's plain HTML, CSS and a little JavaScript: no build step, no framework, no dependencies. It works on phones, tablets and desktops.

## Pages

| Page | What's on it |
| --- | --- |
| `index.html` | Hero with tap-to-call, services overview, service area, quote form, how-it-works steps, reviews |
| `services.html` | Replacement, repair, storm and hail damage, inspections, gutters, FAQ |
| `about.html` | Company story, why choose us, team |
| `gallery.html` | Before-and-after projects with filters |
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
- Swap the SVG illustrations for the client's own job photos.
- Replace the sample reviews with real ones, and remove the yellow "Sample website" banner.
- Remove `<meta name="robots" content="noindex">` from each page's `<head>` so search engines can index it.
- Hook up the quote form: point each `<form>`'s `action` at a form service such as Formspree or Netlify Forms and remove the demo handler in `assets/main.js`.
- Update the colors in the `:root` block at the top of `assets/style.css` to match the client's brand.

## Files

```
index.html  services.html  about.html  gallery.html  contact.html
assets/style.css   shared styles (colors are variables at the top)
assets/main.js     mobile menu, gallery filters, demo form handler
assets/favicon.svg
```
