---
title: Captcha-ren aldaketa-erregistroa
sidebar_position: 99
_i18n_hash: 711bb4f00a108ccb60114b60822e5162
---
# Captcha aldaketa-erregistroa {#captcha-changelog}

Bertsioa: 1.5.0 - 2026-05-22an argitaratua
* Berria: Hard-stop tasa-mugatzailea — GET eta POST guztiak zenbatzen ditu captchaz babestutako gainazaletan (wp-login / register / lost-password / comments, WooCommerce my-account / checkout / pay-for-order, Ultimate Multisite ordainketa / inline-login) eta HTTP 429 batekin, `Retry-After` header batekin eta ausazko tarpit loaldi batekin (1–5s, gehienez 15s-ko muga gogorrarekin) erantzuten du.
* Berria: `cap_rate_limit_tarpit_min` / `cap_rate_limit_tarpit_max` ezarpenak tarpit leihoa doitzeko.
* Berria: `wu_cap_rate_limit_whitelist_ip` iragazkia konfiantzazko IP tarteak salbuesteko.
* Berria: `wu_cap_rate_limit_will_block` ekintza, hard-stop erantzuna bidali baino berehala lehenago abiarazten dena.
* Berria: Faltsutzearekiko erresistentea den bezeroaren IP detekzioa. `Captcha_Core::get_client_ip()`-k (tasa-mugaren bucket gakoetarako, captcha siteverify `remoteip`-erako eta estatistiken IP hashetarako egia-iturria) orain konfiantza-eredu zorrotza ezartzen du: REMOTE_ADDR da oinarria, `CF-Connecting-IP` errespetatzen da soilik berehalako peer-a uneko Cloudflare IP tarte baten barruan dagoenean, eta `X-Forwarded-For` errespetatzen da soilik berehalako peer-a administratzaileak konfiguratutako konfiantzazko proxy zerrendan dagoenean, eskuinetik ezkerrera egiten den ibilbide batekin, konfiantzazko/CF jauziak saltatuz bisitariaren IPan finkatu aurretik.
* Berria: `cap_trust_cloudflare_headers` ezarpena (lehenetsita OFF) — Cloudflare atzean zaudenean `CF-Connecting-IP` konfiantza gaitzeko. Pluginak Cloudflare CIDR snapshot paketatu bat dakar eta astero freskatzen du wp-cron bidez, freskatzeak huts egiten badu paketatutako fallbackarekin.
* Berria: `cap_trusted_proxies` ezarpena — CIDR edo IP soilak dituen testu-eremua (lerro bakoitzeko bat, `#` iruzkinak onartuta), zure aurrealdeko proxyak / karga-orekatzaileak zerrendatzeko. Hau gabe, `X-Forwarded-For` ez da kontuan hartzen, tasa-mugatzailea gaituta egon arren.
* Berria: Lehen gaitzean litekeen Cloudflare / proxy jarreraren auto-detekzioa, klik bakarreko "Aplikatu detektatutako ezarpenak" administrazio-oharrarekin. Pluginak ez ditu inoiz zure gordetako balioak gainidazten; ondorengo trafikoak zure konfigurazioa errealitatearekin jada bat ez datorrela iradokitzen badu (adibidez, Cloudflare-k CIDR tarteak aldatu ditu eta zure proxy CIDR zaharkituta dago), baztertu ezin den desadostasun-ohar batek gomendatutako eguneraketa erakusten du.
* Konponduta: Modu ikusezinak ez du gehiago `cap_security_level` isilean FASTera jaisten — administratzaileak konfiguratutako maila errespetatzen da. `wu_cap_server_security_level` iragazki berri bat eskuragarri dago logika pertsonalizatua nahi duten guneentzat.
* Konponduta: Estatistiken `rate_limits_triggered` kontagailua orain bloke bakoitzean handitzen da, ez soilik arrakastaren ondorengo backstop bide arraroan.
* Konponduta: `Captcha_Core::get_client_ip()` da orain bisitariaren IP esleipenerako egia-iturri bakarra tasa-mugatzailean, captcha hornitzaileetan (reCAPTCHA + hCaptcha `siteverify`) eta estatistiketan — faltsutze-bektore bat ixten du, non jatorrizko zerbitzarira zuzenean egindako eskaerak, faltsututako `CF-Connecting-IP` header bat zeramatenean, faltsututako IPren arabera bucket batean sartuko ziren benetako peer-aren ordez.
* Konponduta: WooCommerce ordainketa klasikoaren tasa-muga atea orain `template_redirect`-en (1. lehentasuna) abiarazten da, `woocommerce_before_checkout_form`-en ordez. Inprimaki-mailako hook-a ez da inoiz abiarazten saskia hutsik dagoenean, beraz produkturik inoiz gehitzen ez zuen flood trafikoak mugatzailea erabat saihesten zuen.
* Konponduta: WooCommerce pay-for-order tasa-muga atea orain `template_redirect`-en abiarazten da, `woocommerce_before_pay_action`-en ordez. Azken hori `wp_verify_nonce('woocommerce-pay')` arrakastatsua izan ondoren bakarrik abiarazten da, eta horrek esan nahi du autentifikatu gabeko erasotzaileek (benetako mehatxu-eredua) ez zutela inoiz mugatzailea aktibatzen.
* Konponduta: WooCommerce Store API (blokeak) ordainketaren tasa-muga atea orain `rest_pre_dispatch`-en abiarazten da, `woocommerce_store_api_checkout_update_order_from_request`-en ordez. Azken hori Store API-k saskia eta fakturazio-eremuak balioztatu ondoren bakarrik abiarazten da, beraz autentifikatu gabeko botek balioztatzailearen 400 bat jasotzen zuten eta ez zuten inoiz mugatzailea aktibatzen.
* Konponduta: Ultimate Multisite inline-login tasa-muga atea orain `wu_ajax_nopriv_wu_inline_login` 1. lehentasunean (eta saioa hasitakoen ispiluarekin) abiarazten da, `wu_before_inline_login`-en ordez. Azken hori `check_ajax_referer('wu_checkout')` arrakastatsua izan ondoren bakarrik abiarazten da, beraz wu_checkout nonce baliozkorik gabeko autentifikatu gabeko botek 403 bat jasotzen zuten eta ez zuten inoiz mugatzailea aktibatzen.
* Konponduta: `Rate_Limiter::enforce()`-k orain eskaera bakoitzeko behin bakarrik aplikatzen den babes bat erabiltzen du, `surface|ip` bidez giltzatua; beraz, render bakoitzean bi aldiz abiarazten diren upstream hook-ek (bereziki `wu_setup_checkout` Ultimate Multisite-n) ez dute gehiago tasa-mugaren atalase eraginkorra erdira murrizten.
* Konponduta: Tasa-mugaren gainazal-ateek ez dute gehiago `Captcha_Core::is_whitelisted()` (`wu_captcha_whitelisted` iragazkia) kontsultatzen. Iragazki horrek "captcha beste gainazal batek dagoeneko kudeatu du" adierazten du eta flood babesetik independentea da — WooCommerce integrazioak WordPress saio-hasierako captcha saltatzeko lotzen zuen Woo nonce bat zegoenean, eta hori tasa-zenbaketara isuri zen eta Woo POSTek mugatzailea saihestea ahalbidetu zuen. Tasa-mugarako berariazko `wu_cap_rate_limit_whitelist_ip` iragazkia da orain aplikatzen den saihesbide bakarra.

