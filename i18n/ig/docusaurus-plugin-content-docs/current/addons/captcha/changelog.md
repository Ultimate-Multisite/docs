---
title: Ndekọ mgbanwe Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Ndekọ Mgbanwe Captcha

Ụdị: 1.5.0 - Ewepụtara na 2026-05-22
* Ọhụrụ: Ihe mgbochi ọnụego hard-stop — na-agụ GET na POST ọ bụla n’elu ebe e ji captcha chebe (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ma zaa na HTTP 429, `Retry-After` header, na ụra tarpit a họpụtara n’enweghị usoro (1–5s, e tinyere oke siri ike na 15s).
* Ọhụrụ: Ntọala `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` iji dozie windo tarpit.
* Ọhụrụ: Filter `wu_cap_rate_limit_whitelist_ip` iji hapụ oke IP ndị a tụkwasịrị obi.
* Ọhụrụ: Action `wu_cap_rate_limit_will_block` nke na-amalite ozugbo tupu eziga nzaghachi hard-stop.
* Ọhụrụ: Nchọpụta client-IP na-eguzogide aghụghọ. `Captcha_Core::get_client_ip()` (isi iyi eziokwu maka igodo bọket rate-limit, captcha siteverify `remoteip`, na hash IP ọnụ ọgụgụ) ugbu a na-amanye ụdị ntụkwasị obi siri ike: REMOTE_ADDR bụ ntọala, a na-asọpụrụ `CF-Connecting-IP` naanị mgbe onye ọgbọ ozugbo nọ n’ime oke IP Cloudflare dị ugbu a, a na-asọpụrụkwa `X-Forwarded-For` naanị mgbe onye ọgbọ ozugbo nọ na ndepụta trusted-proxy onye admin haziri, jiri ije site n’aka nri gaa n’aka ekpe nke na-awụli hops ndị a tụkwasịrị obi/CF tupu o kwụsị na IP onye ọbịa.
* Ọhụrụ: Ntọala `cap_trust_cloudflare_headers` (ndabara OFF) — họrọ ịtụkwasị `CF-Connecting-IP` obi mgbe ị nọ n’azụ Cloudflare. Plugin a na-abịa na snapshot Cloudflare CIDR e jikọtara na ya ma na-eme ka ọ dị ọhụrụ kwa izu site na wp-cron, jiri fallback ejikọtara ma ọ bụrụ na mmelite ada.
* Ọhụrụ: Ntọala `cap_trusted_proxies` — textarea nke CIDR ma ọ bụ IP nkịtị (otu n’ahịrị, a na-ekwe nkọwa `#`) na-edepụta proxy / load-balancer nke gị nke dị n’ihu. Enweghị nke a, a na-eleghara `X-Forwarded-For` anya ọbụlagodi mgbe agbanyere rate limiter.
* Ọhụrụ: Nchọpụta akpaka n’oge mbido nke ọnọdụ Cloudflare / proxy nwere ike ịdị, yana ọkwa admin “Apply detected settings” nke otu pịịa. Plugin anaghị edegharị uru ndị ị chekwara; ma ọ bụrụ na okporo ụzọ na-esote gosi na config gị adabaghịzi eziokwu (dịka Cloudflare gbanwere oke CIDR ma proxy CIDR gị adịla ochie), ọkwa mismatch na-enweghị ike iwepụ ga-egosi mmelite a tụrụ aro.
* Edoziri: Invisible mode anaghịzi ebelata `cap_security_level` n’ụzọ zoro ezo ka ọ bụrụ FAST — a na-asọpụrụ ọkwa admin haziri. Filter ọhụrụ `wu_cap_server_security_level` dị maka saịtị ndị chọrọ logic nke ha.
* Edoziri: Counter ọnụ ọgụgụ `rate_limits_triggered` ugbu a na-abawanye na block ọ bụla, ọ bụghị naanị na ụzọ backstop mgbe ihe gara nke ọma nke na-adịkarịghị eme.
* Edoziri: `Captcha_Core::get_client_ip()` ugbu a bụ naanị isi iyi eziokwu maka ịkọwa IP onye ọbịa n’ofe rate limiter, ndị na-enye captcha (reCAPTCHA + hCaptcha `siteverify`), na ọnụ ọgụgụ — na-emechi vector spoofing ebe arịrịọ server-origin ozugbo nke bu `CF-Connecting-IP` header ụgha gaara abanye na bọket site na IP e merụrụ eme kama ịbụ onye ọgbọ n’eziokwu.
* Edoziri: Ọnụ ụzọ rate-limit checkout klasịk WooCommerce ugbu a na-amalite na `template_redirect` (priority 1) kama `woocommerce_before_checkout_form`. Hook ọkwa form anaghị amalite mgbe cart tọgbọ chakoo, ya mere okporo ụzọ flood nke na-etinyeghị product ọ bụla na-agafe limiter kpamkpam.
* Edoziri: Ọnụ ụzọ rate-limit pay-for-order WooCommerce ugbu a na-amalite na `template_redirect` kama `woocommerce_before_pay_action`. Nke ikpeazụ na-amalite naanị mgbe `wp_verify_nonce('woocommerce-pay')` gara nke ọma, nke pụtara na ndị mwakpo unauth (ụdị iyi egwu n’eziokwu) anaghị akpalite limiter.
* Edoziri: Ọnụ ụzọ rate-limit checkout WooCommerce Store API (blocks) ugbu a na-amalite na `rest_pre_dispatch` kama `woocommerce_store_api_checkout_update_order_from_request`. Nke ikpeazụ na-amalite naanị mgbe Store API kwadoro cart na billing fields, ya mere bots unauth nwetara 400 site n’aka validator ma ghara imetụ limiter.
* Edoziri: Ọnụ ụzọ rate-limit inline-login Ultimate Multisite ugbu a na-amalite na `wu_ajax_nopriv_wu_inline_login` priority 1 (yana mirror nke onye logged-in) kama `wu_before_inline_login`. Nke ikpeazụ na-amalite naanị mgbe `check_ajax_referer('wu_checkout')` gara nke ọma, ya mere bots unauth na-enweghị wu_checkout nonce ziri ezi nwetara 403 ma ghara imetụ limiter.
* Edoziri: `Rate_Limiter::enforce()` ugbu a na-etinye guard otu ugboro kwa arịrịọ nke e ji `surface|ip` kee, ya mere hooks upstream na-amalite ugboro abụọ kwa render (karịsịa `wu_setup_checkout` na Ultimate Multisite) anaghịzi ekewa threshold rate-limit dị irè n’ọkara.
* Edoziri: Ọnụ ụzọ elu rate-limit anaghịzi ajụ `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Filter ahụ na-egosi “captcha ejirila elu ọzọ rụọ ya” ma ọ dị iche na nchedo flood — njikọ WooCommerce na-eji ya agafe captcha login WordPress mgbe Woo nonce dị, nke batara n’ịgụ rate ma kwe ka Woo POSTs zere limiter. Filter pụrụ iche maka rate-limit `wu_cap_rate_limit_whitelist_ip` bụ naanị bypass na-arụ ọrụ ugbu a.

Ụdị: 1.3.2 - Ewepụtara na 2026-01-27
* Edoziri: Widget Cap anaghị apụta na forms checkout ndị na-eji Elementor ma ọ bụ page builders ndị ọzọ
* Edoziri: Custom element cap-widget ka wp_kses() sanitization na-ewepụ ya
* Meziwanye: Jiri ọdịnaya callable maka field captcha checkout iji gafee nzacha HTML
* Meziwanye: JavaScript dị mfe nwere fallback maka edge cases

Ụdị: 1.3.1 - Ewepụtara na 2026-01-26
* Edoziri: Invisible mode Cap Captcha anaghị edozi onwe ya akpaka na forms checkout Ultimate Multisite ndị na-agbanwe agbanwe
* Meziwanye: Script checkout Cap ugbu a na-eji MutationObserver ịchọpụta widgets a loduru n’ụzọ na-agbanwe agbanwe
* Meziwanye: Tinye interception bọtịnụ checkout ka ọ chere token tupu submission

Ụdị: 1.3.0 - Ewepụtara na 2026-01-27
* Ọhụrụ: Mmekọrịta WooCommerce Blocks checkout na njide Store API fetch
* Ọhụrụ: Nkwado captcha a na-adịghị ahụ anya maka WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Ọhụrụ: Peeji ntọala kwụụrụ onwe ya maka iji ya na-enweghị Ultimate Multisite
* Ọhụrụ: Jetpack Autoloader maka igbochi esemokwu ndabere
* Edoziri: hCaptcha anaghị egosi na Ultimate Multisite checkout dị ndụ (ọdịnaya ebutere site na AJAX)
* Edoziri: Captcha anaghị emelite/atọgharị mgbe njehie nkwado fọm mere
* Edoziri: hCaptcha anaghị apụta na peeji WooCommerce checkout
* Edoziri: Njehie achọtaghị klas reCAPTCHA (agbakwunyere ọbá akwụkwọ google/recaptcha PHP)
* Melite: Nchọpụta njehie site na WordPress hooks, MutationObserver, na njide AJAX
* Melite: Nkọwa ntọala ugbu a gụnyere URL Dashboard maka API keys

Ụdị: 1.2.2 - Ewepụtara na 2026-01-24
* Edoziri: Captcha anaghị egosi na Ultimate Multisite Login Form Element (aha nzacha fọm adabaghị)
* Edoziri: HTML wijetị Cap na-ewepụ site na nsacha wp_kses()
* Edoziri: Ndị nhọpụta JavaScript anaghị achọta fọm nwere slashes n’ime ID element
* Agbakwunyere: Filter hook `wu_kses_allowed_html` maka classaddons iji gbasaa mkpado HTML ekwe
* Ewepụụrụ: Faịlụ JavaScript koodu nwụrụ anwụ dochiri site na scripts kpọmkwem maka ndị na-enye ọrụ

Ụdị: 1.2.1 - Ewepụtara na 2026-01-23

* Edoziri: Nkwado token Cap Captcha na-ada na gburugburu multisite (ugbu a na-eji transients gafee netwọkụ)
* Edoziri: Captcha ugbu a na-apụta n’otu ụzọ maka ndị ọrụ niile n’agbanyeghị ọnọdụ nbanye
* Edoziri: Enweghị nkwekọ n’etiti igosi captcha na nkwado nke kpatara ọdịda checkout

Ụdị: 1.2.0 - Ewepụtara na 2026-01-21

* Ọhụrụ: Cap Captcha - captcha proof-of-work nke a na-akwado onwe ya, agbanyere na ndabara mgbe emechara activation
* Ọhụrụ: Nchedo na-enweghị nhazi - mee addon ahụ ọrụ, echekwara gị ozugbo
* Ọhụrụ: Nhazi ndị na-enye captcha polymorphic maka mgbasawanye dị mfe
* Ọhụrụ: Nchedo WooCommerce Store API checkout megide mwakpo nnwale kaadị
* Ọhụrụ: Dashboard nlekota ọnụ ọgụgụ na-egosi ihe ịma aka, nkwenye, na mwakpo egbochiri
* Ọhụrụ: Nhọrọ ọkwa nchekwa (Fast, Medium, Max) maka ike Cap Captcha
* Ọhụrụ: Klas ntọala abstract maka ndị na-enye reCAPTCHA na hCaptcha
* Melite: Emezigharịrị codebase ka ọ bụrụ klas ndị na-enye ọrụ modular
* Melite: Nkewa ọrụ ka mma site na klas njikwa pụrụ iche
* Fixed: Security improvements for $_SERVER variable sanitization
* Edoziri: Nhazi ule PHPUnit maka ụkpụrụ ịkpọ aha WordPress

Ụdị: 1.0.1 - Ewepụtara na 2025-09-28

* Gbanwee prefix ka ọ bụrụ ultimate-multisite; melite text domain; bulie ụdị.
