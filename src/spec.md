# Specification

## Summary
**Goal:** Build a responsive, professional multi-page website for a government-approved construction company, including a portfolio, compliance information, and a contact workflow with an admin-only inquiries viewer.

**Planned changes:**
- Create responsive pages/sections: Home (hero + value proposition), About, Services, Projects/Portfolio, Government Approvals & Compliance (editable placeholder fields for approvals/certifications/permit list and registration numbers), Safety & Quality, and Contact (company details + form).
- Implement a consistent visual theme suitable for a trustworthy industrial/construction brand, avoiding blue/purple as dominant colors.
- Add a reusable header (logo + navigation with mobile collapsible menu and current-page highlighting) and footer (quick links, contact details, business hours, and an editable compliance disclaimer).
- Build a Projects/Portfolio grid with at least 6 seeded projects (title, location, year, description, image) and a project detail view/modal.
- Implement a Contact form with validation that stores submissions (ID + timestamp) in a single Motoko backend actor and supports fetching stored submissions.
- Add an admin-only page protected by Internet Identity login to view inquiries (list + detail), with logged-out users blocked from access.
- Add basic SEO and trust signals: per-page titles/metadata, a visible “Government Approved” badge on Home, and a Home compliance summary block linking to the full compliance page.
- Add required generated images as static assets under `frontend/public/assets/generated` and reference them in the UI.

**User-visible outcome:** Visitors can browse a polished construction company website, view services and project portfolio details, review government approvals/compliance and safety information, and submit inquiries; authenticated admins can log in to view submitted inquiries.
