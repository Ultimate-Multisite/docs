---
title: Ilogi yezinguquko ze-Captcha
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Umlando wezinguquko we-Captcha {#captcha-changelog}

Inguqulo: 1.5.0 - Ikhishwe ngo-2026-05-22
* Okusha: Isinqamuli sesilinganiso esima ngokuqinile — sibala yonke i-GET ne-POST ezindaweni ezivikelwe nge-captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) futhi siphendula nge-HTTP 429, i-header ethi `Retry-After`, kanye nokulala kwe-tarpit okungahleliwe (1–5s, kunomkhawulo oqinile ku-15s).
* Okusha: Izilungiselelo ze-`cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` zokulungisa iwindi le-tarpit.
* Okusha: Isihlungi se-`wu_cap_rate_limit_whitelist_ip` sokukhulula amaqoqo ama-IP athembekile.
* Okusha: Isenzo se-`wu_cap_rate_limit_will_block` esiqalisa ngokushesha ngaphambi kokuba impendulo yokuma ngokuqinile ithunyelwe.
* Okusha: Ukutholwa kwe-client-IP okumelana nokukhohlisa. `Captcha_Core::get_client_ip()` (umthombo weqiniso wezihluthulelo zamabhakede omkhawulo wesilinganiso, i-captcha siteverify `remoteip`, nama-hash e-IP ezibalo) manje iphoqelela imodeli yokwethemba eqinile: i-REMOTE_ADDR iyisisekelo, `CF-Connecting-IP` ihlonishwa kuphela lapho untanga oseduze engaphakathi kweqoqo lamanje lama-IP e-Cloudflare, futhi `X-Forwarded-For` ihlonishwa kuphela lapho untanga oseduze esohlwini lwama-proxy athembekile alungiselelwe yi-admin, ngokuhamba kusuka kwesokudla kuya kwesobunxele okweqa izinyathelo ezithembekile/ze-CF ngaphambi kokuzinza ku-IP yesivakashi.
* Okusha: Isilungiselelo se-`cap_trust_cloudflare_headers` (okuzenzakalelayo KUVALIWE) — khetha ukwethemba i-`CF-Connecting-IP` uma ungemuva kwe-Cloudflare. I-plugin iza nesithombe se-Cloudflare CIDR esihlanganisiwe futhi isivuselela masonto onke nge-wp-cron ngesipele esihlanganisiwe uma ukuvuselela kwehluleka.
* Okusha: Isilungiselelo se-`cap_trusted_proxies` — indawo yombhalo yama-CIDR noma ama-IP aluhlaza (okukodwa emugqeni ngamunye, ukuphawula ngo-`#` kuvunyelwe) ebala ama-proxy / ama-load-balancer akho angaphambili. Ngaphandle kwalokhu, `X-Forwarded-For` ayinakwa ngisho noma isinqamuli sesilinganiso sivuliwe.
* Okusha: Ukuzitholela kokuqala uma kuvulwa isimo esingaba se-Cloudflare / proxy ngesaziso se-admin sokuchofoza okukodwa esithi "Sebenzisa izilungiselelo ezitholiwe". I-plugin ayikaze ibhale phezu kwamanani akho agciniwe; uma ithrafikhi elandelayo iphakamisa ukuthi ukumiswa kwakho akusafani neqiniso (isb. i-Cloudflare ishintshe amaqoqo e-CIDR futhi i-proxy CIDR yakho manje isiphelelwe yisikhathi), kuvela isaziso sokungahambisani esingenakususwa esibonisa isibuyekezo esinconyiwe.
* Kulungisiwe: Imodi engabonakali ayisayehlisi buthule i-`cap_security_level` iye ku-FAST — izinga elilungiselelwe yi-admin liyahlonishwa. Isihlungi esisha se-`wu_cap_server_security_level` siyatholakala kumasayithi afuna indlela ekhethekile.
* Kulungisiwe: Ikhawunta yezibalo ye-`rate_limits_triggered` manje iyanda kukho konke ukuvinjwa, hhayi kuphela endleleni eyivelakancane yangemva kwempumelelo.
* Kulungisiwe: `Captcha_Core::get_client_ip()` manje iwumthombo owodwa weqiniso wokwabelwa kwe-IP yesivakashi kuwo wonke umkhawulo wesilinganiso, abahlinzeki be-captcha (reCAPTCHA + hCaptcha `siteverify`), nezibalo — kuvala indlela yokukhohlisa lapho izicelo eziqondile zeseva yomsuka eziphethe i-header ye-`CF-Connecting-IP` eyenziwe mbumbulu bezizobekwa ebhakedeni nge-IP eyenziwe mbumbulu esikhundleni sikantanga wangempela.
* Kulungisiwe: Isango lomkhawulo wesilinganiso le-WooCommerce classic checkout manje liqalisa ku-`template_redirect` (okubalulekile 1) esikhundleni se-`woocommerce_before_checkout_form`. I-hook yezinga lefomu ayiqali uma ikalishi lingenalutho, ngakho ithrafikhi yokugudla engakaze ingeze umkhiqizo ibiyigwema ngokuphelele i-limiter.
* Kulungisiwe: Isango lomkhawulo wesilinganiso le-WooCommerce pay-for-order manje liqalisa ku-`template_redirect` esikhundleni se-`woocommerce_before_pay_action`. Leyo yokugcina iqala kuphela ngemva kokuthi `wp_verify_nonce('woocommerce-pay')` iphumelele, okusho ukuthi abahlaseli abangaqinisekisiwe (imodeli yosongo yangempela) abakaze baqalise i-limiter.
* Kulungisiwe: Isango lomkhawulo wesilinganiso le-WooCommerce Store API (blocks) checkout manje liqalisa ku-`rest_pre_dispatch` esikhundleni se-`woocommerce_store_api_checkout_update_order_from_request`. Leyo yokugcina iqala kuphela ngemva kokuthi Store API iqinisekise ikalishi nezinkambu zokukhokhisa, ngakho ama-bot angaqinisekisiwe athola i-400 kusuka kumqinisekisi futhi awakaze akhubaze i-limiter.
* Kulungisiwe: Isango lomkhawulo wesilinganiso le-Ultimate Multisite inline-login manje liqalisa ku-`wu_ajax_nopriv_wu_inline_login` ngokubaluleka 1 (kanye nesibuko salabo abangene ngemvume) esikhundleni se-`wu_before_inline_login`. Leyo yokugcina iqala kuphela ngemva kokuthi `check_ajax_referer('wu_checkout')` iphumelele, ngakho ama-bot angaqinisekisiwe angenayo i-wu_checkout nonce evumelekile athola i-403 futhi awakaze akhubaze i-limiter.
* Kulungisiwe: `Rate_Limiter::enforce()` manje isebenzisa isilindi esisodwa ngesicelo ngasinye esikhiywe ngo-`surface|ip`, ngakho ama-hook akhuphukayo aqalisa kabili ekubonakaliseni ngakunye (ikakhulukazi `wu_setup_checkout` ku-Ultimate Multisite) awasayinciphisi ngesigamu i-threshold yomkhawulo wesilinganiso esebenzayo.
* Kulungisiwe: Amasango ezindawo zomkhawulo wesilinganiso awasabuzi ku-`Captcha_Core::is_whitelisted()` (isihlungi se-`wu_captcha_whitelisted`). Leso sihlungi sisho ukuthi "i-captcha isivele isingathwe enye indawo" futhi asihlobene nokuvikelwa kokugcwala — ukuhlanganiswa kwe-WooCommerce bekusisebenzisa ukweqa i-captcha yokungena ye-WordPress lapho i-Woo nonce ikhona, okwangena ekubalweni kwesilinganiso futhi kwavumela ama-Woo POST ukuthi agweme i-limiter. Isihlungi esiqondene nomkhawulo wesilinganiso se-`wu_cap_rate_limit_whitelist_ip` ukuphela kokudlula okusebenza manje.

