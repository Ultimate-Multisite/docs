---
title: Cambialetge de Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Historial de versions de Captcha {#captcha-changelog}

Versió: 1.5.0 - Publicada el 2026-05-22
* **Nou:** Limitador de taxa de parada forçada (Hard-stop rate limiter) — compta cada GET i POST en les pàgines protegudes per Captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) i respon amb HTTP 429, un capçalera `Retry-After` i una pausa simulada (tarpit sleep) randomitzada (1–5s, amb un màxim de 15s).
* **Nou:** Configuracions `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` per ajustar la finestra de la pausa simulada.
* **Nou:** Filtre `wu_cap_rate_limit_whitelist_ip` per exempriar rangs d'IP de confiança.
* **Nou:** Acció `wu_cap_rate_limit_will_block` que s'executa immediatament abans de enviar la resposta de parada forçada.
* **Nou:** Detecció d'IP del client resistent a la falsificació (Spoof-resistant). `Captcha_Core::get_client_ip()` (la font de veritat per les clau del bany de limitació de taxa, captcha siteverify `remoteip`, i els hashes d'IP de les estadístiques) ara fa servir un model de confiança estricte: `REMOTE_ADDR` és el nivell mínim, `CF-Connecting-IP` es respecta només quan el parell immediat és dins d'un rang d'IP actual de Cloudflare, i `X-Forwarded-For` es respecta només quan el parell immediat és a la llista de proxys de confiança configurada a l'administració, amb una navegació de dreta a esquerra que salta les etapes de confiança/CF abans de fixar-se a l'IP de la visita.
* **Nou:** Configuració `cap_trust_cloudflare_headers` (per defecte DESACTIVAT) — permet utilitzar la confiança en `CF-Connecting-IP` quan es troba darrere de Cloudflare. El plugin inclou una imatge de les CIDR de Cloudflare i la refresca setmanalment mitjançant wp-cron amb una reserva de fallback inclosa si la actualització falla.
* **Nou:** Configuració `cap_trusted_proxies` — una àrea de text (textarea) de CIDRs o adreces IP nudes (una per línia, es permet comentar amb `#`) que llista els teus proxys / balanceadors de càrrega de primera línia. Sense això, `X-Forwarded-For` és ignorat fins i tot quan el limitador de taxa està habilitat.
* **Nou:** Detecció automàtica inicial de la postura probable de Cloudflare / proxy amb una notificació d'administració de "Aplicar configuració detectada" amb un clic. El plugin mai sobreescriu els teus valors guardats; si el trànsit posterior suggereix que la teva configuració ja no coincideix amb la realitat (per exemple, Cloudflare ha canviat els rangs CIDR i el teu CIDR de proxy és ja antic), apareix una notificació de desalineació no eliminable amb l'actualització recomanada.
* **Corregit:** El mode invisible ja no redueix silenciosament `cap_security_level` a FAST — es respecta el nivell configurat per l'administrador. És disponible un nou filtre `wu_cap_server_security_level` per a sites que desitgin lògica personalitzada.
* **Corregit:** El contador de estadístiques `rate_limits_triggered` ara s'incrementa a cada blocatge, no només en el rari camí de reserva post-èxit.
* **Corregit:** `Captcha_Core::get_client_ip()` és ara la única font de veritat per l'atribució de l'IP del visitant a través del limitador de taxa, els proveïdors de Captcha (reCAPTCHA + hCaptcha `siteverify`) i les estadístiques — tancant un vector de falsificació on les sol·liciteves directes de l'origin-server amb un capçalera `CF-Connecting-IP` falsificada haurien estat comptat amb l'IP falsificada en lloc del parell real.
* **Corregit:** La porta de limitació de taxa del checkout clàssic de WooCommerce ara s'executa en `template_redirect` (prioritat 1) en lloc de `woocommerce_before_checkout_form`. El hook a nivell de formulari mai s'executa quan el carret està buit, així que el trànsit de inundació que mai afegeix un producte estava evitant completament el limitador.
* **Corregit:** La porta de limitació de taxa de WooCommerce pay-for-order ara s'executa en `template_redirect` en lloc de `woocommerce_before_pay_action`. Aquesta última només s'executa després que `wp_verify_nonce('woocommerce-pay')` té èxit, cosa que significa que els atacants no autenticats (el model de amenassa real) mai van activar el limitador.
* **Corregit:** La porta de limitació de taxa del checkout de WooCommerce Store API (blocks) ara s'executa en `rest_pre_dispatch` en lloc de `woocommerce_store_api_checkout_update_order_from_request`. Aquesta última només s'executa després que Store API valida el carret i els camps de facturació, així que els bots no autenticats van rebre un 400 del validador i mai van activar el limitador.
* **Corregit:** La porta de limitació de taxa de l'inline-login d'Ultimate Multisite ara s'executa en `wu_ajax_nopriv_wu_inline_login` prioritat 1 (i el mirall de l'usuari connectat) en lloc de `wu_before_inline_login`. Aquesta última només s'executa després que `check_ajax_referer('wu_checkout')` té èxit, cosa que significa que els bots no autenticats sense un nonce `wu_checkout` vàlid van rebre un 403 i mai van activar el limitador.
* **Corregit:** `Rate_Limiter::enforce()` ara aplica una protecció de una vegada per sol·licit, clauada per `surface|ip`, així que els hooks amuntanis que s'executen dues vegades per renderitzat (notablement `wu_setup_checkout` en Ultimate Multisite) ja no redueixen a la mitat el nivell efectiu del limitador de taxa.
* **Corregit:** Les portes de limitació de taxa ja no consulten `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Aquest filtre indica "captcha ja gestionat per altra superfície" i és ortogonal a la protecció contra inundacions — la integració de WooCommerce estava enganxant això per saltar el captcha de login de WordPress quan hi havia un nonce Woo, cosa que es va filtrar al comptador de taxa i va permetre que els POSTs de Woo evitin el limitador. Només el filtre específic de limitació de taxa `wu_cap_rate_limit_whitelist_ip` és el que ara aplica el salt.

Versió: 1.3.2 - Publicada el 2026-01-27
* Corregit: El widget de Captcha no renderitza en formularis de checkout utilitzant Elementor o altres page builders.
* Corregit: El custom element `cap-widget` està sent eliminat per la sanització de `wp_kses()`.
* Millorat: Utilitza contingut callable per al camp de captcha del checkout per saltar el filtratge HTML.
* Millorat: JavaScript simplificat amb fallback per casos extrem.

Versió: 1.3.1 - Publicada el 2026-01-26
* Corregit: El mode invisible de Captcha no s'autoresoluciona en formularis de checkout dinàmics d'Ultimate Multisite.
* Millorat: El script de checkout de Captcha ara utilitza MutationObserver per detectar widgets carregats dinàmicament.
* Millorat: S'ha afegit la intercepció del botó de checkout per esperar el token abans de la submissió.

Versió: 1.3.0 - Publicada el 2026-01-27
* Nou: Integració de checkout de WooCommerce Blocks amb intercepció de fetch de Store API.
* Nou: Suport Captcha invisible per al checkout de WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3).
* Nou: Pàgina de configuració independent per utilitzar sense Ultimate Multisite.
* Nou: Jetpack Autoloader per prevenir conflictes de dependències.
* Corregit: hCaptcha no renderitza en el checkout dinàmic d'Ultimate Multisite (contingut carregat per AJAX).
* Corregit: Captcha no es refresca/reinicia quan es produeixen errors de validació de formulari.
* Corregit: hCaptcha no mostra a la pàgina de checkout de WooCommerce.
* Corregit: Error de classe reCAPTCHA no trobada (s'ha afegit la biblioteca PHP google/recaptcha).
* Millorat: Detecció d'errors mitjançant hooks de WordPress, MutationObserver i intercepció AJAX.
* Millorat: Les descripcions de configuració ara inclouen les URL del dashboard per les clau API.

Versió: 1.2.2 - Publicada el 2026-01-24
* Corregit: Captcha no mostra en l'Element de formulari de login d'Ultimate Multisite (desalineació del nom del filtre de formulari).
* Corregit: El HTML del widget de Captcha està sent eliminat per la sanització de `wp_kses()`.
* Corregit: Els selectors JavaScript no troben formularis amb barras en els IDs dels elements.
* Afegit: Hook de filtre `wu_kses_allowed_html` per als classaddons per estendre les etiquetes HTML permeses.
* Eliminat: Fitxers JavaScript de codi mort substituïts per scripts específics del proveïdor.

Versió: 1.2.1 - Publicada el 2026-01-23

* Corregit: La validació del token de Captcha falla en entorns multisite (ara utilitza transients a nivell de xarxa).
* Corregit: Captcha ara renderitza de manera consistent per a tots els usuaris independentment de l'estat de login.
* Corregit: Desalineació entre el renderitzat i la validació de Captcha que causava fallades de checkout.

Versió: 1.2.0 - Publicada el 2026-01-21

* Nou: Captcha - captcha de prova de treball auto-alojat, habilitat per defecte a l'activació.
* Nou: Protecció de zero configuració - activa l'addon i estàs protegit immediatament.
* Nou: Arquitectura de proveïdors de captcha polimòrfica per fàcil extensibilitat.
* Nou: Protecció de checkout de WooCommerce Store API contra atacs de prova de targetes.
* Nou: Panell de control de estadístiques que mostra desafiaments, verificacions i atacs bloquejats.
* Nou: Preajustaments de nivell de seguretat (Ràpid, Mitjà, Màx) per a la dificultat de Captcha.
* Nou: Classes base abstractes per a els proveïdors reCAPTCHA i hCaptcha.
* Millorat: Base de codi refactoritzada en classes de proveïdors modulaires.
* Millorat: Millor separació de preocupacions amb una classe gestora dedicada.
* Corregit: Millores de seguretat per a la sanització de la variable $_SERVER.
* Corregit: Configuració de tests PHPUnit per convencions de nomenclatura de WordPress.

Versió: 1.0.1 - Publicada el 2025-09-28

* Renomme prefix a ultimate-multisite; actualitza el domini de text; increment de versió.
