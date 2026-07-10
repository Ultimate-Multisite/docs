---
title: Zoznam zmien Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Zoznam zmien Captcha {#captcha-changelog}

Verzia: 1.5.0 - Vydané dňa 2026-05-22
* Nové: Tvrdý obmedzovač frekvencie — počíta každý GET a POST na captcha-chránených plochách (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) a odpovedá pomocou HTTP 429, hlavičky `Retry-After` a náhodne zvoleného tarpit uspania (1–5 s, s pevným limitom 15 s).
* Nové: Nastavenia `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` na doladenie tarpit okna.
* Nové: Filter `wu_cap_rate_limit_whitelist_ip` na vyňatie dôveryhodných rozsahov IP.
* Nové: Akcia `wu_cap_rate_limit_will_block`, ktorá sa spustí bezprostredne pred odoslaním tvrdej stop odpovede.
* Nové: Detekcia IP klienta odolná voči spoofingu. `Captcha_Core::get_client_ip()` (zdroj pravdy pre kľúče bucketov obmedzovača frekvencie, captcha siteverify `remoteip` a IP hashe štatistík) teraz vynucuje prísny model dôvery: REMOTE_ADDR je základ, `CF-Connecting-IP` sa rešpektuje iba vtedy, keď je bezprostredný peer v aktuálnom rozsahu IP Cloudflare, a `X-Forwarded-For` sa rešpektuje iba vtedy, keď je bezprostredný peer v administrátorom nakonfigurovanom zozname dôveryhodných proxy, s prechodom sprava doľava, ktorý preskakuje dôveryhodné/CF skoky pred určením IP návštevníka.
* Nové: Nastavenie `cap_trust_cloudflare_headers` (predvolene VYPNUTÉ) — zapnite dôveru v `CF-Connecting-IP`, keď ste za Cloudflare. Plugin obsahuje pribalený snapshot CIDR Cloudflare a obnovuje ho týždenne cez wp-cron s pribalenou zálohou, ak obnovenie zlyhá.
* Nové: Nastavenie `cap_trusted_proxies` — textové pole CIDR alebo samotných IP (jedna na riadok, komentáre `#` povolené) so zoznamom vašich vlastných frontových proxy / load-balancerov. Bez toho sa `X-Forwarded-For` ignoruje, aj keď je obmedzovač frekvencie povolený.
* Nové: Automatická detekcia pravdepodobného nastavenia Cloudflare / proxy pri prvom zapnutí s administrátorským oznámením „Použiť zistené nastavenia“ na jedno kliknutie. Plugin nikdy neprepíše vaše uložené hodnoty; ak následná návštevnosť naznačí, že vaša konfigurácia už nezodpovedá realite (napr. Cloudflare zmenil rozsahy CIDR a váš proxy CIDR je teraz zastaraný), zobrazí sa nezrušiteľné oznámenie o nesúlade s odporúčanou aktualizáciou.
* Opravené: Neviditeľný režim už potichu neznižuje `cap_security_level` na FAST — rešpektuje sa úroveň nakonfigurovaná administrátorom. Pre stránky, ktoré chcú vlastnú logiku, je dostupný nový filter `wu_cap_server_security_level`.
* Opravené: Počítadlo štatistík `rate_limits_triggered` sa teraz zvyšuje pri každom bloku, nielen na zriedkavej záložnej ceste po úspechu.
* Opravené: `Captcha_Core::get_client_ip()` je teraz jediným zdrojom pravdy pre priraďovanie IP návštevníka naprieč obmedzovačom frekvencie, poskytovateľmi captcha (reCAPTCHA + hCaptcha `siteverify`) a štatistikami — uzatvára spoofingový vektor, pri ktorom by priame požiadavky na origin server s podvrhnutou hlavičkou `CF-Connecting-IP` boli zaradené do bucketu podľa podvrhnutej IP namiesto skutočného peera.
* Opravené: Brána obmedzovača frekvencie pre klasický checkout WooCommerce sa teraz spúšťa na `template_redirect` (priorita 1) namiesto `woocommerce_before_checkout_form`. Hook na úrovni formulára sa nikdy nespustí, keď je košík prázdny, takže flood návštevnosť, ktorá nikdy nepridá produkt, obmedzovač úplne obchádzala.
* Opravené: Brána obmedzovača frekvencie pre WooCommerce pay-for-order sa teraz spúšťa na `template_redirect` namiesto `woocommerce_before_pay_action`. Tá sa spustí až po úspechu `wp_verify_nonce('woocommerce-pay')`, čo znamená, že neautorizovaní útočníci (skutočný model hrozby) obmedzovač nikdy nespustili.
* Opravené: Brána obmedzovača frekvencie pre checkout WooCommerce Store API (bloky) sa teraz spúšťa na `rest_pre_dispatch` namiesto `woocommerce_store_api_checkout_update_order_from_request`. Tá sa spustí až po tom, čo Store API overí košík a fakturačné polia, takže neautorizovaní boti dostali 400 od validátora a obmedzovač nikdy nespustili.
* Opravené: Brána obmedzovača frekvencie pre inline-login Ultimate Multisite sa teraz spúšťa na `wu_ajax_nopriv_wu_inline_login` s prioritou 1 (a na zrkadlovej verzii pre prihlásených) namiesto `wu_before_inline_login`. Tá sa spustí až po úspechu `check_ajax_referer('wu_checkout')`, takže neautorizovaní boti bez platného wu_checkout nonce dostali 403 a obmedzovač nikdy nespustili.
* Opravené: `Rate_Limiter::enforce()` teraz aplikuje ochranu raz na požiadavku kľúčovanú podľa `surface|ip`, takže upstream hooky, ktoré sa spúšťajú dvakrát pri jednom renderovaní (najmä `wu_setup_checkout` v Ultimate Multisite), už neznižujú efektívny prah obmedzovača frekvencie na polovicu.
* Opravené: Brány plôch obmedzovača frekvencie už nekonzultujú `Captcha_Core::is_whitelisted()` (filter `wu_captcha_whitelisted`). Tento filter signalizuje „captcha už bola spracovaná inou plochou“ a je nezávislý od ochrany proti floodu — integrácia WooCommerce ho používala na preskočenie WordPress login captcha, keď bol prítomný Woo nonce, čo presakovalo do počítania frekvencie a umožňovalo Woo POSTom vyhnúť sa obmedzovaču. Jediným obídením, ktoré sa teraz uplatňuje, je filter špecifický pre obmedzenie frekvencie `wu_cap_rate_limit_whitelist_ip`.

Verzia: 1.3.2 - Vydané dňa 2026-01-27
* Opravené: Widget Cap sa nevykresľoval na checkout formulároch používajúcich Elementor alebo iné page buildery
* Opravené: Vlastný prvok cap-widget bol odstraňovaný sanitizáciou wp_kses()
* Vylepšené: Použitie volateľného obsahu pre captcha pole v checkout na obídenie filtrovania HTML
* Vylepšené: Zjednodušený JavaScript so záložným riešením pre okrajové prípady

Verzia: 1.3.1 - Vydané dňa 2026-01-26
* Opravené: Neviditeľný režim Cap Captcha sa automaticky neriešil na dynamických checkout formulároch Ultimate Multisite
* Vylepšené: Checkout skript Cap teraz používa MutationObserver na detekciu dynamicky načítaných widgetov
* Vylepšené: Pridané zachytenie tlačidla checkout na počkanie na token pred odoslaním

Version: 1.3.0 - Vydané 2026-01-27
* Nové: Integrácia WooCommerce Blocks pokladne so zachytávaním Store API fetch
* Nové: Podpora neviditeľnej captcha pre WooCommerce pokladňu (hCaptcha neviditeľná, reCAPTCHA v2 neviditeľná, v3)
* Nové: Samostatná stránka nastavení na použitie bez Ultimate Multisite
* Nové: Jetpack Autoloader na prevenciu konfliktov závislostí
* Opravené: hCaptcha sa nevykresľovala pri dynamickej Ultimate Multisite pokladni (obsah načítaný cez AJAX)
* Opravené: Captcha sa neobnovovala/neresetovala pri chybách validácie formulára
* Opravené: hCaptcha sa nezobrazovala na stránke WooCommerce pokladne
* Opravené: Chyba triedy reCAPTCHA nenájdená (pridaná PHP knižnica google/recaptcha)
* Vylepšené: Detekcia chýb cez WordPress hooky, MutationObserver a zachytávanie AJAX
* Vylepšené: Popisy nastavení teraz obsahujú URL adresy dashboardov pre API kľúče

Version: 1.2.2 - Vydané 2026-01-24
* Opravené: Captcha sa nezobrazovala v Ultimate Multisite Login Form Element (nezhoda názvu filtra formulára)
* Opravené: HTML Cap widgetu sa odstraňovalo sanitizáciou wp_kses()
* Opravené: JavaScript selektory nenachádzali formuláre s lomkami v ID elementov
* Pridané: Filter hook `wu_kses_allowed_html` pre classaddons na rozšírenie povolených HTML tagov
* Odstránené: Nepoužívané JavaScript súbory kódu nahradené skriptmi špecifickými pre poskytovateľov

Version: 1.2.1 - Vydané 2026-01-23

* Opravené: Validácia Cap Captcha tokenu zlyhávala v prostrediach multisite (teraz používa celosieťové transienty)
* Opravené: Captcha sa teraz vykresľuje konzistentne pre všetkých používateľov bez ohľadu na stav prihlásenia
* Opravené: Nesúlad medzi vykresľovaním a validáciou captcha, ktorý spôsoboval zlyhania pokladne

Version: 1.2.0 - Vydané 2026-01-21

* Nové: Cap Captcha – self-hosted proof-of-work captcha, predvolene zapnutá pri aktivácii
* Nové: Ochrana bez konfigurácie – aktivujte addon a ste okamžite chránení
* Nové: Polymorfná architektúra poskytovateľov captcha pre jednoduchú rozšíriteľnosť
* Nové: Ochrana WooCommerce Store API pokladne proti útokom testovania kariet
* Nové: Dashboard sledovania štatistík zobrazujúci výzvy, overenia a zablokované útoky
* Nové: Predvoľby úrovne zabezpečenia (Rýchla, Stredná, Max) pre náročnosť Cap Captcha
* Nové: Abstraktné základné triedy pre poskytovateľov reCAPTCHA a hCaptcha
* Vylepšené: Refaktorovaná kódová základňa do modulárnych tried poskytovateľov
* Vylepšené: Lepšie oddelenie zodpovedností s vyhradenou triedou managera
* Fixed: Security improvements for $_SERVER variable sanitization
* Opravené: Konfigurácia PHPUnit testov pre konvencie pomenovania WordPress

Version: 1.0.1 - Vydané 2025-09-28

* Premenovanie prefixu na ultimate-multisite; aktualizácia textovej domény; zvýšenie verzie.
