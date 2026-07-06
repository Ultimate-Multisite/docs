---
title: "Metered Plans Changelog"
sidebar_position: 99
---

# Metered Plans Changelog

Version 1.5.3 - Released on 2026-05-19
- Fix: OAuth-pool provider plugins now inherit the main-site provider pool early enough for subsite registration, preventing AI Agent setup gates from appearing when the main site has a valid provider pool.
- Improved: Static AI provider option keys are hooked during plugin load, while dynamic Connectors API keys remain discovered after connector registration.

Version 1.5.2 - Released on 2026-05-12
- Fix: Prevented recursion in AI connector option write-through when subsite option updates are redirected to the main site.

Version 1.5.1 - Released on 2026-05-12
- Fix: Prevented recursion in main-site AI connector option reads on subsites, avoiding excessive blog switching and memory exhaustion.

Version 1.5.0 - Released on 2026-05-10
- New: Payment-method-aware hard cutoff for AI usage. Customers without a payment method can be warned or blocked at the allowance, while customers with a payment method can continue as paid overage.
- New: Subsite admin notices prompt customers to add a payment method before AI usage is interrupted.
- New: REST endpoint for companion AI interfaces at `/sd-metered/v1/payment-method-status`.

Version 1.4.0 - Released on 2026-05-08
- New: Unpriced AI models are hidden from subsite model pickers and blocked at generation time, preventing unbilled usage for models without configured rates.
- Improved: Model rate lookup uses the same prefix matching for billing and runtime availability checks.

Version 1.1.0 - Released on 2026-05-05
- New: AI token billing for multisite subsites — track and bill AI token usage across customer sites with configurable per-token rates
- New: Connector enforcement rebuilt with dynamic limit discovery and write-through, ensuring real-time accuracy across all connectors
- Fix: Database table upgrades now correctly aligned with BerlinDB schema definitions, preventing upgrade failures on new installs
- Fix: Database upgrade callbacks converted to the correct format, resolving silent upgrade failures
- Fix: Fractional values now accepted in the AI Usage Overage Markup input field
- Fix: Resolved fatal errors and double-initialization issues on plugin load
- Improved: Added check-env npm script so developer environments self-configure on first run

### 1.0.3
* Updated to Plugin Update Checker v5
* Added modern WordPress plugin headers
* Improved compatibility with latest WordPress versions
* Enhanced usage tracking performance

### 1.0.2
* Bug fixes and performance improvements
* Enhanced usage reporting

### 1.0.0
* Initial release
* Core metered billing functionality
* Usage tracking and overage calculation
* Automatic invoice generation