Inguqulo: 1.3.2 - Ikhishwe ngo-2026-01-27
* Kulungisiwe: I-widget ye-Cap ingabonakali kumafomu e-checkout asebenzisa i-Elementor noma ezinye izakhi zamakhasi
* Kulungisiwe: I-elementi yangokwezifiso ye-cap-widget isuswa ukuhlanzwa kwe-wp_kses()
* Kuthuthukisiwe: Sebenzisa okuqukethwe okubizwayo kwenkambu ye-captcha ye-checkout ukuze kudlulwe ukuhlungwa kwe-HTML
* Kuthuthukisiwe: I-JavaScript yenziwe yaba lula ngesipele sezimo ezingavamile

Inguqulo: 1.3.1 - Ikhishwe ngo-2026-01-26
* Kulungisiwe: Imodi engabonakali ye-Cap Captcha ayizixazululi ngokuzenzakalelayo kumafomu e-Ultimate Multisite checkout aguqukayo
* Kuthuthukisiwe: Iskripthi se-Cap checkout manje sisebenzisa i-MutationObserver ukuthola ama-widget alayishwa ngokuguquguquka
* Kuthuthukisiwe: Kungezwe ukubamba inkinobho ye-checkout ukuze kulindwe i-token ngaphambi kokuthumela

