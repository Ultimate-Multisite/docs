# Documentation examples

## Frontend customer account workspace

Reference: `static/downloads/frontend-account/`, documented in
`docs/user-guide/client-management/frontend-account-page.md`.

This is an optional WordPress presentation example, not a redesign of the
Docusaurus site or a replacement account/billing implementation. Use native
Ultimate Multisite widgets and generated action URLs. Keep PHP template logic,
page markup and scoped CSS together in the downloadable package.

- Operate-mode layout: section navigation, account-wide membership, owned-site
  selection, selected-site details/limits, billing, then account actions.
- Calm off-white canvas (`#f7f8f5`), white cards, dark green text (`#1e2e26`),
  muted labels (`#59675d`), green action color (`#365c39`) and a restrained pale
  green introduction. Red remains reserved for native destructive actions.
- System-font body/controls; Georgia heading. No third-party fonts or images
  are required. Suppress optional product/site artwork through shortcode
  attributes rather than substituting fake previews.
- Preserve native widgets' context, labels, totals, confirmations and modals.
  The presentation layer must not fabricate card data or billing outcomes.
- Scope styling to `.ums-portal` and the example canvas. Do not globally modify
  customer-site themes, network admin styles or Ultimate Multisite assets.
- Desktop: left section navigation, readable content column and paired billing
  cards. At 1000px the detail cards stack; at 700px navigation becomes a two-
  column touch-friendly grid. Avoid horizontal scrolling and fixed panel widths.
- Maintain visible keyboard focus, a skip link and 48px navigation targets.
  There is no animated navigation. Inputs retain their native visible labels;
  do not replace labels with placeholders or add invented form controls.
- Guests see sign-in/recovery guidance, not empty private widgets. Exclude all
  account/checkout routes from upstream caching as well as sending no-cache
  headers. Presentation gating never replaces model ownership checks.

Screenshot assets show synthetic data and actual rendered product states,
not reconstructed UI. Use viewport captures (at most 1568px on the longest
side), with separate views for content below the fold. Never capture passwords,
reset/magic tokens or hosted payment session URLs. Keep all source files, the
guide's complete source reference and its ZIP synchronized with
`python3 scripts/build-account-example.py --write`; verify with the same command
without `--write`.
