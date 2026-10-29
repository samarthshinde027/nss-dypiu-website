# NSS DYPIU Website — Starter Prototype

A responsive, official-style front-end website for the National Service Scheme at DY Patil International University.

## Files
- `index.html` — public-facing website
- `styles.css` — responsive design and styling
- `script.js` — sample events, event filters, demo certificate lookup, front-end registration message
- `admin.html` — coordinator dashboard UI preview

## Run locally
Open `index.html` in a modern browser. No build step is required. Google Fonts are loaded from Google Fonts when internet is available; the site falls back to system fonts.

## Important prototype limitations
This is a **front-end prototype**, not a production activity-management portal.
- The events and certificate entries are sample placeholders.
- Registration details are not sent or saved.
- Admin page has no authentication and must not be used for real records.
- Service-hour entries are only previewed and are not saved.
- Do not publish unverified university details, logos, phone numbers, event dates, student information or photos.
- Replace sample dates and venues with confirmed details.
- Add a secure backend, database, authentication, role-based access, audit logs, backups, privacy notice and authorized data-retention rules before real use.

## Suggested production architecture
- Front end: this HTML/CSS/JavaScript UI or migrate to a component framework if needed.
- Backend: an approved API with server-side validation.
- Database: approved university-managed database for volunteers, events, attendance, service-hour entries and certificate records.
- Authentication: university sign-in if available; otherwise secure, approved authentication with multi-factor support for administrators.
- Roles: public visitor, volunteer, event coordinator, NSS administrator.
- Certificate verification: unique reference IDs, verified status, issue date, activity, and an official verification endpoint.
- Privacy: collect only necessary data, restrict access, obtain appropriate consent and follow university policy and applicable law.

## Suggested project plan
1. Confirm branding, approved logo, coordinator details, official email and domain.
2. Approve content structure and activity categories.
3. Add real event records and consent-cleared photographs.
4. Choose university-approved hosting and backend/database.
5. Implement authentication and roles before any admin data access.
6. Build event management, volunteer registration, attendance, service-hour tracking and certificate generation.
7. Test accessibility, mobile layouts, data security, backups and certificate validation.
8. Obtain university approval and publish.

## Branding
The current prototype uses a formal maroon-and-white palette and a text-only NSS mark. Replace the placeholder mark with the approved NSS / university logo only after confirming usage permissions.
