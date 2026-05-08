---
title: "VAT Changelog"
sidebar_position: 99
---

# VAT Changelog

Version 1.0.7 - Released on 2026-02-03

* Fix: German (DE) VAT numbers failing validation due to VIES SOAP service MS_MAX_CONCURRENT_REQ errors. Switched from legacy SOAP API to the official EU VIES REST API for more reliable validation.
* Fix: VAT numbers are now accepted when the VIES service is temporarily unavailable, instead of being incorrectly rejected. A log entry is created for later review.
* Fix: VAT/Tax ID field is now visible for all countries, not just EU members. Non-EU tax IDs (e.g. Swiss CHE numbers) are stored for invoice display without VIES validation.
* Fix: VAT prefix lookup for Greece (GR), Monaco (MC), and Isle of Man (IM) was broken due to incorrect array lookup logic.
* Improvement: Removed unnecessary wp-cli-bundle dev dependency that could cause fatal errors when used alongside the Site Exporter addon.
* Improvement: Added comprehensive unit test suite (53 tests).

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
