---
title: Registro de alterações do Captcha
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
# Registro de Alterações do Captcha

Versão: 1.3.2 - Lançado em 2026-01-27
* Corrigido: Cap widget não está sendo renderizado em formulários de checkout usando Elementor ou outros construtores de página
* Corrigido: cap-widget custom element being stripped by wp_kses() sanitization
* Melhorado: Use callable content for checkout captcha field para contornar HTML filtering
* Melhorado: Simplificado JavaScript with fallback for edge cases

Versão: 1.3.1 - Lançado em 2026-01-26
* Corrigido: Cap Captcha invisible mode not auto-solving on dynamic Ultimate Multisite checkout forms
* Melhorado: Cap checkout script now uses MutationObserver to detect dynamically loaded widgets
* Melhorado: Added checkout button interception to wait for token before submission

Versão: 1.3.0 - Lançado em 2026-01-27
* Novo: WooCommerce Blocks checkout integration with Store API fetch interception
* Novo: Invisible captcha support for WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Novo: Standalone settings page for use without Ultimate Multisite
* Novo: Jetpack Autoloader for dependency conflict prevention
* Corrigido: hCaptcha not rendering on dynamic Ultimate Multisite checkout (AJAX-loaded content)
* Corrigido: Captcha not refreshing/resetting when form validation errors occur
* Corrigido: hCaptcha not showing on WooCommerce checkout page
* Corrigido: reCAPTCHA class not found error (added google/recaptcha PHP library)
* Melhorado: Error detection via WordPress hooks, MutationObserver, and AJAX interception
* Melhorado: Settings descriptions now include dashboard URLs for API keys

Versão: 1.2.2 - Lançado em 2026-01-24
* Corrigido: Captcha not displaying on Ultimate Multisite Login Form Element (form filter name mismatch)
* Corrigido: Cap widget HTML being stripped by wp_kses() sanitization
* Corrigido: JavaScript selectors not finding forms with slashes in element IDs
* Adicionado: Filter hook `wu_kses_allowed_html` for classaddons to extend allowed HTML tags
* Removido: Dead code JavaScript files replaced by provider-specific scripts

Versão: 1.2.1 - Lançado em 2026-01-23
* Corrigido: Cap Captcha token validation failing in multisite environments (now uses network-wide transients)
* Corrigido: Captcha now renders consistently for all users regardless of login status
* Corrigido: Mismatch between captcha rendering and validation that caused checkout failures

Versão: 1.2.0 - Lançado em 2026-01-21
* Novo: Cap Captcha - self-hosted proof-of-work captcha, enabled by default on activation
* Novo: Zero-configuration protection - activate the addon and you're protected immediately
* Novo: Polymorphic captcha provider architecture for easy extensibility
* Novo: WooCommerce Store API checkout protection against card testing attacks
* Novo: Statistics tracking dashboard showing challenges, verifications, and blocked attacks
* Novo: Security level presets (Fast, Medium, Max) for Cap Captcha difficulty
* Novo: Abstract base classes for reCAPTCHA and hCaptcha providers
* Melhorado: Refactored codebase into modular provider classes
* Melhorado: Better separation of concerns with dedicated manager class
* Corrigido: Security improvements for $_SERVER variable sanitization
* Corrigido: PHPUnit test configuration for WordPress naming conventions

Versão: 1.0.1 - Lançado em 2025-09-28
* Renomear prefixo para ultimate-multisite; atualizar domínio de texto; aumento de versão.
