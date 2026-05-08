---
title: "Metered Plans Changelog"
sidebar_position: 99
---

# Metered Plans Changelog

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
