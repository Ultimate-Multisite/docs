---
title: Captcha Ingxelo yotshintsho
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Ingxelo yotshintsho ye-Captcha

Uguqulelo: 1.5.0 - Lukhutshwe nge-2026-05-22
* Entsha: Isithinteli sezinga esima ngokupheleleyo — sibala yonke i-GET ne-POST kwiindawo ezikhuselwe yi-captcha (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite checkout / inline-login) kwaye siphendula nge-HTTP 429, i-header `Retry-After`, kunye nokulalisa kwe-tarpit okungahleliwe (1–5s, kunqunyanyiswe ngokungqongqo kwi-15s).
* Entsha: Iisetingi `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` zokulungisa ifestile ye-tarpit.
* Entsha: Isihluzi `wu_cap_rate_limit_whitelist_ip` sokukhulula uluhlu lwe-IP oluthembekileyo.
* Entsha: Isenzo `wu_cap_rate_limit_will_block` esiqalisa ngokukhawuleza ngaphambi kokuba impendulo yokumisa ngokupheleleyo ithunyelwe.
* Entsha: Ukufunyanwa kwe-IP yomthengi okuxhathisa ukuzenzisa. `Captcha_Core::get_client_ip()` (umthombo wenyaniso wamaqhosha eebhakethi zesithinteli sezinga, captcha siteverify `remoteip`, kunye nee-hash ze-IP zamanani) ngoku inyanzelisa imodeli engqongqo yokuthembana: REMOTE_ADDR sisiseko, `CF-Connecting-IP` ihlonitshwa kuphela xa iqabane elikufutshane lingaphakathi kuluhlu lwangoku lwe-IP ye-Cloudflare, kwaye `X-Forwarded-For` ihlonitshwa kuphela xa iqabane elikufutshane likuluhlu lwe-proxy ethembekileyo oluqwalaselwe ngumlawuli, ngokuhamba ukusuka ekunene ukuya ekhohlo okutsiba ii-hop ezithembekileyo/ze-CF ngaphambi kokuzinza kwi-IP yomtyeleli.
* Entsha: Isetingi `cap_trust_cloudflare_headers` (ngokungagqibekanga ICIMIWE) — khetha ukuthembela ku-`CF-Connecting-IP` xa usemva kwe-Cloudflare. I-plugin iza nesnapshot ye-Cloudflare CIDR efakiweyo kwaye iyihlaziya veki nganye nge-wp-cron, isebenzisa efakiweyo njengokubuyela umva ukuba uhlaziyo luyasilela.
* Entsha: Isetingi `cap_trusted_proxies` — textarea yee-CIDR okanye ii-IP ezingenanto (enye kumgca ngamnye, izimvo ze-`#` zivunyelwe) edwelisa ii-proxy zakho zangaphambili / ii-load-balancer. Ngaphandle koku, `X-Forwarded-For` iyahoywa nokuba isithinteli sezinga sivuliwe.
* Entsha: Ukuzifumanisa ngokuzenzekelayo okokuqala xa kuvulwa imeko enokwenzeka ye-Cloudflare / proxy ngesaziso somlawuli esineqhosha elinye elithi "Sebenzisa iisetingi ezifunyenweyo". I-plugin ayisoze ibhale ngaphezulu amaxabiso owagcinileyo; ukuba itrafikhi elandelayo icebisa ukuba uqwalaselo lwakho alusavumelani nenyani (umz. Cloudflare itshintshe uluhlu lwe-CIDR kwaye i-proxy CIDR yakho ngoku iphelelwe lixesha), isaziso sokungangqinelani esingasuswayo sibonisa uhlaziyo olucetyiswayo.
* Ilungisiwe: Imowudi engabonakaliyo ayisathobisi ngokuthe cwaka `cap_security_level` iye ku-FAST — inqanaba eliqwalaselwe ngumlawuli liyahlonitshwa. Isihluzi esitsha `wu_cap_server_security_level` siyafumaneka kwiisayithi ezifuna ingqiqo eyenzelwe zona.
* Ilungisiwe: Ikhawunta yamanani `rate_limits_triggered` ngoku iyanda kuyo yonke ibhloko, hayi kuphela kwindlela enqabileyo yokhuseleko lwasemva kwempumelelo.
* Ilungisiwe: `Captcha_Core::get_client_ip()` ngoku ngumthombo omnye wenyaniso wokunxulumanisa i-IP yomtyeleli kuyo yonke isithinteli sezinga, ababoneleli be-captcha (reCAPTCHA + hCaptcha `siteverify`), kunye namanani — ivala indlela yokukhohlisa apho izicelo eziya ngqo kwi-origin-server ezithwele i-header `CF-Connecting-IP` eyenziweyo ngekhe zifakwe kwibhakethi nge-IP eyenziweyo endaweni yeqabane lokwenene.
* Ilungisiwe: Isango lesithinteli sezinga se-WooCommerce classic checkout ngoku siqala ku-`template_redirect` (priority 1) endaweni ye-`woocommerce_before_checkout_form`. I-hook yenqanaba lefom ayiqali xa ikharethi ingenanto, ngoko itrafikhi yokuhlasela engazange yongeze product yayisitsiba ngokupheleleyo isithinteli.
* Ilungisiwe: Isango lesithinteli sezinga se-WooCommerce pay-for-order ngoku siqala ku-`template_redirect` endaweni ye-`woocommerce_before_pay_action`. Le yokugqibela iqala kuphela emva kokuba `wp_verify_nonce('woocommerce-pay')` iphumelele, nto leyo ethetha ukuba abahlaseli abangagunyaziswanga (imodeli yosongelo yokwenene) abazange basivuse isithinteli.
* Ilungisiwe: Isango lesithinteli sezinga le-WooCommerce Store API (blocks) checkout ngoku siqala ku-`rest_pre_dispatch` endaweni ye-`woocommerce_store_api_checkout_update_order_from_request`. Le yokugqibela iqala kuphela emva kokuba Store API iqinisekise ikharethi kunye namasimi ebhili, ngoko ii-bot ezingagunyaziswanga zazifumana i-400 kumqinisekisi kwaye zingazange zivuse isithinteli.
* Ilungisiwe: Isango lesithinteli sezinga se-Ultimate Multisite inline-login ngoku siqala ku-`wu_ajax_nopriv_wu_inline_login` priority 1 (kunye nesipili somsebenzisi ongene ngemvume) endaweni ye-`wu_before_inline_login`. Le yokugqibela iqala kuphela emva kokuba `check_ajax_referer('wu_checkout')` iphumelele, ngoko ii-bot ezingagunyaziswanga ezingenayo i-wu_checkout nonce esemthethweni zazifumana i-403 kwaye zingazange zivuse isithinteli.
* Ilungisiwe: `Rate_Limiter::enforce()` ngoku isebenzisa isikhuseli esinye kwisicelo ngasinye esinesitshixo `surface|ip`, ngoko ii-hook eziphezulu eziqala kabini kurender nganye (ngokukodwa `wu_setup_checkout` kwi-Ultimate Multisite) azisawunciphisi ngesiqingatha umda osebenzayo wesithinteli sezinga.
* Ilungisiwe: Amasango eendawo zesithinteli sezinga awasajongi `Captcha_Core::is_whitelisted()` (isihluzi `wu_captcha_whitelisted`). Eso sihluzi sibonisa ukuba "captcha sele iphathwe yenye indawo" kwaye simele into eyahlukileyo kukhuseleko lokukhukula — indibaniselwano ye-WooCommerce yayiyixhuma ukuze itsibe i-captcha yokungena ye-WordPress xa i-Woo nonce ikhona, nto leyo eyachaphazela ukubalwa kwezinga yaza yavumela ii-POST ze-Woo ukuba ziphephe isithinteli. Isihluzi esikhethekileyo sesithinteli sezinga `wu_cap_rate_limit_whitelist_ip` kuphela kwendlela yokudlula esebenzayo ngoku.

