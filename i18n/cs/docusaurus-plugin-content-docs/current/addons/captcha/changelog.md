---
title: Změny v Captce
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Změny v Captcha

Verze: 1.5.0 - Vydáno 22.05.2026
* Nové: Přísný limitátor frekvence (Hard-stop rate limiter) — počítá každé GET a POST požadavky na stránkách chráněných Captchou (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) a odpovídá HTTP kódem 429, hlavičkou `Retry-After` a náhodně generovaným zdržováním (tarpit sleep) (1–5 sekund, s maximální hranicí 15 sekund).
* Nové: Nastavení `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` pro ladění okna zdržení.
* Nové: Filter `wu_cap_rate_limit_whitelist_ip` k vyloučení důvěryhodných IP adres.
* Nové: Akce `wu_cap_rate_limit_will_block`, která se spustí ihned před odesláním odpovědi hard-stop.
* Nové: Detekce IP adres klienta odolná vůči podvodům. Funkce `Captcha_Core::get_client_ip()` (zde je pravda pro klíče limitátoru frekvence, captcha siteverify `remoteip` a statistické IP adresy) nyní vynucuje přísný model důvěry: `REMOTE_ADDR` je základní předpoklad, `CF-Connecting-IP` je uznáváno pouze tehdy, když je bezprostřední peer uvnitř aktuálního rozmezí IP adres Cloudflare, a `X-Forwarded-For` je uznáváno pouze tehdy, když je bezprostřední peer v seznamu důvěryhodných proxy nakonfigurovaném v administraci. Při detekci se provádí průchod zprava doleva, který přeskočí důvěryhodné/Cloudflare kroky, než se usadí na IP adrese návštěvníka.
* Nové: Nastavení `cap_trust_cloudflare_headers` (výchozí stav OFF) — možnost důvěřovat `CF-Connecting-IP` při použití Cloudflare. Plugin obsahuje balíček rozmezí CIDR Cloudflare a obnovuje ho týdně přes wp-cron s balíkovým fallbackem, pokud se obnovení nepodaří.
* Nové: Nastavení `cap_trusted_proxies` — textové pole pro CIDR adresy nebo čisté IP adresy (jedna na řádek, povoleny komentáře `#`) s uvedením vašich vlastních proxy nebo load-balancerů. Bez tohoto nastavení je `X-Forwarded-For` ignorováno i když je limitátor frekvence aktivní.
* Nové: Automatická detekce pravděpodobného stavu Cloudflare / proxy při prvním spuštění s tlačítkem "Použít detekovaná nastavení" v administraci. Plugin nikdy neponíká vaše uložené hodnoty; pokud následný provoz naznačuje, že vaše konfigurace již neodpovídá skutečnosti (např. Cloudflare změnilo rozmezí CIDR a vaše proxy CIDR je zastaralé), zobrazí se upozornění o nesrovnalosti, které navrhne potřebné aktualizace.
* Opraveno: Průhledný režim již nezkmalvá doladuje `cap_security_level` na FAST — je respektováno úrovně nastavené v administraci. Pro stránky, které chtějí vlastní logiku, je k dispozici nový filter `wu_cap_server_security_level`.
* Opraveno: Počítadlo statistik `rate_limits_triggered` nyní inkrementuje při každém zablokování, ne pouze na vzácné cestě zpět po úspěšném zpracování.
* Opraveno: `Captcha_Core::get_client_ip()` je nyní jediným zdrojem pravdy pro přiřazování IP adres návštěvníků napříč limitátorem frekvence, poskytovateli Captchy (reCAPTCHA + hCaptcha `siteverify`) a statistikami — uzavírá vektor podvodů, kdy by přímé požadavky z původního serveru s falšovanou hlavičkou `CF-Connecting-IP` byly zablokovány podle falšovaného IP a ne podle skutečného peeru.
* Opraveno: Limitátor frekvence pro klasický checkout WooCommerce nyní se spouští na `template_redirect` (priorita 1) namísto `woocommerce_before_checkout_form`. Hook na úrovni formuláře nikdy nespustí, když je košík prázdný, takže provoz, který nikdy nepříde produkt, omiňoval limitátor zcela.
* Opraveno: Limitátor frekvence pro platbu za objednávku WooCommerce nyní se spouští na `template_redirect` namísto `woocommerce_before_pay_action`. Poslední se spustí až po úspěšném `wp_verify_nonce('woocommerce-pay')`, což znamená, že neautorizovaní útočníci (skutečný model hrozby) nikdy neaktivovali limitátor.
* Opraveno: Limitátor frekvence pro checkout WooCommerce Store API (bloky) nyní se spouští na `rest_pre_dispatch` namísto `woocommerce_store_api_checkout_update_order_from_request`. Poslední se spouští až po ověření košíku a fakturačních údajů Store API, takže neautorizovaní boty dostali 400 z validátoru a nikdy neaktivovali limitátor.
* Opraveno: Limitátor frekvence pro inline-login Ultimate Multisite nyní se spouští na `wu_ajax_nopriv_wu_inline_login` s prioritou 1 (a na zrcadlové místo pro přihlášené) namísto `wu_before_inline_login`. Poslední se spustí až po úspěšném `check_ajax_referer('wu_checkout')`, takže neautorizovaní boty bez platného nonce `wu_checkout` dostali 403 a nikdy neaktivovali limitátor.
* Opraveno: `Rate_Limiter::enforce()` nyní aplikuje ochranu jednorázově na požadavek, klíčovanou podle `surface|ip`, takže upstream hooky, které se spouštějí dvakrát při vykreslení (zejména `wu_setup_checkout` v Ultimate Multisite), již nepřemíní účinný práh limitátoru na polovinu.
* Opraveno: Limitátory frekvence na úrovni povrchu již nezkoumávají `Captcha_Core::is_whitelisted()` (filter `wu_captcha_whitelisted`). Tento filter signalizuje "Captcha je již zpracována jiným povrchem" a je nezávislý na ochraně proti zahlcování — integrace WooCommerce ho použila k přeskočení Captchy přihlášení WordPress, když byla přítomna Woo nonce, což se dostalo do počítání frekvence a umožnilo POST požadavky Woo omiňovat limitátor. Jediný bypass, který nyní platí, je specifický pro limitátor frekvence filter `wu_cap_rate_limit_whitelist_ip`.

