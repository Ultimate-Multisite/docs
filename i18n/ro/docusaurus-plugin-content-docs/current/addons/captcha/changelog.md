---
title: Istoric al modificărilor Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Versiune: 1.5.0 - Lansat pe 2026-05-22
* Nou: Limitatore de rată cu oprire forțată (Hard-stop rate limiter) — numără fiecare GET și POST pe paginile protejate de captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) și răspunde cu HTTP 429, un antet `Retry-After` și o pauză (tarpit sleep) aleatorie (1–5s, cu un plafon de 15s).
* Nou: Setările `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` pentru ajustarea intervalului de pauză.
* Nou: Filtrul `wu_cap_rate_limit_whitelist_ip` pentru a exenta intervalele de IP de încredere.
* Nou: Acțiunea `wu_cap_rate_limit_will_block` care se declanșează imediat înainte de trimiterea răspunsului de oprire forțată.
* Nou: Detectare a IP-ului client rezistentă la falsificare (Spoof-resistant). `Captcha_Core::get_client_ip()` (sursa de adevăr pentru cheile bucket-urilor de limitare a ratei, captcha siteverify `remoteip`, și hash-uri IP de statistică) aplică acum un model strict de încredere: `REMOTE_ADDR` este baza, `CF-Connecting-IP` este respectat doar atunci când peer-ul imediat se află într-un interval IP Cloudflare curent, iar `X-Forwarded-For` este respectat doar atunci când peer-ul imediat se află în lista de proxy-uri de încredere configurată de administrator, urmând o parcurgere de la dreapta spre stânga care să sară peste hop-urile de încredere/CF înainte de a se așeza pe IP-ul vizitatorului.
* Nou: Setarea `cap_trust_cloudflare_headers` (implicit O) — opțiune de încredere în `CF-Connecting-IP` atunci când sunteți în spatele Cloudflare. Plugin-ul include o instantanee (snapshot) a CIDR-urilor Cloudflare și o reîmprospătează săptămânal prin wp-cron, cu o soluție de rezervă inclusă în cazul eșecului reîmprospătării.
* Nou: Setarea `cap_trusted_proxies` — o zonă de text (textarea) de CIDR-uri sau IP-uri simple (un pe linie, comentarii `#` permise) care listează proxy-urile / load-balancerele front-line ale dumneavoastră. Fără aceasta, `X-Forwarded-For` este ignorat chiar și atunci când limitatorul de rată este activat.
* Nou: Detectare automată la prima activare a posturii probabile Cloudflare / proxy, cu o notificare în dashboard de tip „Aplică setările detectate” cu un click. Plugin-ul nu suprascrie niciodată valorile salvate de dumneavoastră; dacă traficul ulterior sugerează că configurația dumneavoastră nu mai corespunde realității (de exemplu, Cloudflare și-a schimbat intervalele CIDR și proxy-ul dumneavoastră este acum învechit), apare o notificare de neignorat care sugerează actualizarea recomandată.
* Fixat: Modul invizibil nu mai reduce în tăcere `cap_security_level` la FAST — nivelul configurat de administrator este respectat. Este disponibil un nou filtru `wu_cap_server_security_level` pentru site-urile care doresc o logică personalizată.
* Fixat: Contorul de statistică `rate_limits_triggered` crește acum la fiecare blocare, nu doar pe calea de rezervă rară post-succes.
* Fixat: `Captcha_Core::get_client_ip()` este acum singura sursă de adevăr pentru atribuirea IP-ului vizitatorului în întregul sistem de limitare a ratei, furnizorii de captcha (reCAPTCHA + hCaptcha `siteverify`) și statistici — închid un vector de falsificare în care cererile directe de la serverul de origine care transportau un antet forțat `CF-Connecting-IP` ar fi fost grupate (bucket-uite) după IP-ul falsificat în loc de peer-ul real.
* Fixat: Limitatorele de rată pentru checkout-ul clasic al WooCommerce se declanșează acum pe `template_redirect` (prioritate 1) în loc de `woocommerce_before_checkout_form`. Hook-ul la nivel de formular nu se declanșează niciodată când coșul este gol, așa că traficul de inundare care nu adăuga niciodată un produs ocolea complet limitatorul.
* Fixat: Limitatorele de rată pentru plata comenzii WooCommerce se declanșează acum pe `template_redirect` în loc de `woocommerce_before_pay_action`. Acesta ultimul se declanșează doar după ce `wp_verify_nonce('woocommerce-pay')` reușește, ceea ce înseamnă că atacatorii neautentificați (modelul real de amenințare) nu au declanșat niciodată limitatorul.
* Fixat: Limitatorele de rată pentru checkout-ul WooCommerce Store API (blocuri) se declanșează acum pe `rest_pre_dispatch` în loc de `woocommerce_store_api_checkout_update_order_from_request`. Acesta ultimul se declanșează doar după ce Store API validează câmpurile coșului și de facturare, așa că bot-urile neautentificate au primit un 400 de la validator și nu au declanșat niciodată limitatorul.
* Fixat: Limitatorele de rată pentru login-ul inline al Ultimate Multisite se declanșează acum pe `wu_ajax_nopriv_wu_inline_login` prioritate 1 (și pe oglinda de login autentificat) în loc de `wu_before_inline_login`. Acesta ultimul se declanșează doar după ce `check_ajax_referer('wu_checkout')` reușește, așa că bot-urile neautentificate fără un nonce valid `wu_checkout` au primit un 403 și nu au declanșat niciodată limitatorul.
* Fixat: `Rate_Limiter::enforce()` aplică acum o protecție de tip „o dată pe cerere” (once-per-request) chemată prin `surface|ip`, astfel încât hook-urile upstream care se declanșează de două ori pe render (notabil `wu_setup_checkout` în Ultimate Multisite) să nu mai reduc pragul efectiv de limitare a ratei la jumătate.
* Fixat: Portile de limitare a ratei nu mai consultă `Captcha_Core::is_whitelisted()` (filtrul `wu_captcha_whitelisted`). Acest filtru semnalează „captcha-ul este deja gestionat de altă suprafață” și este ortogonal față de protecția împotriva inundării — integrarea WooCommerce îl folosea pentru a sări peste captcha-ul de login WordPress atunci când era prezent un nonce Woo, ceea ce a afectat numărătoarea ratei și a permis POST-urilor Woo să ocolească limitatorul. Singurul bypass care se aplică acum este filtrul specific de limitare a ratei `wu_cap_rate_limit_whitelist_ip`.

