---
title: Mbiri ya Zosintha za Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Mbiri ya Zosintha za Captcha

Mtundu: 1.5.0 - Watulutsidwa pa 2026-05-22
* Chatsopano: Cholepheretsa malire a liwiro cha hard-stop — chimawerenga GET ndi POST iliyonse pa malo otetezedwa ndi captcha (wp-login / kulembetsa / mawu-achinsinsi-otayika / ndemanga, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) ndipo chimayankha ndi HTTP 429, `Retry-After` header, ndi kugona kwa tarpit kosasintha (1–5s, kolimba mpaka 15s).
* Chatsopano: Zokonda za `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` zosinthira zenera la tarpit.
* Chatsopano: Fyuluta ya `wu_cap_rate_limit_whitelist_ip` yochotsera magulu a IP odalirika.
* Chatsopano: Ntchito ya `wu_cap_rate_limit_will_block` yomwe imayambitsidwa nthawi yomweyo yankho la hard-stop lisanatumizidwe.
* Chatsopano: Kuzindikira IP ya kasitomala kosagonjetsedwa ndi spoofing. `Captcha_Core::get_client_ip()` (gwero la choonadi cha makiyi a mabaketi a malire a liwiro, captcha siteverify `remoteip`, ndi ma hash a IP a ziwerengero) tsopano imakakamiza njira yokhwima ya chidaliro: REMOTE_ADDR ndi maziko, `CF-Connecting-IP` imalemekezedwa kokha pamene mnzake wapafupi ali mkati mwa gulu la IP la Cloudflare lomwe lilipo, ndipo `X-Forwarded-For` imalemekezedwa kokha pamene mnzake wapafupi ali mu mndandanda wa ma proxy odalirika okonzedwa ndi admin, ndi kuyenda kuchokera kumanja kupita kumanzere komwe kumadumpha ma hop odalirika/CF asanakhazikike pa IP ya mlendo.
* Chatsopano: Chokonda cha `cap_trust_cloudflare_headers` (chosasankhidwa mwachisawawa) — sankhani kudalira `CF-Connecting-IP` mukakhala kumbuyo kwa Cloudflare. Plugin imabwera ndi snapshot ya Cloudflare CIDR yophatikizidwa ndipo imayitsitsimutsa sabata iliyonse kudzera pa wp-cron ndi fallback yophatikizidwa ngati kutsitsimutsa kwalephera.
* Chatsopano: Chokonda cha `cap_trusted_proxies` — textarea ya ma CIDR kapena ma IP opanda zowonjezera (imodzi pa mzere, ndemanga za `#` zimaloledwa) yolemba ma proxy anu a kutsogolo / load-balancers. Popanda izi, `X-Forwarded-For` imanyalanyazidwa ngakhale cholepheretsa malire a liwiro chayatsidwa.
* Chatsopano: Kuzindikira koyambirira mukayatsa koyamba kwa momwe Cloudflare / proxy zingakhalire ndi chenjezo la admin la dinani kamodzi "Ikani zokonda zozindikiridwa". Plugin silemba pamwamba pa mfundo zanu zosungidwa; ngati magalimoto otsatira akusonyeza kuti config yanu siyikugwirizananso ndi zenizeni (mwachitsanzo Cloudflare yasintha magulu a CIDR ndipo proxy CIDR yanu tsopano ndi yakale), chenjezo losachotsedwa la kusagwirizana limasonyeza kusintha komwe kulimbikitsidwa.
* Zakonzedwa: Njira yosaoneka siyitsitsanso mwakachetechete `cap_security_level` kukhala FAST — mulingo wokonzedwa ndi admin umalemekezedwa. Fyuluta yatsopano ya `wu_cap_server_security_level` ilipo kwa masite omwe akufuna logic yapadera.
* Zakonzedwa: Kaunta ya ziwerengero ya `rate_limits_triggered` tsopano imawonjezeka pa block iliyonse, osati kokha pa njira yosowa ya post-success backstop.
* Zakonzedwa: `Captcha_Core::get_client_ip()` tsopano ndi gwero limodzi la choonadi cha kugawa IP ya mlendo kudutsa cholepheretsa malire a liwiro, opereka captcha (reCAPTCHA + hCaptcha `siteverify`), ndi ziwerengero — kutseka njira ya spoofing pomwe zopempha zachindunji ku origin-server zokhala ndi `CF-Connecting-IP` header yabodza zikanakhala zayikidwa mu bucket ndi IP yabodza m'malo mwa mnzake weniweni.
* Zakonzedwa: Chipata cha malire a liwiro cha WooCommerce classic checkout tsopano chimayambitsidwa pa `template_redirect` (priority 1) m'malo mwa `woocommerce_before_checkout_form`. Hook ya pa fomu siyimayambitsidwa konse ngolo ikakhala yopanda kanthu, choncho magalimoto ochuluka omwe sanawonjezere product anali kudutsa limiter yonse.
* Zakonzedwa: Chipata cha malire a liwiro cha WooCommerce pay-for-order tsopano chimayambitsidwa pa `template_redirect` m'malo mwa `woocommerce_before_pay_action`. Chomalizacho chimayambitsidwa kokha `wp_verify_nonce('woocommerce-pay')` ikapambana, zomwe zikutanthauza kuti owukira osalowa (chitsanzo chenicheni cha chiwopsezo) sanayambitse limiter.
* Zakonzedwa: Chipata cha malire a liwiro cha WooCommerce Store API (blocks) checkout tsopano chimayambitsidwa pa `rest_pre_dispatch` m'malo mwa `woocommerce_store_api_checkout_update_order_from_request`. Chomalizacho chimayambitsidwa kokha Store API ikatsimikizira ngolo ndi minda ya billing, choncho ma bot osalowa analandira 400 kuchokera kwa wotsimikizira ndipo sanayambitse limiter.
* Zakonzedwa: Chipata cha malire a liwiro cha Ultimate Multisite inline-login tsopano chimayambitsidwa pa `wu_ajax_nopriv_wu_inline_login` priority 1 (ndi galasi la wolowa) m'malo mwa `wu_before_inline_login`. Chomalizacho chimayambitsidwa kokha `check_ajax_referer('wu_checkout')` ikapambana, choncho ma bot osalowa opanda nonce yovomerezeka ya wu_checkout analandira 403 ndipo sanayambitse limiter.
* Zakonzedwa: `Rate_Limiter::enforce()` tsopano imagwiritsa ntchito chotetezera kamodzi-pa-pempho chokiyidwa ndi `surface|ip`, choncho ma hook akumtunda omwe amayambitsidwa kawiri pa render (makamaka `wu_setup_checkout` mu Ultimate Multisite) sakachepetsanso pakati malire enieni a rate-limit.
* Zakonzedwa: Zipata za malo a malire a liwiro sizifunsanso `Captcha_Core::is_whitelisted()` (fyuluta ya `wu_captcha_whitelisted`). Fyulutayo imasonyeza kuti "captcha yathandizidwa kale ndi malo ena" ndipo ndi yosiyana ndi chitetezo cha kusefukira — kuphatikiza kwa WooCommerce kunali kuyilumikiza kuti idumpha captcha ya login ya WordPress pamene Woo nonce ilipo, zomwe zinalowerera mu kuwerengera kwa liwiro ndikulola Woo POSTs kupewa limiter. Fyuluta yeniyeni ya malire a liwiro ya `wu_cap_rate_limit_whitelist_ip` ndiyo bypass yokhayo yomwe tsopano imagwira ntchito.