Verze: 1.3.2 - Vydáno 27.01.2026
* Opraveno: Widget Captcha se ne vykresluje na checkout formulářích pomocí Elementoru nebo jiných page builderů
* Opraveno: Custom element widget Captcha je odstraňován sanitací `wp_kses()`
* Vylepšeno: Použití vollatelného obsahu pro pole Captcha na checkoutu, aby se obejшло filtrování HTML
* Vylepšeno: Zjednodušený JavaScript s fallbackem pro okrajové případy

Verze: 1.3.1 - Vydáno 26.01.2026
* Opraveno: Průhledný režim Captcha se automaticky neřeší na dynamických checkout formulářích Ultimate Multisite
* Vylepšeno: Skript Captcha pro checkout nyní používá MutationObserver k detekci dynamicky načítaných widgetů
* Vylepšeno: Přidáno přerušení tlačítka checkoutu, aby čekalo na token před odesláním

Verze: 1.3.0 - Vydáno 27.01.2026
* Nové: Integrace checkoutu WooCommerce Blocks s přerušováním fetch Store API
* Nové: Podpora neviditelné Captchy pro checkout WooCommerce (hCaptcha neviditelná, reCAPTCHA v2 neviditelná, v3)
* Nové: Samostatní stránka nastavení pro použití bez Ultimate Multisite
* Nové: Jetpack Autoloader pro prevenci konfliktů závislostí
* Opraveno: hCaptcha se ne vykresluje na dynamickém checkoutu Ultimate Multisite (obsah načtený přes AJAX)
* Opraveno: Captcha se neobnovuje/neresetuje při chybách validace formuláře
* Opraveno: hCaptcha se ne zobrazuje na stránce checkout WooCommerce
* Opraveno: Chyba "reCAPTCHA class not found" (přidána PHP knihovna google/recaptcha)
* Vylepšeno: Detekce chyb pomocí WordPress hooků, MutationObserver a AJAX přerušení
* Vylepšeno: Popisy nastavení nyní obsahují URL adresy dashboardu pro API klíče

Verze: 1.2.2 - Vydáno 24.01.2026
* Opraveno: Captcha se ne zobrazuje na Ultimate Multisite Login Form Element (nesrovnalost jména filtru formuláře)
* Opraveno: HTML widget Captcha je odstraňován sanitací `wp_kses()`
* Opraveno: JavaScript selektory nenacházejí formuláře s vykřičníkem v ID elementu
* Přidáno: Filter hook `wu_kses_allowed_html` pro classaddons, aby rozšířily povolené HTML tagy
* Odebráno: JavaScript soubory s mrtvým kódem nahrazeny specifickými pro poskytovatele skripty

Verze: 1.2.1 - Vydáno 23.01.2026

* Opraveno: Validace tokenu Captcha selhávala v multisite prostředích (nyní používá transience na úrovni sítě)
* Opraveno: Captcha se nyní vykresluje konzistentně pro všechny uživatele bez ohledu na stav přihlášení
* Opraveno: Neshoda mezi vykreslením a validací Captchy způsobovala selhání checkoutu

Verze: 1.2.0 - Vydáno 21.01.2026

* Nové: Cap Captcha - self-hosted proof-of-work captcha, aktivováno výchozíně při aktivaci
* Nové: Bezkonfigurační ochrana - aktivujte addon a okamžitě jste chráněni
* Nové: Polymorfní architektura poskytovatelů Captcha pro snadnou rozšířitelnost
* Nové: Ochrana checkoutu WooCommerce Store API proti útokům typu card testing
* Nové: Dashboard pro sledování statistik ukazující výzvy, ověření a zablokované útoky
* Nové: Přednastavené úrovně bezpečnosti (Fast, Medium, Max) pro obtížnost Cap Captcha
* Nové: Abstraktní základní třídy pro poskytovatele reCAPTCHA a hCaptcha
* Vylepšeno: Přepsán kód do modulárních tříd poskytovatelů
* Vylepšeno: Lepší oddělení zájmů s věnovanou třídou manažera
* Opraveno: Bezpečnostní vylepšení pro sanitizaci proměnné $_SERVER
* Opraveno: Konfigurace testů PHPUnit pro konvence pojmenování WordPress

Verze: 1.0.1 - Vydáno 28.09.2025

* Překřejmenování prefixu na ultimate-multisite; aktualizace textového domény; zvýšení verze.