Bertsioa: 1.3.2 - 2026-01-27an argitaratua
* Konponduta: Cap widget-a ez zen errendatzen Elementor edo beste orri-eraikitzaile batzuk erabiltzen dituzten ordainketa-inprimakietan
* Konponduta: cap-widget elementu pertsonalizatua wp_kses() sanitizazioak kentzen zuen
* Hobetua: Ordainketa captcha eremurako eduki deigarria erabiltzea HTML iragazketa saihesteko
* Hobetua: JavaScript sinplifikatua, ertz-kasuetarako fallbackarekin

Bertsioa: 1.3.1 - 2026-01-26an argitaratua
* Konponduta: Cap Captcha modu ikusezinak ez zuen automatikoki ebazten Ultimate Multisite ordainketa-inprimaki dinamikoetan
* Hobetua: Cap ordainketa script-ak orain MutationObserver erabiltzen du dinamikoki kargatutako widgetak detektatzeko
* Hobetua: Ordainketa-botoiaren intertzepzioa gehitu da bidali aurretik tokenaren zain egoteko

Version: 1.3.0 - 2026-01-27an argitaratua
* Berria: WooCommerce Blocks checkout integrazioa Store API eskuratze-intertzepzioarekin
* Berria: Captcha ikusezinaren euskarria WooCommerce checkout-erako (hCaptcha ikusezina, reCAPTCHA v2 ikusezina, v3)
* Berria: Ezarpenen orri independentea Ultimate Multisite gabe erabiltzeko
* Berria: Jetpack Autoloader mendekotasun-gatazkak prebenitzeko
* Konponduta: hCaptcha ez zen errendatzen Ultimate Multisite checkout dinamikoan (AJAX bidez kargatutako edukia)
* Konponduta: Captcha ez zen freskatzen/berrezartzen inprimakiaren balidazio-erroreak gertatzean
* Konponduta: hCaptcha ez zen agertzen WooCommerce checkout orrian
* Konponduta: reCAPTCHA klasea ez aurkitzearen errorea (google/recaptcha PHP liburutegia gehituta)
* Hobetua: Errore-detekzioa WordPress hooken, MutationObserver-en eta AJAX intertzepzioaren bidez
* Hobetua: Ezarpenen deskribapenek orain API gakoetarako dashboard URLak jasotzen dituzte

