---
title: "VAT Changelog"
sidebar_position: 99
---

# VAT Changelog

Version 1.0.6 - Released on 2026-01-25

* Fix: Domestic B2B transactions now correctly charge VAT. Per EU VAT rules, reverse charge only applies to cross-border B2B transactions, not when the customer's country matches the company's country.

Version 1.0.5 - Released on 2026-01-22

* Fix: Addon not loading or working properly.
* Change: Switched VAT rate data source from euvatrates.com to ibericode/vat-rates repository for more reliable and actively maintained data.
* Fix: Corrected super_reduced_rates option value typo.
* Improvement: Added null checks for country code handling to prevent errors.
* Change: Removed bundled translation files in favor of automatic updates via Traduttore.

Version: 1.0.3 - Released on 2025-09-28

* Rename prefix to ultimate-multisite; update text domain; version bump.

Version 1.0.0-beta.4 - 2021-09-24

* Added: filter wp_ultimo_skip_network_active_check for mu-plugins based setups;

Version 1.0.0 - 05/08/2021 - Initial Release
