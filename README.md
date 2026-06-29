# Studio Form + Function — Website (multi-page)

Deploy-ready. `index.html` is the red facade home page; all inner pages share the same style.

## Pages
- `index.html` — home (red facade, interactive windows)
- `work.html` — project directory
- `about.html` — ideology, awards, contact
- `studio.html` — team
- `contact.html` — contact form (emails to contact@studiofpf.in via Netlify Forms)
- `projects/*.html` — 9 individual project pages
- `coming-soon.html` — spare holding page (not linked)
- `assets/` — logos, favicon, shared facade.css + facade.js

## Deploy to Netlify (drag & drop)
1. app.netlify.com → log in.
2. Add new site → Deploy manually.
3. Drag this whole folder into the drop zone.
4. Live URL appears instantly.
5. Custom domain: Site settings → Domain management → add `studiofpf.in` → follow DNS steps.

## Contact form → email
The form on `contact.html` uses **Netlify Forms** (auto-detected on deploy).
To receive submissions at contact@studiofpf.in:
Netlify dashboard → your site → **Forms → Form notifications → Add notification → Email notification** → enter contact@studiofpf.in.
Submissions also appear under the Forms tab.

## Notes
- Project & team images are placeholder gradients/initials — swap in real images later.
- Page links use a red-wipe transition (works once deployed together).