Version: 1.2.2 - 2026-01-24an argitaratua
* Konponduta: Captcha ez zen bistaratzen Ultimate Multisite Login Form Element-en (inprimaki-iragazkiaren izen-desegokitasuna)
* Konponduta: Cap widget-aren HTMLa wp_kses() sanitizazioak kentzen zuen
* Konponduta: JavaScript hautatzaileek ez zituzten aurkitzen elementuen IDetan barrak dituzten inprimakiak
* Gehitua: `wu_kses_allowed_html` filter hook-a classaddonsek baimendutako HTML etiketak hedatzeko
* Kenduta: Hildako kodeko JavaScript fitxategiak hornitzailearen araberako scriptek ordezkatu dituzte

Version: 1.2.1 - 2026-01-23an argitaratua

* Konponduta: Cap Captcha tokenaren balidazioak huts egiten zuen multisite inguruneetan (orain sare osoko transients erabiltzen ditu)
* Konponduta: Captcha orain modu koherentean errendatzen da erabiltzaile guztientzat, saio-hasiera egoera edozein dela ere
* Konponduta: Captcha errendatzearen eta balidazioaren arteko desegokitasuna, checkout hutsegiteak eragiten zituena

Version: 1.2.0 - 2026-01-21ean argitaratua

* Berria: Cap Captcha - norberak ostatatutako proof-of-work captcha, aktibazioan lehenespenez gaituta
* Berria: Zero-konfigurazioko babesa - aktibatu addon-a eta berehala babestuta zaude
* Berria: Captcha hornitzaileen arkitektura polimorfikoa, hedagarritasun errazerako
* Berria: WooCommerce Store API checkout babesa txartel-proben erasoen aurka
* Berria: Estatistiken jarraipenerako dashboard-a, erronkak, egiaztapenak eta blokeatutako erasoak erakusten dituena
* Berria: Segurtasun-mailaren aurrezarpenak (Azkarra, Ertaina, Max) Cap Captcha zailtasunerako
* Berria: Oinarrizko klase abstraktuak reCAPTCHA eta hCaptcha hornitzaileentzat
* Hobetua: Kode-basea hornitzaile-klase modularretara berrantolatua
* Hobetua: Arduren bereizketa hobea kudeatzaile-klase dedikatuarekin
* Fixed: Security improvements for $_SERVER variable sanitization
* Konponduta: PHPUnit proba-konfigurazioa WordPress izendapen-konbentzioetarako

Version: 1.0.1 - 2025-09-28an argitaratua

* Aurrizkia ultimate-multisite-ra berrizendatu; testu-domeinua eguneratu; bertsio-igoera.
