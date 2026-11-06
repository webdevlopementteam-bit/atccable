# ATC Cables — website

Redesign of [atccable.com](https://atccable.com) in Next.js 16 (App Router, JavaScript) and Tailwind CSS v4.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/site.js` | **All content**: company info, addresses, directors, products, standards, test lists, spec tables, downloads. Edit this file to update the site. |
| `src/app/*` | Pages: home, about, products (+ `[slug]` detail), quality, technical, certifications, contact, privacy |
| `src/components/` | Header, Footer, Logo, `CableGlyph` (cable cross-section illustrations), shared UI blocks |
| `public/downloads/` | Product manual, price lists and certificate PDFs (carried over from the old site) |
| `public/images/` | Hero cable photo and factory photo (from the product manual), certificate thumbnails |

Old URLs (`/about.html`, `/Products.html`, `/pdf/NEW_PRICE_LIST.pdf`, `/certification_pdf/*`, …) permanently redirect to the new pages (see `next.config.mjs`).

The contact form opens the visitor's email app with the enquiry pre-filled (addressed to `company.salesEmail`). To receive enquiries directly, replace `onSubmit` in `src/components/ContactForm.jsx` with a call to a Route Handler or form service.
