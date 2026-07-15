---
title: Breytingaskrá Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha breytingaskrá

Útgáfa: 1.5.0 - Gefin út 2026-05-22
* Nýtt: Harður rate limiter — telur hvert GET og POST á captcha-vörðum flötum (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) og svarar með HTTP 429, `Retry-After` header og slembinni tarpit-bið (1–5s, með hörðu hámarki við 15s).
* Nýtt: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` stillingar til að fínstilla tarpit-gluggann.
* Nýtt: `wu_cap_rate_limit_whitelist_ip` filter til að undanþiggja treyst IP-bil.
* Nýtt: `wu_cap_rate_limit_will_block` action sem keyrist rétt áður en harða stöðvunarsvarið er sent.
* Nýtt: Fölsunarþolin greining á IP-tölu client. `Captcha_Core::get_client_ip()` (sannleiksgjafinn fyrir rate-limit bucket-lykla, captcha siteverify `remoteip` og IP-hösh tölfræði) framfylgir nú ströngu traustslíkani: REMOTE_ADDR er grunnurinn, `CF-Connecting-IP` er virt aðeins þegar næsti jafningi er innan núverandi Cloudflare IP-bils, og `X-Forwarded-For` er virt aðeins þegar næsti jafningi er á admin-stillta trusted-proxy listanum, með göngu frá hægri til vinstri sem sleppir treystum/CF hoppum áður en hún staðnæmist á IP-tölu gestsins.
* Nýtt: `cap_trust_cloudflare_headers` stilling (sjálfgefið OFF) — veldu að treysta `CF-Connecting-IP` þegar þú ert á bak við Cloudflare. Plugin fylgir með innbyggð Cloudflare CIDR-skyndimynd og endurnýjar hana vikulega með wp-cron með innbyggðri varaleið ef endurnýjun mistekst.
* Nýtt: `cap_trusted_proxies` stilling — textarea með CIDR-bilum eða hráum IP-tölum (ein í hverri línu, `#` athugasemdir leyfðar) sem skráir eigin framvarða proxy / load-balancers. Án þessa er `X-Forwarded-For` hunsað jafnvel þegar rate limiter er virkur.
* Nýtt: Sjálfvirk greining við fyrstu virkjun á líklegri Cloudflare / proxy stöðu með admin-tilkynningu fyrir einn smell á „Nota greindar stillingar“. Plugin skrifar aldrei yfir vistuðu gildin þín; ef síðari umferð bendir til þess að stillingin þín passi ekki lengur við raunveruleikann (t.d. Cloudflare breytti CIDR-bilum og proxy CIDR þitt er nú úrelt), birtist óafturkræf misræmistilkynning með ráðlagðri uppfærslu.
* Lagað: Ósýnilegur hamur lækkar ekki lengur `cap_security_level` þegjandi niður í FAST — stillt öryggisstig admin er virt. Nýr `wu_cap_server_security_level` filter er í boði fyrir site sem vilja sérsniðna rökvísi.
* Lagað: `rate_limits_triggered` teljari tölfræði hækkar nú við hverja lokun, ekki aðeins á sjaldgæfu post-success backstop leiðinni.
* Lagað: `Captcha_Core::get_client_ip()` er nú eini sannleiksgjafinn fyrir eignun IP-tölu gesta yfir rate limiter, captcha-veitur (reCAPTCHA + hCaptcha `siteverify`) og tölfræði — lokar fölsunarvektor þar sem beinar beiðnir á origin-server með fölsuðum `CF-Connecting-IP` header hefðu verið settar í bucket eftir fölsuðu IP-tölunni í stað raunverulegs jafningja.
* Lagað: WooCommerce classic checkout rate-limit hlið keyrir nú á `template_redirect` (forgangur 1) í stað `woocommerce_before_checkout_form`. Hook á formstigi keyrir aldrei þegar karfan er tóm, þannig að flóðumferð sem bætir aldrei product við fór alveg fram hjá limiter.
* Lagað: WooCommerce pay-for-order rate-limit hlið keyrir nú á `template_redirect` í stað `woocommerce_before_pay_action`. Það síðarnefnda keyrir aðeins eftir að `wp_verify_nonce('woocommerce-pay')` tekst, sem þýðir að óauðkenndir árásaraðilar (raunverulega ógnarlíkanið) kveiktu aldrei á limiter.
* Lagað: WooCommerce Store API (blocks) checkout rate-limit hlið keyrir nú á `rest_pre_dispatch` í stað `woocommerce_store_api_checkout_update_order_from_request`. Það síðarnefnda keyrir aðeins eftir að Store API staðfestir körfuna og billing-reiti, þannig að óauðkenndir bottar fengu 400 frá validator og ræsðu aldrei limiter.
* Lagað: Ultimate Multisite inline-login rate-limit hlið keyrir nú á `wu_ajax_nopriv_wu_inline_login` forgangi 1 (og logged-in speglinum) í stað `wu_before_inline_login`. Það síðarnefnda keyrir aðeins eftir að `check_ajax_referer('wu_checkout')` tekst, þannig að óauðkenndir bottar án gilds wu_checkout nonce fengu 403 og ræsðu aldrei limiter.
* Lagað: `Rate_Limiter::enforce()` notar nú vörð einu sinni í hverri beiðni, lyklaðan með `surface|ip`, þannig að upstream hooks sem keyra tvisvar í hverri renderingu (sérstaklega `wu_setup_checkout` í Ultimate Multisite) helminga ekki lengur raunverulegan rate-limit þröskuld.
* Lagað: Rate-limit yfirborðshlið leita ekki lengur til `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Sá filter gefur til kynna „captcha þegar afgreitt af öðrum fleti“ og er óháður flóðvörn — WooCommerce samþættingin var að hooka í hann til að sleppa WordPress login captcha þegar Woo nonce var til staðar, sem lak inn í rate-talningu og lét Woo POST fara fram hjá limiter. Rate-limit-sértæki `wu_cap_rate_limit_whitelist_ip` filter er eina framhjáhlaupið sem á nú við.

Útgáfa: 1.3.2 - Gefin út 2026-01-27
* Lagað: Cap widget birtist ekki á checkout-eyðublöðum sem nota Elementor eða aðra page builders
* Lagað: cap-widget sérsniðið element var fjarlægt með wp_kses() hreinsun
* Bætt: Nota callable efni fyrir checkout captcha-reit til að fara fram hjá HTML-síun
* Bætt: Einfaldað JavaScript með varaleið fyrir jaðartilvik

Útgáfa: 1.3.1 - Gefin út 2026-01-26
* Lagað: Cap Captcha ósýnilegur hamur leystist ekki sjálfkrafa á dýnamískum Ultimate Multisite checkout-eyðublöðum
* Bætt: Cap checkout script notar nú MutationObserver til að greina dýnamískt hlaðin widgets
* Bætt: Bætt við hlerun á checkout-hnappi til að bíða eftir token fyrir sendingu

Version: 1.3.0 - Gefið út 2026-01-27
* Nýtt: WooCommerce Blocks checkout-samþætting með Store API fetch-hlerun
* Nýtt: Stuðningur við ósýnilegt captcha fyrir WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Nýtt: Sjálfstæð stillingasíða til notkunar án Ultimate Multisite
* Nýtt: Jetpack Autoloader til að koma í veg fyrir árekstra milli ósjálfstæðna
* Lagað: hCaptcha birtist ekki á kviku Ultimate Multisite checkout (AJAX-hlaðið efni)
* Lagað: Captcha endurhlaðast/endurstiltist ekki þegar staðfestingarvillur eyðublaðs koma upp
* Lagað: hCaptcha birtist ekki á WooCommerce checkout-síðu
* Lagað: reCAPTCHA-klasi fannst ekki villa (bætti við google/recaptcha PHP-safni)
* Bætt: Villugreining með WordPress hooks, MutationObserver og AJAX-hlerun
* Bætt: Lýsingar stillinga innihalda nú dashboard-URL fyrir API-lykla

Version: 1.2.2 - Gefið út 2026-01-24
* Lagað: Captcha birtist ekki á Ultimate Multisite Login Form Element (ósamræmi í heiti eyðublaðssíu)
* Lagað: Cap widget HTML var fjarlægt með wp_kses() hreinsun
* Lagað: JavaScript selectors fundu ekki eyðublöð með skástrikum í element IDs
* Bætt við: Filter hook `wu_kses_allowed_html` fyrir classaddons til að útvíkka leyfð HTML tags
* Fjarlægt: Dauðar JavaScript skrár sem var skipt út fyrir provider-sértæk scripts

Version: 1.2.1 - Gefið út 2026-01-23

* Lagað: Staðfesting Cap Captcha token mistókst í multisite-umhverfum (notar nú network-wide transients)
* Lagað: Captcha birtist nú samræmt fyrir alla notendur óháð innskráningarstöðu
* Lagað: Ósamræmi milli birtingar captcha og staðfestingar sem olli checkout-bilunum

Version: 1.2.0 - Gefið út 2026-01-21

* Nýtt: Cap Captcha - sjálfhýst proof-of-work captcha, virkt sjálfgefið við virkjun
* Nýtt: Vernd án uppsetningar - virkjaðu viðbótina og þú ert verndaður strax
* Nýtt: Fjölforma captcha provider-arkitektúr fyrir auðvelda stækkun
* Nýtt: WooCommerce Store API checkout-vernd gegn card testing-árásum
* Nýtt: Tölfræðimælaborð sem sýnir áskoranir, staðfestingar og lokaðar árásir
* Nýtt: Forstillingar öryggisstigs (Fast, Medium, Max) fyrir erfiðleikastig Cap Captcha
* Nýtt: Óhlutbundnir grunnklasar fyrir reCAPTCHA og hCaptcha providers
* Bætt: Endurskipulagt kóðasafn í einingabundna provider-klasa
* Bætt: Betri aðgreining ábyrgðarsviða með sérstökum manager-klasa
* Fixed: Security improvements for $_SERVER variable sanitization
* Lagað: PHPUnit prófunarstillingar fyrir WordPress nafngiftarvenjur

Version: 1.0.1 - Gefið út 2025-09-28

* Endurnefna forskeyti í ultimate-multisite; uppfæra text domain; útgáfuhækkun.
