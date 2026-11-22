# Knox & Associates website

Next.js static export (`./out`) served by a Cloudflare Worker (`worker/index.js`), which also handles the enquiry and careers forms at `POST /api/contact`.

## Before launch: replace placeholder content

All firm details live in a few files. Nothing else needs editing.

| File | What to replace |
| --- | --- |
| `lib/site.ts` | Firm name, domain, phone, email, offices, WhatsApp number, social links, hours. Optional `stats`, `recognitions`, `memberships`, `testimonials` appear on the site **only when filled in** (empty by default so nothing unverifiable is shown). |
| `lib/data/practices.ts` | Practice areas. One entry = one page at `/practice-areas/<id>/`. |
| `lib/data/attorneys.ts` | Lawyers. One entry = one page at `/attorneys/<id>/`. |
| `lib/data/insights.ts` | Articles. One entry = one page at `/insights/<id>/` plus an RSS item. |
| `app/about`, `app/pro-bono`, `app/privacy`, `app/terms`, `app/careers` | Page copy. The privacy policy and terms are drafts and **must be reviewed by the client's counsel**. |

All current names, titles (e.g. SAN), case values and statistics are **placeholders**. Do not publish a title, ranking or result the firm cannot prove. Check the Nigerian Rules of Professional Conduct on advertising before launch.

If you add a practice area, also add its `id` to `PRACTICE_IDS` in `worker/validate.js` (a test fails if you forget).

## Forms: one-time setup

The Worker emails submissions through [Resend](https://resend.com). The endpoint returns an error (never a fake success) until it is configured.

1. In Resend, verify the firm's sending domain.
2. Set the mailboxes in `wrangler.jsonc` (`MAIL_FROM`, `CONTACT_TO`, `CAREERS_TO`).
3. `npx wrangler secret put RESEND_API_KEY`
4. Recommended: create a Cloudflare Turnstile widget, then
   `npx wrangler secret put TURNSTILE_SECRET_KEY` and set the build variable `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
5. Set the build variable `NEXT_PUBLIC_SITE_URL` to the live domain (used for canonical URLs, sitemap and social previews).

## Commands

```bash
npm install
npm run dev        # Next dev server (forms need `preview` to work)
npm run preview    # build + run the Worker locally (copy .dev.vars.example to .dev.vars)
npm test           # form validation tests
npm run lint && npm run typecheck
npm run deploy     # build + wrangler deploy
```

## Notes

- `public/_redirects` sends the old `/briefs`, `/conflict-check` and `/fees` URLs to sensible pages.
- Dark theme is controlled by the CSS variables in `app/globals.css`; a light theme is a variable swap.
- No analytics or cookies are used, so no cookie banner is needed. Revisit this if analytics are added.
