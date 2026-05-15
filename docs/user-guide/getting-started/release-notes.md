---
title: "Release Notes"
sidebar_position: 9
---

# Release Notes

## Version 2.12.0 — Released on 2026-05-15

- New: Added Hostinger (hPanel) as a supported host provider with domain mapping integration
- New: Site Exporter now handles network import bundles for streamlined network-wide site restoration
- Fix: BCC broadcast emails now use an undisclosed-recipients header to prevent exposing recipient addresses
- Fix: Membership expiration date is no longer corrupted when saving with a non-date value
- Fix: Stripe membership updates now correctly clear discounts without calling the deprecated deleteDiscount API
- Fix: SSO redirects on domain-mapped sites are now capped to prevent infinite redirect loops
- Fix: Setup wizard image picker selection now correctly updates the underlying data model
- Fix: Site Exporter CLI now preserves the correct default network site selection
- Improved: Removed bundled wp-cli from the plugin package, reducing plugin size

## Version 2.11.0 — Released on 2026-05-11

- New: Site exports now bundle a self-booting `index.php` so the ZIP can be installed on a fresh host without a separate plugin install.
- New: Network export lets administrators export all subsites in a single archive from the Site Export admin page.
- New: Allow Site Templates plan toggle is now enforced via a fallback chain, correctly restricting template availability for plan limits.
- New: Checkout form editor warns when a product is added without a required field configured.
- New: Import/Export settings tab now clearly describes its scope and links directly to the Site Export tool.

## Version 2.10.0 — Released on 2026-05-05

- New: PayPal guided setup wizard for manual credential entry with OAuth flag gate for seamless gateway configuration.
- New: Template switch customer panel redesigned with current-template card, persistent grid, and **Reset current template** button.
- Fix: Template switching no longer hangs the UI on AJAX failure.
- Fix: Template switching permission states secured against unauthorized access.
- Fix: Site override inputs validated before saving.
- Fix: Billing address prompt now shown when address is empty.
- Fix: PHP 8.1 null-to-string deprecation notices resolved.
- Fix: Currents lazy-loaded before init hook to prevent timing issues.
- Fix: Filtered SSO path respected across all login flows.
- Fix: Blank site identity options preserved on save.

## Version 2.9.0 — Released on 2026-04-30

- New: Single-site export and import added under **Tools > Export & Import**.
- Fix: Export ZIP files now served through an authenticated download endpoint.
- Fix: SQL injection risk and query issues in pending export/import queries corrected.
- Fix: Pending site not published when admin manually verifies customer email.
- Fix: Orphaned pending_site records cleaned up when membership is missing.
- Fix: Settings nav padding and search anchor navigation corrected.
- Fix: Pending sites now shown first in the All Sites view.
- Fix: Screenshot provider (mShots) User-Agent header added to prevent 403 errors.
- Fix: Import cron schedule circular dependency resolved.
- Fix: Tour IDs normalised to underscores in user settings keys.
- Improved: ZipArchive now used instead of Alchemy/Zippy for better compatibility.

## Version 2.8.0 — Released on 2026-04-29

- New: Enable Jumper toggle added to Other Options settings UI.
- New: Status column added to the checkout forms list table.
- New: Addon sunrise file loader for custom MU-plugin sunrise extensions.
- Improved: Removed error-reporting opt-in setting from settings page.
- Fix: Thank-you page site card — image now constrained and links styled correctly.
- Fix: Screenshot provider switched from thum.io to WordPress.com mShots.
- Fix: Enable Registration and Default Role now set correct defaults on fresh install.
- Fix: `get_site_url()` no longer returns empty when domain includes a port.
- Fix: Clone media files now copied correctly when `copy_media` setting was empty.
- Fix: Object cache invalidated correctly after network-activate sitemeta write.
- Fix: Custom domain auto-promoted to primary on DNS verification for 3-part domains.
- Fix: Pending membership cancelled when expired payment is cleaned up.
- Fix: Password strength checker rebound after inline login prompt dismissed.
- Fix: Infinite page reload stopped on thank-you page when site already created.
- Fix: WP core registration option synced on plugin activation and settings save.
- Fix: Null expiration guard added in `calculate_expiration` for PHP 8.4 compatibility.
- Fix: Duplicate signups blocked when customer already has an active membership.
- Fix: Null check added for `date_expiration` in checkout.
- Fix: Site provisioning hardened — limitations, membership inference, domain promotion.
- Fix: Pre-install check status label corrected to NOT Activated when check fails.
- Fix: Checkout domain used for email verification URLs.
- Fix: Auto-login after checkout when no password field is present.
- Fix: Free memberships no longer expire — treated as lifetime.
- Fix: Email verification gate holds site publish until customer verifies email.
- Fix: SES v2 API endpoint base path and identity route corrected.
- Fix: `wu_inline_login_error` hook emitted in pre-submit catch block.
