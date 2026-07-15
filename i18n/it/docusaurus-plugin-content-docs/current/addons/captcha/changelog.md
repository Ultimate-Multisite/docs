---
title: Registro delle modifiche di Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Registro modifiche Captcha

Versione: 1.5.0 - Rilasciata il 2026-05-22
* Nuovo: Limitatore di frequenza hard-stop — conta ogni GET e POST sulle superfici protette da captcha (wp-login / registrazione / password dimenticata / commenti, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) e risponde con HTTP 429, un header `Retry-After` e una sospensione tarpit randomizzata (1–5s, con limite rigido a 15s).
* Nuovo: impostazioni `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` per regolare la finestra tarpit.
* Nuovo: filtro `wu_cap_rate_limit_whitelist_ip` per esentare intervalli IP attendibili.
* Nuovo: azione `wu_cap_rate_limit_will_block` che viene eseguita immediatamente prima dell'invio della risposta hard-stop.
* Nuovo: rilevamento dell'IP client resistente allo spoofing. `Captcha_Core::get_client_ip()` (la fonte di verità per le chiavi dei bucket del limitatore di frequenza, `remoteip` di captcha siteverify e gli hash IP delle statistiche) ora applica un modello di fiducia rigoroso: REMOTE_ADDR è la base, `CF-Connecting-IP` viene rispettato solo quando il peer immediato si trova all'interno di un intervallo IP Cloudflare corrente, e `X-Forwarded-For` viene rispettato solo quando il peer immediato è nell'elenco dei proxy attendibili configurato dall'amministratore, con una scansione da destra a sinistra che salta gli hop attendibili/CF prima di stabilire l'IP del visitatore.
* Nuovo: impostazione `cap_trust_cloudflare_headers` (predefinita OFF) — abilita la fiducia in `CF-Connecting-IP` quando si è dietro Cloudflare. Il plugin include uno snapshot CIDR Cloudflare incorporato e lo aggiorna settimanalmente tramite wp-cron con fallback incorporato se l'aggiornamento fallisce.
* Nuovo: impostazione `cap_trusted_proxies` — textarea di CIDR o IP semplici (uno per riga, commenti `#` consentiti) che elenca i tuoi proxy / load-balancer di front-line. Senza questa impostazione, `X-Forwarded-For` viene ignorato anche quando il limitatore di frequenza è abilitato.
* Nuovo: rilevamento automatico alla prima abilitazione della probabile configurazione Cloudflare / proxy con avviso amministratore "Applica impostazioni rilevate" con un clic. Il plugin non sovrascrive mai i valori salvati; se il traffico successivo suggerisce che la tua configurazione non corrisponde più alla realtà (ad es. Cloudflare ha cambiato gli intervalli CIDR e il CIDR del tuo proxy è ora obsoleto), viene mostrato un avviso di mancata corrispondenza non ignorabile con l'aggiornamento consigliato.
* Risolto: la modalità invisibile non declassa più silenziosamente `cap_security_level` a FAST — il livello configurato dall'amministratore viene rispettato. Un nuovo filtro `wu_cap_server_security_level` è disponibile per i siti che desiderano logiche personalizzate.
* Risolto: il contatore delle statistiche `rate_limits_triggered` ora viene incrementato a ogni blocco, non solo nel raro percorso di backstop post-successo.
* Risolto: `Captcha_Core::get_client_ip()` è ora la singola fonte di verità per l'attribuzione dell'IP del visitatore in tutto il limitatore di frequenza, i provider captcha (reCAPTCHA + hCaptcha `siteverify`) e le statistiche — chiudendo un vettore di spoofing in cui le richieste dirette al server di origine con un header `CF-Connecting-IP` falsificato sarebbero state inserite nel bucket dell'IP falsificato invece che del peer reale.
* Risolto: il gate di limitazione della frequenza del checkout classico WooCommerce ora viene eseguito su `template_redirect` (priorità 1) invece che su `woocommerce_before_checkout_form`. L'hook a livello di modulo non viene mai eseguito quando il carrello è vuoto, quindi il traffico flood che non aggiunge mai un prodotto aggirava completamente il limitatore.
* Risolto: il gate di limitazione della frequenza WooCommerce pay-for-order ora viene eseguito su `template_redirect` invece che su `woocommerce_before_pay_action`. Quest'ultimo viene eseguito solo dopo il successo di `wp_verify_nonce('woocommerce-pay')`, il che significa che gli attaccanti non autenticati (il modello di minaccia effettivo) non attivavano mai il limitatore.
* Risolto: il gate di limitazione della frequenza del checkout WooCommerce Store API (blocks) ora viene eseguito su `rest_pre_dispatch` invece che su `woocommerce_store_api_checkout_update_order_from_request`. Quest'ultimo viene eseguito solo dopo che Store API valida il carrello e i campi di fatturazione, quindi i bot non autenticati ricevevano un 400 dal validatore e non facevano mai scattare il limitatore.
* Risolto: il gate di limitazione della frequenza dell'inline-login Ultimate Multisite ora viene eseguito su `wu_ajax_nopriv_wu_inline_login` con priorità 1 (e il mirror per utenti autenticati) invece che su `wu_before_inline_login`. Quest'ultimo viene eseguito solo dopo il successo di `check_ajax_referer('wu_checkout')`, quindi i bot non autenticati senza un nonce wu_checkout valido ricevevano un 403 e non facevano mai scattare il limitatore.
* Risolto: `Rate_Limiter::enforce()` ora applica una protezione una volta per richiesta indicizzata da `surface|ip`, quindi gli hook upstream che vengono eseguiti due volte per rendering (in particolare `wu_setup_checkout` in Ultimate Multisite) non dimezzano più la soglia effettiva di limitazione della frequenza.
* Risolto: i gate delle superfici di limitazione della frequenza non consultano più `Captcha_Core::is_whitelisted()` (filtro `wu_captcha_whitelisted`). Quel filtro segnala "captcha già gestito da un'altra superficie" ed è ortogonale alla protezione dal flood — l'integrazione WooCommerce lo agganciava per saltare il captcha di accesso WordPress quando era presente un nonce Woo, cosa che si riversava nel conteggio della frequenza e permetteva ai POST Woo di evitare il limitatore. Il filtro specifico per la limitazione della frequenza `wu_cap_rate_limit_whitelist_ip` è l'unico bypass che ora si applica.

