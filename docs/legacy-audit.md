# Legacy File Audit (Childcare Direction)

Audit date: 2026-05-21

## Source files reviewed
- `/Volumes/WD SSD/Dump Files/app.js`
- `/Volumes/WD SSD/Dump Files/childcare-operations-sales-landing.html`
- `/Volumes/WD SSD/Dump Files/childcare-operations-cloud-standalone.html`

## Archived copies
- `/Volumes/WD SSD/VSCODE/Saas/Childcare/legacy-prototypes/dump-files/app.js`
- `/Volumes/WD SSD/VSCODE/Saas/Childcare/legacy-prototypes/dump-files/childcare-operations-sales-landing.html`
- `/Volumes/WD SSD/VSCODE/Saas/Childcare/legacy-prototypes/dump-files/childcare-operations-cloud-standalone.html`

## Keep (reusable childcare direction)
- Core promise: less stress, better organization, simpler billing, more control.
- Buyer clarity: owner/operator/CEO is the paying customer.
- Revenue model: one-time setup fee + monthly subscription.
- Domain model language: accounts, centers, staff, children, parents, attendance, billing, files, notes.

## Exclude (outdated/confusing)
- "Business Class Platform" naming from standalone prototype title.
- Any mixed "class platform" language not explicitly childcare operations.
- Prototype-only single-file app architecture for production runtime.

## Production rule applied
- Active SaaS code lives only in `/Volumes/WD SSD/VSCODE/Saas/Childcare/apps/web`.
- Prototype artifacts remain isolated under `/Volumes/WD SSD/VSCODE/Saas/Childcare/legacy-prototypes`.
