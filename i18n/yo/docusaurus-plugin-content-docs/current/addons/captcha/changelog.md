---
title: Àkọọlẹ Ìyípadà Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Àkọsílẹ̀ Àyípadà Captcha

Ẹ̀yà: 1.5.0 - Tu sílẹ̀ ní 2026-05-22
* Tuntun: Olùdín ìyára hard-stop — ń ka gbogbo GET àti POST lórí àwọn ojú ibi tí captcha dáàbò bò (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ó sì ń dáhùn pẹ̀lú HTTP 429, header `Retry-After`, àti ìsun tarpit aláìlẹ́sẹ̀ (1–5s, tí a fi ààlà líle sí 15s).
* Tuntun: Àwọn ìṣètò `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` láti tún fèrèsé tarpit ṣe.
* Tuntun: Àlẹ̀mọ́ `wu_cap_rate_limit_whitelist_ip` láti yọ àwọn àgbègbè IP tí a gbẹ́kẹ̀lé kúrò.
* Tuntun: Ìṣe `wu_cap_rate_limit_will_block` tí ń ṣiṣẹ́ lẹ́sẹ̀kẹsẹ̀ ṣáájú kí ìdáhùn hard-stop tó ránṣẹ́.
* Tuntun: Ìwádìí IP client tí ó tako spoofing. `Captcha_Core::get_client_ip()` (orisun òtítọ́ fún àwọn kọ́kọ́rọ́ àpò rate-limit, captcha siteverify `remoteip`, àti àwọn hash IP ìṣirò) ń fipá mú àwòṣe ìgbẹ́kẹ̀lé tó muna báyìí: REMOTE_ADDR ni ilẹ̀ ìbẹ̀rẹ̀, `CF-Connecting-IP` ni a bọ̀wọ̀ fún nìkan nígbà tí ẹlẹgbẹ́ lẹ́sẹ̀kẹsẹ̀ bá wà nínú àgbègbè IP Cloudflare lọwọlọwọ, àti `X-Forwarded-For` ni a bọ̀wọ̀ fún nìkan nígbà tí ẹlẹgbẹ́ lẹ́sẹ̀kẹsẹ̀ bá wà nínú àtòkọ trusted-proxy tí admin ṣètò, pẹ̀lú ìrìn láti ọ̀tún sí òsì tó ń fo àwọn ìfo trusted/CF kọjá kí ó tó yan IP àlejò.
* Tuntun: Ìṣètò `cap_trust_cloudflare_headers` (àiyipada OFF) — wọlé sí ìgbẹ́kẹ̀lé `CF-Connecting-IP` nígbà tí o wà lẹ́yìn Cloudflare. Plugin náà wá pẹ̀lú snapshot CIDR Cloudflare tí a kó mọ́ọ̀kan, ó sì ń tún un sọ́sẹ̀sẹ̀ nípasẹ̀ wp-cron pẹ̀lú fallback tí a kó mọ́ọ̀kan bí ìtúnṣe bá kuna.
* Tuntun: Ìṣètò `cap_trusted_proxies` — textarea ti àwọn CIDR tàbí IP lasan (ọ̀kan fún ìlà, a gba àwọn àlàyé `#`) tó ṣe àtòkọ àwọn proxy iwájú / load-balancer tirẹ. Láìsí èyí, a máa kọ `X-Forwarded-For` sílẹ̀ pàápàá nígbà tí olùdín ìyára bá ti ṣiṣẹ́.
* Tuntun: Ìwádìí aifọwọ́yí ìgbà tí a kọ́kọ́ muu ṣiṣẹ́ fún ìpò Cloudflare / proxy tó ṣeéṣe pẹ̀lú ìkìlọ̀ admin "Fi àwọn ìṣètò tí a rí sílò" ní titẹ̀ ẹ̀ẹ̀kan. Plugin náà kì í kọ àwọn iye tí o ti fipamọ́ sílẹ̀ lórí; bí ìrìnàjò tó tẹ̀lé bá fi hàn pé config rẹ kò bá òtítọ́ mu mọ́ (fún àpẹẹrẹ Cloudflare yí àwọn àgbègbè CIDR padà, CIDR proxy rẹ sì ti di atijọ́), ìkìlọ̀ àìbáamu tí a kò lè yọ kúrò yóò fi ìmúdójúìwọ̀n tí a dámọ̀ràn hàn.
* Ti ṣe àtúnṣe: Ipo àìrí kò tún dín `cap_security_level` sí FAST ní ìkọ̀kọ̀ mọ́ — a bọ̀wọ̀ fún ipele tí admin ṣètò. Àlẹ̀mọ́ `wu_cap_server_security_level` tuntun wà fún àwọn site tí ó fẹ́ ìlànà àdáni.
* Ti ṣe àtúnṣe: Káǹtà ìṣirò `rate_limits_triggered` ń pọ̀ sí i báyìí lórí gbogbo ìdènà, kì í ṣe lórí ọ̀nà backstop lẹ́yìn-àṣeyọrí tó ṣọ̀wọ́n nìkan.
* Ti ṣe àtúnṣe: `Captcha_Core::get_client_ip()` ni orisun òtítọ́ kan ṣoṣo báyìí fún fífi IP àlejò mọ́ ibi tó ti wá kọjá olùdín ìyára, àwọn olùpèsè captcha (reCAPTCHA + hCaptcha `siteverify`), àti ìṣirò — tí ó pa ọ̀nà spoofing kan tí àwọn ìbéèrè taara sí origin-server pẹ̀lú header `CF-Connecting-IP` èké yóò ti jẹ́ kí a fi IP tí a ṣe spoof sínú àpò dípò ẹlẹgbẹ́ gidi.
* Ti ṣe àtúnṣe: Ẹnubodè rate-limit WooCommerce classic checkout ń ṣiṣẹ́ báyìí lórí `template_redirect` (àkọ́kọ́ 1) dípò `woocommerce_before_checkout_form`. Hook ipele fọ́ọ̀mù náà kì í ṣiṣẹ́ nígbà tí kẹ̀kẹ́ rírà bá ṣófo, nítorí náà ìrìnàjò flood tí kò fi product kún un rárá ń yí olùdín náà kọjá pátápátá.
* Ti ṣe àtúnṣe: Ẹnubodè rate-limit WooCommerce pay-for-order ń ṣiṣẹ́ báyìí lórí `template_redirect` dípò `woocommerce_before_pay_action`. Èyí ìkẹyìn ń ṣiṣẹ́ lẹ́yìn tí `wp_verify_nonce('woocommerce-pay')` bá ṣàṣeyọrí nìkan, èyí tó túmọ̀ sí pé àwọn olùkọlù unauth (àwòṣe ewu gidi) kò fa olùdín náà ṣiṣẹ́ rí.
* Ti ṣe àtúnṣe: Ẹnubodè rate-limit WooCommerce Store API (blocks) checkout ń ṣiṣẹ́ báyìí lórí `rest_pre_dispatch` dípò `woocommerce_store_api_checkout_update_order_from_request`. Èyí ìkẹyìn ń ṣiṣẹ́ lẹ́yìn tí Store API bá fọwọ́si kẹ̀kẹ́ rírà àti àwọn fields ìsanwó nìkan, nítorí náà àwọn bot unauth gba 400 láti ọdọ validator, wọn kò sì fa olùdín náà ṣiṣẹ́ rí.
* Ti ṣe àtúnṣe: Ẹnubodè rate-limit Ultimate Multisite inline-login ń ṣiṣẹ́ báyìí lórí `wu_ajax_nopriv_wu_inline_login` àkọ́kọ́ 1 (àti dígí logged-in) dípò `wu_before_inline_login`. Èyí ìkẹyìn ń ṣiṣẹ́ lẹ́yìn tí `check_ajax_referer('wu_checkout')` bá ṣàṣeyọrí nìkan, nítorí náà àwọn bot unauth láìsí wu_checkout nonce tó pé gba 403, wọn kò sì fa olùdín náà ṣiṣẹ́ rí.
* Ti ṣe àtúnṣe: `Rate_Limiter::enforce()` ń fi olùṣọ́ ẹ̀ẹ̀kan-fún-ìbéèrè-sọ́kan sílò báyìí tí a fi `surface|ip` ṣe kọ́kọ́rọ́ rẹ, nítorí náà àwọn hook upstream tí ń ṣiṣẹ́ lẹ́ẹ̀mejì fún render kan (pàápàá `wu_setup_checkout` nínú Ultimate Multisite) kò tún din ààlà rate-limit tó munadoko sí ìdajì mọ́.
* Ti ṣe àtúnṣe: Àwọn ẹnubodè surface rate-limit kò tún kan sí `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Àlẹ̀mọ́ yẹn ń tọ́ka sí "captcha ti jẹ́ mímú lọ́wọ́ nípasẹ̀ surface mìíràn" ó sì yàtọ̀ sí ààbò flood — ìṣepọ̀ WooCommerce ń so mọ́ ọn láti fo captcha ìwọlé WordPress kọjá nígbà tí Woo nonce bá wà, èyí tó wọ inú kíkà rate, tó sì jẹ́ kí àwọn Woo POST yàgò fún olùdín náà. Àlẹ̀mọ́ `wu_cap_rate_limit_whitelist_ip` pàtó sí rate-limit ni bypass kan ṣoṣo tó ń ṣiṣẹ́ báyìí.

Ẹ̀yà: 1.3.2 - Tu sílẹ̀ ní 2026-01-27
* Ti ṣe àtúnṣe: Widget Cap kò render lórí àwọn fọ́ọ̀mù checkout tó ń lo Elementor tàbí àwọn page builder míì
* Ti ṣe àtúnṣe: custom element cap-widget tí sanitization wp_kses() ń yọ kúrò
* Ti mú dara sí: Lo àkóónú callable fún field captcha checkout láti yàgò fún fíltà HTML
* Ti mú dara sí: JavaScript tí a mú rọrùn pẹ̀lú fallback fún àwọn edge case

Ẹ̀yà: 1.3.1 - Tu sílẹ̀ ní 2026-01-26
* Ti ṣe àtúnṣe: Ipo àìrí Cap Captcha kò ń yanju fúnra rẹ lórí àwọn fọ́ọ̀mù checkout Ultimate Multisite aláyípadà
* Ti mú dara sí: Script checkout Cap ń lo MutationObserver báyìí láti ṣàwárí àwọn widget tí a kojú sílẹ̀ nípa ìyípadà
* Ti mú dara sí: A ṣàfikún ìdádúró bọtìnì checkout láti dúró de token ṣáájú fífi ránṣẹ́

Ẹ̀yà: 1.3.0 - Tu sílẹ̀ ní 2026-01-27
* Tuntun: Ìṣepọ̀ WooCommerce Blocks checkout pẹ̀lú ìdádúró fetch Store API
* Tuntun: Àtìlẹ́yìn captcha àìrí fún WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Tuntun: Ojú ewé ìṣètò standalone fún lílo láìsí Ultimate Multisite
* Tuntun: Jetpack Autoloader fún dídènà ìjà dependency
* Ti ṣe àtúnṣe: hCaptcha kò render lórí Ultimate Multisite checkout aláyípadà (àkóónú tí AJAX kojú sílẹ̀)
* Ti ṣe àtúnṣe: Captcha kò ń sọ di tuntun/tún ṣètò nígbà tí àwọn àṣìṣe ìfọwọ́sí fọ́ọ̀mù bá ṣẹlẹ̀
* Ti ṣe àtúnṣe: hCaptcha kò hàn lórí ojú ewé WooCommerce checkout
* Ti ṣe àtúnṣe: Àṣìṣe reCAPTCHA class not found (a ṣàfikún library google/recaptcha PHP)
* Ti mú dara sí: Ìwádìí àṣìṣe nípasẹ̀ àwọn hook WordPress, MutationObserver, àti ìdádúró AJAX
* Ti mú dara sí: Àwọn àpejuwe ìṣètò ní àwọn URL dashboard fún àwọn kọ́kọ́rọ́ API báyìí

Ẹ̀yà: 1.2.2 - Tu sílẹ̀ ní 2026-01-24
* Ti ṣe àtúnṣe: Captcha kò hàn lórí Ultimate Multisite Login Form Element (orúkọ àlẹ̀mọ́ fọ́ọ̀mù kò bá mu)
* Ti ṣe àtúnṣe: HTML widget Cap tí sanitization wp_kses() ń yọ kúrò
* Ti ṣe àtúnṣe: Àwọn selector JavaScript kò rí àwọn fọ́ọ̀mù pẹ̀lú àwọn slash nínú ID element
* Ti ṣàfikún: Hook àlẹ̀mọ́ `wu_kses_allowed_html` fún classaddons láti fa àwọn tag HTML tí a gba láàyè gbooro
* Ti yọ kúrò: Àwọn faili JavaScript code òkú tí a fi àwọn script pàtó sí provider rọ́pò

Ẹ̀yà: 1.2.1 - Tu sílẹ̀ ní 2026-01-23

* Ti ṣe àtúnṣe: Ìfọwọ́sí token Cap Captcha ń kuna nínú àwọn ayika multisite (ó ń lo transient jákèjádò network báyìí)
* Ti ṣe àtúnṣe: Captcha ń render ní ìbámu báyìí fún gbogbo àwọn oníṣe láìka ipo ìwọlé sí
* Ti ṣe àtúnṣe: Àìbámu láàárín rendering captcha àti ìfọwọ́sí tó fa àwọn ìkùnà checkout

Ẹ̀yà: 1.2.0 - Tu sílẹ̀ ní 2026-01-21

* Tuntun: Cap Captcha - captcha proof-of-work tí a gbalejo fúnra ẹni, tí a muu ṣiṣẹ́ ní aiyipada nígbà activation
* Tuntun: Ààbò zero-configuration - activate addon náà, o sì ti ní ààbò lẹ́sẹ̀kẹsẹ̀
* Tuntun: Àkọ́lé olùpèsè captcha polymorphic fún fífẹ̀ síi rọrùn
* Tuntun: Ààbò checkout WooCommerce Store API lòdì sí àwọn ìkọlù ìdánwò kaadi
* Tuntun: Dashboard ìtọpinpin ìṣirò tó ń fi àwọn challenge, àwọn verification, àti àwọn ìkọlù tí a dènà hàn
* Tuntun: Àwọn preset ipele ààbò (Fast, Medium, Max) fún ìṣòro Cap Captcha
* Tuntun: Àwọn class ìpìlẹ̀ abstract fún àwọn olùpèsè reCAPTCHA àti hCaptcha
* Ti mú dara sí: A tún codebase ṣètò sínú àwọn class provider modular
* Ti mú dara sí: Ìyàtọ̀ àníyàn tó dára jù pẹ̀lú class manager pàtó
* Fixed: Security improvements for $_SERVER variable sanitization
* Ti ṣe àtúnṣe: Ìṣètò ìdánwò PHPUnit fún àwọn àṣà ìsọlórúkọ WordPress

Ẹ̀yà: 1.0.1 - Tu sílẹ̀ ní 2025-09-28

* Tún prefix lorúkọ sí ultimate-multisite; ṣe àfikún text domain; gbé ẹ̀yà ga.
