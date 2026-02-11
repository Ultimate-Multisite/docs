---
title: Registro delle modifiche di Captcha
sidebar_position: 99
_i18n_hash: e6f99a66240746b41899bddb13cad306
---
# Captcha Changelog

Version: 1.3.2 - Released on 2026-01-27
* Fixed: il widget Cap non si visualizza nei moduli di checkout che utilizzano Elementor o altri page builder
* Fixed: l'elemento custom cap-widget viene rimosso dalla sanitizzazione wp_kses()
* Improved: utilizzo di contenuto chiamabile per il campo captcha di checkout per bypassare il filtraggio HTML
* Improved: JavaScript semplificato con fallback per casi limite

Version: 1.3.1 - Released on 2026-01-26
* Fixed: la modalità invisibile di Cap Captcha non si risolve automaticamente nei moduli di checkout dinamici di Ultimate Multisite
* Improved: lo script di checkout Cap ora utilizza MutationObserver per rilevare widget caricati dinamicamente
* Improved: aggiunta intercettazione del pulsante di checkout per attendere il token prima della sottomissione

Version: 1.3.0 - Released on 2026-01-27
* New: integrazione di WooCommerce Blocks nel checkout con intercettazione delle richieste Store API
* New: supporto captcha invisibile per il checkout WooCommerce (hCaptcha invisibile, reCAPTCHA v2 invisibile, v3)
* New: pagina delle impostazioni autonoma per l'uso senza Ultimate Multisite
* New: Jetpack Autoloader per la prevenzione di conflitti di dipendenze
* Fixed: hCaptcha non si visualizza nel checkout dinamico di Ultimate Multisite (contenuto caricato via AJAX)
* Fixed: il captcha non si aggiorna/ripristina quando si verificano errori di validazione del modulo
* Fixed: hCaptcha non appare nella pagina di checkout WooCommerce
* Fixed: errore di classe reCAPTCHA non trovata (aggiunta libreria PHP google/recaptcha)
* Improved: rilevamento errori tramite hook WordPress, MutationObserver e intercettazione AJAX
* Improved: le descrizioni delle impostazioni ora includono URL del dashboard per le chiavi API

Version: 1.2.2 - Released on 2026-01-24
* Fixed: il captcha non si visualizza sull'elemento Login Form di Ultimate Multisite (disallineamento del nome del filtro del modulo)
* Fixed: l'HTML del widget Cap viene rimosso dalla sanitizzazione wp_kses()
* Fixed: i selettori JavaScript non trovano moduli con slash negli ID degli elementi
* Added: hook di filtro `wu_kses_allowed_html` per classaddons per estendere i tag HTML consentiti
* Removed: file JavaScript di codice morto sostituiti da script specifici del provider

Version: 1.2.1 - Released on 2026-01-23
* Fixed: la validazione del token Cap Captcha fallisce negli ambienti multisito (ora utilizza transitori a livello di rete)
* Fixed: il captcha ora si visualizza in modo coerente per tutti gli utenti indipendentemente dallo stato di login
* Fixed: disallineamento tra rendering e validazione del captcha che causava errori di checkout

Version: 1.2.0 - Released on 2026-01-21
* New: Cap Captcha - captcha proof-of-work self-hosted, abilitato di default all'attivazione
* New: protezione zero configurazione - attiva l'addon e sei protetto immediatamente
* New: architettura polimorfica dei provider captcha per facile estensibilità
* New: protezione del checkout WooCommerce Store API contro attacchi di test delle carte
* New: dashboard di tracciamento statistiche che mostra sfide, verifiche e attacchi bloccati
* New: preimpostazioni livello di sicurezza (Fast, Medium, Max) per la difficoltà di Cap Captcha
* New: classi base astratte per i provider reCAPTCHA e hCaptcha
* Improved: refactoring del codice in classi provider modulari
* Improved: migliore separazione delle responsabilità con classe manager dedicata
* Fixed: miglioramenti di sicurezza per la sanitizzazione della variabile $_SERVER
* Fixed: configurazione dei test PHPUnit per le convenzioni di denominazione WordPress

Version: 1.0.1 - Released on 2025-09-28
* Rename prefix to ultimate-multisite; update text domain; version bump.