Uguqulelo: 1.3.2 - Lukhutshwe nge-2026-01-27
* Ilungisiwe: I-widget ye-Cap ingarender kwiifom ze-checkout ezisebenzisa Elementor okanye abanye abakhi bamaphepha
* Ilungisiwe: I-element yesiko cap-widget isuswa yi-wp_kses() sanitization
* Iphuculwe: Sebenzisa umxholo obizwayo kwintsimi ye-captcha ye-checkout ukuze kudlulwe ukuhluzwa kwe-HTML
* Iphuculwe: JavaScript eyenziwe lula enokubuyela umva kwiimeko ezisemacaleni

Uguqulelo: 1.3.1 - Lukhutshwe nge-2026-01-26
* Ilungisiwe: Imowudi engabonakaliyo ye-Cap Captcha ingazisombululi ngokuzenzekelayo kwiifom ze-Ultimate Multisite checkout eziguqukayo
* Iphuculwe: Iskripthi se-Cap checkout ngoku sisebenzisa i-MutationObserver ukufumanisa ii-widget ezilayishwe ngokuguqukayo
* Iphuculwe: Kongezwe ukubanjwa kweqhosha le-checkout ukuze kulindwe i-token ngaphambi kokuthumela

Uguqulelo: 1.3.0 - Lukhutshwe nge-2026-01-27
* Entsha: Indibaniselwano ye-WooCommerce Blocks checkout nokubanjwa kwe-Store API fetch
* Entsha: Inkxaso ye-captcha engabonakaliyo ye-WooCommerce checkout (hCaptcha invisible, reCAPTCHA v2 invisible, v3)
* Entsha: Iphepha leesetingi elizimeleyo lokusetyenziswa ngaphandle kwe-Ultimate Multisite
* Entsha: Jetpack Autoloader yokuthintela ukungqubana kokuxhomekeka
* Ilungisiwe: hCaptcha ingarender kwi-Ultimate Multisite checkout eguqukayo (umxholo olayishwe nge-AJAX)
* Ilungisiwe: Captcha ingahlaziyeki/ingareseteki xa kusenzeka iimpazamo zokuqinisekisa ifom
* Ilungisiwe: hCaptcha ingabonakali kwiphepha le-WooCommerce checkout
* Ilungisiwe: Impazamo yokungafumaneki kweklasi ye-reCAPTCHA (kongezwe ithala leencwadi le-google/recaptcha PHP)
* Iphuculwe: Ukufunyanwa kweempazamo ngee-hook ze-WordPress, MutationObserver, kunye nokubanjwa kwe-AJAX
* Iphuculwe: Iinkcazelo zeesetingi ngoku zibandakanya ii-URL ze-dashboard zamaqhosha e-API

