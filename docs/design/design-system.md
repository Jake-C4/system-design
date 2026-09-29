# Design System — [Organization/Product Name]

## 1. Brand Principles
TSWizard is a a tool used for support agents in order to fix issues more efficiently. Each issue develops fixes in which each fix is ranked in order from most likely to work to least likely to work. The design should be honest and on point when it comes to numbers

## 2. Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Primary | #E35F00 | Main brand color, primary buttons, and active navigation link |
| Secondary | #6B6A6A | Secondary buttons or muted text |
| Background | #FFFFFF | Page background |
| Text | #212121 | Body text |
| Success | #00C90E | Successful outcome badge |
| Failed | #D10000 | Unsuccessful outcome badge |

## 3. Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Heading 1 | Default for Bootstrap | 40px | Bold |
| Heading 2 | Default for Bootstrap | 28px | semibold |
| Body | Default for Bootstrap | 16px | Regular |

## 4. Logo Usage
- File(s): TSWizardLogo.jpg (With app.js and index.html)
- Do NOT: (stretch, recolor, place on busy backgrounds, etc.)

## 5. Spacing & Grid
- Base unit: 16px
- Grid/columns: 12-column grid and Bootstrap default container widths
- Standard spacing scale: Bootstraps default spacing scale.

## 6. Core Components
List reusable UI patterns and their rules (e.g. radius, border, etc.).

| Component | Rules |
|-----------|-------|
| Button (primary) | Bootstap button, btn-primary, with no radius or padding that overrides |
| Button (Log Outcome) | btn-success button for "Successful", btn-failure for "Unsuccessful" |
| Issue Row | Bootstrap list-group-item showing issue name, bookmark icon, and logged outcome badge |
| Search field | Bootstrap search-control with a placeholder text that says "Search Issues..." |
| Navigation | Bootstrap navbar showing the TSWizard watermark, bi tools icon, acitve working agent name aligned ot the right |

## 7. Voice & Tone
- How the product "speaks" (formal/casual, short/long copy, use of humor, etc.)
The tone is direct, simple and professional. Agents need answers fast and easily readable.

## 8. Accessibility Standards
- Minimum contrast ratio: 4.5:1
- Standard to meet: WCAG 2.1 AA
 - A fixes success rate must alwasy be showing as a percentage next to the fix

## 9. Version & Change Log

| Version | Date | Change | Approved by |
|---------|------|--------|--------------|
| 1.0 | 09-28-2026 | Initial version | Jake |

---

**Referenced by:** spec.md Section 6 (Constraints — Branding), Design step of each project.