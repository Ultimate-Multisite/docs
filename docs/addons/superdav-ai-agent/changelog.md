---
title: "Changelog"
sidebar_position: 5
---

# Changelog

## 1.10.0 — Released on 2026-05-05

### New

- **Tavily internet search** — add Tavily as a search provider for richer internet search results alongside Brave Search
- **Theme-aware built-in skills** — Block Themes, Classic Themes, Kadence Blocks, and Kadence Theme skill guides now ship with the plugin
- **Site builder contact form ability** — add a contact form to any page directly from the chat interface

### Improved

- **WooCommerce integration refactored** — now uses native WooCommerce APIs for better reliability and compatibility
- **Provider list refreshes automatically** — when any plugin is activated or deactivated

### Fixed

- **navigate-to ability** — fixed infinite reload loop on some admin pages
- **list-posts ability** — now correctly resolves category and tag names to slugs
- **WP-CLI commands** — restored missing namespace aliases after a previous refactor
- **Event automation** — gracefully handles sites where automation tables are not yet created
- **memory-save ability** — now uses the correct namespace prefix in the system instruction builder
- **Scalar tool results** — now correctly wrapped before being returned to the AI
- **Usage statistics** — now correctly handle the legacy ability key format on upgrade from older versions
