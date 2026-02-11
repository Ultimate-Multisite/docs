---
title: Captcha Wijzigingslog
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
# Captcha Changelog

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Cap widget niet gerenderd op checkout-forms met Elementor of andere pagina bouwers
* Fixed: cap-widget custom element wordt verwijderd door wp_kses() sanitization
* Improved: Gebruik callable content voor checkout captcha field om HTML filtering te omzeilen
* Improved: Vereenvoudigde JavaScript met fallback voor edge cases

Version: 1.3.1 - Released on 2026-01-26
* Fixed: Cap Captcha invisible mode niet automatisch oplossen op dynamische Ultimate Multisite checkout-forms
* Improved: Cap checkout script gebruikt nu MutationObserver om dynamisch geladen widgets te detecteren
* Improved: Toegevoegd checkout button interception om te wachten op token vóór verzending

Version: 1.3.0 - Released on 2026-01-27
* New: WooCommerce Blocks checkout integratie met Store API fetch interception
* New: Invisible captcha ondersteuning voor WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* New: Standalone settings page voor gebruik zonder Ultimate Multisite
* New: Jetpack Autoloader voor het voorkomen van afhankelijkheidsconflicten
* Fixed: hCaptcha niet gerenderd op dynamische Ultimate Multisite checkout (AJAX-loaded content)
* Fixed: Captcha niet verversen/resetten wanneer formulier validatie fouten optreden
* Fixed: hCaptcha niet zichtbaar op WooCommerce checkout page
* Fixed: reCAPTCHA class not found error (added google/recaptcha PHP library)
* Improved: Foutdetectie via WordPress hooks, MutationObserver, en AJAX interception
* Improved: Settings descriptions bevatten nu dashboard URLs voor API keys

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Captcha niet weergegeven op Ultimate Multisite Login Form Element (form filter name mismatch)
* Fixed: Cap widget HTML wordt verwijderd door wp_kses() sanitization
* Fixed: JavaScript selectors vinden geen forms met slashes in element IDs
* Added: Filter hook `wu_kses_allowed_html` voor classaddons om toegestane HTML tags uit te breiden
* Removed: Dead code JavaScript files vervangen door provider-specific scripts

Version: 1.2.1 - Released on 2026-01-23

* Fixed: Cap Captcha token validation mislukt in multisite omgevingen (nu gebruikt network-wide transients)
* Fixed: Captcha rendert nu consistent voor alle gebruikers ongeacht login status
* Fixed: Mismatch tussen captcha rendering en validation die checkout failures veroorzaakte

Version: 1.2.0 - Released on 2026-01-21

* New: Cap Captcha - self-hosted proof-of-work captcha, enabled by default on activation
* New: Zero-configuration protection - activate the addon and you're protected immediately
* New: Polymorphic captcha provider architecture for easy extensibility
* New: WooCommerce Store API checkout protection against card testing attacks
* New: Statistics tracking dashboard showing challenges, verifications, and blocked attacks
* New: Security level presets (Fast, Medium, Max) for Cap Captcha difficulty
* New: Abstract base classes for reCAPTCHA and hCaptcha providers
* Improved: Refactored codebase into modular provider classes
* Improved: Better separation of concerns with dedicated manager class
* Fixed: Security improvements for $_SERVER variable sanitization
* Fixed: PHPUnit test configuration for WordPress naming conventions

Version: 1.0.1 - Released on 2025-09-28

* Rename prefix to ultimate-multisite; update text domain; version bump.