Versiune: 1.3.2 - Lansat pe 2026-01-27
* Fixat: Widget-ul Cap nu se renderizează pe formularele de checkout care folosesc Elementor sau alte page builders.
* Fixat: Elementul personalizat `cap-widget` este eliminat de sanitizarea `wp_kses()`.
* Îmbunătățit: Utilizarea conținutului apelabil (callable content) pentru câmpul captcha de checkout pentru a ocoli filtrarea HTML.
* Îmbunătățit: JavaScript simplificat cu o soluție de rezervă pentru cazuri marginale.

Versiune: 1.3.1 - Lansat pe 2026-01-26
* Fixat: Modul invizibil al Captcha nu mai rezolvă automat pe formularele de checkout dinamice ale Ultimate Multisite.
* Îmbunătățit: Script-ul de checkout Cap folosește acum MutationObserver pentru a detecta widget-uri încărcate dinamic.
* Îmbunătățit: Adăugat interceptarea butonului de checkout pentru a aștepta token-ul înainte de trimitere.

Versiune: 1.3.0 - Lansat pe 2026-01-27
* Nou: Integrarea checkout WooCommerce Blocks cu interceptarea fetch-ului Store API.
* Nou: Suport captcha invizibil pentru checkout WooCommerce (hCaptcha invizibil, reCAPTCHA v2 invizibil, v3).
* Nou: Pagina de setări standalone pentru utilizare fără Ultimate Multisite.
* Nou: Jetpack Autoloader pentru prevenirea conflictelor de dependențe.
* Fixat: hCaptcha nu se renderiza pe checkout-ul dinamic al Ultimate Multisite (conținut încărcat prin AJAX).
* Fixat: Captcha nu se reîmprospătează/resetază atunci când apar erori de validare a formularului.
* Fixat: hCaptcha nu apărea pe pagina de checkout WooCommerce.
* Fixat: Eroarea „reCAPTCHA class not found” (adăugat biblioteca PHP google/recaptcha).
* Îmbunătățit: Detectarea erorilor prin hook-uri WordPress, MutationObserver și interceptarea AJAX.
* Îmbunătățit: Descrierile setărilor includ acum URL-uri de dashboard pentru cheile API.

Versiune: 1.2.2 - Lansat pe 2026-01-24
* Fixat: Captcha nu afișează pe Elementul de Formular de Login al Ultimate Multisite (neconcordanță a numelui filtrului de formular).
* Fixat: HTML-ul widget-ului Cap este eliminat de sanitizarea `wp_kses()`.
* Fixat: Selectorii JavaScript nu găsesc formularele cu slash-uri în ID-urile elementelor.
* Adăugat: Hook-ul de filtru `wu_kses_allowed_html` pentru classaddons, permițând extinderea tag-urilor HTML permise.
* Eliminat: Fișiere JavaScript de cod mort înlocuite cu script-uri specifice furnizorului.

Versiune: 1.2.1 - Lansat pe 2026-01-23

* Fixat: Validarea token-ului Captcha eșua în medii multisite (acum folosește transients la nivel de rețea).
* Fixat: Captcha se renderizează acum în mod consecvent pentru toți utilizatorii, indiferent de statutul de login.
* Fixat: Neconcordanța dintre renderarea și validarea captcha care cauza eșecuri de checkout.

Versiune: 1.2.0 - Lansat pe 2026-01-21

* Nou: Cap Captcha - captcha de dovadă de muncă (proof-of-work) auto-hostsit, activat implicit la activare.
* Nou: Protecție zero-configurație - activați addon-ul și sunteți protejați imediat.
* Nou: Arhitectură de furnizor de captcha polymorphic pentru extensibilitate ușoară.
* Nou: Protecție pentru checkout-ul WooCommerce Store API împotriva atacurilor de testare a cardurilor.
* Nou: Dashboard de urmărire statistică care arată provocările, verificările și atacurile blocate.
* Nou: Presetări de nivel de securitate (Fast, Medium, Max) pentru dificultatea Cap Captcha.
* Nou: Clase de bază abstracte pentru furnizorii reCAPTCHA și hCaptcha.
* Îmbunătățit: Codul de bază refactorizat în clase de furnizori modulare.
* Îmbunătățit: O separare mai bună a preocupărilor cu o clasă manager dedicată.
* Fixat: Îmbunătățiri de securitate pentru sanitizarea variabilei $_SERVER.
* Fixat: Configurația testelor PHPUnit pentru convențiile WordPress.

Versiune: 1.0.1 - Lansat pe 2025-09-28

* Renume prefixul în ultimate-multisite; actualizare domeniului de text; creștere a versiunii.
