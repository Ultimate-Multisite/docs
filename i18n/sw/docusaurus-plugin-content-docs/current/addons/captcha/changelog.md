---
title: Orodha ya Mabadiliko ya Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Mabadiliko ya Captcha

Toleo: 1.5.0 - Tolewa tarehe 2026-05-22
* Jipya: Kizuizi cha kiwango cha kasi (rate limiter) cha hali ya dharura — kinapanga kila GET na POST kwenye maeneo yaliyolindwa na captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) na kujibu kwa HTTP 429, kichwa cha `Retry-After`, na usingizi wa kubadilisha kasi (tarpit sleep) uliopangwa (sekunde 1–5, kwa kiwango cha juu cha sekunde 15).
* Jipya: Mipangilio ya `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ili kurekebisha dirisha la usingizi wa kubadilisha kasi.
* Jipya: Filter ya `wu_cap_rate_limit_whitelist_ip` ili kuondoa IP za kanda zinazotakiwa.
* Jipya: Kitendo (action) cha `wu_cap_rate_limit_will_block` ambacho kinatokea mara moja kabla ya kujitokeza jibu la hali ya dharura.
* Jipya: Uthibitisho wa anwani ya IP ya mteja (client-IP) usiyo na uwezekano wa kuigwa (spoof-resistant). `Captcha_Core::get_client_ip()` (chanzo cha ukweli kwa funguo za vikundi vya kiwango cha kasi, captcha siteverify `remoteip`, na hashes za IP za takwimu) sasa inazimisha mfumo mgumu wa uaminifu: `REMOTE_ADDR` ndio kiwango cha chini, `CF-Connecting-IP` kinathaminiwa tu wakati mpinzani wa moja kwa moja yuko ndani ya kanda ya IP ya Cloudflare iliyo sasa, na `X-Forwarded-For` kinathaminiwa tu wakati mpinzani wa moja kwa moja yuko kwenye orodha ya vifaa vya uaminifu vilivyowekwa na msimamizi, kwa kutumia mwendo wa kulia kwenda kushoto ambao unapita hatua za kuaminika/CF kabla ya kupata IP ya mtumiaji.
* Jipya: Mpangilio wa `cap_trust_cloudflare_headers` (kiwango cha awali KUKATALIWA) — chagua kutumia uaminifu wa `CF-Connecting-IP` wakati uko nyuma ya Cloudflare. Plugin inabeba picha ya CIDR ya Cloudflare na kuiboresha kila wiki kupitia wp-cron na inabeba njia mbadala ikiwa uboreshaji utashindikana.
* Jipya: Mpangilio wa `cap_trusted_proxies` — sehemu ya maandishi (textarea) ya CIDRs au IP safi (moja kwa kila mstari, maoni ya `#` yanaruhusiwa) inayorodhesha vifaa vyako vya mbele / load-balancers. Bila hii, `X-Forwarded-For` inatumiwa kupuuzwa hata wakati rate limiter imewashwa.
* Jipya: Uthibitisho wa kiotomatiki cha kwanza cha hali inayowezekana ya Cloudflare / proxy na taarifa ya msimamizi ya "Tumia mipangilio iliyothibitishwa" kwa kubofya mara moja. Plugin haibadilishi kamwe thamani zako zilizohifadhiwa; ikiwa trafiki inayofuata inashindikisha kwamba usanidi wako haulingani tena na uhalisia (k.m., Cloudflare imebadilisha kanda za CIDR na CIDR yako ya proxy sasa ni ya zamani), taarifa ya kutolingana ambayo haiwezi kufutishwa inatoa sasisho linalopendekezwa.
* Imerekebishwa: Hali ya kutoweonekana haiondoshi tena kimya kimya `cap_security_level` hadi FAST — kiwango kilichowekwa na msimamizi kinathaminiwa. Filter mpya ya `wu_cap_server_security_level` inapatikana kwa tovuti zinazotaka mantiki maalum.
* Imerekebishwa: Kaunti ya takwimu `rate_limits_triggered` sasa inaongezeka kila wakati kuna kizuizi, sio tu kwenye njia ya kuzuia baada ya mafanikio.
* Imerekebishwa: `Captcha_Core::get_client_ip()` sasa ni chanzo kimoja cha ukweli kwa utambulisho wa IP ya mtumiaji katika kiwango cha kasi, watoaji wa captcha (reCAPTCHA + hCaptcha `siteverify`), na takwimu — ikifunga njia ya kuigwa ambapo maombi ya moja kwa moja kutoka kwa seva asili yanabeba kichwa cha `CF-Connecting-IP` kilichokuigwa yalikuwa zingewekwa kwenye vikundi kwa IP iliyoigwa badala ya mpinzani halisi.
* Imerekebishwa: Kizuizi cha kiwango cha kasi cha checkout cha WooCommerce cha kawaida sasa kinatokea kwenye `template_redirect` (kipaumbele 1) badala ya `woocommerce_before_checkout_form`. Hook ya kiwango cha fomu haitawahi kutokea wakati gari ni tupu, kwa hivyo trafiki ya mafuriko ambayo haiongezi bidhaa kabisa ilikuwa inapita kizuizi kabisa.
* Imerekebishwa: Kizuizi cha kiwango cha kasi cha pay-for-order cha WooCommerce sasa kinatokea kwenye `template_redirect` badala ya `woocommerce_before_pay_action`. Baadhi ya hizi hutokea tu baada ya `wp_verify_nonce('woocommerce-pay')` kufanikiwa, kumaanisha kwamba washambuliaji wasio na uhakikisho (mfumo halisi wa tishio) hawakuwahi kuchochea kiwango cha kasi.
* Imerekebishwa: Kizuizi cha kiwango cha kasi cha checkout cha WooCommerce Store API (blocks) sasa kinatokea kwenye `rest_pre_dispatch` badala ya `woocommerce_store_api_checkout_update_order_from_request`. Baadhi ya hizi hutokea tu baada ya Store API kuthibitisha gari na sehemu za bili, kwa hivyo botu wasio na uhakikisho walipata 400 kutoka kwa kithibitishaji na hawakwahi kuchochea kiwango cha kasi.
* Imerekebishwa: Kizuizi cha kiwango cha kasi cha inline-login cha Ultimate Multisite sasa kinatokea kwenye `wu_ajax_nopriv_wu_inline_login` kipaumbele 1 (na kile cha kuakisi kilicho na kuingia) badala ya `wu_before_inline_login`. Baadhi ya hizi hutokea tu baada ya `check_ajax_referer('wu_checkout')` kufanikiwa, kwa hivyo botu wasio na uhakikisho bila nonce halali ya wu_checkout walipata 403 na hawakwahi kuchochea kiwango cha kasi.
* Imerekebishwa: `Rate_Limiter::enforce()` sasa inatumia kinga ya mara moja kwa kila ombi (request) iliyoainishwa kwa `surface|ip`, kwa hivyo hooks za juu zinazotokea mara mbili kwa kila render (hasa `wu_setup_checkout` katika Ultimate Multisite) hazizipunguzishi tena kiwango cha kiwango cha kasi kinachofanya kazi.
* Imerekebishwa: Milango ya kiwango cha kasi haitashauri tena `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Filter hiyo inamaanisha "captcha tayari imeshughulikiwa na eneo lingine" na ni tofauti na ulinzi wa mafuriko — ushirikishwaji wa WooCommerce ulikuwa unaiunganisha ili kukosa captcha ya kuingia ya WordPress wakati nonce ya Woo ilipo, ambayo ilipunguza kuhesabu kiwango na kuruhusu POST za Woo kupita kizuizi. Filter ya `wu_cap_rate_limit_whitelist_ip` inayohusu kiwango cha kasi ndiyo njia pekee ya kupita ambayo inatumika sasa.

Toleo: 1.3.2 - Tolewa tarehe 2026-01-27
* Imerekebishwa: Widget ya Cap haionyeshi kwenye fomu za checkout zinazotumia Elementor au waandaaji wa kurasa wengine.
* Imerekebishwa: Elementi maalum ya cap-widget inafutishwa na sanitization ya wp_kses().
* Imeboreshwa: Kutumia maudhui yanayoweza kuita (callable content) kwa sehemu ya captcha ya checkout ili kupita ufiltration ya HTML.
* Imeboreshwa: JavaScript imlijishwa na njia mbadala kwa matukio ya nanga (edge cases).

Toleo: 1.3.1 - Tolewa tarehe 2026-01-26
* Imerekebishwa: Hali ya kutoweonekana ya Cap Captcha haiondoshi tena kiotomatiki kwenye fomu za checkout za Ultimate Multisite zinazobadilika.
* Imeboreshwa: Script ya Cap ya checkout sasa inatumia MutationObserver kugundua widgets zinazopakuliwa kwa mabadiliko.
* Imeboreshwa: Kuongeza kukatisha kitufe cha checkout ili kusubiri token kabla ya kuwasilisha.

Toleo: 1.3.0 - Tolewa tarehe 2026-01-27
* Jipya: Ujumuishaji wa checkout wa WooCommerce Blocks na kukatisha upakaji wa Store API.
* Jipya: Usaidizi wa captcha usioonekana kwa checkout ya WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3).
* Jipya: Ukurasa wa mipangilio inayojitegemea kwa matumizi bila Ultimate Multisite.
* Jipya: Jetpack Autoloader kwa kuzuia migogoro ya utegiliaji (dependency conflict).
* Imerekebishwa: hCaptcha haionyeshi kwenye checkout ya Ultimate Multisite inayobadilika (maudhui yaliyopakuliwa kwa AJAX).
* Imerekebishwa: Captcha haijajirejesha/kufutishwa wakati makosa ya uthibitisho wa fomu yanatokea.
* Imerekebishwa: hCaptcha haionyeshi kwenye ukurasa wa checkout wa WooCommerce.
* Imerekebishwa: Hitilafu ya class ya reCAPTCHA haipatikani (imeongeza maktaba ya PHP ya google/recaptcha).
* Imeboreshwa: Kugundua makosa kupitia hooks za WordPress, MutationObserver, na kukatisha AJAX.
* Imeboreshwa: Maelezo ya mipangilio sasa inajumuisha URL za dashboard kwa funguo za API.

Toleo: 1.2.2 - Tolewa tarehe 2026-01-24
* Imerekebishwa: Captcha haionyeshi kwenye Element Form ya Ultimate Multisite Login (jina la kutafuta fomu limechanganyika).
* Imerekebishwa: HTML ya widget ya Cap inafutishwa na sanitization ya wp_kses().
* Imerekebishwa: Selectors za JavaScript hazikupata fomu zenye slashes katika ID za vipengele.
* Imeongezwa: Hook ya filter `wu_kses_allowed_html` kwa ajili ya classaddons ili kupanua tags za HTML zinazoruhusiwa.
* Imeondolewa: Faili za JavaScript za msimbo mweusi zimebadilishwa na scripts maalum kwa watoaji.

Toleo: 1.2.1 - Tolewa tarehe 2026-01-23

* Imerekebishwa: Thamani ya token ya Cap Captcha inashindwa kuthibitishwa katika mazingira ya multisite (sasa inatumia transients za kiwango chote).
* Imerekebishwa: Captcha sasa inajidhihirisha kwa uthabiti kwa watumiaji wote bila kujali hali ya kuingia.
* Imerekebishwa: Kutolingana kati ya kuonyesha captcha na kuthibitisha iliyosababisha kushindwa kwa checkout.

Toleo: 1.2.0 - Tolewa tarehe 2026-01-21

* Jipya: Cap Captcha - captcha ya uthibitisho wa kazi (proof-of-work) inayohifadhiwa mwenyewe, iliyowashwa kwa kiwango cha juu wakati wa kuweka.
* Jipya: Ulinzi bila usanidi (Zero-configuration protection) - washa addon na unalindwa mara moja.
* Jipya: Muundo wa watoaji wa captcha wenye uwezo wa kubadilika (Polymorphic) kwa upanuzi rahisi.
* Jipya: Ulinzi wa checkout wa WooCommerce Store API dhidi ya mashambulio ya kupima kadi.
* Jipya: Dashboard ya kufuatilia takwimu inayoonyesha changamoto, uthibitisho, na mashambulio yaliyozuilika.
* Jipya: Mapendekezo ya kiwango cha usalama (Fast, Medium, Max) kwa ugumu wa Cap Captcha.
* Jipya: Madarasa ya msingi ya muundo (Abstract base classes) kwa watoaji wa reCAPTCHA na hCaptcha.
* Imeboreshwa: Msingi wa msimbo uliorekebishwa katika madarasa ya watoaji yanayojitegemea (modular provider classes).
* Imeboreshwa: Unafasi bora wa masuala na darasa maalum la usimamizi.
* Imerekebishwa: Maboresho ya usalama kwa sanitization ya kigezo $_SERVER.
* Imerekebishwa: Muundo wa majaribio ya PHPUnit kwa kanuni za utii wa WordPress.

Toleo: 1.0.1 - Tolewa tarehe 2025-09-28

* Kubadilisha kiambatanisho (prefix) kuwa ultimate-multisite; kubadilisha eneo la maandishi (text domain); kuongeza toleo.