Mtundu: 1.3.2 - Watulutsidwa pa 2026-01-27
* Zakonzedwa: Widget ya Cap kusawonetsedwa pa mafomu a checkout ogwiritsa ntchito Elementor kapena opanga masamba ena
* Zakonzedwa: Custom element ya cap-widget kuchotsedwa ndi kuyeretsa kwa wp_kses()
* Zasinthidwa bwino: Gwiritsani ntchito zomwe zingayitanidwe pa munda wa checkout captcha kuti mudutse kusefa kwa HTML
* Zasinthidwa bwino: JavaScript yosavuta yokhala ndi fallback pa zochitika zapadera

Mtundu: 1.3.1 - Watulutsidwa pa 2026-01-26
* Zakonzedwa: Njira yosaoneka ya Cap Captcha kusadzithetsa yokha pa mafomu a checkout a Ultimate Multisite osintha mwamphamvu
* Zasinthidwa bwino: Script ya Cap checkout tsopano imagwiritsa ntchito MutationObserver kuzindikira ma widget omwe akwezedwa mwamphamvu
* Zasinthidwa bwino: Kuwonjezera kulanda batani la checkout kuti lidikire token musanatumize

Mtundu: 1.3.0 - Wotulutsidwa pa 2026-01-27
* Chatsopano: Kuphatikiza kwa WooCommerce Blocks kulipira ndi kuletsa kwa Store API fetch
* Chatsopano: Chithandizo cha captcha yosaoneka pa kulipira kwa WooCommerce (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Chatsopano: Tsamba la makonda lodziyimira palokha kuti ligwiritsidwe ntchito popanda Ultimate Multisite
* Chatsopano: Jetpack Autoloader yoletsa mikangano ya dependency
* Zakonzedwa: hCaptcha sinawonetsedwe pa kulipira kwa Ultimate Multisite kosintha (zomwe zayikidwa ndi AJAX)
* Zakonzedwa: Captcha sinatsitsimutsidwe/kubwezeretsedwa pamene zolakwa zotsimikizira fomu zachitika
* Zakonzedwa: hCaptcha sinawonekere pa tsamba la kulipira la WooCommerce
* Zakonzedwa: cholakwika cha kalasi ya reCAPTCHA kusapezeka (yawonjezedwa google/recaptcha PHP library)
* Zasinthidwa: Kuzindikira zolakwa kudzera mu WordPress hooks, MutationObserver, ndi kuletsa kwa AJAX
* Zasinthidwa: Mafotokozedwe a makonda tsopano akuphatikiza ma URL a dashboard a API keys

Mtundu: 1.2.2 - Wotulutsidwa pa 2026-01-24
* Zakonzedwa: Captcha sinawonetsedwe pa Ultimate Multisite Login Form Element (dzina la fyuluta ya fomu silinafanane)
* Zakonzedwa: HTML ya widget ya Cap inali kuchotsedwa ndi kuyeretsa kwa wp_kses()
* Zakonzedwa: JavaScript selectors sanapeze mafomu okhala ndi masileshi mu ma ID a ma element
* Zawonjezedwa: Filter hook `wu_kses_allowed_html` kuti classaddons iwonjezere ma tag a HTML ololedwa
* Zachotsedwa: Mafayilo a JavaScript a code yakufa asinthidwa ndi ma script apadera a provider

Mtundu: 1.2.1 - Wotulutsidwa pa 2026-01-23

* Zakonzedwa: Kutsimikizira token ya Cap Captcha kunalephera m'malo a multisite (tsopano imagwiritsa ntchito transients a network yonse)
* Zakonzedwa: Captcha tsopano imawonekera mofanana kwa ogwiritsa ntchito onse mosasamala kanthu za login status
* Zakonzedwa: Kusiyana pakati pa kuwonetsa captcha ndi kutsimikizira komwe kunayambitsa kulephera kwa kulipira

Mtundu: 1.2.0 - Wotulutsidwa pa 2026-01-21

* Chatsopano: Cap Captcha - captcha ya proof-of-work yodzisungira nokha, imayatsidwa mwachisawawa pa activation
* Chatsopano: Chitetezo chopanda kukonza - yatsani addon ndipo mutetezedwa nthawi yomweyo
* Chatsopano: Kamangidwe ka provider wa captcha ka polymorphic kuti kukulitsidwa kukhale kosavuta
* Chatsopano: Chitetezo cha kulipira cha WooCommerce Store API motsutsana ndi kuukira koyesa makhadi
* Chatsopano: Dashboard yotsatira ziwerengero yomwe imasonyeza zovuta, kutsimikizira, ndi kuukira kotsekedwa
* Chatsopano: Zokonzedweratu za mlingo wa chitetezo (Fast, Medium, Max) pa kuvuta kwa Cap Captcha
* Chatsopano: Makalasi oyambira a abstract a ma provider a reCAPTCHA ndi hCaptcha
* Zasinthidwa: Codebase yakonzedwanso kukhala makalasi a provider a modular
* Zasinthidwa: Kulekanitsa bwino maudindo ndi kalasi ya manager yapadera
* Fixed: Security improvements for $_SERVER variable sanitization
* Zakonzedwa: Makonzedwe a mayeso a PHPUnit a malamulo a mayina a WordPress

Mtundu: 1.0.1 - Wotulutsidwa pa 2025-09-28

* Sinthani prefix kukhala ultimate-multisite; sinthani text domain; kukweza mtundu.