Versione: 1.3.2 - Rilasciata il 2026-01-27
* Risolto: widget Cap non renderizzato sui moduli di checkout che usano Elementor o altri page builder
* Risolto: elemento personalizzato cap-widget rimosso dalla sanificazione wp_kses()
* Migliorato: uso di contenuto callable per il campo captcha del checkout per aggirare il filtraggio HTML
* Migliorato: JavaScript semplificato con fallback per casi limite

Versione: 1.3.1 - Rilasciata il 2026-01-26
* Risolto: modalità invisibile di Cap Captcha che non si risolveva automaticamente sui moduli di checkout dinamici Ultimate Multisite
* Migliorato: lo script di checkout Cap ora usa MutationObserver per rilevare widget caricati dinamicamente
* Migliorato: aggiunta intercettazione del pulsante di checkout per attendere il token prima dell'invio

Versione: 1.3.0 - Rilasciata il 2026-01-27
* Nuovo: integrazione del checkout di WooCommerce Blocks con intercettazione fetch della Store API
* Nuovo: supporto per captcha invisibile per il checkout WooCommerce (hCaptcha invisibile, reCAPTCHA v2 invisibile, v3)
* Nuovo: pagina delle impostazioni autonoma per l’uso senza Ultimate Multisite
* Nuovo: Jetpack Autoloader per la prevenzione dei conflitti di dipendenze
* Corretto: hCaptcha non veniva renderizzato nel checkout dinamico di Ultimate Multisite (contenuto caricato via AJAX)
* Corretto: il captcha non si aggiornava/reimpostava quando si verificavano errori di validazione del modulo
* Corretto: hCaptcha non veniva mostrato nella pagina di checkout WooCommerce
* Corretto: errore classe reCAPTCHA non trovata (aggiunta libreria PHP google/recaptcha)
* Migliorato: rilevamento degli errori tramite hook WordPress, MutationObserver e intercettazione AJAX
* Migliorato: le descrizioni delle impostazioni ora includono gli URL del dashboard per le chiavi API

Versione: 1.2.2 - Rilasciata il 2026-01-24
* Corretto: il captcha non veniva visualizzato nell’Ultimate Multisite Login Form Element (mancata corrispondenza del nome del filtro del modulo)
* Corretto: l’HTML del widget Cap veniva rimosso dalla sanitizzazione wp_kses()
* Corretto: i selettori JavaScript non trovavano moduli con slash negli ID degli elementi
* Aggiunto: hook di filtro `wu_kses_allowed_html` per permettere ai classaddons di estendere i tag HTML consentiti
* Rimosso: file JavaScript di codice morto sostituiti da script specifici per provider

Versione: 1.2.1 - Rilasciata il 2026-01-23

* Corretto: la validazione del token Cap Captcha falliva negli ambienti multisite (ora usa transient a livello di rete)
* Corretto: il captcha ora viene renderizzato in modo coerente per tutti gli utenti indipendentemente dallo stato di login
* Corretto: mancata corrispondenza tra rendering e validazione del captcha che causava errori di checkout

Versione: 1.2.0 - Rilasciata il 2026-01-21

* Nuovo: Cap Captcha - captcha proof-of-work self-hosted, abilitato per impostazione predefinita all’attivazione
* Nuovo: protezione a configurazione zero - attiva l’addon e sei protetto immediatamente
* Nuovo: architettura polimorfica dei provider captcha per una facile estensibilità
* Nuovo: protezione del checkout della WooCommerce Store API contro gli attacchi di card testing
* Nuovo: dashboard di monitoraggio delle statistiche che mostra challenge, verifiche e attacchi bloccati
* Nuovo: preset del livello di sicurezza (Veloce, Medio, Massimo) per la difficoltà di Cap Captcha
* Nuovo: classi base astratte per i provider reCAPTCHA e hCaptcha
* Migliorato: codebase rifattorizzato in classi provider modulari
* Migliorato: migliore separazione delle responsabilità con una classe manager dedicata
* Fixed: Security improvements for $_SERVER variable sanitization
* Corretto: configurazione dei test PHPUnit per le convenzioni di denominazione WordPress

Versione: 1.0.1 - Rilasciata il 2025-09-28

* Rinominato il prefisso in ultimate-multisite; aggiornato il text domain; incremento di versione.
