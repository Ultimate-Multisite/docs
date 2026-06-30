---
title: "Changelog"
sidebar_position: 5
---

# Changelog

## 1.18.0 — Released on 2026-06-29

### New

- **Google Calendar tools** — read configured calendars and events for schedule-aware automations
- **Contact mapping and attendee helpers** — match calendar participants to site users and contacts
- **Human approval gates and reminder records** — pause automations for review and avoid duplicate notifications
- **TextBee SMS provider** — send configured text-message notifications through TextBee
- **Advanced companion package** — add trusted-developer filesystem, database, WP-CLI, REST dispatcher, plugin builder, git snapshot, user-management, and benchmark tools distributed separately from the WordPress.org build

### Improved

- **Managed Superdav service setup** — add hosted service endpoints and automatic connection provisioning for supported sites
- **Release packaging** — build separate core and Advanced ZIPs, publish both on GitHub, and send only the core package to WordPress.org

### Fixed

- **AI request reliability** — improve model selection, request timeouts, default setup model, reasoning-text handling, and retry guidance for invalid tool calls
- **Calendar and reminder hardening** — strengthen Google Calendar tokens and reminder deduplication
- **Onboarding and approval resumes** — fix frontend onboarding launches and confirmed ability resumes
- **WordPress.org packaging review issues** — address packaging review feedback for the core release

## 1.16.0 — Released on 2026-05-20

### New

- **Generate Logo SVG ability** — Theme Builder can now generate and embed custom logo SVGs with namespace-safe sanitisation
- **Photo upload in discovery interview** — Theme Builder discovery interview now includes a photo upload step for richer design context
- **Validate Palette Contrast ability** — check colour pairs for WCAG compliance before applying to a theme
- **Hospitality menus** — Theme Builder can now generate structured food and beverage menu pages for hospitality businesses
- **Desktop and mobile preview rendering** — preview your design on desktop and mobile devices during design-direction selection
- **Navigation label parameter** — Create Menu ability now supports a distinct `navigation_label` separate from the page title
- **Tier 1 tool availability** — sd-ai-agent/site-scrape is now a Tier 1 tool available by default in Theme Builder

### Fixed

- **AI Client cache** — now backed by transients for cross-request persistence, preventing data loss on long-running agent tasks
- **Plugin row action links** — corrected and renamed for clarity

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