Uguqulelo: 1.2.2 - Lukhutshwe nge-2026-01-24
* Ilungisiwe: Captcha ingabonakali kwi-Ultimate Multisite Login Form Element (ukungangqinelani kwegama lesihluzi sefom)
* Ilungisiwe: HTML ye-widget ye-Cap isuswa yi-wp_kses() sanitization
* Ilungisiwe: Ii-selector ze-JavaScript azifumani iifom ezinee-slash kwii-ID ze-element
* Kongeziwe: I-hook yesihluzi `wu_kses_allowed_html` ye-classaddons ukwandisa iithegi ze-HTML ezivunyelweyo
* Isusiwe: Iifayile ze-JavaScript zekhowudi efileyo zitshintshwe zizikripthi ezikhethekileyo kubaboneleli

Uguqulelo: 1.2.1 - Lukhutshwe nge-2026-01-23

* Ilungisiwe: Ukuqinisekiswa kwe-token ye-Cap Captcha kusilela kwiindawo ze-multisite (ngoku kusebenzisa ii-transient zenethiwekhi yonke)
* Ilungisiwe: Captcha ngoku irender ngokungaguquguqukiyo kubo bonke abasebenzisi kungakhathaliseki imeko yokungena ngemvume
* Ilungisiwe: Ukungangqinelani phakathi kokurender kwe-captcha nokuqinisekisa okubangele ukusilela kwe-checkout

Uguqulelo: 1.2.0 - Lukhutshwe nge-2026-01-21

* Entsha: Cap Captcha - i-captcha ye-proof-of-work ezisingathelwe ngokwakho, ivulwe ngokungagqibekanga xa isebenze
* Entsha: Ukhuseleko olungenasidingo soqwalaselo - vula i-addon kwaye ukhuselekile ngoko nangoko
* Entsha: Uyilo lomboneleli we-captcha oluyi-polymorphic ukuze kwandiswe lula
* Entsha: Ukhuseleko lwe-WooCommerce Store API checkout ngokuchasene nohlaselo lokuvavanya amakhadi
* Entsha: Dashboard yokulandelela amanani ebonisa imiceli-mngeni, uqinisekiso, kunye nohlaselo oluthintiweyo
* Entsha: Iipresethi zenqanaba lokhuseleko (Fast, Medium, Max) zobunzima be-Cap Captcha
* Entsha: Iiklasi zesiseko ezisemabstract zababoneleli be-reCAPTCHA ne-hCaptcha
* Iphuculwe: Ikhowudibheyisi ihlelwe ngokutsha yaba ziiklasi zomboneleli ezimodyuli
* Iphuculwe: Ukwahlulwa okungcono kweembopheleleko ngeklasi yomphathi ezinikeleyo
* Fixed: Security improvements for $_SERVER variable sanitization
* Ilungisiwe: Uqwalaselo lovavanyo lwe-PHPUnit lwezivumelwano zokuthiywa kwamagama ze-WordPress

Uguqulelo: 1.0.1 - Lukhutshwe nge-2025-09-28

* Thiya kwakhona isiqalo sibe yi-ultimate-multisite; hlaziya i-text domain; nyusa uguqulelo.
