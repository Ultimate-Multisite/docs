---
title: Diiwaanka Isbeddellada Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha Changelog {#captcha-changelog}

Nooca: 1.5.0 - La sii daayay 2026-05-22
* Cusub: Xaddide heer oo hard-stop ah — wuxuu tiriyaa GET iyo POST kasta oo ku yaal meelaha captcha lagu ilaaliyay (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) wuxuuna ku jawaabaa HTTP 429, `Retry-After` header, iyo tarpit sleep la random gareeyay (1–5s, si adag ugu xaddidan 15s).
* Cusub: Dejinnada `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` si loo habeeyo daaqadda tarpit.
* Cusub: Filter-ka `wu_cap_rate_limit_whitelist_ip` si looga dhaafo IP ranges la aamini karo.
* Cusub: Action-ka `wu_cap_rate_limit_will_block` oo dhacaya isla markiiba ka hor inta aan jawaabta hard-stop la dirin.
* Cusub: Ogaanshaha client-IP oo spoof-resistant ah. `Captcha_Core::get_client_ip()` (isha runta ee furayaasha rate-limit bucket, captcha siteverify `remoteip`, iyo hashes-ka IP ee tirakoobka) hadda wuxuu dhaqan geliyaa qaab aaminaad adag: REMOTE_ADDR waa salka, `CF-Connecting-IP` waa la tixgeliyaa oo keliya marka peer-ka tooska ahi ku jiro Cloudflare IP range hadda jira, iyo `X-Forwarded-For` waa la tixgeliyaa oo keliya marka peer-ka tooska ahi ku jiro liiska trusted-proxy ee admin-configured, iyadoo socod midig-ilaa-bidix ah oo ka boodaya trusted/CF hops ka hor inta aan lagu degin IP-ga booqdaha.
* Cusub: Dejinta `cap_trust_cloudflare_headers` (default OFF) — dooro inaad aaminto `CF-Connecting-IP` marka aad ka dambeyso Cloudflare. Plugin-ku wuxuu la yimaadaa snapshot Cloudflare CIDR ah oo ku dhex jira wuxuuna toddobaadle ugu cusboonaysiiyaa wp-cron, isagoo adeegsanaya fallback-ka ku dhex jira haddii cusboonaysiintu fashilanto.
* Cusub: Dejinta `cap_trusted_proxies` — textarea ah CIDRs ama IP-yo qaawan (midkiiba hal sadar, faallooyinka `#` waa la oggol yahay) oo taxaysa proxies / load-balancers-kaaga safka hore. La'aanteed, `X-Forwarded-For` waa la iska indhatiraa xitaa marka xaddidaha heerku shaqaynayo.
* Cusub: Ogaansho toos ah marka ugu horraysa ee la hawlgeliyo oo lagu ogaanayo Cloudflare / proxy posture suurtagal ah, iyadoo leh ogeysiis admin hal-gujis ah oo ah "Codso dejinnada la ogaaday". Plugin-ku marna ma dul-qoro qiimayaasha aad kaydisay; haddii taraafikada dambe ay muujiso in config-gaagu aanu mar dambe la jaanqaadin xaqiiqada (tusaale Cloudflare ayaa beddeshay CIDR ranges oo proxy CIDR-kaagu hadda wuu duugoobay), ogeysiis mismatch ah oo aan la diidi karin ayaa soo bandhigaya cusboonaysiinta lagu taliyay.
* La hagaajiyay: Habka Invisible mar dambe si aamusnaan ah uma hoos dhigo `cap_security_level` ilaa FAST — heerka uu admin-ku dejiyay waa la tixgeliyaa. Filter cusub oo `wu_cap_server_security_level` ah ayaa diyaar u ah site-yada doonaya logic gaar ah.
* La hagaajiyay: Counter-ka tirakoobka `rate_limits_triggered` hadda wuxuu kordhaa block kasta, ma aha oo keliya jidka dhifka ah ee backstop post-success.
* La hagaajiyay: `Captcha_Core::get_client_ip()` hadda waa isha keliya ee runta ee u nisbaynta IP-ga booqdaha dhammaan rate limiter-ka, bixiyeyaasha captcha (reCAPTCHA + hCaptcha `siteverify`), iyo tirakoobka — iyadoo la xirayo vector spoofing ah halka codsiyada direct origin-server ee wata `CF-Connecting-IP` header been-abuur ah lagu geli lahaa bucket-ka IP-ga la been-abuuray halkii laga isticmaali lahaa peer-ka dhabta ah.
* La hagaajiyay: Albaabka rate-limit ee WooCommerce classic checkout hadda wuxuu ku dhacaa `template_redirect` (priority 1) halkii uu ka ahaan lahaa `woocommerce_before_checkout_form`. Hook-ka heerka form-ka marna ma dhaco marka cart-ku madhan yahay, sidaas darteed taraafikada flood ee aan waligeed product ku darin waxay gebi ahaanba ka gudbaysay limiter-ka.
* La hagaajiyay: Albaabka rate-limit ee WooCommerce pay-for-order hadda wuxuu ku dhacaa `template_redirect` halkii uu ka ahaan lahaa `woocommerce_before_pay_action`. Kan dambe wuxuu dhacaa oo keliya ka dib marka `wp_verify_nonce('woocommerce-pay')` guuleysto, taas oo ka dhigan in weeraryahannada unauth (threat model-ka dhabta ah) aysan waligood kicin limiter-ka.
* La hagaajiyay: Albaabka rate-limit ee WooCommerce Store API (blocks) checkout hadda wuxuu ku dhacaa `rest_pre_dispatch` halkii uu ka ahaan lahaa `woocommerce_store_api_checkout_update_order_from_request`. Kan dambe wuxuu dhacaa oo keliya ka dib marka Store API xaqiijiyo cart-ka iyo billing fields-ka, sidaas darteed bots unauth ah waxay validator-ka ka helayeen 400 oo waligood ma kicin limiter-ka.
* La hagaajiyay: Albaabka rate-limit ee Ultimate Multisite inline-login hadda wuxuu ku dhacaa `wu_ajax_nopriv_wu_inline_login` priority 1 (iyo muraayadda logged-in) halkii uu ka ahaan lahaa `wu_before_inline_login`. Kan dambe wuxuu dhacaa oo keliya ka dib marka `check_ajax_referer('wu_checkout')` guuleysto, sidaas darteed bots unauth ah oo aan haysan wu_checkout nonce sax ah waxay helayeen 403 oo waligood ma kicin limiter-ka.
* La hagaajiyay: `Rate_Limiter::enforce()` hadda wuxuu dabaqaa ilaaliye hal-mar-codsi kasta ah oo lagu fureeyay `surface|ip`, sidaas darteed hooks-ka upstream ee laba jeer ku dhaca render kasta (gaar ahaan `wu_setup_checkout` ee Ultimate Multisite) mar dambe ma kala barayaan heerka xadka rate-limit ee wax ku oolka ah.
* La hagaajiyay: Albaabbada rate-limit surface mar dambe ma eegaan `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` filter). Filter-kaas wuxuu tilmaamaa "captcha hore waxaa u maareeyay surface kale" wuxuuna ka madax bannaan yahay ilaalinta flood — isdhexgalka WooCommerce wuxuu ku xirayay si uu uga boodo captcha login-ka WordPress marka Woo nonce jiro, taas oo ku daadatay rate counting una oggolaatay Woo POSTs inay ka fogaadaan limiter-ka. Filter-ka gaarka u ah rate-limit ee `wu_cap_rate_limit_whitelist_ip` waa bypass-ka keliya ee hadda shaqeeya.

