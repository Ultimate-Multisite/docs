---
title: Captcha Veranderingslog
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
# Captcha Veranderinge

Version: 1.3.2 - Released on 2026-01-27
* Fixed: Cap widget not rendering on checkout forms using Elementor or other page builders
* Fixed: cap-widget custom element being stripped by wp_kses() sanitization
* Improved: Use callable content for checkout captcha field to bypass HTML filtering
* Improved: Simplified JavaScript with fallback for edge cases

Version: 1.3.1 - Released on 2026-01-26
* Fixed: Cap Captcha invisible mode not auto-solving on dynamic Ultimate Multisite checkout forms
* Improved: Cap checkout script now uses MutationObserver to detect dynamically loaded widgets
* Improved: Added checkout button interception to wait for token before submission

Version: 1.3.0 - Released on 2026-01-27
* New: WooCommerce Blocks checkout integration with Store API fetch interception
* New: Invisible captcha support for WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* New: Standalone settings page for use without Ultimate Multisite
* New: Jetpack Autoloader for dependency conflict prevention
* Fixed: hCaptcha not rendering on dynamic Ultimate Multisite checkout (AJAX-loaded content)
* Fixed: Captcha not refreshing/resetting when form validation errors occur
* Fixed: hCaptcha not showing on WooCommerce checkout page
* Fixed: reCAPTCHA class not found error (added google/recaptcha PHP library)
* Improved: Error detection via WordPress hooks, MutationObserver, and AJAX interception
* Improved: Settings descriptions now include dashboard URLs for API keys

Version: 1.2.2 - Released on 2026-01-24
* Fixed: Captcha not displaying on Ultimate Multisite Login Form Element (form filter name mismatch)
* Fixed: Cap widget HTML being stripped by wp_kses() sanitization
* Fixed: JavaScript selectors not finding forms with slashes in element IDs
* Added: Filter hook `wu_kses_allowed_html` for classaddons to extend allowed HTML tags
* Removed: Dead code JavaScript files replaced by provider-specific scripts

Version: 1.2.1 - Released on 2026-01-23
* Fixed: Cap Captcha token validation failing in multisite environments (now uses network-wide transients)
* Fixed: Captcha now renders consistently for all users regardless of login status
* Fixed: Mismatch between captcha rendering and validation that caused checkout failures

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
