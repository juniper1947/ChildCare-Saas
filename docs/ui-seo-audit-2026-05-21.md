# UI/UX + SEO Audit (Legacy HTML)

Date: 2026-05-21

## Files audited
- `legacy-prototypes/dump-files/childcare-operations-sales-landing.html`
- `legacy-prototypes/rejected/childcare-operations-cloud-standalone.html`

## Criteria and score (10 = best)
1. UI Ergonomics (clarity, scanability, visual hierarchy)
- Sales landing: 8.6
- Standalone cloud: 7.4

2. UX Flow (single intent, CTA clarity, conversion path)
- Sales landing: 8.8
- Standalone cloud: 7.1

3. SEO Readiness (title quality, crawlable content, semantic stability)
- Sales landing: 7.2
- Standalone cloud: 5.4

4. Accessibility Baseline (semantic structure, nav clarity, interaction semantics)
- Sales landing: 7.0
- Standalone cloud: 6.2

5. Brand/Trust Consistency (childcare-only positioning)
- Sales landing: 9.0
- Standalone cloud: 5.0

6. Maintainability (simplicity, risk of drift/confusion)
- Sales landing: 8.2
- Standalone cloud: 6.1

## Key findings
- The standalone file uses the title "Business Class Platform", which conflicts with childcare SaaS positioning.
- The standalone file relies on large script-generated view states; this adds complexity and weaker static SEO signaling.
- The sales landing is more focused, clearer for non-technical buyers, and better aligned to one-time setup + monthly subscription messaging.

## Decision
- Keep: `childcare-operations-sales-landing.html`
- Remove from active legacy use: `childcare-operations-cloud-standalone.html`
- Archive location: `legacy-prototypes/rejected/`