Nooca: 1.3.2 - La sii daayay 2026-01-27
* La hagaajiyay: Cap widget oo aan ka muuqanayn checkout forms isticmaalaya Elementor ama page builders kale
* La hagaajiyay: cap-widget custom element oo laga saarayo sanitization-ka wp_kses()
* La hagaajiyay: Isticmaal callable content oo loogu talagalay checkout captcha field si looga gudbo HTML filtering
* La hagaajiyay: JavaScript la fududeeyay oo leh fallback loogu talagalay xaaladaha geeska ah

Nooca: 1.3.1 - La sii daayay 2026-01-26
* La hagaajiyay: Habka aan muuqan ee Cap Captcha oo aan si toos ah isu xallinayn dynamic Ultimate Multisite checkout forms
* La hagaajiyay: Cap checkout script hadda wuxuu isticmaalaa MutationObserver si loo ogaado widgets si dynamic ah loo raray
* La hagaajiyay: Waxaa lagu daray qabashada checkout button si loo sugo token ka hor submission

Version: 1.3.0 - La sii daayay 2026-01-27
* Cusub: Isdhexgalka checkout ee WooCommerce Blocks oo leh qabashada Store API fetch
* Cusub: Taageerada captcha aan muuqan ee WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Cusub: Bog dejinno oo madax-bannaan si loo isticmaalo Ultimate Multisite la'aantiis
* Cusub: Jetpack Autoloader si looga hortago isku dhaca ku-tiirsanaanta
* La hagaajiyay: hCaptcha oo aan ka muuqan checkout-ka Ultimate Multisite ee firfircoon (nuxur AJAX lagu raray)
* La hagaajiyay: Captcha oo aan dib u cusboonaysiin/dib loo dejin marka khaladaadka xaqiijinta foomku dhacaan
* La hagaajiyay: hCaptcha oo aan ka muuqan bogga WooCommerce checkout
* La hagaajiyay: Khalad reCAPTCHA class aan la helin (waxaa lagu daray maktabadda google/recaptcha PHP)
* La wanaajiyay: Ogaanshaha khaladaadka iyada oo loo marayo WordPress hooks, MutationObserver, iyo qabashada AJAX
* La wanaajiyay: Sharaxaadaha dejinnadu hadda waxay ku jiraan dashboard URLs ee API keys

