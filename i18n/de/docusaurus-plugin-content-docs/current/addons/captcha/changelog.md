---
title: Captcha Änderungsprotokoll
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
# Captcha Änderungsprotokoll

Version: 1.3.2 - Veröffentlicht am 2026-01-27
* Behoben: Cap widget nicht gerendert auf Checkout-Formularen, die Elementor oder andere Page Builder verwenden
* Behoben: cap-widget custom element wird von wp_kses() Sanitization entfernt
* Verbessert: Verwenden von aufrufbarem Inhalt für das Checkout-Captcha-Feld, um HTML-Filterung zu umgehen
* Verbessert: Vereinfachtes JavaScript mit Fallback für Randfälle

Version: 1.3.1 - Veröffentlicht am 2026-01-26
* Behoben: Cap Captcha invisible mode löst nicht automatisch bei dynamischen Ultimate Multisite Checkout-Formularen
* Verbessert: Cap checkout script verwendet jetzt MutationObserver, um dynamisch geladene Widgets zu erkennen
* Verbessert: Hinzugefügt: Checkout-Button-Interception, um auf Token zu warten, bevor die Übermittlung erfolgt

Version: 1.3.0 - Veröffentlicht am 2026-01-27
* Neu: WooCommerce Blocks Checkout-Integration mit Store API fetch interception
* Neu: Unterstützung von unsichtbarem Captcha für WooCommerce Checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Neu: Eigenständige Einstellungsseite für die Verwendung ohne Ultimate Multisite
* Neu: Jetpack Autoloader zur Vermeidung von Abhängigkeitskonflikten
* Behoben: hCaptcha wird nicht gerendert bei dynamischem Ultimate Multisite Checkout (AJAX-loaded content)
* Behoben: Captcha wird nicht aktualisiert/ zurückgesetzt, wenn Validierungsfehler auftreten
* Behoben: hCaptcha wird nicht angezeigt auf WooCommerce Checkout-Seite
* Behoben: reCAPTCHA class not found error (added google/recaptcha PHP library)
* Verbessert: Fehlererkennung über WordPress Hooks, MutationObserver und AJAX Interception
* Verbessert: Einstellungsbeschreibungen enthalten jetzt Dashboard-URLs für API-Schlüssel

Version: 1.2.2 - Veröffentlicht am 2026-01-24
* Behoben: Captcha wird nicht angezeigt auf Ultimate Multisite Login Form Element (form filter name mismatch)
* Behoben: Cap widget HTML wird von wp_kses() Sanitization entfernt
* Behoben: JavaScript-Selektoren finden keine Formulare mit Schrägstrichen in Element-IDs
* Hinzugefügt: Filter hook `wu_kses_allowed_html` für classaddons zur Erweiterung erlaubter HTML-Tags
* Entfernt: Dead code JavaScript files replaced by provider-specific scripts

Version: 1.2.1 - Veröffentlicht am 2026-01-23
* Behoben: Cap Captcha token validation fails in multisite environments (now uses network-wide transients)
* Behoben: Captcha wird jetzt konsistent für alle Benutzer gerendert, unabhängig vom Login-Status
* Behoben: Diskrepanz zwischen Captcha-Rendering und Validierung, die Checkout-Fehler verursachte

Version: 1.2.0 - Veröffentlicht am 2026-01-21
* Neu: Cap Captcha - selbst gehostetes Proof-of-Work Captcha, standardmäßig bei Aktivierung aktiviert
* Neu: Zero-configuration protection - aktivieren Sie das Addon und Sie sind sofort geschützt
* Neu: Polymorphische Captcha-Provider-Architektur für einfache Erweiterbarkeit
* Neu: WooCommerce Store API Checkout-Schutz gegen Kartentests-Angriffe
* Neu: Statistik-Tracking-Dashboard, das Herausforderungen, Verifizierungen und blockierte Angriffe anzeigt
* Neu: Sicherheitsstufen-Voreinstellungen (Fast, Medium, Max) für Cap Captcha Schwierigkeitsgrad
* Neu: Abstrakte Basisklassen für reCAPTCHA und hCaptcha Provider
* Verbessert: Refaktorierte Codebasis in modulare Provider-Klassen
* Verbessert: Bessere Trennung der Verantwortlichkeiten mit dedizierter Manager-Klasse
* Behoben: Sicherheitsverbesserungen für $_SERVER Variable Sanitization
* Behoben: PHPUnit Testkonfiguration für WordPress Namenskonventionen

Version: 1.0.1 - Veröffentlicht am 2025-09-28
* Umbenennen des Präfixes zu ultimate-multisite; Textdomain aktualisieren; Versionssprung.