Inguqulo: 1.3.0 - Ikhishwe ngo-2026-01-27
* Okusha: Ukuhlanganiswa kwe-WooCommerce Blocks checkout nokubamba ukulanda kwe-Store API
* Okusha: Ukusekelwa kwe-captcha engabonakali ye-WooCommerce checkout (hCaptcha engabonakali, reCAPTCHA v2 engabonakali, v3)
* Okusha: Ikhasi lezilungiselelo elizimele lokusetshenziswa ngaphandle kwe-Ultimate Multisite
* Okusha: I-Jetpack Autoloader yokuvimbela izingxabano zokuncika
* Kulungisiwe: I-hCaptcha ayibonakali ku-Ultimate Multisite checkout eguqukayo (okuqukethwe okulayishwa nge-AJAX)
* Kulungisiwe: I-Captcha ayivuseleli/ayisethi kabusha lapho kwenzeka amaphutha okuqinisekisa ifomu
* Kulungisiwe: I-hCaptcha ayibonakali ekhasini le-WooCommerce checkout
* Kulungisiwe: Iphutha lokungatholakali kweklasi le-reCAPTCHA (kungezwe umtapo we-PHP we-google/recaptcha)
* Kuthuthukisiwe: Ukutholwa kwamaphutha nge-WordPress hooks, MutationObserver, nokubamba kwe-AJAX
* Kuthuthukisiwe: Izincazelo zezilungiselelo manje zifaka ama-URL e-dashboard okhiye be-API

Inguqulo: 1.2.2 - Ikhishwe ngo-2026-01-24
* Kulungisiwe: I-Captcha ayiboniswa ku-Ultimate Multisite Login Form Element (ukungahambisani kwegama lesihlungi sefomu)
* Kulungisiwe: I-HTML ye-widget ye-Cap isuswa ukuhlanzwa kwe-wp_kses()
* Kulungisiwe: Abakhethi be-JavaScript abatholi amafomu anama-slash kuma-ID ama-elementi
* Kungeziwe: I-hook yesihlungi `wu_kses_allowed_html` ukuze ama-classaddon anwebe amathegi e-HTML avunyelwe
* Kususiwe: Amafayela e-JavaScript ekhodi efile athathelwe indawo izikripthi eziqondene nomhlinzeki

Inguqulo: 1.2.1 - Ikhishwe ngo-2026-01-23

* Kulungisiwe: Ukuqinisekiswa kwe-token ye-Cap Captcha kwehluleka ezindaweni ze-multisite (manje kusebenzisa ama-transient anobubanzi benethiwekhi)
* Kulungisiwe: I-Captcha manje ibonakala ngokungaguquki kubo bonke abasebenzisi kungakhathalekile isimo sokungena
* Kulungisiwe: Ukungahambisani phakathi kokuboniswa kwe-captcha nokuqinisekisa okudale ukwehluleka kwe-checkout

Inguqulo: 1.2.0 - Ikhishwe ngo-2026-01-21

* Okusha: Cap Captcha - i-captcha ye-proof-of-work ezisingathwa yona, ivulwe ngokuzenzakalelayo lapho kwenziwa kusebenze
* Okusha: Ukuvikelwa okungenakumiswa - vula i-addon futhi uvikelekile ngokushesha
* Okusha: Isakhiwo sabahlinzeki be-captcha esinezinhlobo eziningi ukuze kube lula ukunwetshwa
* Okusha: Ukuvikelwa kwe-WooCommerce Store API checkout ekuhlaselweni kokuhlola amakhadi
* Okusha: I-dashboard yokulandelela izibalo ebonisa izinselele, ukuqinisekiswa, nokuhlaselwa okuvinjiwe
* Okusha: Amaphresethi ezinga lokuphepha (Fast, Medium, Max) obunzima be-Cap Captcha
* Okusha: Amaklasi ayisisekelo angabonakali abahlinzeki be-reCAPTCHA ne-hCaptcha
* Kuthuthukisiwe: I-codebase ihlelwe kabusha yaba amaklasi abahlinzeki ayimodyuli
* Kuthuthukisiwe: Ukuhlukaniswa okungcono kwemisebenzi ngeklasi lomphathi elizinikele
* Fixed: Security improvements for $_SERVER variable sanitization
* Kulungisiwe: Ukumiswa kokuhlolwa kwe-PHPUnit kwemihlangano yokuqamba ye-WordPress

Inguqulo: 1.0.1 - Ikhishwe ngo-2025-09-28

* Qamba kabusha isiqalo sibe ultimate-multisite; buyekeza i-text domain; khuphula inguqulo.