Version: 1.2.2 - La sii daayay 2026-01-24
* La hagaajiyay: Captcha oo aan ka muuqan Ultimate Multisite Login Form Element (magaca filter-ka foomka oo is-waafaqi waayay)
* La hagaajiyay: HTML-ka widget-ka Cap oo laga saarayay nadiifinta wp_kses()
* La hagaajiyay: JavaScript selectors oo aan helin foomam leh xarriiqyo jiif ah gudaha element IDs
* Lagu daray: Filter hook `wu_kses_allowed_html` oo classaddons u oggolaanaya inay ballaariyaan HTML tags la oggol yahay
* La saaray: Faylal JavaScript code dhintay ah oo lagu beddelay scripts u gaar ah provider

Version: 1.2.1 - La sii daayay 2026-01-23

* La hagaajiyay: Xaqiijinta token-ka Cap Captcha oo ku fashilmaysay deegaanka multisite (hadda waxay isticmaashaa transients heer shabakad oo dhan ah)
* La hagaajiyay: Captcha hadda si joogto ah ayuu ugu muuqdaa dhammaan isticmaaleyaasha iyada oo aan loo eegin xaaladda login
* La hagaajiyay: Is-waafaq la'aanta u dhexeysay muujinta captcha iyo xaqiijinta oo sababtay fashilka checkout

Version: 1.2.0 - La sii daayay 2026-01-21

* Cusub: Cap Captcha - captcha proof-of-work is-martigeliya, oo si caadi ah loogu shido marka la hawlgeliyo
* Cusub: Ilaalin aan qaabeyn u baahnayn - hawlgeli addon-ka waadna isla markiiba ilaalan tahay
* Cusub: Qaab-dhismeedka provider captcha polymorphic ah oo si fudud loo ballaarin karo
* Cusub: Ilaalinta WooCommerce Store API checkout ee ka dhanka ah weerarrada tijaabinta kaararka
* Cusub: Dashboard daba-gal tirakoob oo muujinaya caqabadaha, xaqiijinnada, iyo weerarrada la xannibay
* Cusub: Presets heer amni (Fast, Medium, Max) ee dhibka Cap Captcha
* Cusub: Classes saldhig abstract ah oo loogu talagalay providers reCAPTCHA iyo hCaptcha
* La wanaajiyay: Codebase dib loogu habeeyay classes provider oo modular ah
* La wanaajiyay: Kala-soocid ka fiican oo mas'uuliyadaha ah iyadoo la adeegsanayo class manager gaar ah
* Fixed: Security improvements for $_SERVER variable sanitization
* La hagaajiyay: Qaabeynta tijaabada PHPUnit ee xeerarka magac-bixinta WordPress

Version: 1.0.1 - La sii daayay 2025-09-28

* Dib ugu magacow prefix-ka ultimate-multisite; cusboonaysii text domain; kordhin version.
