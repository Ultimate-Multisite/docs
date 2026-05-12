---
title: "Release Notes"
sidebar_position: 9
---

# Release Notes

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
